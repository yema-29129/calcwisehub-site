import fs from "fs";
import path from "path";
import vm from "vm";
import { execFileSync } from "child_process";

const ROOT = process.cwd();
const LANGUAGES = ["zh", "en", "es", "fr", "de", "pt", "ru", "ja", "ko", "ar", "hi"];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function replaceTitle(html, value) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(value)}</title>`);
}

function replaceTagContent(html, attributeName, value, { raw = false } = {}) {
  const pattern = new RegExp(`(<([a-z0-9-]+)[^>]*${attributeName}[^>]*>)([\\s\\S]*?)(</\\2>)`, "gi");
  const output = raw ? String(value) : escapeHtml(value);
  return html.replace(pattern, (_, open, _tag, _inner, close) => `${open}${output}${close}`);
}

function replaceInputPlaceholder(html, i18nKey, value) {
  const pattern = new RegExp(`(<input[^>]*data-i18n="${i18nKey}"[^>]*placeholder=")([^"]*)(")`, "i");
  return html.replace(pattern, `$1${escapeAttr(value)}$3`);
}

function localizedFilePath(lang, relativePath) {
  if (lang === "zh") return path.join(ROOT, relativePath);
  return path.join(ROOT, lang, relativePath);
}

function detectLangAndSlug(filePath) {
  const relative = path.relative(ROOT, filePath).split(path.sep);
  const first = relative[0];
  const lang = LANGUAGES.includes(first) ? first : "zh";
  const parts = lang === "zh" ? relative : relative.slice(1);
  if (parts[0] !== "calculators" || parts[1] === "index.html") return null;
  return { lang, slug: parts[1] };
}

function listCalculatorPages(dir) {
  const pages = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }
      if (entry.name === "index.html" && fullPath.includes(`${path.sep}calculators${path.sep}`)) {
        pages.push(fullPath);
      }
    }
  }
  return pages;
}

function createSiteSandbox() {
  const documentHead = {
    querySelector: () => null,
    querySelectorAll: () => [],
    appendChild: () => {},
  };
  const document = {
    head: documentHead,
    body: { appendChild: () => {} },
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    createElement: () => ({
      setAttribute: () => {},
      appendChild: () => {},
      remove: () => {},
      dataset: {},
      style: {},
      innerHTML: "",
      textContent: "",
    }),
    documentElement: { lang: "en", dir: "ltr" },
  };
  const sandbox = {
    console,
    Intl,
    Date,
    JSON,
    Math,
    document,
    navigator: { language: "en-US" },
    localStorage: { getItem: () => null, setItem: () => {} },
    window: {
      location: { pathname: "/" },
    },
  };
  sandbox.window.document = document;
  return sandbox;
}

function createCalcSandbox() {
  const sandbox = {
    console,
    Intl,
    Date,
    JSON,
    Math,
    document: {
      querySelector: () => null,
      querySelectorAll: () => [],
      addEventListener: () => {},
      head: { querySelector: () => null, appendChild: () => {} },
    },
    navigator: { language: "en-US" },
    window: {
      __siteI18n: {
        language: "en",
        regionSettings: { code: "GLOBAL", countryName: "Global", currency: "USD", taxMode: "standard", units: "metric" },
        formatCurrency: (value, currency) => new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: currency || "USD",
          currencyDisplay: "symbol",
          maximumFractionDigits: 2,
        }).format(Number.isFinite(value) ? value : 0),
        formatNumber: (value, digits = 2) => new Intl.NumberFormat("en-US", {
          maximumFractionDigits: digits,
          minimumFractionDigits: digits,
        }).format(Number.isFinite(value) ? value : 0),
        formatPercent: (value) => `${(Number.isFinite(value) ? value : 0).toFixed(2)}%`,
        localizedPath: (href) => href,
        localizeCountryName: (region) => region.countryName || "Global",
        refreshStructuredData: () => {},
      },
    },
  };
  sandbox.localStorage = { getItem: () => null, setItem: () => {} };
  return sandbox;
}

function loadSiteHelpers() {
  const sandbox = createSiteSandbox();
  const code = fs.readFileSync(path.join(ROOT, "assets/site.js"), "utf8");
  const appended = `${code}
globalThis.__siteExports = {
  getPageCopy(pathname, lang) {
    currentLanguage = lang;
    return pathCopy(pathname);
  }
};`;
  vm.runInNewContext(appended, sandbox, { filename: "assets/site.js" });
  return sandbox.__siteExports;
}

function loadCalculatorHelpers() {
  const sandbox = createCalcSandbox();
  const calcCode = fs.readFileSync(path.join(ROOT, "assets/calculators.js"), "utf8");
  const extraCode = fs.readFileSync(path.join(ROOT, "assets/calculators-extra.js"), "utf8");
  const appended = `${calcCode}
${extraCode}
globalThis.__calcExports = {
  getSeoData(slug, lang) {
    window.__siteI18n.language = lang;
    const config = calculatorConfigs[slug];
    if (!config) return null;
    const localizedName = config.name[lang] || localizedPairText(config.name);
    const localizedCategory = config.category[lang] || localizedPairText(config.category);
    const localizedSubtitle = config.subtitle[lang] || localizedPairText(config.subtitle);
    const quickItems = (config.quick[lang] || config.quick.en || []).map((item) => localizeEnglishText(item));
    const title = \`\${localizedName} - \${localizedPairText({ zh: "全球计算器中心", en: "Global Calculator Hub" })}\`;
    const description = config.metaDescription?.[lang] || localizedSeoDescription(localizedName, localizedSubtitle, quickItems);
    const keywords = localizedSeoKeywords(config, localizedName, localizedCategory, quickItems);
    return {
      title,
      description,
      keywords,
      name: localizedName,
      category: localizedCategory,
      subtitle: localizedSubtitle,
      quickItems,
      submitLabel: tPair("立即测算", "Run Calculation"),
      resultHeading: tPair("核心结果", "Core Results"),
      disclaimer: tPair("结果用于测算与比较，不构成投资、税务、贷款或法律建议。请以实际机构规则和最新数据为准。", "Results are for estimation and comparison only. They do not replace official tax, lending, legal, or investment guidance.")
    };
  }
};`;
  vm.runInNewContext(appended, sandbox, { filename: "assets/calculators.bundle.js" });
  return sandbox.__calcExports;
}

function updateHomeAndDirectoryPages(siteHelpers) {
  const routes = ["/", "/calculators/"];
  for (const lang of LANGUAGES) {
    for (const route of routes) {
      const relativePath = route === "/" ? "index.html" : "calculators/index.html";
      const filePath = localizedFilePath(lang, relativePath);
      if (!fs.existsSync(filePath)) continue;
      const copy = siteHelpers.getPageCopy(route, lang);
      if (!copy) continue;
      let html = fs.readFileSync(filePath, "utf8");
      html = replaceTitle(html, copy.title);
      html = html.replace(/<meta name="description" content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeAttr(copy.description)}" />`);
      html = html.replace(/<meta name="keywords" content="[^"]*"\s*\/?>/i, `<meta name="keywords" content="${escapeAttr(copy.keywords || "")}" />`);
      html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeAttr(copy.title)}" />`);
      html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeAttr(copy.description)}" />`);
      for (const [key, value] of Object.entries(copy.items || {})) {
        if (key === "calc-search-placeholder") {
          html = replaceInputPlaceholder(html, key, value);
          continue;
        }
        html = replaceTagContent(html, `data-i18n="${key}"`, value);
      }
      fs.writeFileSync(filePath, html);
    }
  }
}

function updateCalculatorPages(calcHelpers) {
  const pages = listCalculatorPages(ROOT).filter((filePath) => !filePath.endsWith(`${path.sep}calculators${path.sep}index.html`));
  for (const filePath of pages) {
    const info = detectLangAndSlug(filePath);
    if (!info) continue;
    const seo = calcHelpers.getSeoData(info.slug, info.lang);
    if (!seo) continue;
    const repoRelative = path.relative(ROOT, filePath).split(path.sep).join("/");
    let html = execFileSync("git", ["show", `HEAD:${repoRelative}`], { cwd: ROOT, encoding: "utf8" });
    html = replaceTagContent(html, "data-calc-title", seo.name);
    html = replaceTagContent(html, "data-calc-category", seo.category);
    html = replaceTagContent(html, "data-calc-subtitle", seo.subtitle);
    html = replaceTagContent(html, "data-submit-label", seo.submitLabel);
    html = replaceTagContent(html, "data-result-heading", seo.resultHeading);
    html = replaceTagContent(html, "data-disclaimer", seo.disclaimer);
    const quickHtml = seo.quickItems
      .map((item) => `<div class="mini-stat"><strong>${escapeHtml(item)}</strong><span>${escapeHtml({
        zh: "适合收藏和反复试算",
        en: "Built for repeat exploration and saves",
        ja: "保存して繰り返し試算しやすい",
        ko: "저장해 두고 반복 계산하기 좋음",
        es: "Útil para guardar y volver a comparar",
        fr: "Pratique à enregistrer et à réutiliser",
        de: "Gut zum Speichern und erneuten Vergleichen",
        pt: "Bom para salvar e recalcular",
        ru: "Удобно сохранять и пересчитывать",
        ar: "مناسبة للحفظ وإعادة الاستخدام",
        hi: "सेव करके बार-बार तुलना करने के लिए उपयोगी",
      }[info.lang] || "Built for repeat exploration and saves")}</span></div>`)
      .join("");
    html = replaceTagContent(html, "data-calc-quick", quickHtml, { raw: true });
    fs.writeFileSync(filePath, html);
  }
}

const siteHelpers = loadSiteHelpers();
const calcHelpers = loadCalculatorHelpers();

updateHomeAndDirectoryPages(siteHelpers);
updateCalculatorPages(calcHelpers);

console.log("Static locale generation complete.");
