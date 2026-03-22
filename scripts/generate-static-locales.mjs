import fs from "fs";
import path from "path";
import vm from "vm";

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

function replaceBody(html, bodyHtml) {
  return html.replace(/<body[\s\S]*<\/body>/i, bodyHtml);
}

function localizedFilePath(lang, relativePath) {
  if (lang === "zh") return path.join(ROOT, relativePath);
  return path.join(ROOT, lang, relativePath);
}

const CALC_PAGE_COPY = {
  zh: { home: "首页", catalog: "计算器合集", formTitle: "直接输入参数开始测算" },
  en: { home: "Home", catalog: "Calculators", formTitle: "Enter inputs and start" },
  es: { home: "Inicio", catalog: "Calculadoras", formTitle: "Introduce datos y empieza" },
  fr: { home: "Accueil", catalog: "Calculatrices", formTitle: "Saisissez les données et lancez le calcul" },
  de: { home: "Start", catalog: "Rechner", formTitle: "Werte eingeben und starten" },
  pt: { home: "Início", catalog: "Calculadoras", formTitle: "Insira os dados e comece" },
  ru: { home: "Главная", catalog: "Калькуляторы", formTitle: "Введите параметры и начните" },
  ja: { home: "ホーム", catalog: "計算機一覧", formTitle: "条件を入れてすぐ試算" },
  ko: { home: "홈", catalog: "계산기 모음", formTitle: "값을 넣고 바로 계산" },
  ar: { home: "الرئيسية", catalog: "مجموعة الحاسبات", formTitle: "أدخل القيم وابدأ الحساب" },
  hi: { home: "होम", catalog: "कैलकुलेटर सूची", formTitle: "इनपुट भरें और शुरू करें" },
};

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
  slugs: Object.keys(calculatorConfigs),
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

function absoluteUrl(lang, slug) {
  return lang === "zh"
    ? `https://calcwisehub.com/calculators/${slug}/`
    : `https://calcwisehub.com/${lang}/calculators/${slug}/`;
}

function calculatorPageTemplate({ lang, slug, seo }) {
  const hreflangs = LANGUAGES.map((item) => {
    const code = item === "zh" ? "zh-CN" : item;
    return `    <link rel="alternate" hreflang="${code}" href="${absoluteUrl(item, slug)}" />`;
  }).join("\n");
  const canonical = absoluteUrl(lang, slug);
  const xDefault = absoluteUrl("en", slug);
  return `<!DOCTYPE html>
<html lang="${lang === "zh" ? "zh" : lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeAttr(seo.description)}" />
    <meta name="keywords" content="${escapeAttr(seo.keywords)}" />
    <link rel="canonical" href="${canonical}" />
${hreflangs}
    <link rel="alternate" hreflang="x-default" href="${xDefault}" />

    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta property="og:title" content="${escapeAttr(seo.name)}" />
    <meta property="og:description" content="${escapeAttr(seo.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="https://calcwisehub.com/assets/og-cover.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://calcwisehub.com/assets/og-cover.jpg" />
    <link rel="icon" href="/assets/favicon.svg?v=20260323a" type="image/svg+xml" />
    <link rel="stylesheet" href="/assets/styles.css?v=20260323a" />
    <script src="/assets/site.js?v=20260323a" defer></script>
    <script src="/assets/calculators.js?v=20260323a" defer></script>
    <script src="/assets/calculators-extra.js?v=20260323a" defer></script>
  </head>
  <body></body>
</html>
`;
}

function ensureCalculatorPages(calcHelpers) {
  for (const slug of calcHelpers.slugs || []) {
    for (const lang of LANGUAGES) {
      const filePath = localizedFilePath(lang, `calculators/${slug}/index.html`);
      if (fs.existsSync(filePath)) continue;
      const seo = calcHelpers.getSeoData(slug, lang);
      if (!seo) continue;
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, calculatorPageTemplate({ lang, slug, seo }));
    }
  }
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
    let html = fs.readFileSync(filePath, "utf8");
    html = replaceTitle(html, seo.title);
    html = html.replace(/<meta name="description" content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeAttr(seo.description)}" />`);
    html = html.replace(/<meta name="keywords" content="[^"]*"\s*\/?>/i, `<meta name="keywords" content="${escapeAttr(seo.keywords)}" />`);
    html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${absoluteUrl(info.lang, info.slug)}" />`);
    html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeAttr(seo.name)}" />`);
    html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeAttr(seo.description)}" />`);
    html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${absoluteUrl(info.lang, info.slug)}" />`);
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
    const shellCopy = CALC_PAGE_COPY[info.lang] || CALC_PAGE_COPY.en;
    const body = `<body>
    <div data-site-header></div>
    <main class="calc-page">
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb"><a href="/">${escapeHtml(shellCopy.home)}</a><span>/</span><a href="/calculators/">${escapeHtml(shellCopy.catalog)}</a><span>/</span><span data-calc-title>${escapeHtml(seo.name)}</span></div>
        </div>
      </section>
      <section class="container calc-shell">
        <div class="calc-main">
          <section class="calc-hero-stack content-card">
            <article class="calc-hero-stack__content">
              <div class="calc-hero-card__meta">
                <span class="badge" data-calc-category>${escapeHtml(seo.category)}</span>
                <span class="tag" data-region-context></span>
              </div>
              <h1 data-calc-title>${escapeHtml(seo.name)}</h1>
              <p data-calc-subtitle>${escapeHtml(seo.subtitle)}</p>
              <div class="calc-hero-card__quick" data-calc-quick>${quickHtml}</div>
            </article>
            <div class="calc-form-panel">
              <div class="form-panel__head">
                <span class="badge">${escapeHtml(shellCopy.formTitle)}</span>
                <h2>${escapeHtml(seo.resultHeading)}</h2>
                <p data-form-prompt></p>
              </div>
              <form class="calc-form" data-calculator-form="${escapeAttr(info.slug)}">
                <div class="form-grid" data-fields></div>
                <div data-hero-presets></div>
                <div class="button-row">
                  <button type="submit" data-submit-label>${escapeHtml(seo.submitLabel)}</button>
                  <span class="live-feedback" data-live-feedback></span>
                </div>
              </form>
            </div>
          </section>
          <section data-result-overview></section>
          <section data-comparisons></section>
          <section data-decision-guide></section>
          <section data-scenarios></section>
          <section class="article-grid" data-charts></section>
          <section class="article-grid" data-article></section>
          <section class="article-grid" data-faq></section>
          <section data-related-tools></section>
        </div>
        <aside class="calc-sidebar">
          <div class="result sticky-card result-panel">
            <h2 data-result-heading>${escapeHtml(seo.resultHeading)}</h2>
            <div class="result__grid" data-result-grid></div>
            <p data-result-note></p>
            <div data-result-actions></div>
            <div class="disclaimer" data-disclaimer>${escapeHtml(seo.disclaimer)}</div>
            <div data-ad-slot="${escapeAttr(`${info.slug}-sidebar`)}"></div>
          </div>
        </aside>
      </section>
    </main>
    <div class="mobile-summary" data-mobile-summary></div>
    <div data-site-footer></div>
  </body>`;
    html = replaceBody(html, body);
    fs.writeFileSync(filePath, html);
  }
}

const siteHelpers = loadSiteHelpers();
const calcHelpers = loadCalculatorHelpers();

updateHomeAndDirectoryPages(siteHelpers);
ensureCalculatorPages(calcHelpers);
updateCalculatorPages(calcHelpers);

console.log("Static locale generation complete.");
