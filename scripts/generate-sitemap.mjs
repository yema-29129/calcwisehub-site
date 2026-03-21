import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const DOMAIN = "https://calcwisehub.com";
const LANGS = ["zh", "en", "es", "fr", "de", "pt", "ru", "ja", "ko", "ar", "hi"];

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, results);
    } else if (entry.name === "index.html") {
      results.push(full);
    }
  }
  return results;
}

function normalizeRoute(file) {
  const rel = path.relative(ROOT, file).split(path.sep).join("/");
  if (rel === "index.html") return { lang: "zh", route: "/" };
  const parts = rel.split("/");
  const first = parts[0];
  if (LANGS.includes(first) && first !== "zh") {
    const rest = parts.slice(1).join("/");
    return { lang: first, route: `/${rest.replace(/index\.html$/, "")}` || "/" };
  }
  return { lang: "zh", route: `/${rel.replace(/index\.html$/, "")}` || "/" };
}

function localizedUrl(route, lang) {
  if (lang === "zh") return `${DOMAIN}${route}`;
  return `${DOMAIN}/${lang}${route === "/" ? "/" : route}`;
}

function dateString(date) {
  return new Date(date).toISOString().slice(0, 10);
}

function xmlEscape(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function priorityFor(route) {
  if (route === "/") return "1.0";
  if (route === "/calculators/") return "0.9";
  if (route.startsWith("/calculators/")) return "0.8";
  return "0.6";
}

function changeFreqFor(route) {
  if (route === "/" || route === "/calculators/") return "weekly";
  if (route.startsWith("/calculators/")) return "monthly";
  return "monthly";
}

const files = walk(ROOT);
const routeMap = new Map();

for (const file of files) {
  const info = normalizeRoute(file);
  if (!routeMap.has(info.route)) routeMap.set(info.route, new Map());
  routeMap.get(info.route).set(info.lang, file);
}

const urls = [];

for (const [route, langMap] of [...routeMap.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  const alternates = LANGS.filter((lang) => langMap.has(lang));
  for (const lang of alternates) {
    const file = langMap.get(lang);
    const stat = fs.statSync(file);
    const loc = localizedUrl(route, lang);
    urls.push(`  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${dateString(stat.mtime)}</lastmod>
    <changefreq>${changeFreqFor(route)}</changefreq>
    <priority>${priorityFor(route)}</priority>
${alternates.map((alt) => {
      const hreflang = alt === "zh" ? "zh-CN" : alt;
      return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${xmlEscape(localizedUrl(route, alt))}" />`;
    }).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(localizedUrl(route, "en"))}" />
  </url>`);
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml, "utf8");
console.log(`Generated sitemap with ${urls.length} URLs.`);
