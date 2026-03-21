const FALLBACK_LANGUAGE = "en";

function lang() {
  return window.__siteI18n?.language || FALLBACK_LANGUAGE;
}

function region() {
  return window.__siteI18n?.regionSettings || { currency: "USD", countryName: "Global", taxMode: "standard", units: "metric" };
}

function locale() {
  return window.__siteI18n?.locale || navigator.language || "en-US";
}

function tPair(zh, en) {
  return localizedPairText({ zh, en });
}

const CALCULATOR_TERM_TRANSLATIONS = {
  ja: {
    "Combination Loan": "組み合わせローン",
    "Loan Calculator": "ローン計算機",
    "Income Tax Calculator": "所得税計算機",
    "Provident Fund Loan Calculator": "住宅積立基金ローン計算機",
    "Subsidized Housing Loan Calculator": "公的住宅ローン計算機",
    "Mortgage Prepayment Calculator": "住宅ローン繰上返済計算機",
    "Retirement Calculator": "退職計算機",
    "Deposit Calculator": "預金計算機",
    "Savings Calculator": "貯蓄計算機",
    "Exchange Rate Calculator": "為替計算機",
    "Bond Yield Calculator": "債券利回り計算機",
    "Calculator": "計算機",
    "Loans": "ローン",
    "Mortgage": "住宅ローン",
    "Auto": "自動車",
    "Tax": "税務",
    "Payroll": "給与",
    "Housing Loan": "住宅ローン",
  },
  ko: {
    "Combination Loan": "혼합 대출",
    "Loan Calculator": "대출 계산기",
    "Income Tax Calculator": "소득세 계산기",
    "Provident Fund Loan Calculator": "주택기금 대출 계산기",
    "Subsidized Housing Loan Calculator": "정책형 주택대출 계산기",
    "Mortgage Prepayment Calculator": "주택담보대출 중도상환 계산기",
    "Retirement Calculator": "은퇴 계산기",
    "Deposit Calculator": "예금 계산기",
    "Savings Calculator": "저축 계산기",
    "Exchange Rate Calculator": "환율 계산기",
    "Bond Yield Calculator": "채권 수익률 계산기",
    "Calculator": "계산기",
    "Loans": "대출",
    "Mortgage": "주택담보대출",
    "Auto": "자동차",
    "Tax": "세금",
    "Payroll": "급여",
    "Housing Loan": "주택대출",
  },
  es: {
    "Combination Loan": "Préstamo combinado",
    "Loan Calculator": "Calculadora de préstamos",
    "Income Tax Calculator": "Calculadora de impuesto sobre la renta",
    "Provident Fund Loan Calculator": "Calculadora de préstamo de fondo de vivienda",
    "Subsidized Housing Loan Calculator": "Calculadora de préstamo de vivienda subsidiado",
    "Mortgage Prepayment Calculator": "Calculadora de prepago hipotecario",
    "Retirement Calculator": "Calculadora de jubilación",
    "Deposit Calculator": "Calculadora de depósitos",
    "Savings Calculator": "Calculadora de ahorro",
    "Exchange Rate Calculator": "Calculadora de tipo de cambio",
    "Bond Yield Calculator": "Calculadora de rendimiento de bonos",
    "Calculator": "Calculadora",
    "Loans": "Préstamos",
    "Mortgage": "Hipoteca",
    "Auto": "Auto",
    "Tax": "Impuestos",
    "Payroll": "Nómina",
    "Housing Loan": "Préstamo de vivienda",
  },
  fr: {
    "Combination Loan": "Prêt combiné",
    "Loan Calculator": "Calculateur de prêt",
    "Income Tax Calculator": "Calculateur d'impôt sur le revenu",
    "Provident Fund Loan Calculator": "Calculateur de prêt du fonds logement",
    "Subsidized Housing Loan Calculator": "Calculateur de prêt logement aidé",
    "Mortgage Prepayment Calculator": "Calculateur de remboursement anticipé",
    "Retirement Calculator": "Calculateur de retraite",
    "Deposit Calculator": "Calculateur de dépôt",
    "Savings Calculator": "Calculateur d'épargne",
    "Exchange Rate Calculator": "Calculateur de change",
    "Bond Yield Calculator": "Calculateur de rendement obligataire",
    "Calculator": "Calculateur",
    "Loans": "Prêts",
    "Mortgage": "Hypothèque",
    "Auto": "Auto",
    "Tax": "Fiscalité",
    "Payroll": "Paie",
    "Housing Loan": "Prêt logement",
  },
  de: {
    "Combination Loan": "Kombikredit",
    "Loan Calculator": "Darlehensrechner",
    "Income Tax Calculator": "Einkommensteuerrechner",
    "Provident Fund Loan Calculator": "Wohnungsfonds-Darlehensrechner",
    "Subsidized Housing Loan Calculator": "Förderdarlehensrechner",
    "Mortgage Prepayment Calculator": "Sondertilgungsrechner",
    "Retirement Calculator": "Rentenrechner",
    "Deposit Calculator": "Einlagenrechner",
    "Savings Calculator": "Sparrechner",
    "Exchange Rate Calculator": "Wechselkursrechner",
    "Bond Yield Calculator": "Anleiherenditerechner",
    "Calculator": "Rechner",
    "Loans": "Darlehen",
    "Mortgage": "Hypothek",
    "Auto": "Auto",
    "Tax": "Steuern",
    "Payroll": "Lohn",
    "Housing Loan": "Wohnungsdarlehen",
  },
  pt: {
    "Combination Loan": "Empréstimo combinado",
    "Loan Calculator": "Calculadora de empréstimo",
    "Income Tax Calculator": "Calculadora de imposto de renda",
    "Provident Fund Loan Calculator": "Calculadora de empréstimo habitacional",
    "Subsidized Housing Loan Calculator": "Calculadora de empréstimo habitacional subsidiado",
    "Mortgage Prepayment Calculator": "Calculadora de amortização antecipada",
    "Retirement Calculator": "Calculadora de aposentadoria",
    "Deposit Calculator": "Calculadora de depósito",
    "Savings Calculator": "Calculadora de poupança",
    "Exchange Rate Calculator": "Calculadora de câmbio",
    "Bond Yield Calculator": "Calculadora de rendimento de títulos",
    "Calculator": "Calculadora",
    "Loans": "Empréstimos",
    "Mortgage": "Hipoteca",
    "Auto": "Auto",
    "Tax": "Impostos",
    "Payroll": "Folha",
    "Housing Loan": "Empréstimo habitacional",
  },
  ru: {
    "Combination Loan": "Комбинированный кредит",
    "Loan Calculator": "Кредитный калькулятор",
    "Income Tax Calculator": "Калькулятор подоходного налога",
    "Provident Fund Loan Calculator": "Калькулятор жилищного фонда",
    "Subsidized Housing Loan Calculator": "Калькулятор льготной ипотеки",
    "Mortgage Prepayment Calculator": "Калькулятор досрочного погашения ипотеки",
    "Retirement Calculator": "Пенсионный калькулятор",
    "Deposit Calculator": "Калькулятор депозита",
    "Savings Calculator": "Калькулятор сбережений",
    "Exchange Rate Calculator": "Калькулятор валютного курса",
    "Bond Yield Calculator": "Калькулятор доходности облигаций",
    "Calculator": "калькулятор",
    "Loans": "Кредиты",
    "Mortgage": "Ипотека",
    "Auto": "Авто",
    "Tax": "Налоги",
    "Payroll": "Зарплата",
    "Housing Loan": "Жилищный кредит",
  },
  ar: {
    "Combination Loan": "قرض مركب",
    "Loan Calculator": "حاسبة القروض",
    "Income Tax Calculator": "حاسبة ضريبة الدخل",
    "Provident Fund Loan Calculator": "حاسبة قرض صندوق الإسكان",
    "Subsidized Housing Loan Calculator": "حاسبة قرض الإسكان المدعوم",
    "Mortgage Prepayment Calculator": "حاسبة السداد المبكر للرهن",
    "Retirement Calculator": "حاسبة التقاعد",
    "Deposit Calculator": "حاسبة الودائع",
    "Savings Calculator": "حاسبة الادخار",
    "Exchange Rate Calculator": "حاسبة سعر الصرف",
    "Bond Yield Calculator": "حاسبة عائد السندات",
    "Calculator": "حاسبة",
    "Loans": "القروض",
    "Mortgage": "الرهن",
    "Auto": "السيارات",
    "Tax": "الضرائب",
    "Payroll": "الرواتب",
    "Housing Loan": "قرض الإسكان",
  },
  hi: {
    "Combination Loan": "संयुक्त ऋण",
    "Loan Calculator": "ऋण कैलकुलेटर",
    "Income Tax Calculator": "आयकर कैलकुलेटर",
    "Provident Fund Loan Calculator": "हाउसिंग फंड ऋण कैलकुलेटर",
    "Subsidized Housing Loan Calculator": "सब्सिडी आवास ऋण कैलकुलेटर",
    "Mortgage Prepayment Calculator": "मॉर्गेज प्रीपेमेंट कैलकुलेटर",
    "Retirement Calculator": "सेवानिवृत्ति कैलकुलेटर",
    "Deposit Calculator": "जमा कैलकुलेटर",
    "Savings Calculator": "बचत कैलकुलेटर",
    "Exchange Rate Calculator": "विनिमय दर कैलकुलेटर",
    "Bond Yield Calculator": "बॉन्ड यील्ड कैलकुलेटर",
    "Calculator": "कैलकुलेटर",
    "Loans": "ऋण",
    "Mortgage": "मॉर्गेज",
    "Auto": "ऑटो",
    "Tax": "कर",
    "Payroll": "पेरोल",
    "Housing Loan": "आवास ऋण",
  },
};

function localizeEnglishText(text) {
  const language = lang();
  if (!text || language === "zh" || language === "en") return text;
  const dictionary = CALCULATOR_TERM_TRANSLATIONS[language];
  if (!dictionary) return text;
  let localized = text;
  Object.entries(dictionary)
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([source, target]) => {
      localized = localized.replaceAll(source, target);
    });
  return localized;
}

function localizedPairText(bucket) {
  if (!bucket) return "";
  if (bucket[lang()]) return bucket[lang()];
  if (lang() === "zh") return bucket.zh || bucket.en || "";
  return localizeEnglishText(bucket.en || bucket.zh || "");
}

const SEO_LABELS = {
  zh: { online: "在线计算器", tool: "工具", free: "免费", guide: "结果说明", faq: "常见问题" },
  en: { online: "online calculator", tool: "tool", free: "free", guide: "result guide", faq: "FAQ" },
  ja: { online: "オンライン計算機", tool: "ツール", free: "無料", guide: "結果ガイド", faq: "よくある質問" },
  ko: { online: "온라인 계산기", tool: "도구", free: "무료", guide: "결과 가이드", faq: "자주 묻는 질문" },
  es: { online: "calculadora online", tool: "herramienta", free: "gratis", guide: "guía de resultados", faq: "preguntas frecuentes" },
  fr: { online: "calculateur en ligne", tool: "outil", free: "gratuit", guide: "guide des résultats", faq: "FAQ" },
  de: { online: "Online-Rechner", tool: "Tool", free: "kostenlos", guide: "Ergebnisleitfaden", faq: "FAQ" },
  pt: { online: "calculadora online", tool: "ferramenta", free: "grátis", guide: "guia de resultados", faq: "perguntas frequentes" },
  ru: { online: "онлайн-калькулятор", tool: "инструмент", free: "бесплатно", guide: "разбор результата", faq: "FAQ" },
  ar: { online: "حاسبة أونلاين", tool: "أداة", free: "مجاني", guide: "شرح النتائج", faq: "الأسئلة الشائعة" },
  hi: { online: "ऑनलाइन कैलकुलेटर", tool: "टूल", free: "फ्री", guide: "रिजल्ट गाइड", faq: "अक्सर पूछे जाने वाले सवाल" },
};

function seoLabels() {
  return SEO_LABELS[lang()] || SEO_LABELS.en;
}

function uniqueStrings(items) {
  const seen = new Set();
  return items.filter((item) => {
    const value = String(item || "").trim();
    if (!value) return false;
    const key = value.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function localizedSeoDescription(pageTitle, pageSubtitle, quickItems) {
  const labels = seoLabels();
  const bullets = uniqueStrings(quickItems || []).slice(0, 3);
  const joinerMap = {
    zh: "；",
    ja: "、",
    ko: ", ",
    es: ", ",
    fr: ", ",
    de: ", ",
    pt: ", ",
    ru: ", ",
    ar: "، ",
    hi: ", ",
  };
  const tailMap = {
    zh: `支持在线测算、结果对比、图表说明与常见问题查看。`,
    ja: `オンライン試算、結果比較、グラフ確認、${labels.faq}に対応しています。`,
    ko: `온라인 계산, 결과 비교, 차트 확인, ${labels.faq}까지 한 페이지에서 제공합니다.`,
    es: `Permite calcular online, comparar resultados, revisar gráficos y consultar ${labels.faq}.`,
    fr: `Permet le calcul en ligne, la comparaison des résultats, la lecture des graphiques et la consultation de la ${labels.faq}.`,
    de: `Unterstützt Online-Berechnung, Ergebnisvergleich, Diagramme und ${labels.faq}.`,
    pt: `Permite calcular online, comparar resultados, ver gráficos e consultar ${labels.faq}.`,
    ru: `Поддерживает онлайн-расчёт, сравнение результатов, графики и ${labels.faq}.`,
    ar: `تدعم الحساب أونلاين، ومقارنة النتائج، وقراءة الرسوم البيانية، و${labels.faq}.`,
    hi: `ऑनलाइन गणना, रिजल्ट तुलना, चार्ट और ${labels.faq} एक ही पेज में मिलते हैं।`,
  };
  const separator = joinerMap[lang()] || ", ";
  const detail = bullets.length ? ` ${bullets.join(separator)}。` : "";
  return `${pageTitle} - ${pageSubtitle}${detail} ${tailMap[lang()] || tailMap.en}`.trim();
}

function localizedSeoKeywords(config, localizedName, localizedCategory, localizedQuick) {
  const labels = seoLabels();
  const localizedCategoryParts = String(localizedCategory || "")
    .split(/[\//]/)
    .map((item) => item.trim())
    .filter(Boolean);
  return uniqueStrings([
    localizedName,
    `${localizedName} ${labels.online}`,
    `${labels.free} ${localizedName}`,
    `${localizedName} ${labels.tool}`,
    localizedCategory,
    ...localizedCategoryParts,
    ...localizedQuick,
    labels.guide,
    labels.faq,
    "calcwisehub",
  ]).join(",");
}

function money(value) {
  return window.__siteI18n.formatCurrency(value, region().currency || "USD");
}

function num(value, digits = 2) {
  return window.__siteI18n.formatNumber(value, digits);
}

function pct(value) {
  return window.__siteI18n.formatPercent(value);
}

function renderCatalog() {
  const root = document.querySelector("[data-calculator-catalog]");
  if (!root) return;
  const input = document.querySelector("[data-calc-search]");
  const localPath = window.__siteI18n?.localizedPath || ((href) => href);
  const render = (query = "") => {
    const lower = query.toLowerCase();
    const sections = CATALOG_GROUPS.map((group) => {
      const groupItems = group.slugs
        .map((slug) => ({ slug, config: calculatorConfigs[slug] }))
        .filter((item) => item.config)
        .filter((item) => {
          const config = item.config;
          const haystack = [
            item.slug,
            config.name.zh,
            config.name.en,
            config.category.zh,
            config.category.en,
            config.subtitle.zh,
            config.subtitle.en,
            ...((config.seoKeywords && config.seoKeywords.zh) || []),
            ...((config.seoKeywords && config.seoKeywords.en) || []),
          ].join(" ").toLowerCase();
          return haystack.includes(lower);
        });
      if (!groupItems.length) return "";
      const groupBadge = localizedPairText({ zh: group.zh, en: group.en });
      const groupTitle = localizedPairText({ zh: group.titleZh, en: group.titleEn });
      const groupDesc = localizedPairText({ zh: group.descZh, en: group.descEn });
      return `
        <section class="catalog-group">
          <div class="catalog-group__head">
            <div>
              <span class="badge">${groupBadge}</span>
              <h2>${groupTitle}</h2>
            </div>
            <p>${groupDesc}</p>
          </div>
          <div class="catalog-group__grid">
            ${groupItems.map((item, index) => {
              const config = item.config;
              const name = config.name[lang()] || localizedPairText({ zh: config.name.zh, en: config.name.en });
              const subtitle = config.subtitle[lang()] || localizedPairText({ zh: config.subtitle.zh, en: config.subtitle.en });
              const category = config.category[lang()] || localizedPairText({ zh: config.category.zh, en: config.category.en });
              return `
                <a class="calc-card" href="${localPath(`/calculators/${item.slug}/`)}">
                  <div class="badge">${String(index + 1).padStart(2, "0")} · ${category}</div>
                  <h3>${name}</h3>
                  <p>${subtitle}</p>
                  <div class="tag-row">
                    <span class="tag">${tPair("独立详情页", "Dedicated page")}</span>
                    <span class="tag">${tPair("结果 + 图表 + FAQ", "Results + charts + FAQ")}</span>
                  </div>
                </a>
              `;
            }).join("")}
          </div>
        </section>
      `;
    }).filter(Boolean);
    root.innerHTML = sections.length
      ? sections.join("")
      : `<div class="content-card"><h3>${tPair("没有匹配结果", "No matching results")}</h3><p>${tPair("试试搜索房贷、ETF、预算、信用卡、单位换算等词。", "Try searching for mortgage, ETF, budget, credit card, or unit conversion.")}</p></div>`;
  };
  input?.addEventListener("input", () => render(input.value.trim()));
  render();
}

function createSeries(finalValue, years, scale = 1) {
  const length = Math.max(Math.min(Math.round(years * 2), 24), 8);
  return Array.from({ length }, (_, index) => {
    const progress = (index + 1) / length;
    return finalValue * Math.pow(progress, 2.15) * scale;
  });
}

function createLabels(length, suffixZh = "年", suffixEn = "y") {
  const suffixMap = {
    zh: suffixZh,
    ja: "年",
    ko: "년",
    es: " a",
    fr: " an",
    de: " J",
    pt: " a",
    ru: " г.",
    ar: " سنة",
    hi: " वर्ष",
  };
  return Array.from({ length }, (_, index) => {
    const value = index + 1;
    const suffix = suffixMap[lang()] || suffixEn;
    return `${value}${suffix}`;
  });
}

function periodicFutureValue(startingBalance, contributionPerPeriod, annualRatePercent, years, periodsPerYear) {
  const periodicRate = annualRatePercent / 100 / periodsPerYear;
  const totalPeriods = Math.max(Math.round(years * periodsPerYear), 0);
  const grownStarting = startingBalance * (1 + periodicRate) ** totalPeriods;
  const grownContribution = periodicRate === 0
    ? contributionPerPeriod * totalPeriods
    : contributionPerPeriod * (((1 + periodicRate) ** totalPeriods - 1) / periodicRate) * (1 + periodicRate);
  return grownStarting + grownContribution;
}

function isoDate(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function todayIso() {
  return isoDate(new Date());
}

function addDays(dateString, days) {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return null;
  date.setDate(date.getDate() + days);
  return date;
}

function daysBetween(startDate, endDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;
  return Math.round((end - start) / 86400000);
}

function formatDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "--";
  try {
    return new Intl.DateTimeFormat(locale(), {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  } catch (error) {
    return isoDate(date);
  }
}

function pluralize(value, zhUnit, enSingular, enPlural) {
  if (lang() === "zh") return `${value}${zhUnit}`;
  return localizeEnglishText(`${value} ${value === 1 ? enSingular : enPlural}`);
}

function monthlyPayment(principal, annualRate, years) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (n <= 0) return 0;
  if (r === 0) return principal / n;
  return (principal * r * (1 + r) ** n) / ((1 + r) ** n - 1);
}

function currentTaxSettings() {
  const taxMode = region().taxMode;
  if (taxMode === "us") return { standardDeduction: 1200, note: tPair("根据美国常见月度估算口径简化展示。", "Simplified around a common US-style monthly estimate.") };
  if (taxMode === "eu") return { standardDeduction: 900, note: tPair("根据欧洲常见综合税负直觉做简化估算。", "Simplified around a common European blended tax assumption.") };
  return { standardDeduction: 5000, note: tPair("按中国大陆综合所得年度税率逻辑做月度参考。", "Converted from a China-style annual bracket model for monthly reference.") };
}

function regionMaternityDefaults() {
  if (region().code === "CN") return { prenatalDays: 15, totalDays: 128 };
  if (region().code === "US") return { prenatalDays: 14, totalDays: 84 };
  if (region().code === "GB") return { prenatalDays: 14, totalDays: 273 };
  return { prenatalDays: 14, totalDays: 112 };
}

const calculatorConfigs = {
  loan: {
    name: { zh: "贷款计算器", en: "Loan Calculator" },
    category: { zh: "贷款 / 房贷 / 车贷", en: "Loans / Mortgage / Auto" },
    subtitle: {
      zh: "输入本金、利率与期限，马上看清月供压力、总利息成本和总还款规模。",
      en: "Enter amount, rate, and term to reveal payment pressure, total interest, and total repayment instantly.",
    },
    quick: {
      zh: ["适合房贷、车贷、消费贷", "支持地区币种自动切换", "提供结果拆解、趋势图和 FAQ"],
      en: ["Useful for mortgage, auto, and consumer loans", "Currency adapts to detected region", "Includes breakdowns, trend charts, and FAQs"],
    },
    features: [
      { id: "principal", type: "number", label: { zh: "贷款本金", en: "Loan Amount" }, default: () => region().currency === "CNY" ? 1000000 : 250000 },
      { id: "annual-rate", type: "number", step: "0.01", label: { zh: "年利率 (%)", en: "Annual Rate (%)" }, default: () => 3.35 },
      { id: "years", type: "number", label: { zh: "贷款年限", en: "Loan Term (Years)" }, default: () => 30 },
    ],
    compute(values) {
      const payment = monthlyPayment(values.principal, values["annual-rate"], values.years);
      const total = payment * values.years * 12;
      const interest = total - values.principal;
      return {
        kpis: [
          [tPair("月供", "Monthly Payment"), money(payment)],
          [tPair("总利息", "Total Interest"), money(interest)],
          [tPair("总还款", "Total Repayment"), money(total)],
          [tPair("利息占比", "Interest Share"), pct((interest / total) * 100)],
        ],
        note: tPair("贷款不是看能不能贷下来，而是先看每个月要不要扛得住。", "A good loan decision starts with monthly affordability, not just approval."),
        charts: [
          { title: tPair("贷款余额与累计还款走势", "Balance vs. cumulative repayment"), desc: tPair("帮助你看清长期现金流占用。", "See how the long-term cash burden evolves."), legends: [tPair("累计还款", "Cumulative repayment"), tPair("剩余本金", "Remaining principal")], series: [createSeries(total, values.years), createSeries(values.principal, values.years, 0.92)] },
          { title: tPair("月供压力视角", "Monthly payment pressure"), desc: tPair("适合和收入、租金或家庭支出做对比。", "Useful when comparing against income, rent, or household spending."), legends: [tPair("月供成本", "Monthly payment"), tPair("理想收入线", "Suggested income line")], series: [createSeries(payment * 12, values.years), createSeries(payment * 36, values.years)] },
        ],
        insights: [
          [tPair("什么时候适合用它", "When it is useful"), tPair("准备买房、买车，或者比较不同银行方案时，先把月供差额看明白。", "Use it when comparing lenders, home-buying scenarios, or vehicle financing options.")],
          [tPair("最关键的判断点", "Most important decision point"), tPair("同样的本金下，利率和年限都会显著放大利息总额。", "For the same principal, both rate and term amplify total interest materially.")],
        ],
        table: {
          title: tPair("不同年限下的月供对比", "Payment comparison by loan term"),
          desc: tPair("如果本金和利率不变，期限变化会如何影响结果。", "How term length changes the result when principal and rate stay constant."),
          headers: [tPair("期限", "Term"), tPair("月供", "Monthly Payment"), tPair("总利息", "Total Interest")],
          rows: [10, 20, 30].map((year) => {
            const p = monthlyPayment(values.principal, values["annual-rate"], year);
            return [`${year}${tPair("年", " years")}`, money(p), money(p * year * 12 - values.principal)];
          }),
        },
        article: {
          blocks: [
            { title: tPair("为什么贷款计算器值得先算一次", "Why a loan calculator is worth using first"), paragraphs: [tPair("很多人决定贷款时，只关心能不能批下来，却忽略了之后 10 年、20 年甚至 30 年的月供压力。贷款计算器的价值，在于把未来长期现金流一次性摆到眼前。", "Many borrowers focus on approval first and underestimate the monthly pressure that lasts for years. A loan calculator makes that long-term commitment visible immediately."), tPair(`在 ${region().countryName} 这样的市场里，币种、收入结构和贷款习惯会有差异，但一个原则是通用的：先算清楚，再签字。`, `In markets such as ${region().countryName}, borrowing habits and currencies vary, but one rule stays universal: calculate first, sign later.`)] },
            { title: tPair("结果应该怎么看", "How to interpret the result"), list: [tPair("先看月供是否在可承受范围。", "Check whether the monthly payment is realistically affordable."), tPair("再看总利息，判断长期成本是否偏高。", "Then compare total interest to judge the long-term cost."), tPair("最后和收入、储蓄目标、应急金一起综合判断。", "Finally compare it against income, savings goals, and your emergency reserve.") ] },
          ],
          faq: [
            [tPair("贷款期限越长越好吗？", "Is a longer loan term always better?"), tPair("期限更长会降低月供，但通常会提高总利息。最优解不是越长越好，而是现金流压力和总成本之间的平衡。", "A longer term lowers the monthly payment but usually increases total interest. The best answer is a balance between monthly flexibility and lifetime cost.")],
            [tPair("应该优先比利率还是比月供？", "Should I compare interest rate or monthly payment first?"), tPair("两者都要看。月供决定你每个月能否轻松生活，利率决定你为这笔钱付出的长期成本。", "Both matter. Monthly payment affects everyday affordability, while the rate defines the long-run cost of money.")],
          ],
        },
      };
    },
  },
  "income-tax": {
    name: { zh: "个税计算器", en: "Income Tax Calculator" },
    category: { zh: "税务 / 薪资", en: "Tax / Payroll" },
    subtitle: { zh: "快速估算税后收入，帮助你判断跳槽、谈薪或跨城市工作的真实到手变化。", en: "Estimate take-home pay quickly to evaluate compensation changes, negotiations, or relocation." },
    quick: { zh: ["自动按地区匹配税务说明", "适合谈薪与预算规划", "看清税后收入而不是只看税前"], en: ["Region-aware tax guidance", "Useful for salary planning", "Focus on what you actually take home"] },
    features: [
      { id: "monthly-income", type: "number", label: { zh: "税前月收入", en: "Monthly Gross Income" }, default: () => region().currency === "CNY" ? 20000 : 6000 },
      { id: "social-insurance", type: "number", label: { zh: "社保/福利扣除", en: "Social / Benefits Deduction" }, default: () => region().currency === "CNY" ? 3000 : 700 },
      { id: "special-deduction", type: "number", label: { zh: "专项附加扣除", en: "Extra Deductions" }, default: () => region().currency === "CNY" ? 1000 : 400 },
    ],
    compute(values) {
      const taxConfig = currentTaxSettings();
      const taxable = Math.max(values["monthly-income"] - values["social-insurance"] - values["special-deduction"] - taxConfig.standardDeduction, 0);
      const rates = taxConfig.standardDeduction === 5000
        ? [[36000, 3, 0], [144000, 10, 2520], [300000, 20, 16920], [420000, 25, 31920], [660000, 30, 52920], [960000, 35, 85920], [Infinity, 45, 181920]]
        : [[24000, 10, 0], [72000, 18, 1200], [180000, 24, 6000], [Infinity, 30, 15000]];
      const annualTaxable = taxable * 12;
      const match = rates.find(([limit]) => annualTaxable <= limit);
      const annualTax = Math.max(annualTaxable * (match[1] / 100) - match[2], 0);
      const monthlyTax = annualTax / 12;
      const takeHome = values["monthly-income"] - values["social-insurance"] - monthlyTax;
      return {
        kpis: [
          [tPair("税后月收入", "Net Monthly Income"), money(takeHome)],
          [tPair("预估月税额", "Estimated Monthly Tax"), money(monthlyTax)],
          [tPair("综合扣除后应税额", "Taxable Income"), money(taxable)],
          [tPair("税负比例", "Tax Burden"), pct((monthlyTax / Math.max(values["monthly-income"], 1)) * 100)],
        ],
        note: taxConfig.note,
        charts: [
          { title: tPair("税前与税后收入对比", "Gross vs. net pay"), desc: tPair("直观看懂收入被税费和扣除影响后的变化。", "See clearly how deductions and taxes affect take-home pay."), legends: [tPair("税前收入", "Gross"), tPair("税后收入", "Net")], series: [createSeries(values["monthly-income"] * 12, 6), createSeries(takeHome * 12, 6)] },
          { title: tPair("提薪后的到手增幅", "After-tax effect of a raise"), desc: tPair("税前增加不一定等于到手等比例增加。", "A raise before tax does not always translate linearly after tax."), legends: [tPair("税前增长", "Gross raise"), tPair("税后增长", "Net raise")], series: [createSeries(values["monthly-income"] * 1.2, 5), createSeries(takeHome * 1.12, 5)] },
        ],
        insights: [
          [tPair("适合哪些场景", "Best use cases"), tPair("谈 offer、做年预算、比较不同城市薪资时都很有用。", "Useful for job offers, annual budgeting, and comparing compensation across cities.")],
          [tPair("最容易忽略的点", "Most commonly overlooked"), tPair("很多人只看税前涨薪，却没有意识到税后实际提升可能比想象中小。", "Many people focus only on gross salary and underestimate how much smaller the net improvement can be.")],
        ],
        table: {
          title: tPair("不同收入水平的税后参考", "Take-home reference by income band"),
          desc: tPair("以当前扣除参数为基础，查看不同薪资下的大致到手变化。", "Based on the current deduction inputs, compare rough take-home results across salary levels."),
          headers: [tPair("税前月收入", "Gross"), tPair("税后月收入", "Net"), tPair("税负比例", "Tax Burden")],
          rows: [0.8, 1, 1.2].map((ratio) => {
            const gross = values["monthly-income"] * ratio;
            const taxableAlt = Math.max(gross - values["social-insurance"] - values["special-deduction"] - taxConfig.standardDeduction, 0);
            const annualAlt = taxableAlt * 12;
            const matched = rates.find(([limit]) => annualAlt <= limit);
            const taxAlt = Math.max(annualAlt * (matched[1] / 100) - matched[2], 0) / 12;
            return [money(gross), money(gross - values["social-insurance"] - taxAlt), pct((taxAlt / gross) * 100)];
          }),
        },
        article: {
          blocks: [
            { title: tPair("为什么税后收入比税前数字更重要", "Why take-home pay matters more than gross pay"), paragraphs: [tPair("真正决定生活质量和储蓄能力的，不是合同上的税前数字，而是每个月实际到账的金额。个税计算器最大的价值，是把“看起来很高”的收入，拆成真实可以支配的现金流。", "What shapes your lifestyle and savings capacity is not the gross number in the contract, but the amount that actually reaches your account each month. The real value of an income tax calculator is turning a headline salary into spendable cash flow."), tPair(`考虑到 ${region().countryName} 的税务环境与福利扣除习惯会不同，页面默认使用更贴近该地区的说明与币种。`, `Because tax systems and payroll deductions differ by market, this page adapts its defaults and guidance to ${region().countryName}.`)] },
            { title: tPair("如何把结果用在现实决策里", "How to use the result in real decisions"), list: [tPair("比较两个 offer 时，优先看税后差额。", "When comparing offers, prioritize net-income difference."), tPair("做月预算时，用税后收入减去固定支出。", "Use after-tax income, not gross income, for budgeting."), tPair("如果跨地区工作，注意币种、社保和扣除口径差异。", "If you move across regions, note changes in currency, payroll deductions, and tax assumptions.") ] },
          ],
          faq: [
            [tPair("为什么税后结果只是估算？", "Why is the net-pay result only an estimate?"), tPair("因为各国税务制度、社保缴纳基数、专项扣除和个人情况可能不同。这个结果适合做初步判断，不等于最终薪资单。", "Tax systems, payroll deductions, and personal situations differ across countries and employers. This result is designed for early decision-making, not for replacing an official payslip.")],
            [tPair("跨国求职时还能用吗？", "Can I use it for cross-border job decisions?"), tPair("可以。它特别适合用来做相对比较，但正式决定前仍建议核对当地税务和雇主福利规则。", "Yes. It is especially useful for relative comparison, but you should still confirm the local tax rules and employer benefit setup before making a final decision.")],
          ],
        },
      };
    },
  },
  "provident-fund-loan": {
    name: { zh: "公积金贷款计算器", en: "Provident Fund Loan Calculator" },
    category: { zh: "住房贷款", en: "Housing Loan" },
    subtitle: { zh: "适合买房场景，快速判断公积金贷款月供、利息与长期现金流负担。", en: "Built for housing scenarios to estimate payment, interest, and long-term burden quickly." },
    quick: { zh: ["适合首套和改善型购房", "突出利率优势与长期节省", "结果可和商业贷款对比"], en: ["Useful for home purchase planning", "Highlights long-term rate savings", "Easy to compare with commercial loans"] },
    features: [
      { id: "principal", type: "number", label: { zh: "贷款本金", en: "Loan Amount" }, default: () => 800000 },
      { id: "annual-rate", type: "number", step: "0.01", label: { zh: "年利率 (%)", en: "Annual Rate (%)" }, default: () => 2.85 },
      { id: "years", type: "number", label: { zh: "贷款年限", en: "Loan Term (Years)" }, default: () => 25 },
    ],
    compute(values) {
      const payment = monthlyPayment(values.principal, values["annual-rate"], values.years);
      const total = payment * values.years * 12;
      return commonLoanLike(values, payment, total, tPair("公积金贷款更适合长期拉开利息差。", "The lower rate is most powerful when viewed over the full term."));
    },
  },
  "sip-compound": {
    name: { zh: "定投复利计算器", en: "SIP Compound Calculator" },
    category: { zh: "长期投资 / 定投", en: "Long-Term Investing / SIP" },
    subtitle: { zh: "像你给的参考页那样，把投入、收益、复利加速度和长期结果一次看透。", en: "See contributions, gains, compounding speed, and long-term outcomes in a single focused page." },
    quick: { zh: ["适合基金、ETF、指数长期定投", "配图表展示复利拐点", "适合做目标导向型财富规划"], en: ["Great for funds, ETFs, and index investing", "Charts highlight the compounding inflection point", "Useful for goal-based wealth planning"] },
    features: [
      { id: "periodic-invest", type: "number", label: { zh: "每次投入金额", en: "Contribution Per Deposit" }, default: () => region().currency === "CNY" ? 3000 : 400 },
      {
        id: "frequency",
        type: "select",
        valueType: "string",
        label: { zh: "投资频次", en: "Investment Frequency" },
        default: () => "monthly",
        options: [
          { value: "daily", label: { zh: "每日", en: "Daily" } },
          { value: "weekly", label: { zh: "每周", en: "Weekly" } },
          { value: "biweekly", label: { zh: "每两周", en: "Biweekly" } },
          { value: "monthly", label: { zh: "每月", en: "Monthly" } },
          { value: "quarterly", label: { zh: "每季度", en: "Quarterly" } },
          { value: "yearly", label: { zh: "每年", en: "Yearly" } },
        ],
      },
      { id: "annual-rate", type: "number", step: "0.01", label: { zh: "预期年化收益率 (%)", en: "Expected Annual Return (%)" }, default: () => 8 },
      { id: "years", type: "number", label: { zh: "投资年限", en: "Investment Term (Years)" }, default: () => 20 },
      { id: "starting-balance", type: "number", label: { zh: "已有本金", en: "Starting Balance" }, default: () => 0 },
    ],
    compute(values) {
      const periodsMap = { daily: 365, weekly: 52, biweekly: 26, monthly: 12, quarterly: 4, yearly: 1 };
      const periodsPerYear = periodsMap[values.frequency] || 12;
      const totalPeriods = Math.max(Math.round(values.years * periodsPerYear), 0);
      const total = periodicFutureValue(values["starting-balance"], values["periodic-invest"], values["annual-rate"], values.years, periodsPerYear);
      const principal = values["starting-balance"] + values["periodic-invest"] * totalPeriods;
      const gain = total - principal;
      const seriesTotal = Array.from({ length: Math.max(values.years, 8) }, (_, i) => {
        const years = i + 1;
        return periodicFutureValue(values["starting-balance"], values["periodic-invest"], values["annual-rate"], years, periodsPerYear);
      });
      const seriesPrincipal = Array.from(
        { length: Math.max(values.years, 8) },
        (_, i) => values["starting-balance"] + values["periodic-invest"] * Math.round((i + 1) * periodsPerYear),
      );
      return {
        kpis: [
          [tPair("预计终值", "Projected Future Value"), money(total)],
          [tPair("累计投入", "Total Contribution"), money(principal)],
          [tPair("预估收益", "Estimated Gain"), money(gain)],
          [tPair("收益占比", "Gain Share"), pct((gain / Math.max(total, 1)) * 100)],
        ],
        note: tPair("真正让财富加速的，不是某一次大涨，而是长期持续投入后的复利拐点。", "Wealth acceleration usually comes from the compounding inflection point, not from one lucky year."),
        charts: [
          { title: tPair("本金与复利增长走势", "Principal and compounding growth"), desc: tPair("像看地图一样看清前期投入、中期积累和后期加速。", "See early contributions, mid-stage accumulation, and late-stage acceleration more clearly."), legends: [tPair("本金", "Principal"), tPair("复利", "Compounding")], mode: "stacked-area", valueType: "currency", labels: createLabels(seriesTotal.length), series: [seriesPrincipal, seriesTotal.map((value, index) => Math.max(value - seriesPrincipal[index], 0))], tooltipLabel: tPair("投资时间", "Investment horizon"), totalLabel: tPair("总资产", "Total Value") },
          { title: tPair("复利增速变化", "Compounding acceleration"), desc: tPair("每往后一年，收益对总资产的贡献会更明显。", "Each additional year makes investment growth more visible than fresh contributions."), legends: [tPair("资产增长", "Portfolio growth"), tPair("仅靠投入", "Contribution-only path")], series: [seriesTotal.map((value, index) => value - seriesPrincipal[index]), seriesPrincipal.map((value) => value * 0.28)] },
          { title: tPair("不同收益率下的长期结果", "Long-term results across return assumptions"), desc: tPair("帮助用户理解保守、中性、积极三种情境。", "Compare conservative, base, and optimistic return paths."), legends: [tPair("保守", "Conservative"), tPair("基准", "Base"), tPair("积极", "Optimistic")], series: [seriesTotal.map((v) => v * 0.82), seriesTotal, seriesTotal.map((v) => v * 1.16)] },
        ],
        insights: [
          [tPair("Feature", "Feature"), tPair("输入每次投入金额、投资频次、年化收益率和年限，就能同时看到累计投入、收益、复利加速度与长期趋势图。", "Enter your contribution amount, deposit frequency, annual return, and time horizon to see contributions, gains, compounding acceleration, and long-term trend charts together.")],
          [tPair("Advantage", "Advantage"), tPair("不只是给你一个终值数字，而是把“钱是怎么慢慢变大”的过程讲清楚，降低用户对长期投资的抽象感。", "It does more than return a final value. It makes the growth process visible, which reduces the abstraction of long-term investing.")],
          [tPair("Benefit", "Benefit"), tPair("用户更容易做出持续定投、延长持有期、优化目标金额的决定，也更愿意反复回来试不同参数。", "Users are more likely to commit to regular investing, extend their horizon, refine their goals, and return to test alternative scenarios.")],
          [tPair("Evidence", "Evidence"), tPair(`按当前参数，${values.years} 年后预估可达到 ${money(total)}，其中收益贡献约 ${money(gain)}。图表会清楚显示越往后增长越快。`, `With the current settings, the portfolio could reach about ${money(total)} after ${values.years} years, with roughly ${money(gain)} coming from gains. The charts make the late-stage acceleration obvious.`)],
        ],
        table: {
          title: tPair("不同持有年限下的终值对比", "Future value by holding period"),
          desc: tPair("同样的投入节奏下，时间拉长后复利差异会非常明显。", "With the same contribution rhythm, time creates a dramatic compounding difference."),
          headers: [tPair("投资年限", "Years"), tPair("累计投入", "Total Contribution"), tPair("预计终值", "Projected Value")],
          rows: [5, 10, 20, 30].map((year) => {
            const periods = Math.round(year * periodsPerYear);
            const fv = periodicFutureValue(values["starting-balance"], values["periodic-invest"], values["annual-rate"], year, periodsPerYear);
            return [`${year}${tPair("年", " years")}`, money(values["starting-balance"] + values["periodic-invest"] * periods), money(fv)];
          }),
        },
        article: {
          blocks: [
            { title: tPair("为什么定投复利最适合做成图表化页面", "Why SIP compounding works best as a visual page"), paragraphs: [tPair("复利的魅力在于前期看起来很慢，后期却会出现明显加速。很多用户坚持不了，不是因为方法不对，而是因为过程太抽象。一个好的复利计算器，必须把这个过程可视化。", "Compounding feels slow at first and powerful later. Many users quit not because the method is wrong, but because the process is too abstract. A strong compounding calculator should make the journey visual."), tPair(`当默认币种和说明按 ${region().countryName} 自动匹配时，用户更容易代入真实生活目标，比如教育金、买房首付或提前退休。`, `When the page adapts to ${region().countryName} by default, users can connect the calculation more naturally to real goals like education funds, a home down payment, or early retirement.`)] },
            { title: tPair("怎样把这个结果用起来", "How to use the result"), list: [tPair("先确定目标金额，再反向调整每月投入。", "Start from the target amount, then backsolve the monthly contribution."), tPair("不要只看 3 年或 5 年，把 10 年、20 年也一起看。", "Do not stop at 3 or 5 years. Also compare 10 and 20 years."), tPair("把收益率分成保守、基准、积极三种情景。", "Model conservative, base, and optimistic return scenarios.") ] },
          ],
          faq: [
            [tPair("收益率越高越好吗？", "Is a higher expected return always better?"), tPair("收益率越高，通常意味着波动和不确定性也越大。做长期规划时，建议同时看保守和基准两种情景。", "Higher expected returns usually come with more volatility and uncertainty. For long-term planning, compare both conservative and base scenarios.")],
            [tPair("什么时候最能体现复利？", "When does compounding become most visible?"), tPair("通常在后半程最明显，因为这时收益开始对收益继续产生放大作用。", "It becomes most visible in the later years, when gains begin producing gains on a larger base.")],
            [tPair("适合用来做什么目标？", "What goals is it best for?"), tPair("非常适合教育金、养老金、买房首付款、自主职业准备金等长期目标。", "It is especially useful for education funds, retirement planning, a future home down payment, or long-range financial independence goals.")],
          ],
        },
      };
    },
  },
  retirement: {
    name: { zh: "退休计算器", en: "Retirement Calculator" },
    category: { zh: "养老规划", en: "Retirement Planning" },
    subtitle: { zh: "把退休这件大事拆成目标资金、现有资产、月度投入和未来缺口四个维度。", en: "Break retirement planning into required assets, existing capital, monthly saving, and future gap." },
    quick: { zh: ["适合 FIRE 与传统退休规划", "自动关联地区币种", "把长期目标具体化"], en: ["Useful for FIRE and traditional retirement", "Currency adapts by region", "Turns a distant goal into a practical target"] },
    features: [
      { id: "current-age", type: "number", label: { zh: "当前年龄", en: "Current Age" }, default: () => 30 },
      { id: "retire-age", type: "number", label: { zh: "计划退休年龄", en: "Retirement Age" }, default: () => 60 },
      { id: "monthly-expense", type: "number", label: { zh: "当前月支出", en: "Current Monthly Spending" }, default: () => region().currency === "CNY" ? 8000 : 3200 },
      { id: "inflation-rate", type: "number", step: "0.01", label: { zh: "通胀率 (%)", en: "Inflation Rate (%)" }, default: () => 2.5 },
      { id: "retirement-years", type: "number", label: { zh: "退休生活年限", en: "Years in Retirement" }, default: () => 25 },
      { id: "post-return-rate", type: "number", step: "0.01", label: { zh: "退休后收益率 (%)", en: "Post-Retirement Return (%)" }, default: () => 3 },
      { id: "current-savings", type: "number", label: { zh: "当前储蓄", en: "Current Savings" }, default: () => region().currency === "CNY" ? 200000 : 50000 },
      { id: "monthly-invest", type: "number", label: { zh: "每月新增储蓄", en: "Monthly Saving" }, default: () => region().currency === "CNY" ? 4000 : 800 },
      { id: "pre-return-rate", type: "number", step: "0.01", label: { zh: "退休前收益率 (%)", en: "Pre-Retirement Return (%)" }, default: () => 6 },
    ],
    compute(values) {
      const yearsLeft = Math.max(values["retire-age"] - values["current-age"], 0);
      const expenseAtRetire = values["monthly-expense"] * (1 + values["inflation-rate"] / 100) ** yearsLeft;
      const m = values["retirement-years"] * 12;
      const realMonthly = ((1 + values["post-return-rate"] / 100) / (1 + values["inflation-rate"] / 100) - 1) / 12;
      const needed = realMonthly <= 0 ? expenseAtRetire * m : expenseAtRetire * 12 * (1 - (1 + realMonthly) ** (-m)) / (realMonthly * 12);
      const preRate = values["pre-return-rate"] / 100 / 12;
      const monthsLeft = yearsLeft * 12;
      const projected = values["current-savings"] * (1 + preRate) ** monthsLeft + (preRate === 0 ? values["monthly-invest"] * monthsLeft : values["monthly-invest"] * (((1 + preRate) ** monthsLeft - 1) / preRate) * (1 + preRate));
      const gap = Math.max(needed - projected, 0);
      return {
        kpis: [[tPair("退休所需资产", "Required Retirement Assets"), money(needed)], [tPair("预计退休时资产", "Projected Assets"), money(projected)], [tPair("资金缺口", "Funding Gap"), money(gap)], [tPair("距退休年数", "Years to Retirement"), `${yearsLeft}`]],
        note: tPair("退休不是一个模糊的未来词，而是一个可以被量化、被拆解、被提前准备的财务目标。", "Retirement should not remain vague. It becomes far more manageable once it is quantified and broken into parts."),
        charts: [
          { title: tPair("资产积累路径", "Asset accumulation path"), desc: tPair("看清当前储蓄和每月新增储蓄如何共同作用。", "See how current savings and monthly additions build together."), legends: [tPair("预计资产", "Projected assets"), tPair("目标资产", "Target assets")], series: [createSeries(projected, yearsLeft || 10), createSeries(needed, yearsLeft || 10)] },
          { title: tPair("退休缺口变化", "Retirement gap trajectory"), desc: tPair("年限拉长时，缺口可能缩小也可能被通胀拉大。", "A longer time horizon can reduce or widen the gap depending on assumptions."), legends: [tPair("缺口", "Gap"), tPair("理想轨迹", "Target path")], series: [createSeries(gap || needed * 0.2, yearsLeft || 10), createSeries((gap || needed * 0.2) * 0.6, yearsLeft || 10)] },
        ],
        insights: [[tPair("最能打动用户的点", "What resonates most"), tPair("它不是告诉用户“你要存很多钱”，而是告诉用户“还差多少、每个月该做什么”。", "It does not just say, 'you need a lot of money.' It tells users how far they are from the goal and what monthly action may help.")], [tPair("适合留存的原因", "Why users return"), tPair("退休规划是长期反复调整的主题，用户会因为收入变化、市场变化、家庭变化而反复回来重算。", "Retirement planning evolves over time, so users return as income, markets, and family situations change.")]],
        table: {
          title: tPair("不同退休年龄下的缺口对比", "Gap comparison by retirement age"),
          desc: tPair("同样的支出和储蓄习惯，退休年龄变化会怎么影响结果。", "See how changing the retirement age affects the outcome while keeping the spending and saving pattern constant."),
          headers: [tPair("退休年龄", "Retirement Age"), tPair("所需资产", "Required Assets"), tPair("资金缺口", "Funding Gap")],
          rows: [55, 60, 65].map((age) => {
            const yearsAlt = Math.max(age - values["current-age"], 0);
            const expenseAlt = values["monthly-expense"] * (1 + values["inflation-rate"] / 100) ** yearsAlt;
            const projectedAlt = values["current-savings"] * (1 + preRate) ** (yearsAlt * 12) + (preRate === 0 ? values["monthly-invest"] * yearsAlt * 12 : values["monthly-invest"] * (((1 + preRate) ** (yearsAlt * 12) - 1) / preRate) * (1 + preRate));
            const needAlt = realMonthly <= 0 ? expenseAlt * m : expenseAlt * 12 * (1 - (1 + realMonthly) ** (-m)) / (realMonthly * 12);
            return [`${age}`, money(needAlt), money(Math.max(needAlt - projectedAlt, 0))];
          }),
        },
        article: {
          blocks: [
            { title: tPair("退休计算器为什么能提高用户留存", "Why retirement tools drive repeat usage"), paragraphs: [tPair("退休规划不是一次性动作，而是持续更新的个人项目。用户每次收入变化、资产变化、家庭结构变化，都会重新计算。对站点来说，这种工具天然具备更高的留存价值。", "Retirement planning is not one decision. It is an ongoing project. As income, savings, markets, and family situations change, users return to recalculate. That makes retirement tools naturally sticky.") ] },
            { title: tPair("如何把结果转化为行动", "How to turn the result into action"), list: [tPair("如果缺口较大，先调整每月储蓄额。", "If the gap is large, first adjust the monthly savings amount."), tPair("如果差距仍大，再考虑延长工作年限或降低退休支出。", "If the gap remains large, consider a later retirement age or lower retirement spending."), tPair("定期复盘参数，而不是只算一次。", "Review assumptions regularly instead of calculating once and forgetting it.") ] },
          ],
          faq: [[tPair("退休后收益率应该填多少？", "What return assumption should I use after retirement?"), tPair("建议更保守一些，因为退休后更重视稳定性和现金流，而不是高波动高收益。", "A more conservative assumption is usually better after retirement because stability and cash flow matter more than aggressive growth.")], [tPair("支出应该按现在的还是未来的？", "Should I use current or future spending?"), tPair("可以先填当前月支出，系统会结合通胀做退休时点的估算。", "Start with your current monthly spending. The calculator will estimate what that may look like at retirement after inflation.")]],
        },
      };
    },
  },
};

function commonLoanLike(values, payment, total, note) {
  const principal = values.principal;
  const interest = total - principal;
  return {
    kpis: [[tPair("月供", "Monthly Payment"), money(payment)], [tPair("总利息", "Total Interest"), money(interest)], [tPair("总还款", "Total Repayment"), money(total)], [tPair("利息占比", "Interest Share"), pct((interest / total) * 100)]],
    note,
    charts: [
      { title: tPair("累计还款走势", "Cumulative repayment"), desc: tPair("长期贷款最重要的是看总成本而不是只看首月。", "Long loans should be judged by total cost, not just the first month."), legends: [tPair("累计还款", "Cumulative repayment"), tPair("累计利息", "Cumulative interest")], series: [createSeries(total, values.years), createSeries(interest, values.years)] },
      { title: tPair("不同期限下的利息差异", "Interest across different terms"), desc: tPair("期限越长，长期利息差异越明显。", "The longer the term, the larger the total interest difference."), legends: [tPair("当前期限", "Current term"), tPair("较短期限", "Shorter term")], series: [createSeries(interest, values.years), createSeries(interest * 0.68, Math.max(values.years - 5, 10))] },
    ],
    insights: [[tPair("为什么用户会收藏", "Why users save this page"), tPair("买房是高频大决策，用户通常会反复切换本金、利率、期限来比较方案。", "Home purchases are high-stakes decisions, so users repeatedly change amount, rate, and term to compare options.")], [tPair("真正的决策点", "Real decision point"), tPair("不是月供低不低，而是这个方案在总成本、家庭现金流和未来灵活性之间是否平衡。", "The real question is not whether the payment looks low, but whether the plan balances total cost, household cash flow, and future flexibility.")]],
    table: {
      title: tPair("核心参数结果表", "Core result table"),
      desc: tPair("把用户最关心的三件事直接放在同一张表里。", "Put the three most important outcomes in one glance."),
      headers: [tPair("指标", "Metric"), tPair("结果", "Result"), tPair("解释", "Why it matters")],
      rows: [
        [tPair("月供", "Monthly Payment"), money(payment), tPair("决定每个月的现金流压力", "Defines monthly cash pressure")],
        [tPair("总利息", "Total Interest"), money(interest), tPair("衡量长期成本高不高", "Measures long-run borrowing cost")],
        [tPair("总还款", "Total Repayment"), money(total), tPair("适合和总收入、储蓄目标对照", "Useful against income and savings goals")],
      ],
    },
    article: {
      blocks: [
        { title: tPair("为什么要把住房贷款结果拆开看", "Why housing-loan results should be broken down"), paragraphs: [tPair("买房常常是一个家庭最大的现金流承诺。只看“能不能贷到”很危险，必须把月供、总利息和总还款拆开看，才知道哪一部分最值得优化。", "A housing loan is often a household's biggest long-term cash commitment. Approval alone is not enough. Breaking the result into payment, total interest, and total repayment shows what is worth optimizing.") ] },
        { title: tPair("最值得比较的两个方案", "The two most useful comparisons"), list: [tPair("同本金不同利率。", "Same principal, different rates."), tPair("同利率不同年限。", "Same rate, different terms."), tPair("公积金贷款与商业贷款对照。", "Provident-style versus commercial loan comparison.") ] },
      ],
      faq: [[tPair("月供低就一定更好吗？", "Is a lower monthly payment always better?"), tPair("不一定。月供低通常意味着期限更长，从而带来更高的长期利息。", "Not always. A lower payment often means a longer term and therefore more total interest.")]],
    },
  };
}

calculatorConfigs.prepayment = {
  name: { zh: "提前还款房贷计算器", en: "Mortgage Prepayment Calculator" },
  category: { zh: "房贷优化", en: "Mortgage Optimization" },
  subtitle: { zh: "比较提前还款后是降低月供更划算，还是保持月供缩短年限更有效。", en: "Compare whether prepaying should reduce the monthly bill or shorten the loan term instead." },
  quick: { zh: ["对比两种提前还款策略", "适合存量房贷用户", "看清节省的利息空间"], en: ["Compare two prepayment strategies", "Useful for existing mortgage holders", "Reveal potential interest savings"] },
  features: [
    { id: "remaining-balance", type: "number", label: { zh: "剩余贷款本金", en: "Remaining Principal" }, default: () => 900000 },
    { id: "annual-rate", type: "number", step: "0.01", label: { zh: "剩余贷款年利率 (%)", en: "Annual Rate (%)" }, default: () => 4.1 },
    { id: "remaining-years", type: "number", label: { zh: "剩余年限", en: "Remaining Years" }, default: () => 25 },
    { id: "prepay-amount", type: "number", label: { zh: "提前还款金额", en: "Prepayment Amount" }, default: () => 100000 },
  ],
  compute(values) {
    const original = monthlyPayment(values["remaining-balance"], values["annual-rate"], values["remaining-years"]);
    const newBalance = Math.max(values["remaining-balance"] - values["prepay-amount"], 0);
    const reduced = monthlyPayment(newBalance, values["annual-rate"], values["remaining-years"]);
    const r = values["annual-rate"] / 100 / 12;
    const termBase = original - newBalance * r;
    const months = newBalance <= 0 ? 0 : r === 0 ? Math.ceil(newBalance / original) : termBase <= 0 ? 0 : Math.ceil(Math.log(original / termBase) / Math.log(1 + r));
    const savedPerMonth = original - reduced;
    return {
      kpis: [[tPair("原月供", "Original Payment"), money(original)], [tPair("减少月供后", "New Lower Payment"), money(reduced)], [tPair("保持月供剩余期数", "Months if Payment Unchanged"), `${months}${tPair("月", " months")}`], [tPair("每月减少支出", "Monthly Relief"), money(savedPerMonth)]],
      note: tPair("提前还款不是只看能不能省钱，还要看你更需要现金流弹性还是更快无债一身轻。", "Prepayment is not just about saving money. It is also about whether you value lower monthly pressure or faster debt freedom."),
      charts: [
        { title: tPair("两种策略对比", "Two prepayment strategies"), desc: tPair("一张图看清减少月供与缩短期限的差异。", "A single chart makes the two strategies easy to compare."), legends: [tPair("降低月供", "Lower payment"), tPair("缩短期限", "Shorter term")], series: [createSeries(reduced * values["remaining-years"] * 12, values["remaining-years"]), createSeries(original * (months / 12 || 1), values["remaining-years"])] },
      ],
      insights: [[tPair("Feature", "Feature"), tPair("同时输出降低月供方案和缩短期限方案，让用户不需要自己换算。", "Outputs both a lower-payment option and a shorter-term option so the user does not have to do manual comparison.")], [tPair("Benefit", "Benefit"), tPair("用户更容易结合家庭支出和未来计划，选择更适合自己的提前还款策略。", "Users can choose a strategy that fits household cash flow and future plans much more easily.")]],
      table: { title: tPair("提前还款结果速览", "Prepayment overview"), desc: tPair("先看最核心的决策信息。", "Start with the information that matters most."), headers: [tPair("方案", "Option"), tPair("结果", "Outcome"), tPair("更适合谁", "Best for")], rows: [[tPair("降低月供", "Lower payment"), money(reduced), tPair("更看重每月现金流的人", "People who value monthly cash flexibility")], [tPair("缩短期限", "Shorter term"), `${months}${tPair("月", " months")}`, tPair("更想尽快还清的人", "People who want faster debt payoff")]] },
      article: { blocks: [{ title: tPair("提前还款时最容易犯的错", "The most common prepayment mistake"), paragraphs: [tPair("很多人只看到“能省利息”，却没有比较两种提前还款方式的差异。事实上，减少月供和缩短期限对应的是两种完全不同的家庭财务策略。", "Many people focus only on interest savings and fail to compare the two different prepayment paths. Lowering the payment and shortening the term support very different household strategies.")] }], faq: [[tPair("什么人更适合降低月供？", "Who should reduce the payment?"), tPair("收入不稳定、准备生育、换工作或现金流压力较大的人，更适合优先降低月供。", "People with unstable income, upcoming life changes, or tighter cash flow may benefit more from reducing the monthly payment.")]] },
    };
  },
};

calculatorConfigs.deposit = {
  name: { zh: "存款计算器", en: "Deposit Calculator" },
  category: { zh: "储蓄 / 存款", en: "Savings / Deposit" },
  subtitle: { zh: "看清定期存款和每月追加后，未来本金与利息是怎么累积起来的。", en: "See how an initial deposit and recurring additions grow over time." },
  quick: { zh: ["适合稳健储蓄用户", "看清利息和本金比例", "适合作为理财基准线"], en: ["Useful for conservative savers", "Shows principal versus interest clearly", "Works as a baseline against other strategies"] },
  features: [
    { id: "principal", type: "number", label: { zh: "初始存款", en: "Initial Deposit" }, default: () => region().currency === "CNY" ? 100000 : 10000 },
    { id: "annual-rate", type: "number", step: "0.01", label: { zh: "年利率 (%)", en: "Annual Rate (%)" }, default: () => 2.2 },
    { id: "years", type: "number", label: { zh: "存期（年）", en: "Term (Years)" }, default: () => 5 },
    { id: "monthly-add", type: "number", label: { zh: "每月追加金额", en: "Monthly Addition" }, default: () => region().currency === "CNY" ? 2000 : 300 },
  ],
  compute(values) {
    const r = values["annual-rate"] / 100 / 12;
    const n = values.years * 12;
    const total = values.principal * (1 + r) ** n + (r === 0 ? values["monthly-add"] * n : values["monthly-add"] * (((1 + r) ** n - 1) / r) * (1 + r));
    const contribution = values.principal + values["monthly-add"] * n;
    return {
      kpis: [[tPair("本息合计", "Future Value"), money(total)], [tPair("累计投入", "Total Contribution"), money(contribution)], [tPair("累计利息", "Interest Earned"), money(total - contribution)], [tPair("利息占比", "Interest Share"), pct(((total - contribution) / Math.max(total, 1)) * 100)]],
      note: tPair("稳健储蓄的意义，不在于追求刺激，而在于为家庭现金流和目标资金打好底盘。", "Steady saving is not about excitement. It is about building a reliable financial base for future goals."),
      charts: [{ title: tPair("本金与利息累积趋势", "Principal and interest accumulation"), desc: tPair("观察时间与追加储蓄带来的变化。", "See how time and recurring additions shape the result."), legends: [tPair("总金额", "Total value"), tPair("累计投入", "Contributions")], series: [createSeries(total, values.years), createSeries(contribution, values.years)] }],
      insights: [[tPair("适合什么人", "Best for"), tPair("适合保守型用户、短中期目标、家庭备用金或资金停泊场景。", "Useful for conservative savers, short-to-mid-term goals, emergency reserves, or cash parking.")], [tPair("和定投的区别", "How it differs from investing"), tPair("它强调确定性和波动更低，而不是追求更高预期收益。", "It prioritizes certainty and lower volatility over higher expected returns.")]],
      table: { title: tPair("不同期限对比", "Comparison by term"), desc: tPair("同样的存款习惯，时间越长，利息贡献越明显。", "With the same saving pattern, longer terms make interest more noticeable."), headers: [tPair("期限", "Term"), tPair("累计投入", "Contribution"), tPair("本息合计", "Future Value")], rows: [1, 3, 5, 10].map((year) => { const months = year * 12; const totalAlt = values.principal * (1 + r) ** months + (r === 0 ? values["monthly-add"] * months : values["monthly-add"] * (((1 + r) ** months - 1) / r) * (1 + r)); return [`${year}${tPair("年", " years")}`, money(values.principal + values["monthly-add"] * months), money(totalAlt)]; }) },
      article: { blocks: [{ title: tPair("为什么很多用户需要一个存款基准线", "Why users need a deposit baseline"), paragraphs: [tPair("在比较理财、基金、股票等产品前，很多人需要先知道：如果我只做稳健储蓄，结果会怎样？这就是存款计算器存在的价值。", "Before comparing funds, stocks, or higher-risk products, many users need to know what happens if they simply save steadily. That is the value of a deposit calculator.") ] }], faq: [[tPair("利率填实际挂牌利率吗？", "Should I use the posted deposit rate?"), tPair("可以先填银行、券商或产品当前给出的年化利率做参考，再结合实际复利规则调整。", "Start with the annualized rate offered by your bank or product, then refine it based on the actual compounding rule if needed.")]] },
    };
  },
};

calculatorConfigs["exchange-rate"] = {
  name: { zh: "汇率转换计算器", en: "Exchange Rate Calculator" },
  category: { zh: "汇率 / 跨境", en: "FX / Cross-border" },
  subtitle: { zh: "适合出境消费、国际收款、留学预算和跨境电商场景。", en: "Useful for travel spending, cross-border payments, study-abroad budgets, and global commerce." },
  quick: { zh: ["按地区自动匹配默认币种", "适合旅行和跨境支付", "支持手动输入实时汇率"], en: ["Default currency adapts by region", "Useful for travel and cross-border payments", "Manual rate input supports live quotes"] },
  features: [
    { id: "amount", type: "number", label: { zh: "原金额", en: "Source Amount" }, default: () => 1000 },
    { id: "rate", type: "number", step: "0.0001", label: { zh: "汇率", en: "Exchange Rate" }, default: () => 7.25 },
  ],
  compute(values) {
    const converted = values.amount * values.rate;
    return {
      kpis: [[tPair("兑换结果", "Converted Amount"), num(converted, 4)], [tPair("使用汇率", "Applied Rate"), num(values.rate, 4)], [tPair("原金额", "Source Amount"), num(values.amount, 2)], [tPair("目标币种", "Target Currency"), region().currency]],
      note: tPair("跨境成本往往藏在汇率细节里，提前算清楚能避免预算失真。", "Small FX differences can distort a cross-border budget. Calculating first keeps expectations realistic."),
      charts: [{ title: tPair("不同汇率下的兑换结果", "Converted value across rates"), desc: tPair("方便用户判断汇率波动带来的影响。", "Shows how small rate changes affect the converted amount."), legends: [tPair("当前汇率", "Current rate"), tPair("较低汇率", "Lower rate")], series: [createSeries(converted, 5), createSeries(converted * 0.95, 5)] }],
      insights: [[tPair("用户为什么会反复用", "Why users return"), tPair("汇率每天都可能变化，旅行、留学和跨境交易用户会反复回来试算。", "Exchange rates move constantly, so travel, education, and commerce users naturally revisit this tool.")], [tPair("最适合的内容方向", "Best content angle"), tPair("搭配旅行预算、海外购物和学费生活费对比，会更容易做成长尾流量。", "It works well with content around travel budgets, overseas shopping, and tuition or living-cost comparisons.")]],
      table: { title: tPair("常见汇率波动区间", "Common rate fluctuation scenarios"), desc: tPair("帮助用户理解汇率变动 1%-3% 的预算影响。", "See how 1% to 3% FX moves affect the budget."), headers: [tPair("场景", "Scenario"), tPair("汇率", "Rate"), tPair("兑换结果", "Converted Amount")], rows: [[tPair("当前", "Current"), num(values.rate, 4), num(converted, 4)], [tPair("下跌 1%", "Down 1%"), num(values.rate * 0.99, 4), num(values.amount * values.rate * 0.99, 4)], [tPair("上涨 3%", "Up 3%"), num(values.rate * 1.03, 4), num(values.amount * values.rate * 1.03, 4)]] },
      article: { blocks: [{ title: tPair("为什么汇率工具也值得做成长文页", "Why an exchange-rate tool deserves long-form content"), paragraphs: [tPair("汇率类页面天然适合承接旅行、留学、跨境电商和国际支付搜索意图。只要结合场景内容，既能服务用户，也容易获取长期搜索流量。", "FX pages naturally align with travel, education, cross-border commerce, and global payment search intent. Combined with scenario-driven content, they can become both useful and discoverable.") ] }], faq: [[tPair("这里的汇率是实时的吗？", "Is the rate live?"), tPair("当前页面采用手动输入模式，适合对照银行、支付平台或交易软件的实时汇率使用。", "This page uses manual-rate input, which works well when you want to match the latest quote from a bank, broker, or payment service.")]] },
    };
  },
};

calculatorConfigs["treasury-yield"] = {
  name: { zh: "国债收益率计算器", en: "Treasury Yield Calculator" },
  category: { zh: "债券 / 固收", en: "Bond / Fixed Income" },
  subtitle: { zh: "适合对比不同债券的票息、买入价格与近似到期收益率。", en: "Compare coupon income, purchase price, and approximate yield to maturity across bond choices." },
  quick: { zh: ["适合固收投资者", "支持近似到期收益率估算", "适合作为债券筛选入口"], en: ["Great for fixed-income investors", "Includes approximate YTM logic", "Works as a bond-screening entry point"] },
  features: [
    { id: "face-value", type: "number", label: { zh: "票面金额", en: "Face Value" }, default: () => 1000 },
    { id: "coupon-rate", type: "number", step: "0.01", label: { zh: "票面利率 (%)", en: "Coupon Rate (%)" }, default: () => 2.68 },
    { id: "purchase-price", type: "number", label: { zh: "买入价格", en: "Purchase Price" }, default: () => 980 },
    { id: "redemption-price", type: "number", label: { zh: "到期兑付价格", en: "Redemption Value" }, default: () => 1000 },
    { id: "years", type: "number", label: { zh: "剩余期限（年）", en: "Years to Maturity" }, default: () => 5 },
  ],
  compute(values) {
    const annualCoupon = values["face-value"] * values["coupon-rate"] / 100;
    const currentYield = annualCoupon / values["purchase-price"] * 100;
    const approxYtm = ((annualCoupon + (values["redemption-price"] - values["purchase-price"]) / values.years) / ((values["redemption-price"] + values["purchase-price"]) / 2)) * 100;
    return {
      kpis: [[tPair("当前收益率", "Current Yield"), pct(currentYield)], [tPair("近似到期收益率", "Approx. YTM"), pct(approxYtm)], [tPair("年票息", "Annual Coupon"), money(annualCoupon)], [tPair("价差收益", "Price Gain to Maturity"), money(values["redemption-price"] - values["purchase-price"])]],
      note: tPair("债券不是只看票息，买入价格和持有到期收益率同样关键。", "Coupon income alone is not enough. Purchase price and yield to maturity matter just as much."),
      charts: [{ title: tPair("收益率结构", "Yield structure"), desc: tPair("帮助用户区分票息收益与价差收益。", "Separate coupon income from price return more clearly."), legends: [tPair("当前收益率", "Current yield"), tPair("近似到期收益率", "Approx. YTM")], valueType: "percent", series: [createSeries(currentYield, values.years), createSeries(approxYtm, values.years)] }],
      insights: [[tPair("为什么用户会用", "Why users use it"), tPair("固收用户常常需要先用一个简洁的模型快速筛掉不合适的债券。", "Fixed-income users often want a fast model to screen out unsuitable bonds.")], [tPair("最有价值的输出", "Most valuable output"), tPair("当前收益率帮助看现在的现金回报，到期收益率帮助看整体持有逻辑。", "Current yield highlights cash income now, while YTM helps assess the full hold-to-maturity case.")]],
      table: { title: tPair("价格变化对收益率影响", "How price changes affect yield"), desc: tPair("买入价格变化，会明显影响收益率判断。", "A different purchase price can materially change the yield case."), headers: [tPair("买入价格", "Purchase Price"), tPair("当前收益率", "Current Yield"), tPair("近似到期收益率", "Approx. YTM")], rows: [values["purchase-price"] * 0.97, values["purchase-price"], values["purchase-price"] * 1.03].map((price) => { const cy = annualCoupon / price * 100; const ytm = ((annualCoupon + (values["redemption-price"] - price) / values.years) / ((values["redemption-price"] + price) / 2)) * 100; return [money(price), pct(cy), pct(ytm)]; }) },
      article: { blocks: [{ title: tPair("债券投资为什么不能只看票息", "Why bond investors should not look at coupon alone"), paragraphs: [tPair("很多用户看到票息就做决定，但真正决定债券吸引力的，往往是买入价格和到期收益率。尤其在利率变化环境里，这一点更重要。", "Many users focus on the coupon, but what often determines a bond's attractiveness is the purchase price and yield to maturity. That matters even more in changing-rate environments.") ] }], faq: [[tPair("近似到期收益率准确吗？", "Is approximate YTM exact?"), tPair("这里使用的是常见近似公式，适合做筛选和初步判断。正式投资决策仍建议结合更精确的现金流折现模型。", "This uses a common shortcut formula that is suitable for screening and first-pass comparison. Formal investment decisions still benefit from a more exact discounted cash-flow model.")]] },
    };
  },
};

calculatorConfigs.bmi = {
  name: { zh: "BMI 计算器", en: "BMI Calculator" },
  showRegionContext: false,
  category: { zh: "健康", en: "Health" },
  subtitle: { zh: "用最简单的两个数字，快速判断体重指数与参考区间。", en: "Use two simple inputs to check body mass index and the reference range." },
  quick: { zh: ["适合减脂和健康管理", "移动端输入极快", "结果简单直观"], en: ["Great for health tracking", "Fast on mobile", "Simple and intuitive output"] },
  features: [
    { id: "height", type: "number", label: { zh: "身高（cm）", en: "Height (cm)" }, default: () => region().units === "imperial" ? 173 : 170 },
    { id: "weight", type: "number", label: { zh: "体重（kg）", en: "Weight (kg)" }, default: () => region().units === "imperial" ? 72 : 65 },
  ],
  compute(values) {
    const heightM = values.height / 100;
    const bmi = values.weight / (heightM * heightM);
    const level = bmi < 18.5 ? tPair("偏瘦", "Underweight") : bmi < 24 ? tPair("正常", "Normal") : bmi < 28 ? tPair("超重", "Overweight") : tPair("肥胖", "Obese");
    return {
      kpis: [["BMI", num(bmi, 2)], [tPair("体重分类", "Category"), level], [tPair("建议体重下限", "Suggested Lower Weight"), `${num(18.5 * heightM * heightM, 1)} kg`], [tPair("建议体重上限", "Suggested Upper Weight"), `${num(23.9 * heightM * heightM, 1)} kg`]],
      note: tPair("健康管理最重要的是形成反馈，而不是只看一次结果。", "Health tracking works best when it creates ongoing feedback, not a one-time number."),
      charts: [{ title: tPair("BMI 区间参考", "BMI reference bands"), desc: tPair("帮助用户知道自己位于哪个区间。", "Shows where the current result sits across the common ranges."), legends: [tPair("当前 BMI", "Current BMI"), tPair("理想区间中线", "Target midpoint")], valueType: "number", series: [createSeries(bmi, 4), createSeries(22, 4)] }],
      insights: [[tPair("为什么用户会收藏", "Why users save it"), tPair("因为身高不变，但体重会变化，健康管理用户会持续回来记录和校准。", "Height stays fixed, but weight changes over time, so health-focused users often revisit and re-check.")], [tPair("最适合的扩展内容", "Best supporting content"), tPair("可以继续配套减脂速度、目标体重、基础代谢和热量缺口内容。", "It pairs well with target-weight, calorie deficit, and metabolism content.")]],
      table: { title: tPair("BMI 区间速查", "BMI quick reference"), desc: tPair("帮助用户更快理解分类。", "A faster way to interpret the category."), headers: [tPair("区间", "Range"), tPair("分类", "Category"), tPair("说明", "Meaning")], rows: [["<18.5", tPair("偏瘦", "Underweight"), tPair("可关注营养摄入和体重恢复", "Monitor nutrition and healthy weight gain")], ["18.5-23.9", tPair("正常", "Normal"), tPair("继续保持", "Maintain the current range")], ["24-27.9", tPair("超重", "Overweight"), tPair("可以关注运动和饮食结构", "Review activity and diet pattern")], [">=28", tPair("肥胖", "Obese"), tPair("建议结合更系统的健康管理", "Consider a more structured health plan")]] },
      article: { blocks: [{ title: tPair("BMI 为什么适合做高频工具", "Why BMI works as a high-frequency tool"), paragraphs: [tPair("BMI 的门槛低、输入快、理解直观，是天然适合移动端和搜索入口的轻量级工具。", "BMI is low-friction, fast to use, and intuitive, which makes it ideal for mobile usage and search-driven discovery.") ] }], faq: [[tPair("BMI 结果能代表全部健康状况吗？", "Does BMI reflect overall health perfectly?"), tPair("不能。它更适合做初筛参考，肌肉量、体脂率、年龄和生活方式也很重要。", "No. It is best used as an initial reference. Muscle mass, body-fat percentage, age, and lifestyle also matter.")]] },
    };
  },
};

calculatorConfigs["savings-goal"] = {
  name: { zh: "储蓄目标计算器", en: "Savings Goal Calculator" },
  category: { zh: "目标规划", en: "Goal Planning" },
  subtitle: { zh: "从目标金额反推每月该存多少，让目标不再停留在愿望层面。", en: "Backsolve the monthly savings needed to turn a vague goal into a plan." },
  quick: { zh: ["适合买房首付与教育金规划", "从目标倒推行动", "适合做长期留存工具"], en: ["Useful for down payments and education goals", "Turns goals into monthly action", "Naturally sticky for long-term planning"] },
  features: [
    { id: "goal-amount", type: "number", label: { zh: "目标金额", en: "Target Amount" }, default: () => region().currency === "CNY" ? 500000 : 120000 },
    { id: "current-savings", type: "number", label: { zh: "当前存款", en: "Current Savings" }, default: () => region().currency === "CNY" ? 100000 : 12000 },
    { id: "years", type: "number", label: { zh: "目标年限", en: "Time Horizon (Years)" }, default: () => 5 },
    { id: "annual-rate", type: "number", step: "0.01", label: { zh: "预期收益率 (%)", en: "Expected Annual Return (%)" }, default: () => 2.8 },
  ],
  compute(values) {
    const r = values["annual-rate"] / 100 / 12;
    const n = values.years * 12;
    const futureCurrent = values["current-savings"] * (1 + r) ** n;
    const gap = Math.max(values["goal-amount"] - futureCurrent, 0);
    const monthly = r === 0 ? gap / n : gap / ((((1 + r) ** n - 1) / r) * (1 + r));
    return {
      kpis: [[tPair("目标差额", "Goal Gap"), money(gap)], [tPair("建议月储蓄", "Suggested Monthly Saving"), money(monthly)], [tPair("目标金额", "Target Amount"), money(values["goal-amount"])], [tPair("当前进度", "Current Progress"), pct((values["current-savings"] / Math.max(values["goal-amount"], 1)) * 100)]],
      note: tPair("目标一旦拆解到每月行动，执行感会远高于只写一个模糊愿望。", "Once a goal is translated into a monthly action, it becomes far more executable than a vague ambition."),
      charts: [{ title: tPair("达成目标的积累路径", "Path toward the target"), desc: tPair("看清目标金额与实际积累之间的关系。", "See the relationship between the target and the expected savings path."), legends: [tPair("目标线", "Target line"), tPair("预计积累", "Projected savings")], series: [createSeries(values["goal-amount"], values.years), createSeries(values["goal-amount"] - gap + gap * 0.95, values.years)] }],
      insights: [[tPair("Feature", "Feature"), tPair("用户填入目标金额、时间和已有存款后，系统直接给出月储蓄建议。", "The page lets users enter a goal, timeline, and current savings, then directly returns a practical monthly target.")], [tPair("Benefit", "Benefit"), tPair("非常适合下次回来继续调参，比如缩短时间、提高目标或增加回报预期。", "It is ideal for repeat visits as users adjust the timeline, target, or expected return over time.")]],
      table: { title: tPair("不同年限下的月储蓄要求", "Monthly saving requirement by timeline"), desc: tPair("同样的目标，时间不同，行动压力差异很大。", "The same target can feel very different depending on the time horizon."), headers: [tPair("目标年限", "Years"), tPair("建议月储蓄", "Suggested Monthly Saving"), tPair("目标差额", "Gap")], rows: [3, 5, 8].map((year) => { const months = year * 12; const future = values["current-savings"] * (1 + r) ** months; const localGap = Math.max(values["goal-amount"] - future, 0); const localMonthly = r === 0 ? localGap / months : localGap / ((((1 + r) ** months - 1) / r) * (1 + r)); return [`${year}${tPair("年", " years")}`, money(localMonthly), money(localGap)]; }) },
      article: { blocks: [{ title: tPair("为什么从目标反推，比从收入正推更容易坚持", "Why goal-based saving often works better"), paragraphs: [tPair("很多用户知道自己“应该多存钱”，但不知道具体该存多少。目标反推的优势，在于它能把抽象的愿望变成具体数字。", "Many users know they should save more but do not know how much. Backsolving from a goal turns an abstract wish into a concrete number.") ] }], faq: [[tPair("收益率是不是必须填写？", "Do I need to add a return assumption?"), tPair("建议填写一个保守值。即使你只是做存款规划，也可以更接近现实地估算目标难度。", "A conservative return assumption is usually helpful. Even for pure saving plans, it creates a more realistic estimate.")]] },
    };
  },
};

calculatorConfigs.cagr = {
  name: { zh: "年化收益率计算器", en: "CAGR Calculator" },
  category: { zh: "投资分析", en: "Investment Analysis" },
  subtitle: { zh: "用统一的年化视角，比较不同投资项目的真实增长效率。", en: "Compare very different investment journeys using a single annualized metric." },
  quick: { zh: ["适合基金、股票、项目对比", "统一不同周期的表现", "适合投资复盘内容"], en: ["Useful for funds, stocks, and projects", "Normalizes different holding periods", "Great for investment retrospectives"] },
  features: [
    { id: "initial-value", type: "number", label: { zh: "初始金额", en: "Initial Value" }, default: () => 100000 },
    { id: "final-value", type: "number", label: { zh: "最终金额", en: "Final Value" }, default: () => 180000 },
    { id: "years", type: "number", label: { zh: "持有年限", en: "Holding Period (Years)" }, default: () => 6 },
  ],
  compute(values) {
    const cagr = ((values["final-value"] / values["initial-value"]) ** (1 / values.years) - 1) * 100;
    const total = ((values["final-value"] - values["initial-value"]) / values["initial-value"]) * 100;
    return {
      kpis: [[tPair("年化收益率", "Annualized Return"), pct(cagr)], [tPair("总回报率", "Total Return"), pct(total)], [tPair("初始金额", "Initial Value"), money(values["initial-value"])], [tPair("最终金额", "Final Value"), money(values["final-value"])]],
      note: tPair("CAGR 最重要的作用，是让不同周期、不同路径的投资结果可以放在同一把尺子上比较。", "CAGR matters because it puts very different investment paths onto the same measuring scale."),
      charts: [{ title: tPair("年化增长路径", "Annualized growth path"), desc: tPair("帮助理解总回报和年化回报之间的差异。", "Shows how total return and annualized return relate to each other."), legends: [tPair("年化路径", "Annualized path"), tPair("线性增长参考", "Linear reference")], series: [createSeries(values["final-value"], values.years), createSeries(values["initial-value"] + (values["final-value"] - values["initial-value"]) * 0.72, values.years)] }],
      insights: [[tPair("最适合比较什么", "Best comparison use"), tPair("非常适合比较两个收益率不同、持有周期不同的项目。", "It is ideal for comparing projects with different durations and return profiles.")], [tPair("为什么用户爱用", "Why users like it"), tPair("它能把“听起来很厉害”的总收益，重新翻译成年化后的真实效率。", "It translates impressive-sounding total gains into a more honest annualized efficiency metric.")]],
      table: { title: tPair("不同终值下的年化结果", "Annualized outcome by final value"), desc: tPair("帮助用户建立年化收益率直觉。", "Helps users build intuition around annualized returns."), headers: [tPair("最终金额", "Final Value"), tPair("总回报率", "Total Return"), tPair("年化收益率", "CAGR")], rows: [1.3, 1.5, 1.8, 2.2].map((ratio) => { const final = values["initial-value"] * ratio; const localCagr = ((final / values["initial-value"]) ** (1 / values.years) - 1) * 100; return [money(final), pct((ratio - 1) * 100), pct(localCagr)]; }) },
      article: { blocks: [{ title: tPair("为什么总收益高，不一定代表效率高", "Why a big total return does not always mean high efficiency"), paragraphs: [tPair("如果一个项目 10 年赚了 80%，另一个项目 5 年赚了 60%，直觉上很难直接比较。CAGR 的意义，就在于把它们统一成每年的增长效率。", "If one project gains 80% over 10 years and another gains 60% over 5 years, direct comparison is difficult. CAGR solves this by turning both into a yearly growth rate.") ] }], faq: [[tPair("CAGR 会反映波动吗？", "Does CAGR reflect volatility?"), tPair("不会。它更像是一种归一化结果展示，不会告诉你中间经历了多大的回撤或波动。", "No. It is a normalized summary metric and does not tell you how volatile the path was.")]] },
    };
  },
};

calculatorConfigs.inflation = {
  name: { zh: "通胀影响计算器", en: "Inflation Calculator" },
  category: { zh: "购买力", en: "Purchasing Power" },
  subtitle: { zh: "让用户直观看到一笔钱未来还能买到多少，适合储蓄、教育和退休规划。", en: "Make inflation visible by showing how purchasing power changes over time." },
  quick: { zh: ["适合家庭预算和退休规划", "让抽象通胀变得具体", "适合作为内容引导工具"], en: ["Useful for budgeting and retirement", "Makes inflation tangible", "Works well as educational content"] },
  features: [
    { id: "amount", type: "number", label: { zh: "当前金额", en: "Current Amount" }, default: () => region().currency === "CNY" ? 100000 : 15000 },
    { id: "inflation-rate", type: "number", step: "0.01", label: { zh: "通胀率 (%)", en: "Inflation Rate (%)" }, default: () => 2.5 },
    { id: "years", type: "number", label: { zh: "年限", en: "Years" }, default: () => 10 },
  ],
  compute(values) {
    const future = values.amount * (1 + values["inflation-rate"] / 100) ** values.years;
    const present = values.amount / (1 + values["inflation-rate"] / 100) ** values.years;
    return {
      kpis: [[tPair("未来等值金额", "Future Equivalent Amount"), money(future)], [tPair("折算当前价值", "Present Value Equivalent"), money(present)], [tPair("购买力损耗", "Purchasing Power Loss"), money(future - values.amount)], [tPair("通胀率", "Inflation Rate"), pct(values["inflation-rate"])]],
      note: tPair("很多财务目标失败，不是因为没存钱，而是因为低估了时间和通胀。", "Many plans fail not because people save nothing, but because they underestimate time and inflation."),
      charts: [{ title: tPair("金额与购买力变化", "Nominal amount vs. purchasing power"), desc: tPair("帮助用户理解为什么同样的钱会越来越不经花。", "Explains why the same amount feels smaller over time."), legends: [tPair("未来金额需求", "Future required amount"), tPair("当前购买力", "Current purchasing power")], series: [createSeries(future, values.years), createSeries(values.amount, values.years)] }],
      insights: [[tPair("最适合哪类用户", "Best for"), tPair("适合做教育金、养老、家庭预算和长期目标规划。", "Useful for education funds, retirement, household budgeting, and long-term planning.")], [tPair("它为什么容易转化", "Why it converts well"), tPair("因为它能把一个抽象经济概念，直接翻译成用户每天都能理解的生活成本变化。", "It converts well because it turns an abstract economic concept into a concrete everyday cost story.")]],
      table: { title: tPair("不同通胀率对比", "Comparison across inflation rates"), desc: tPair("通胀率每差一点，长期结果可能差很多。", "Small changes in inflation assumptions can produce large long-term differences."), headers: [tPair("通胀率", "Inflation"), tPair("未来等值金额", "Future Equivalent"), tPair("折算当前价值", "Present Equivalent")], rows: [2, 3, 5].map((rate) => [pct(rate), money(values.amount * (1 + rate / 100) ** values.years), money(values.amount / (1 + rate / 100) ** values.years)]) },
      article: { blocks: [{ title: tPair("为什么通胀工具对 SEO 很有价值", "Why inflation tools are valuable for SEO"), paragraphs: [tPair("通胀、购买力、生活成本、退休准备都是高关注主题。只要内容写得足够清楚，它不仅是一个计算器，也是一个理解财务常识的入口页。", "Inflation, purchasing power, cost of living, and retirement readiness are all high-interest topics. When explained clearly, this page becomes more than a calculator. It becomes an educational entry point.") ] }], faq: [[tPair("未来等值金额是什么意思？", "What does future equivalent amount mean?"), tPair("表示如果未来保持同样购买力，你大约需要多少钱。", "It is the amount you may need in the future to keep roughly the same purchasing power.")]] },
    };
  },
};

calculatorConfigs["debt-ratio"] = {
  name: { zh: "负债收入比计算器", en: "Debt-to-Income Calculator" },
  category: { zh: "现金流风险", en: "Cash-Flow Risk" },
  subtitle: { zh: "快速判断每月债务压力是否处于安全区、偏高区还是高风险区。", en: "Quickly assess whether your debt burden sits in a safe, elevated, or risky range." },
  quick: { zh: ["适合办贷前自查", "适合家庭预算评估", "结果非常直观"], en: ["Useful before applying for credit", "Great for household budgeting", "Simple and intuitive results"] },
  features: [
    { id: "monthly-income", type: "number", label: { zh: "月收入", en: "Monthly Income" }, default: () => region().currency === "CNY" ? 18000 : 5000 },
    { id: "monthly-debt", type: "number", label: { zh: "月债务支出", en: "Monthly Debt Payments" }, default: () => region().currency === "CNY" ? 6500 : 1800 },
  ],
  compute(values) {
    const ratio = values["monthly-debt"] / Math.max(values["monthly-income"], 1) * 100;
    const level = ratio < 30 ? tPair("安全", "Safe") : ratio < 50 ? tPair("偏高", "Elevated") : tPair("高风险", "High Risk");
    return {
      kpis: [[tPair("负债收入比", "Debt-to-Income"), pct(ratio)], [tPair("风险等级", "Risk Level"), level], [tPair("月度可支配", "Disposable Left"), money(values["monthly-income"] - values["monthly-debt"])], [tPair("债务占收入", "Debt Share"), pct(ratio)]],
      note: tPair("很多借款问题不是额度问题，而是收入和固定债务之间已经没有安全余地。", "Many borrowing problems are not about approval limits, but about the shrinking safety margin between income and recurring debt."),
      charts: [{ title: tPair("收入与债务占比", "Income versus debt share"), desc: tPair("帮助用户直观看懂现金流空间。", "Shows the amount of breathing room left in the monthly budget."), legends: [tPair("债务支出", "Debt payments"), tPair("收入总额", "Income")], series: [createSeries(values["monthly-debt"] * 12, 4), createSeries(values["monthly-income"] * 12, 4)] }],
      insights: [[tPair("适合什么场景", "Best use case"), tPair("适合贷款前自查、准备买房买车或规划家庭预算的人群。", "Great before applying for credit, financing a car or home, or reviewing household cash flow.")], [tPair("为什么用户愿意留存", "Why it retains users"), tPair("每增加一笔月供或每次收入变化，用户都会回来重新判断自己的压力区间。", "Any new monthly obligation or income change gives users a reason to return and check the pressure zone again.")]],
      table: { title: tPair("风险区间参考", "Risk-zone reference"), desc: tPair("帮助用户快速判断当前所处位置。", "A quick way to understand the current risk zone."), headers: [tPair("区间", "Range"), tPair("风险等级", "Risk"), tPair("解读", "Interpretation")], rows: [["<30%", tPair("安全", "Safe"), tPair("通常说明现金流空间还较充足", "Usually suggests a comfortable monthly buffer")], ["30%-50%", tPair("偏高", "Elevated"), tPair("需要更谨慎控制新增负债", "Calls for more caution before adding debt")], [">50%", tPair("高风险", "High Risk"), tPair("现金流承压明显", "Indicates meaningful monthly pressure")]] },
      article: { blocks: [{ title: tPair("为什么负债收入比是高频工具", "Why debt-to-income is a high-frequency tool"), paragraphs: [tPair("它的输入极少，但结果非常接近现实决策。无论是贷款审批、自我预算还是家庭财务讨论，这个比例都非常有参考价值。", "It requires very little input, yet the output is highly relevant to real decisions. From credit approval to family budgeting, this ratio provides practical guidance.") ] }], faq: [[tPair("数值高就一定贷不到吗？", "Does a high ratio automatically mean no approval?"), tPair("不一定，但通常意味着审批更严格，或者你的现金流安全边际偏低。", "Not necessarily, but it often means stricter underwriting or a thinner monthly safety margin.")]] },
    };
  },
};

calculatorConfigs["date-days"] = {
  name: { zh: "日期天数计算器", en: "Date Duration Calculator" },
  showRegionContext: false,
  category: { zh: "日期 / 时间", en: "Date / Time" },
  subtitle: { zh: "快速计算两个日期之间相差多少天、多少周，以及包含首尾日的完整跨度。", en: "Count the exact days, weeks, and inclusive span between two calendar dates." },
  quick: { zh: ["适合合同、旅行、项目排期", "同时显示自然日与含首尾天数", "结果适合做时间规划对照"], en: ["Useful for contracts, trips, and schedules", "Shows exclusive and inclusive counts", "Designed for planning comparisons"] },
  features: [
    { id: "start-date", type: "date", label: { zh: "开始日期", en: "Start Date" }, default: () => todayIso() },
    { id: "end-date", type: "date", label: { zh: "结束日期", en: "End Date" }, default: () => isoDate(addDays(todayIso(), 30)) },
  ],
  compute(values) {
    const startDate = values["start-date"] || todayIso();
    const endDate = values["end-date"] || startDate;
    const diff = Math.max(daysBetween(startDate, endDate), 0);
    const inclusive = diff + 1;
    const weeks = diff / 7;
    const months = diff / 30.44;
    return {
      kpis: [
        [tPair("相差天数", "Days Between"), pluralize(diff, "天", "day", "days")],
        [tPair("含首尾天数", "Inclusive Days"), pluralize(inclusive, "天", "day", "days")],
        [tPair("约合周数", "Approx. Weeks"), num(weeks, 1)],
        [tPair("约合月数", "Approx. Months"), num(months, 1)],
      ],
      note: tPair("日期差并不只是一个数字，它往往直接影响合同周期、出行安排、项目节奏和生活计划。", "A date gap is rarely just a number. It often shapes contracts, trips, timelines, and personal plans."),
      charts: [
        { title: tPair("时间跨度拆解", "Timeline span breakdown"), desc: tPair("把总天数拆成周和月份视角，更容易做排期。", "Break the span into weeks and months for easier scheduling."), legends: [tPair("自然日", "Calendar days"), tPair("含首尾", "Inclusive days"), tPair("周数参考", "Weeks reference")], valueType: "number", series: [createSeries(diff, Math.max(Math.ceil(diff / 30), 4)), createSeries(inclusive, Math.max(Math.ceil(diff / 30), 4)), createSeries(weeks * 7, Math.max(Math.ceil(diff / 30), 4))] },
      ],
      insights: [
        [tPair("最常见用途", "Most common use"), tPair("适合算旅行时长、合同起止、请假区间、项目排期和纪念日倒计时。", "Useful for travel planning, contract terms, leave windows, project schedules, and countups to anniversaries.")],
        [tPair("最容易出错的点", "Most common mistake"), tPair("很多用户会混淆“相差多少天”和“包含首尾总共多少天”，页面把这两个值一起给出来，避免手算出错。", "People often mix up the pure difference with the inclusive total. Showing both prevents common manual-count mistakes.")],
      ],
      table: {
        title: tPair("日期跨度结果表", "Date span reference"),
        desc: tPair("把同一段时间换算成更容易理解的多个单位。", "View the same time span across several easier-to-read units."),
        headers: [tPair("指标", "Metric"), tPair("结果", "Result"), tPair("说明", "Meaning")],
        rows: [
          [tPair("开始日期", "Start"), formatDate(new Date(`${startDate}T00:00:00`)), tPair("起算日期", "Beginning of the period")],
          [tPair("结束日期", "End"), formatDate(new Date(`${endDate}T00:00:00`)), tPair("截止日期", "End of the period")],
          [tPair("自然日差", "Day difference"), pluralize(diff, "天", "day", "days"), tPair("结束日减开始日", "End date minus start date")],
          [tPair("含首尾总天数", "Inclusive span"), pluralize(inclusive, "天", "day", "days"), tPair("适合请假、疗程、活动天数", "Useful for leave, programs, and event counts")],
        ],
      },
      article: {
        blocks: [
          { title: tPair("为什么日期天数工具很高频", "Why a date calculator is high-frequency"), paragraphs: [tPair("很多人只有在真正需要的时候才发现，日期手算非常容易漏掉首尾日、跨月和闰年因素。一个简单可靠的日期工具，能节省大量重复确认时间。", "People often realize only when they need it that manual date counting is easy to get wrong, especially with inclusive days, month boundaries, and leap years. A reliable date tool saves that repeated checking.") ] },
          { title: tPair("怎么看这个结果", "How to read the result"), list: [tPair("如果你要看纯粹相差多少天，用“相差天数”。", "Use “Days Between” for the pure calendar difference."), tPair("如果你要看活动一共持续几天，用“含首尾天数”。", "Use “Inclusive Days” for event or leave duration."), tPair("如果你在做长期排期，可以参考周数和月数。", "Use the week and month approximations for longer planning.") ] },
        ],
        faq: [
          [tPair("为什么会同时显示两种天数？", "Why show two day counts?"), tPair("因为“相差多少天”和“总共持续多少天”是两个不同问题。很多现实场景都需要第二个结果。", "Because “difference in days” and “how many days in total” are different questions. Many real-world cases need the second answer.")],
        ],
      },
    };
  },
};

calculatorConfigs["due-date"] = {
  name: { zh: "预产期计算器", en: "Due Date Calculator" },
  showRegionContext: false,
  category: { zh: "孕期 / 健康", en: "Pregnancy / Health" },
  subtitle: { zh: "根据末次月经和月经周期，估算预产期、当前孕周与关键孕期阶段。", en: "Estimate due date, current gestational age, and key milestones from the last menstrual period." },
  quick: { zh: ["适合孕早期初步规划", "自动显示当前孕周", "可做产检与请假节奏参考"], en: ["Useful for early pregnancy planning", "Shows current gestational age", "Helps frame appointment and leave timing"] },
  features: [
    { id: "lmp-date", type: "date", label: { zh: "末次月经开始日", en: "Last Menstrual Period Start" }, default: () => isoDate(addDays(todayIso(), -56)) },
    { id: "cycle-length", type: "number", label: { zh: "月经周期（天）", en: "Cycle Length (Days)" }, default: () => 28 },
  ],
  compute(values) {
    const lmpDate = values["lmp-date"] || todayIso();
    const dueDate = addDays(lmpDate, 280 + (values["cycle-length"] - 28));
    const conception = addDays(lmpDate, Math.max(values["cycle-length"] - 14, 0));
    const daysPregnant = Math.max(daysBetween(lmpDate, todayIso()), 0);
    const weeksPregnant = Math.floor(daysPregnant / 7);
    const extraDays = daysPregnant % 7;
    const trimester = daysPregnant < 13 * 7 ? tPair("第一孕期", "First trimester") : daysPregnant < 27 * 7 ? tPair("第二孕期", "Second trimester") : tPair("第三孕期", "Third trimester");
    const daysToDue = Math.max(daysBetween(todayIso(), isoDate(dueDate)), 0);
    const weekSeries = Array.from({ length: 40 }, (_, index) => Math.min((index + 1) * 7, 280));
    return {
      kpis: [
        [tPair("预产期", "Estimated Due Date"), formatDate(dueDate)],
        [tPair("当前孕周", "Current Gestational Age"), lang() === "zh" ? `${weeksPregnant}周${extraDays}天` : `${weeksPregnant}w ${extraDays}d`],
        [tPair("预计受孕日", "Estimated Conception"), formatDate(conception)],
        [tPair("距预产期", "Days Until Due Date"), pluralize(daysToDue, "天", "day", "days")],
      ],
      note: tPair("预产期是规划工具，不是精确到某一天的承诺。它更适合帮助你安排产检、工作和家庭准备节奏。", "A due date is a planning marker, not a guaranteed delivery date. Its value is in helping you organize care, work, and family preparation."),
      charts: [
        { title: tPair("孕期 40 周进度", "40-week pregnancy progress"), desc: tPair("把当前孕周放到完整孕期里看，更容易理解接下来的节奏。", "See your current week within the full pregnancy timeline."), legends: [tPair("标准孕期进度", "Standard timeline"), tPair("当前进度", "Current progress")], valueType: "number", labels: Array.from({ length: 40 }, (_, index) => lang() === "zh" ? `${index + 1}周` : `W${index + 1}`), series: [weekSeries, weekSeries.map((value) => Math.min(value, daysPregnant))] },
      ],
      insights: [
        [tPair("适合什么场景", "Best use case"), tPair("适合孕早期做时间规划，尤其是安排产检、家庭分工、请假和待产准备。", "Helpful in early pregnancy when planning appointments, household logistics, leave, and preparation.")],
        [tPair("需要注意什么", "What to keep in mind"), tPair("预产期是基于通用规则估算，若周期不规律或有临床修正，应以医生意见和产检结果为准。", "This estimate follows standard rules. If cycles are irregular or a clinician revises the timeline, follow medical guidance instead.")],
      ],
      table: {
        title: tPair("关键日期速览", "Key pregnancy dates"),
        desc: tPair("把最常用的几个时间点放在一张表里，方便截图保存。", "The most useful milestones in one table for quick reference."),
        headers: [tPair("节点", "Milestone"), tPair("日期", "Date"), tPair("说明", "Meaning")],
        rows: [
          [tPair("末次月经开始日", "LMP start"), formatDate(new Date(`${lmpDate}T00:00:00`)), tPair("孕周计算起点", "Starting point for gestational age")],
          [tPair("预计受孕日", "Estimated conception"), formatDate(conception), tPair("按周期长度估算", "Estimated from the cycle length")],
          [tPair("预产期", "Estimated due date"), formatDate(dueDate), tPair("按 280 天法则推算", "Estimated using the 280-day rule")],
          [tPair("当前阶段", "Current stage"), trimester, tPair("帮助判断当前孕期节奏", "Useful for understanding the current stage")],
        ],
      },
      article: {
        blocks: [
          { title: tPair("为什么预产期工具对用户很有帮助", "Why due-date tools are useful"), paragraphs: [tPair("怀孕相关决策往往从“现在大概到哪一步了”开始。把预产期、孕周和关键日期直观展示出来，可以明显降低信息焦虑。", "Pregnancy planning often starts with a simple question: where am I on the timeline? A clear due-date page reduces uncertainty by making the schedule visible.") ] },
          { title: tPair("结果怎么用更实际", "How to use the result practically"), list: [tPair("先用它安排产检和重要检查节点。", "Use it first to frame checkups and milestone appointments."), tPair("再结合工作安排，预估请假和交接时间。", "Then estimate leave planning and work handoff timing."), tPair("如有医生修正孕周，应及时更新规划。", "If your clinician revises the gestational age, update the plan accordingly.") ] },
        ],
        faq: [
          [tPair("周期不是 28 天还能用吗？", "Can I use it if my cycle is not 28 days?"), tPair("可以。页面会根据你填写的周期长度做基础修正，但仍属于估算结果。", "Yes. The calculator adjusts for the cycle length you enter, but the output remains an estimate.")],
        ],
      },
    };
  },
};

calculatorConfigs.ovulation = {
  name: { zh: "排卵期计算器", en: "Ovulation Calculator" },
  showRegionContext: false,
  category: { zh: "备孕 / 周期", en: "Fertility / Cycle" },
  subtitle: { zh: "根据末次月经和周期长度，估算排卵日、易孕窗口和下次月经时间。", en: "Estimate ovulation, the fertile window, and the next period from cycle timing." },
  quick: { zh: ["适合备孕节奏规划", "快速看懂易孕窗口", "结果适合配合月历使用"], en: ["Useful for fertility planning", "Highlights the fertile window", "Pairs well with calendar planning"] },
  features: [
    { id: "lmp-date", type: "date", label: { zh: "末次月经开始日", en: "Last Menstrual Period Start" }, default: () => isoDate(addDays(todayIso(), -10)) },
    { id: "cycle-length", type: "number", label: { zh: "平均周期（天）", en: "Average Cycle Length (Days)" }, default: () => 28 },
    { id: "period-length", type: "number", label: { zh: "经期天数", en: "Period Length (Days)" }, default: () => 5 },
  ],
  compute(values) {
    const lmpDate = values["lmp-date"] || todayIso();
    const ovulationDate = addDays(lmpDate, Math.max(values["cycle-length"] - 14, 0));
    const fertileStart = addDays(isoDate(ovulationDate), -5);
    const fertileEnd = addDays(isoDate(ovulationDate), 1);
    const nextPeriod = addDays(lmpDate, values["cycle-length"]);
    const safeDays = Math.max(values["cycle-length"] - 7 - values["period-length"], 0);
    const cycleSeries = Array.from({ length: values["cycle-length"] }, (_, index) => index + 1);
    return {
      kpis: [
        [tPair("预计排卵日", "Estimated Ovulation"), formatDate(ovulationDate)],
        [tPair("易孕窗口", "Fertile Window"), `${formatDate(fertileStart)} - ${formatDate(fertileEnd)}`],
        [tPair("下次月经", "Next Period"), formatDate(nextPeriod)],
        [tPair("周期长度", "Cycle Length"), pluralize(values["cycle-length"], "天", "day", "days")],
      ],
      note: tPair("排卵期估算适合做日历规划和节奏提醒，但个体差异较大，不能替代医疗判断。", "Ovulation estimates are useful for calendar planning and reminders, but personal variation is significant and medical guidance still matters."),
      charts: [
        { title: tPair("本周期关键阶段", "Key phases of this cycle"), desc: tPair("把经期、易孕窗口和排卵点放在同一条时间线上。", "Shows period days, fertile days, and ovulation on one timeline."), legends: [tPair("经期", "Period"), tPair("易孕窗口", "Fertile window"), tPair("排卵点", "Ovulation point")], valueType: "number", labels: cycleSeries.map((value) => lang() === "zh" ? `第${value}天` : `Day ${value}`), series: [cycleSeries.map((value) => value <= values["period-length"] ? 1 : 0), cycleSeries.map((value) => value >= (values["cycle-length"] - 19) && value <= (values["cycle-length"] - 13) ? 1 : 0), cycleSeries.map((value) => value === values["cycle-length"] - 14 ? 1 : 0)] },
      ],
      insights: [
        [tPair("适合什么用户", "Best for"), tPair("适合备孕、记录周期、安排体检或了解身体节奏的用户。", "Useful for fertility planning, cycle tracking, scheduling, and understanding body rhythms.")],
        [tPair("最需要提醒的点", "Most important reminder"), tPair("如果周期经常波动，建议结合基础体温、排卵试纸或医生建议交叉判断。", "If cycles vary a lot, combine this with basal temperature, ovulation tests, or clinical advice.")],
      ],
      table: {
        title: tPair("周期关键日期表", "Cycle milestone table"),
        desc: tPair("快速整理一个周期里最重要的几天。", "A compact summary of the most important cycle dates."),
        headers: [tPair("节点", "Milestone"), tPair("日期", "Date"), tPair("说明", "Meaning")],
        rows: [
          [tPair("月经开始", "Period start"), formatDate(new Date(`${lmpDate}T00:00:00`)), tPair("本周期第 1 天", "Cycle day 1")],
          [tPair("预计排卵日", "Estimated ovulation"), formatDate(ovulationDate), tPair("通常在下次月经前约 14 天", "Often about 14 days before the next period")],
          [tPair("易孕窗口", "Fertile window"), `${formatDate(fertileStart)} - ${formatDate(fertileEnd)}`, tPair("适合结合日历提醒", "Useful for calendar reminders")],
          [tPair("下次月经", "Next period"), formatDate(nextPeriod), tPair("按平均周期估算", "Estimated from the average cycle length")],
        ],
      },
      article: {
        blocks: [
          { title: tPair("为什么排卵期工具常被反复使用", "Why ovulation tools drive repeat use"), paragraphs: [tPair("备孕和周期管理都不是一次性任务，很多用户会每个月回来更新一次数据，重新看窗口期和节奏。", "Fertility planning and cycle management are not one-off tasks. Many users return every month to refresh the timing and review the window.") ] },
          { title: tPair("如何更稳妥地使用结果", "How to use the result more carefully"), list: [tPair("把它当作日历参考，而不是绝对答案。", "Treat it as a calendar guide, not an absolute answer."), tPair("周期不规律时，注意手动修正平均周期。", "If cycles are irregular, keep adjusting the average length."), tPair("如用于医疗或生育判断，请结合专业建议。", "For medical or fertility decisions, combine it with professional advice.") ] },
        ],
        faq: [
          [tPair("排卵日一定会准吗？", "Is the ovulation date exact?"), tPair("不一定。它是根据平均周期估算的，真实排卵日可能提前或延后。", "Not exactly. It is estimated from the average cycle, and actual ovulation can happen earlier or later.")],
        ],
      },
    };
  },
};

calculatorConfigs["maternity-leave"] = {
  name: { zh: "产假计算器", en: "Maternity Leave Calculator" },
  showRegionContext: false,
  category: { zh: "产假 / 时间规划", en: "Maternity Leave / Planning" },
  subtitle: { zh: "根据预产期或生产日期、产前休假和总产假天数，快速算出休假开始日、结束日和总时长。", en: "Plan maternity leave start and end dates from the due date or delivery date and leave-day assumptions." },
  quick: { zh: ["适合工作交接和家庭安排", "自动给出休假区间", "按地区给出默认假期参数"], en: ["Useful for work handoff and family planning", "Outputs the leave window instantly", "Uses region-aware default leave assumptions"] },
  features: [
    { id: "delivery-date", type: "date", label: { zh: "预产期 / 生产日期", en: "Due Date / Delivery Date" }, default: () => isoDate(addDays(todayIso(), 100)) },
    { id: "prenatal-days", type: "number", label: { zh: "产前休假天数", en: "Prenatal Leave Days" }, default: () => regionMaternityDefaults().prenatalDays },
    { id: "total-leave-days", type: "number", label: { zh: "总产假天数", en: "Total Maternity Leave Days" }, default: () => regionMaternityDefaults().totalDays },
  ],
  compute(values) {
    const deliveryDate = values["delivery-date"] || todayIso();
    const leaveStart = addDays(deliveryDate, -values["prenatal-days"]);
    const leaveEnd = addDays(deliveryDate, values["total-leave-days"] - values["prenatal-days"] - 1);
    const postnatalDays = Math.max(values["total-leave-days"] - values["prenatal-days"], 0);
    const daysUntilStart = daysBetween(todayIso(), isoDate(leaveStart));
    const totalWeeks = values["total-leave-days"] / 7;
    return {
      kpis: [
        [tPair("休假开始日", "Leave Start Date"), formatDate(leaveStart)],
        [tPair("休假结束日", "Leave End Date"), formatDate(leaveEnd)],
        [tPair("产后假期", "Postnatal Leave"), pluralize(postnatalDays, "天", "day", "days")],
        [tPair("总产假时长", "Total Leave Duration"), pluralize(values["total-leave-days"], "天", "day", "days")],
      ],
      note: tPair("产假计算最有价值的地方，不是记法条，而是把工作交接、产检、生产和家庭照护排进同一条时间线。", "The practical value of maternity-leave planning is not memorizing policy rules, but fitting work handoff, delivery, and family care onto one timeline."),
      charts: [
        { title: tPair("产假时间线", "Maternity leave timeline"), desc: tPair("把产前假、分娩节点和产后假放在同一张图里。", "Show prenatal leave, the delivery point, and postnatal leave on one timeline."), legends: [tPair("产前假", "Prenatal leave"), tPair("总假期", "Total leave"), tPair("产后假", "Postnatal leave")], valueType: "number", labels: [tPair("产前", "Before birth"), tPair("分娩日", "Delivery"), tPair("产后", "After birth"), tPair("休假结束", "Leave end")], series: [[values["prenatal-days"], values["prenatal-days"], values["prenatal-days"], values["prenatal-days"]], [values["total-leave-days"], values["total-leave-days"], values["total-leave-days"], values["total-leave-days"]], [postnatalDays, postnatalDays, postnatalDays, postnatalDays]] },
      ],
      insights: [
        [tPair("适合什么场景", "Best use cases"), tPair("适合安排工作交接、待产准备、陪护协调、育儿支持和返岗时间沟通。", "Useful for work handoff planning, family support, caregiving coordination, and return-to-work discussions.")],
        [tPair("最值得关注的点", "Most important point"), tPair("总产假天数之外，更关键的是提前多久开始休假，以及产后还能留出多少恢复和照护时间。", "Beyond the total days, the key questions are when leave starts and how much postnatal recovery time remains.")],
      ],
      table: {
        title: tPair("产假安排结果表", "Maternity leave schedule"),
        desc: tPair("把最重要的时间节点一次列清楚。", "See the most important planning dates in one table."),
        headers: [tPair("节点", "Milestone"), tPair("日期 / 天数", "Date / Days"), tPair("说明", "Meaning")],
        rows: [
          [tPair("休假开始", "Leave start"), formatDate(leaveStart), tPair("建议开始交接和降低工作负荷", "A good point to begin handoff and reduce workload")],
          [tPair("分娩日期", "Delivery date"), formatDate(new Date(`${deliveryDate}T00:00:00`)), tPair("按计划日期估算", "Based on the planned delivery date")],
          [tPair("产后假期", "Postnatal leave"), pluralize(postnatalDays, "天", "day", "days"), tPair("用于恢复和照护", "Used for recovery and care")],
          [tPair("距休假开始", "Days until leave starts"), pluralize(Math.max(daysUntilStart, 0), "天", "day", "days"), tPair("方便倒排交接时间", "Useful for backward planning")],
        ],
      },
      article: {
        blocks: [
          { title: tPair("为什么产假工具需要和日期一起看", "Why maternity leave should be viewed as a timeline"), paragraphs: [tPair("很多人在准备产假时只记一个总天数，但真正影响安排的，是开始休假、生产时间点、产后恢复期和返岗时间之间的组合关系。", "People often remember only the total leave entitlement, but what really shapes the plan is the combination of start date, delivery timing, recovery period, and return-to-work date.") ] },
          { title: tPair("怎么把结果用于实际沟通", "How to use the result in practical planning"), list: [tPair("先确认单位或当地政策的正式口径。", "Confirm the official policy with your employer or local authority first."), tPair("再用这个结果安排交接、产检和家庭支持。", "Then use the result to plan handoff, appointments, and family support."), tPair("如果实际生产日期变化，及时重新计算。", "If the actual delivery date changes, recalculate the schedule promptly.") ] },
        ],
        faq: [
          [tPair("这个结果能直接当法律依据吗？", "Can I rely on this result as a legal entitlement?"), tPair("不能。它是时间规划工具，正式假期口径仍要以当地政策、单位制度和实际情况为准。", "No. It is a planning tool only. Formal entitlement still depends on local rules, employer policy, and actual circumstances.")],
        ],
      },
    };
  },
};

function futureValueMonthly(initial, monthlyContribution, annualRate, months) {
  const monthlyRate = annualRate / 100 / 12;
  const grownInitial = initial * (1 + monthlyRate) ** months;
  const grownContribution = monthlyRate === 0
    ? monthlyContribution * months
    : monthlyContribution * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);
  return grownInitial + grownContribution;
}

function createMonthLabels(length) {
  const monthPrefixMap = {
    zh: "",
    ja: "",
    ko: "",
    es: "Mes ",
    fr: "Mois ",
    de: "Monat ",
    pt: "Mês ",
    ru: "Месяц ",
    ar: "شهر ",
    hi: "माह ",
  };
  return Array.from({ length }, (_, index) => {
    const value = index + 1;
    const current = lang();
    if (["zh", "ja"].includes(current)) return `${value}月`;
    if (current === "ko") return `${value}개월`;
    return `${monthPrefixMap[current] || "M"}${value}`;
  });
}

function createQuarterLabels(length) {
  return Array.from({ length }, (_, index) => lang() === "zh" ? `Q${index + 1}` : `Q${index + 1}`);
}

function createSimpleInsights(primaryZh, primaryEn, secondaryZh, secondaryEn) {
  return [
    [tPair("最值得看的点", "Best thing to watch"), tPair(primaryZh, primaryEn)],
    [tPair("适合反复试算的原因", "Why people revisit it"), tPair(secondaryZh, secondaryEn)],
  ];
}

function createSimpleArticle(topicZh, topicEn, paragraphZh, paragraphEn, listZh, listEn, faqQZh, faqQEn, faqAZh, faqAEn) {
  return {
    blocks: [
      { title: tPair(topicZh, topicEn), paragraphs: [tPair(paragraphZh, paragraphEn)] },
      { title: tPair("怎么用这个结果", "How to use this result"), list: lang() === "zh" ? listZh : listEn },
    ],
    faq: [[tPair(faqQZh, faqQEn), tPair(faqAZh, faqAEn)]],
  };
}

function solveIrr(cashflows) {
  let rate = 0.12;
  for (let i = 0; i < 50; i += 1) {
    let npv = 0;
    let derivative = 0;
    cashflows.forEach((cashflow, index) => {
      npv += cashflow / (1 + rate) ** index;
      if (index > 0) derivative -= (index * cashflow) / (1 + rate) ** (index + 1);
    });
    if (Math.abs(derivative) < 1e-9) break;
    const next = rate - npv / derivative;
    if (!Number.isFinite(next)) break;
    if (Math.abs(next - rate) < 1e-8) {
      rate = next;
      break;
    }
    rate = next;
  }
  return rate * 100;
}

function solveXirr(cashflows, dates) {
  const base = new Date(`${dates[0]}T00:00:00`).getTime();
  const dayDiffs = dates.map((date) => (new Date(`${date}T00:00:00`).getTime() - base) / 86400000);
  let rate = 0.12;
  for (let i = 0; i < 60; i += 1) {
    let npv = 0;
    let derivative = 0;
    cashflows.forEach((cashflow, index) => {
      const years = dayDiffs[index] / 365;
      npv += cashflow / (1 + rate) ** years;
      derivative -= (years * cashflow) / (1 + rate) ** (years + 1);
    });
    if (Math.abs(derivative) < 1e-9) break;
    const next = rate - npv / derivative;
    if (!Number.isFinite(next)) break;
    if (Math.abs(next - rate) < 1e-8) {
      rate = next;
      break;
    }
    rate = next;
  }
  return rate * 100;
}

calculatorConfigs["mortgage-amortized"] = {
  name: { zh: "房贷等额本息计算器", en: "Level-Payment Mortgage Calculator" },
  category: { zh: "贷款 / 房产", en: "Loans / Housing" },
  subtitle: { zh: "按等额本息方式测算月供、总利息和整笔房贷的长期成本。", en: "Estimate monthly payment, total interest, and long-run cost under a level-payment mortgage." },
  quick: { zh: ["适合首套房和改善型住房", "重点看固定月供与总利息", "适合和租房成本一起比较"], en: ["Useful for first-home and upgrade scenarios", "Focuses on stable monthly payment and total interest", "Easy to compare against renting"] },
  features: [
    { id: "principal", type: "number", label: { zh: "贷款本金", en: "Loan Amount" }, default: () => 1200000 },
    { id: "annual-rate", type: "number", step: "0.01", label: { zh: "房贷利率 (%)", en: "Mortgage Rate (%)" }, default: () => 3.55 },
    { id: "years", type: "number", label: { zh: "贷款年限", en: "Term (Years)" }, default: () => 30 },
  ],
  compute(values) {
    const payment = monthlyPayment(values.principal, values["annual-rate"], values.years);
    const total = payment * values.years * 12;
    const interest = total - values.principal;
    return {
      kpis: [[tPair("月供", "Monthly Payment"), money(payment)], [tPair("总利息", "Total Interest"), money(interest)], [tPair("总还款", "Total Repayment"), money(total)], [tPair("利息占比", "Interest Share"), pct((interest / Math.max(total, 1)) * 100)]],
      note: tPair("等额本息的优势是月供稳定，代价是前期利息占比更高。", "Level-payment mortgages feel predictable, but more of the early payment goes to interest."),
      charts: [
        { title: tPair("累计还款与累计利息", "Cumulative repayment and interest"), desc: tPair("看清时间越长，利息占用越明显。", "Longer terms make the interest burden much more visible."), legends: [tPair("累计还款", "Cumulative repayment"), tPair("累计利息", "Cumulative interest")], series: [createSeries(total, values.years), createSeries(interest, values.years)] },
      ],
      insights: createSimpleInsights("适合想要稳定月供、方便做家庭预算的人。", "Useful for households that want a stable monthly payment and easier budgeting.", "房贷是典型的高价决策，用户会频繁调整本金、年限和利率反复比较。", "Mortgage decisions are expensive, so users often come back to compare loan amount, rate, and term repeatedly."),
      table: { title: tPair("不同期限对比", "Term comparison"), desc: tPair("同一套房贷参数下，不同年限带来的变化。", "See how changing the term affects the same mortgage."), headers: [tPair("年限", "Term"), tPair("月供", "Payment"), tPair("总利息", "Interest")], rows: [20, 25, 30].map((year) => { const p = monthlyPayment(values.principal, values["annual-rate"], year); return [`${year}${tPair("年", " years")}`, money(p), money(p * year * 12 - values.principal)]; }) },
      article: createSimpleArticle("为什么等额本息最常被使用", "Why level-payment mortgages are so common", "大多数家庭更容易接受固定月供，因为它更适合和工资、房租替代成本、家庭支出一起规划。", "Most households prefer a fixed mortgage payment because it works well with salary cycles, rent comparisons, and overall budgeting.", ["先看月供能否长期承受。", "再看总利息是否在可接受范围内。", "最后和首付、应急金一起综合判断。"], ["Check whether the payment is affordable long term.", "Then review the total interest burden.", "Finally compare it with your down payment and emergency fund."], "等额本息是不是一定最优？", "Is a level-payment mortgage always the best option?", "不一定。它更稳定，但总利息通常高于等额本金。", "Not always. It is more stable, but usually costs more total interest than a declining-payment structure."),
    };
  },
};

calculatorConfigs["mortgage-principal"] = {
  name: { zh: "房贷等额本金计算器", en: "Equal-Principal Mortgage Calculator" },
  category: { zh: "贷款 / 房产", en: "Loans / Housing" },
  subtitle: { zh: "看清首月压力、月供递减速度和总利息变化，判断你是否适合等额本金。", en: "See the first-payment burden, monthly decline, and total interest under an equal-principal mortgage." },
  quick: { zh: ["前期压力更大", "后期月供逐月下降", "总利息通常低于等额本息"], en: ["Higher burden up front", "Payments decline over time", "Usually lower total interest than level-payment loans"] },
  features: [
    { id: "principal", type: "number", label: { zh: "贷款本金", en: "Loan Amount" }, default: () => 1200000 },
    { id: "annual-rate", type: "number", step: "0.01", label: { zh: "房贷利率 (%)", en: "Mortgage Rate (%)" }, default: () => 3.55 },
    { id: "years", type: "number", label: { zh: "贷款年限", en: "Term (Years)" }, default: () => 30 },
  ],
  compute(values) {
    const months = values.years * 12;
    const monthlyRate = values["annual-rate"] / 100 / 12;
    const principalPart = values.principal / months;
    const firstPayment = principalPart + values.principal * monthlyRate;
    const lastPayment = principalPart + principalPart * monthlyRate;
    const totalInterest = ((months + 1) * values.principal * monthlyRate) / 2;
    const total = values.principal + totalInterest;
    return {
      kpis: [[tPair("首月月供", "First Month Payment"), money(firstPayment)], [tPair("末月月供", "Last Month Payment"), money(lastPayment)], [tPair("总利息", "Total Interest"), money(totalInterest)], [tPair("每月递减", "Monthly Drop"), money(principalPart * monthlyRate)]],
      note: tPair("等额本金更像先苦后松，前期压力更高，但长期利息更省。", "An equal-principal mortgage front-loads the pain, but usually saves more interest over time."),
      charts: [
        { title: tPair("月供递减走势", "Declining payment path"), desc: tPair("最直观地看出前高后低的现金流特征。", "Shows the front-loaded nature of the payment schedule."), legends: [tPair("月供", "Monthly payment"), tPair("利息部分", "Interest portion")], series: [Array.from({ length: Math.max(values.years, 8) }, (_, index) => firstPayment - ((firstPayment - lastPayment) / Math.max(values.years - 1, 1)) * index), Array.from({ length: Math.max(values.years, 8) }, (_, index) => values.principal * monthlyRate * (1 - index / Math.max(values.years - 1, 1))) ] },
      ],
      insights: createSimpleInsights("更适合前期收入较高、想更快降低房贷压力的人。", "Best for borrowers who can handle a heavier early burden and want the payment to ease later.", "用户往往会拿它和等额本息对照，判断自己是更看重总成本还是月供平稳。", "People usually compare it against a level-payment mortgage to decide between lower total cost and smoother payments."),
      table: { title: tPair("核心结果对比", "Core outcome summary"), desc: tPair("等额本金最值得看的三个数字。", "The three numbers that matter most for an equal-principal mortgage."), headers: [tPair("指标", "Metric"), tPair("结果", "Result"), tPair("含义", "Meaning")], rows: [[tPair("首月月供", "First payment"), money(firstPayment), tPair("判断前期现金流压力", "Measures early cash pressure")], [tPair("末月月供", "Last payment"), money(lastPayment), tPair("看后期压力会降到什么水平", "Shows how low the payment may fall later")], [tPair("总利息", "Total interest"), money(totalInterest), tPair("帮助和等额本息直接比较", "Useful when comparing with a level-payment mortgage")]] },
      article: createSimpleArticle("什么时候更适合等额本金", "When equal-principal can fit better", "如果你前几年收入更高、奖金更多，或者希望尽快减轻未来负担，等额本金往往更有吸引力。", "If your income is stronger in the early years or you want to reduce future pressure more quickly, an equal-principal structure can look more attractive.", ["重点看首月月供自己能不能扛住。", "同时和等额本息对比总利息。", "把未来生育、换工作等变化一起考虑进去。"], ["Focus first on whether the first payment is manageable.", "Compare total interest with a level-payment option.", "Factor in upcoming life changes like children or job shifts."], "等额本金一定更省钱吗？", "Does equal-principal always save money?", "在同样本金和利率下，通常总利息更低，但不代表更适合所有人。", "It usually costs less total interest under the same loan and rate, but that does not automatically make it the best fit for everyone."),
    };
  },
};

calculatorConfigs["rent-vs-buy"] = {
  name: { zh: "房租 vs 买房成本计算器", en: "Rent vs. Buy Calculator" },
  category: { zh: "贷款 / 房产", en: "Loans / Housing" },
  subtitle: { zh: "把首付、月供、租金和房价增长放到同一页，看清短中期到底租更灵活还是买更合适。", en: "Compare rent, down payment, mortgage cost, and home appreciation on one page." },
  quick: { zh: ["适合买房前做大方向判断", "同时看现金流与资产变化", "适合和伴侣一起讨论方案"], en: ["Useful before making a housing decision", "Balances cash flow and asset growth", "Good for side-by-side household discussion"] },
  features: [
    { id: "home-price", type: "number", label: { zh: "房屋总价", en: "Home Price" }, default: () => 2500000 },
    { id: "down-ratio", type: "number", step: "0.01", label: { zh: "首付比例 (%)", en: "Down Payment Ratio (%)" }, default: () => 30 },
    { id: "mortgage-rate", type: "number", step: "0.01", label: { zh: "房贷利率 (%)", en: "Mortgage Rate (%)" }, default: () => 3.55 },
    { id: "years", type: "number", label: { zh: "比较年限", en: "Comparison Years" }, default: () => 8 },
    { id: "monthly-rent", type: "number", label: { zh: "当前月租金", en: "Monthly Rent" }, default: () => 6500 },
    { id: "home-growth", type: "number", step: "0.01", label: { zh: "房价年增幅 (%)", en: "Home Appreciation (%)" }, default: () => 2 },
  ],
  compute(values) {
    const downPayment = values["home-price"] * values["down-ratio"] / 100;
    const loanAmount = values["home-price"] - downPayment;
    const mortgagePayment = monthlyPayment(loanAmount, values["mortgage-rate"], 30);
    const totalRent = values["monthly-rent"] * values.years * 12;
    const totalMortgagePaid = mortgagePayment * values.years * 12;
    const homeValue = values["home-price"] * (1 + values["home-growth"] / 100) ** values.years;
    const buyNetPosition = homeValue - loanAmount + (downPayment - totalMortgagePaid * 0.2);
    return {
      kpis: [[tPair("累计租房支出", "Total Rent Paid"), money(totalRent)], [tPair("累计房贷支出", "Mortgage Paid"), money(totalMortgagePaid)], [tPair("预计房屋价值", "Estimated Home Value"), money(homeValue)], [tPair("首付金额", "Down Payment"), money(downPayment)]],
      note: tPair("租还是买，关键不是一句“买房更值”，而是不同阶段现金流、灵活性和资产沉淀谁更重要。", "The real rent-versus-buy decision is about cash flow, flexibility, and asset buildup priorities at this stage of life."),
      charts: [
        { title: tPair("租房支出 vs 买房支出", "Rent spend vs. buying spend"), desc: tPair("比较同一段时间内两种路径的现金流占用。", "Compare the cash outflow of both choices over the same period."), legends: [tPair("租房", "Renting"), tPair("买房", "Buying")], series: [createSeries(totalRent, values.years), createSeries(totalMortgagePaid + downPayment, values.years)] },
        { title: tPair("资产沉淀变化", "Asset position path"), desc: tPair("看买房后可能形成的资产积累。", "See the potential asset accumulation created by home ownership."), legends: [tPair("房屋价值", "Home value"), tPair("净沉淀估算", "Estimated net position")], series: [createSeries(homeValue, values.years), createSeries(Math.max(buyNetPosition, 0), values.years)] },
      ],
      insights: createSimpleInsights("它能把“租更轻松”与“买更像长期资产”同时量化出来。", "It quantifies both the flexibility of renting and the asset-building angle of buying.", "买房前用户往往会反复改租金、首付和房价涨幅，是很典型的高留存工具。", "Before buying, users repeatedly change rent, down payment, and appreciation assumptions, which makes this a naturally sticky tool."),
      table: { title: tPair("两种路径速览", "Quick path comparison"), desc: tPair("把讨论里最常出现的四个数字直接列出来。", "Put the four most-discussed numbers into one table."), headers: [tPair("项目", "Item"), tPair("租房路径", "Renting"), tPair("买房路径", "Buying")], rows: [[tPair("月度压力", "Monthly pressure"), money(values["monthly-rent"]), money(mortgagePayment)], [tPair("前期现金支出", "Upfront cash"), money(0), money(downPayment)], [tPair("比较期总现金流", "Cash outflow in the period"), money(totalRent), money(totalMortgagePaid + downPayment)], [tPair("期末资产位置", "End-of-period asset position"), tPair("无房产沉淀", "No housing asset"), money(Math.max(buyNetPosition, 0))]] },
      article: createSimpleArticle("为什么租房和买房要一起算", "Why renting and buying should be compared side by side", "很多人单看月供会觉得买得起，单看租金会觉得租更省，但真正的判断需要把首付、资产沉淀和灵活性一起放进同一个模型。", "Looking only at the mortgage can make buying seem easy, and looking only at rent can make renting feel cheaper. The better decision comes from comparing down payment, asset buildup, and flexibility in one model.", ["先看前期现金支出自己能否承受。", "再看未来几年是否需要更高灵活性。", "最后比较资产沉淀是否符合你的长期计划。"], ["Check whether the upfront cash requirement is realistic.", "Then ask how much flexibility you may need over the next few years.", "Finally compare whether the asset build-up fits your longer-term plan."], "买房一定比租房划算吗？", "Is buying always better than renting?", "不一定。短期流动性和生活变动较大的阶段，租房往往更灵活。", "No. In periods with high uncertainty or expected life changes, renting can be the more flexible choice."),
    };
  },
};

calculatorConfigs["mortgage-rate-change"] = {
  name: { zh: "房贷利率变化计算器", en: "Mortgage Rate Change Calculator" },
  category: { zh: "贷款 / 房产", en: "Loans / Housing" },
  subtitle: { zh: "比较利率上调或下调后，月供和总利息会发生多大变化。", en: "Compare how a mortgage-rate change affects the monthly payment and total interest." },
  quick: { zh: ["适合存量房贷重定价", "看清降息带来的现金流变化", "支持直接比较旧利率和新利率"], en: ["Useful for repricing scenarios", "Shows the effect of rate cuts or hikes", "Directly compares old and new mortgage rates"] },
  features: [
    { id: "principal", type: "number", label: { zh: "剩余本金", en: "Remaining Principal" }, default: () => 900000 },
    { id: "old-rate", type: "number", step: "0.01", label: { zh: "原利率 (%)", en: "Old Rate (%)" }, default: () => 4.3 },
    { id: "new-rate", type: "number", step: "0.01", label: { zh: "新利率 (%)", en: "New Rate (%)" }, default: () => 3.75 },
    { id: "years", type: "number", label: { zh: "剩余年限", en: "Remaining Years" }, default: () => 22 },
  ],
  compute(values) {
    const oldPayment = monthlyPayment(values.principal, values["old-rate"], values.years);
    const newPayment = monthlyPayment(values.principal, values["new-rate"], values.years);
    const oldTotal = oldPayment * values.years * 12;
    const newTotal = newPayment * values.years * 12;
    return {
      kpis: [[tPair("原月供", "Old Payment"), money(oldPayment)], [tPair("新月供", "New Payment"), money(newPayment)], [tPair("每月变化", "Monthly Change"), money(newPayment - oldPayment)], [tPair("总利息变化", "Interest Change"), money((newTotal - values.principal) - (oldTotal - values.principal))]],
      note: tPair("降息不只是数字变小，它会直接影响未来几年每个月的现金流余量。", "A lower mortgage rate is not just a smaller number. It changes how much cash flow stays with you every month."),
      charts: [
        { title: tPair("旧利率 vs 新利率", "Old rate vs. new rate"), desc: tPair("把利率调整前后的月供变化直接画出来。", "Shows the monthly-payment difference before and after the rate change."), legends: [tPair("原方案", "Old plan"), tPair("新方案", "New plan")], series: [createSeries(oldPayment, values.years), createSeries(newPayment, values.years)] },
      ],
      insights: createSimpleInsights("适合在房贷重定价、提前部分还款或准备转贷时快速做判断。", "Useful when repricing a mortgage, prepaying part of the balance, or exploring refinancing.", "只要利率环境变化，用户就会回来重算，是很典型的高频复访工具。", "Whenever the rate environment changes, people come back to recalculate, which makes it a naturally recurring tool."),
      table: { title: tPair("利率变化结果表", "Rate-change summary"), desc: tPair("最关键的月供和利息变化放在同一张表里。", "The most important payment and interest changes in one place."), headers: [tPair("指标", "Metric"), tPair("旧利率", "Old Rate"), tPair("新利率", "New Rate")], rows: [[tPair("月供", "Monthly payment"), money(oldPayment), money(newPayment)], [tPair("总还款", "Total repayment"), money(oldTotal), money(newTotal)], [tPair("总利息", "Total interest"), money(oldTotal - values.principal), money(newTotal - values.principal)]] },
      article: createSimpleArticle("为什么利率变化值得单独算一次", "Why rate changes deserve a separate calculator", "哪怕只调整了零点几的利率，在长达十几二十年的房贷里，也可能对应可观的月供差异和总利息变化。", "Even a small rate adjustment can lead to meaningful monthly-payment and total-interest differences over a long mortgage.", ["先看每月能多出或少掉多少现金流。", "再看整个剩余贷款期会省下或多付多少利息。", "如果变化很大，再考虑是否要同步调整理财和还款计划。"], ["Check how much monthly cash flow changes first.", "Then compare the interest difference over the remaining term.", "If the impact is large, consider adjusting the broader repayment or investing plan as well."], "只看月供变化就够了吗？", "Is the payment change alone enough?", "不够。月供决定当下压力，总利息变化决定长期成本。", "No. The monthly payment shapes current pressure, while the total interest difference determines the long-run cost."),
    };
  },
};

calculatorConfigs["down-payment"] = {
  name: { zh: "房屋首付计算器", en: "Home Down Payment Calculator" },
  category: { zh: "贷款 / 房产", en: "Loans / Housing" },
  subtitle: { zh: "根据房价和首付比例，快速看清首付款、贷款本金和预计月供。", en: "Estimate the down payment, mortgage principal, and monthly payment from home price and down-payment ratio." },
  quick: { zh: ["适合买房前做首付规划", "一页看清首付与贷款金额", "适合和储蓄目标一起使用"], en: ["Great for purchase planning", "Shows the down payment and mortgage amount on one page", "Pairs well with a savings-goal calculation"] },
  features: [
    { id: "home-price", type: "number", label: { zh: "房屋总价", en: "Home Price" }, default: () => 2200000 },
    { id: "down-ratio", type: "number", step: "0.01", label: { zh: "首付比例 (%)", en: "Down Payment Ratio (%)" }, default: () => 30 },
    { id: "annual-rate", type: "number", step: "0.01", label: { zh: "房贷利率 (%)", en: "Mortgage Rate (%)" }, default: () => 3.55 },
    { id: "years", type: "number", label: { zh: "贷款年限", en: "Mortgage Term (Years)" }, default: () => 30 },
  ],
  compute(values) {
    const downPayment = values["home-price"] * values["down-ratio"] / 100;
    const loanAmount = values["home-price"] - downPayment;
    const payment = monthlyPayment(loanAmount, values["annual-rate"], values.years);
    return {
      kpis: [[tPair("首付款", "Down Payment"), money(downPayment)], [tPair("贷款本金", "Mortgage Principal"), money(loanAmount)], [tPair("预计月供", "Estimated Payment"), money(payment)], [tPair("首付占比", "Down Ratio"), pct(values["down-ratio"])]],
      note: tPair("首付不是单独一个数字，它会同时影响贷款规模、月供压力和买房后的现金缓冲。", "The down payment is not just one number. It shapes the mortgage size, monthly pressure, and the cash buffer you keep after buying."),
      charts: [
        { title: tPair("首付与贷款金额结构", "Down payment versus mortgage amount"), desc: tPair("一眼看清总房价里有多少来自首付、有多少来自贷款。", "See how the home price splits between your cash down payment and the financed amount."), legends: [tPair("首付", "Down payment"), tPair("贷款", "Mortgage")], series: [[downPayment, downPayment, downPayment, downPayment], [loanAmount, loanAmount, loanAmount, loanAmount]], labels: createQuarterLabels(4) },
      ],
      insights: createSimpleInsights("它最适合和储蓄目标、房贷月供、应急金规划一起看。", "It works best alongside savings goals, mortgage affordability, and emergency-fund planning.", "用户会反复改首付比例和房价，直到找到自己能接受的现金流方案。", "People often change the down-payment ratio and home price repeatedly until the cash-flow plan feels realistic."),
      table: { title: tPair("不同首付比例参考", "Reference by down-payment ratio"), desc: tPair("帮助快速比较首付比例对贷款规模的影响。", "Quickly compare how the ratio changes the mortgage size."), headers: [tPair("首付比例", "Down Ratio"), tPair("首付款", "Down Payment"), tPair("贷款本金", "Mortgage Amount")], rows: [20, 30, 40].map((ratio) => [pct(ratio), money(values["home-price"] * ratio / 100), money(values["home-price"] * (1 - ratio / 100))]) },
      article: createSimpleArticle("为什么首付比例值得单独比较", "Why the down-payment ratio deserves its own comparison", "同一套房子，首付比例不同，后续月供和现金安全垫会完全不同。很多买房焦虑，本质上都和首付没有规划好有关。", "The same home can feel very different depending on the down-payment ratio, because the monthly payment and post-purchase cash buffer both change dramatically.", ["先判断自己能拿出多少首付。", "再看剩余贷款是否会让月供过重。", "最后确保买完房仍保留足够应急金。"], ["Start by checking how much down payment is realistic.", "Then see whether the remaining mortgage keeps the payment manageable.", "Finally make sure you still keep a sufficient emergency reserve after buying."], "首付越高越好吗？", "Is a larger down payment always better?", "不一定。首付太高可能会削弱现金安全垫，关键是找到更平衡的比例。", "Not always. Too much down payment can weaken your cash buffer, so the best answer is usually a balanced ratio."),
    };
  },
};

calculatorConfigs.cagr.name = { zh: "CAGR 年复合增长率计算器", en: "CAGR Calculator" };
calculatorConfigs.cagr.subtitle = { zh: "把不同持有年限和终值结果换成年复合增长率，判断真实增长效率。", en: "Translate different holding periods and end values into a compound annual growth rate." };
calculatorConfigs.cagr.category = { zh: "投资理财", en: "Investing" };

calculatorConfigs.irr = {
  name: { zh: "IRR 内部收益率计算器", en: "IRR Calculator" },
  category: { zh: "投资理财", en: "Investing" },
  subtitle: { zh: "根据项目初始投入和未来现金流，估算内部收益率，适合项目回报比较。", en: "Estimate internal rate of return from an upfront investment and future cash flows." },
  quick: { zh: ["适合项目回报比较", "把现金流统一成一个收益率", "适合投资复盘和方案筛选"], en: ["Useful for project comparison", "Turns cash flows into one rate", "Works for investment review and screening"] },
  features: [
    { id: "initial-outflow", type: "number", label: { zh: "初始投入", en: "Initial Investment" }, default: () => 100000 },
    { id: "year-1", type: "number", label: { zh: "第 1 年现金流", en: "Year 1 Cash Flow" }, default: () => 20000 },
    { id: "year-2", type: "number", label: { zh: "第 2 年现金流", en: "Year 2 Cash Flow" }, default: () => 28000 },
    { id: "year-3", type: "number", label: { zh: "第 3 年现金流", en: "Year 3 Cash Flow" }, default: () => 32000 },
    { id: "year-4", type: "number", label: { zh: "第 4 年现金流", en: "Year 4 Cash Flow" }, default: () => 42000 },
  ],
  compute(values) {
    const cashflows = [-values["initial-outflow"], values["year-1"], values["year-2"], values["year-3"], values["year-4"]];
    const irr = solveIrr(cashflows);
    const totalIn = cashflows.slice(1).reduce((sum, value) => sum + value, 0);
    return {
      kpis: [[tPair("IRR", "IRR"), pct(irr)], [tPair("初始投入", "Initial Investment"), money(values["initial-outflow"])], [tPair("累计回收现金流", "Total Inflows"), money(totalIn)], [tPair("净收益", "Net Gain"), money(totalIn - values["initial-outflow"])]],
      note: tPair("IRR 的意义，在于把一串年份不同的现金流折成一个统一收益率，方便和别的项目放在一起比。", "IRR matters because it compresses uneven annual cash flows into one comparable return figure."),
      charts: [
        { title: tPair("现金流回收路径", "Cash-flow recovery path"), desc: tPair("看清回收速度和回本节奏。", "See how quickly the project recovers the upfront investment."), legends: [tPair("累计回收", "Cumulative inflows"), tPair("初始投入", "Initial outflow")], series: [cashflows.slice(1).reduce((arr, value, index) => [...arr, (arr[index - 1] || 0) + value], []), Array.from({ length: 4 }, () => values["initial-outflow"])] },
      ],
      insights: createSimpleInsights("它特别适合比较多个项目、门店、产品线或一次性投资方案。", "It is especially useful when comparing projects, stores, product lines, or one-off investments.", "只要未来现金流假设变化，用户就会回来重新估算回报率。", "Whenever the future cash-flow assumption changes, users naturally return to recalculate the return rate."),
      table: { title: tPair("年度现金流表", "Annual cash-flow table"), desc: tPair("先确认现金流结构，再看 IRR 更有意义。", "IRR becomes more useful once the cash-flow structure is clear."), headers: [tPair("年份", "Year"), tPair("现金流", "Cash Flow"), tPair("累计回收", "Cumulative Inflows")], rows: cashflows.slice(1).map((value, index) => [`${index + 1}`, money(value), money(cashflows.slice(1, index + 2).reduce((sum, item) => sum + item, 0))]) },
      article: createSimpleArticle("为什么 IRR 经常被拿来比较项目", "Why IRR is often used to compare projects", "很多项目的难点不是总利润，而是回本速度和现金流时间分布。IRR 正是拿来衡量这一点的。", "Many projects are difficult to judge from profit alone because timing and payback speed matter. IRR is designed to capture that pattern.", ["先确认现金流是不是按年估算。", "再看 IRR 是否高于你的目标回报率。", "最后结合风险和流动性做判断。"], ["Make sure the cash flows are estimated on a yearly basis.", "Then compare the IRR against your target return.", "Finally layer in risk and liquidity before deciding."], "IRR 越高越好吗？", "Is a higher IRR always better?", "不一定。还要结合现金流稳定性、风险、规模和回本时间一起看。", "Not always. Cash-flow stability, risk, project scale, and payback timing still matter."),
    };
  },
};

calculatorConfigs.xirr = {
  name: { zh: "XIRR 投资收益率计算器", en: "XIRR Calculator" },
  category: { zh: "投资理财", en: "Investing" },
  subtitle: { zh: "适合现金流日期不规则的投资回报测算，比如分次申购、分红和赎回。", en: "Useful when investment cash flows happen on irregular dates, such as staggered buys, dividends, and exits." },
  quick: { zh: ["适合真实投资流水", "按日期折现更贴近现实", "适合基金和股权项目复盘"], en: ["Fits real-world transaction timing", "Date-based discounting is more realistic", "Useful for funds and private investments"] },
  features: [
    { id: "invest-date", type: "date", label: { zh: "买入日期", en: "Investment Date" }, default: () => isoDate(addDays(todayIso(), -540)) },
    { id: "invest-amount", type: "number", label: { zh: "买入金额", en: "Investment Amount" }, default: () => 100000 },
    { id: "dividend-date", type: "date", label: { zh: "中途回款日期", en: "Interim Cash-In Date" }, default: () => isoDate(addDays(todayIso(), -180)) },
    { id: "dividend-amount", type: "number", label: { zh: "中途回款金额", en: "Interim Cash-In Amount" }, default: () => 8000 },
    { id: "exit-date", type: "date", label: { zh: "退出日期", en: "Exit Date" }, default: () => todayIso() },
    { id: "exit-amount", type: "number", label: { zh: "退出金额", en: "Exit Amount" }, default: () => 135000 },
  ],
  compute(values) {
    const cashflows = [-values["invest-amount"], values["dividend-amount"], values["exit-amount"]];
    const dates = [values["invest-date"], values["dividend-date"], values["exit-date"]];
    const xirr = solveXirr(cashflows, dates);
    const totalGain = values["dividend-amount"] + values["exit-amount"] - values["invest-amount"];
    const totalDays = Math.max(daysBetween(values["invest-date"], values["exit-date"]), 1);
    return {
      kpis: [[tPair("XIRR", "XIRR"), pct(xirr)], [tPair("持有天数", "Holding Days"), pluralize(totalDays, "天", "day", "days")], [tPair("累计回款", "Total Cash In"), money(values["dividend-amount"] + values["exit-amount"])], [tPair("净收益", "Net Gain"), money(totalGain)]],
      note: tPair("当投资不是整整一年、现金流也不是整齐地按年发生时，XIRR 会比普通年化更贴近真实结果。", "When cash flows do not happen neatly on annual boundaries, XIRR gives a truer annualized result than a simple CAGR."),
      charts: [
        { title: tPair("投资时间线", "Investment timeline"), desc: tPair("把买入、回款和退出放在一条真实时间线上。", "Put the buy, interim cash-in, and exit onto a real timeline."), legends: [tPair("投入/回款", "Cash flows"), tPair("累计回款", "Cumulative cash in")], valueType: "currency", labels: [tPair("买入", "Invest"), tPair("中途回款", "Interim"), tPair("退出", "Exit")], series: [[values["invest-amount"], values["dividend-amount"], values["exit-amount"]], [0, values["dividend-amount"], values["dividend-amount"] + values["exit-amount"]]] },
      ],
      insights: createSimpleInsights("比起普通 IRR，它更适合基金申赎、股权退出、分红回款这类真实投资流水。", "It is a better fit than plain IRR for real investment histories with subscriptions, redemptions, dividends, and exits.", "用户经常会根据新的回款时间或退出价格回来重算，更贴合实际复盘场景。", "People often revisit it as payment dates or exit assumptions change, which matches real portfolio reviews."),
      table: { title: tPair("现金流日期表", "Cash-flow schedule"), desc: tPair("先把时间顺序列清楚，再看 XIRR 更容易理解。", "XIRR is easier to interpret once the timing sequence is clear."), headers: [tPair("节点", "Stage"), tPair("日期", "Date"), tPair("金额", "Amount")], rows: [[tPair("买入", "Invest"), formatDate(new Date(`${values["invest-date"]}T00:00:00`)), money(values["invest-amount"])], [tPair("中途回款", "Interim"), formatDate(new Date(`${values["dividend-date"]}T00:00:00`)), money(values["dividend-amount"])], [tPair("退出", "Exit"), formatDate(new Date(`${values["exit-date"]}T00:00:00`)), money(values["exit-amount"])]] },
      article: createSimpleArticle("为什么 XIRR 更贴近真实投资表现", "Why XIRR is closer to real investment performance", "现实中的投资很少刚好整年买入、整年卖出。只要日期不规则，XIRR 就比简单年化更有参考意义。", "Real investments rarely begin and end on neat annual boundaries. As soon as dates become irregular, XIRR is usually the more useful metric.", ["先确认每笔流入和流出的真实日期。", "再确认金额是否包含分红和回款。", "最后再比较 XIRR 是否达到你的目标。"], ["Start by listing the real dates of every cash outflow and inflow.", "Then make sure the amounts include dividends and repayments.", "Finally compare the XIRR against your target return."], "XIRR 和 IRR 的区别是什么？", "What is the difference between IRR and XIRR?", "XIRR 会按真实日期折现，IRR 通常默认现金流间隔规则一致。", "XIRR discounts cash flows using their real dates, while IRR assumes regular spacing."),
    };
  },
};

calculatorConfigs["etf-return"] = {
  name: { zh: "ETF 投资收益计算器", en: "ETF Return Calculator" },
  category: { zh: "投资理财", en: "Investing" },
  subtitle: { zh: "结合初始投入、定投、收益率和费率，估算 ETF 长期投资的净值增长。", en: "Estimate long-term ETF growth from an initial investment, recurring contributions, return assumptions, and fees." },
  quick: { zh: ["适合指数基金和 ETF 长期持有", "把费率影响算进去", "适合目标导向型定投"], en: ["Great for long-term ETF investing", "Includes fee drag in the estimate", "Useful for goal-driven investing"] },
  features: [
    { id: "initial", type: "number", label: { zh: "初始投入", en: "Initial Investment" }, default: () => 30000 },
    { id: "monthly", type: "number", label: { zh: "每月定投", en: "Monthly Contribution" }, default: () => 2000 },
    { id: "annual-return", type: "number", step: "0.01", label: { zh: "预期年化收益率 (%)", en: "Expected Annual Return (%)" }, default: () => 8.5 },
    { id: "expense-ratio", type: "number", step: "0.01", label: { zh: "费率 (%)", en: "Expense Ratio (%)" }, default: () => 0.5 },
    { id: "years", type: "number", label: { zh: "持有年限", en: "Holding Years" }, default: () => 15 },
  ],
  compute(values) {
    const netReturn = values["annual-return"] - values["expense-ratio"];
    const months = values.years * 12;
    const total = futureValueMonthly(values.initial, values.monthly, netReturn, months);
    const contribution = values.initial + values.monthly * months;
    return {
      kpis: [[tPair("预计终值", "Projected Value"), money(total)], [tPair("累计投入", "Total Contribution"), money(contribution)], [tPair("净收益", "Net Gain"), money(total - contribution)], [tPair("净年化假设", "Net Return Assumption"), pct(netReturn)]],
      note: tPair("长期 ETF 收益看起来很平滑，但真正拉开差距的常常是时间和费率这两个变量。", "Long-term ETF outcomes often come down less to drama and more to time and fee drag."),
      charts: [
        { title: tPair("投入与净值增长", "Contributions versus portfolio value"), desc: tPair("看清费率扣除后，净值路径是怎样形成的。", "See how the portfolio grows after fees reduce the net return."), legends: [tPair("累计投入", "Contributions"), tPair("总资产", "Portfolio value")], series: [createSeries(contribution, values.years), createSeries(total, values.years)] },
      ],
      insights: createSimpleInsights("特别适合给长期指数投资用户一个更现实的“净收益”预期。", "It gives long-term index investors a more realistic expectation of net growth.", "用户会反复调费率、收益率和持有时间，是典型的长期规划工具。", "People often revisit it to change fees, returns, and holding periods, which makes it a classic planning tool."),
      table: { title: tPair("不同费率下的终值", "Future value across fee levels"), desc: tPair("费率看起来很小，但时间拉长后差异会明显放大。", "Fees may look small, but the difference compounds over time."), headers: [tPair("费率", "Fee"), tPair("净年化", "Net Return"), tPair("预计终值", "Projected Value")], rows: [0.2, 0.5, 1].map((fee) => [pct(fee), pct(values["annual-return"] - fee), money(futureValueMonthly(values.initial, values.monthly, values["annual-return"] - fee, months))]) },
      article: createSimpleArticle("为什么 ETF 也值得单独算净收益", "Why ETF investors should estimate net growth separately", "很多人看到历史收益率就直接代入，但长期 ETF 投资里，费率、时间和持续投入三者叠加后，终值差异会很明显。", "Many people plug in headline historical returns and stop there, but fees, time, and ongoing contributions can create a very different net outcome over the long run.", ["先看净年化假设，而不是只看毛收益。", "再比较 10 年和 20 年结果的差距。", "如果目标明确，可以反推需要的定投金额。"], ["Focus on the net return assumption, not just the gross return.", "Then compare the 10-year and 20-year outcomes.", "If you have a clear target, you can backsolve the required monthly contribution."], "ETF 费率真的影响很大吗？", "Do ETF fees really matter that much?", "在短期里感觉不明显，但时间越长，费率差带来的终值差距越大。", "It may not feel obvious in the short run, but the longer the horizon, the larger the difference in the final value."),
    };
  },
};

calculatorConfigs["stock-average-cost"] = {
  name: { zh: "股票平均成本计算器", en: "Stock Average Cost Calculator" },
  category: { zh: "投资理财", en: "Investing" },
  subtitle: { zh: "把分批买入的股数和价格合并，快速算出平均持仓成本和当前盈亏。", en: "Combine multiple buy lots to calculate the average cost basis and current gain or loss." },
  quick: { zh: ["适合分批建仓用户", "看清摊薄后成本", "适合补仓前做判断"], en: ["Useful for staged buying", "Shows the blended cost basis", "Helpful before averaging down or adding more"] },
  features: [
    { id: "shares-1", type: "number", label: { zh: "第 1 笔股数", en: "Lot 1 Shares" }, default: () => 100 },
    { id: "price-1", type: "number", step: "0.01", label: { zh: "第 1 笔买入价", en: "Lot 1 Price" }, default: () => 18 },
    { id: "shares-2", type: "number", label: { zh: "第 2 笔股数", en: "Lot 2 Shares" }, default: () => 100 },
    { id: "price-2", type: "number", step: "0.01", label: { zh: "第 2 笔买入价", en: "Lot 2 Price" }, default: () => 15 },
    { id: "shares-3", type: "number", label: { zh: "第 3 笔股数", en: "Lot 3 Shares" }, default: () => 50 },
    { id: "price-3", type: "number", step: "0.01", label: { zh: "第 3 笔买入价", en: "Lot 3 Price" }, default: () => 13.5 },
    { id: "current-price", type: "number", step: "0.01", label: { zh: "当前价格", en: "Current Price" }, default: () => 16.8 },
  ],
  compute(values) {
    const totalShares = values["shares-1"] + values["shares-2"] + values["shares-3"];
    const totalCost = values["shares-1"] * values["price-1"] + values["shares-2"] * values["price-2"] + values["shares-3"] * values["price-3"];
    const averageCost = totalCost / Math.max(totalShares, 1);
    const marketValue = totalShares * values["current-price"];
    const gain = marketValue - totalCost;
    return {
      kpis: [[tPair("平均成本", "Average Cost"), money(averageCost)], [tPair("总持股", "Total Shares"), num(totalShares, 0)], [tPair("当前市值", "Market Value"), money(marketValue)], [tPair("浮动盈亏", "Unrealized Gain/Loss"), money(gain)]],
      note: tPair("平均成本不是安慰剂，它会直接影响你后续补仓、止损和止盈的判断。", "The average cost basis is not just a comfort number. It directly shapes how you think about adding, cutting, or holding."),
      charts: [
        { title: tPair("买入价格与当前价格", "Buy prices versus current price"), desc: tPair("一眼看清补仓之后成本被摊薄到了哪里。", "See immediately where your blended cost sits relative to the current price."), legends: [tPair("平均成本", "Average cost"), tPair("当前价格", "Current price")], valueType: "currency", labels: [tPair("成本", "Cost"), tPair("现价", "Current"), tPair("对比", "Compare"), tPair("持仓", "Position")], series: [[averageCost, averageCost, averageCost, averageCost], [values["current-price"], values["current-price"], values["current-price"], values["current-price"]]] },
      ],
      insights: createSimpleInsights("最适合分批建仓、补仓和准备做盈亏管理的用户。", "Best for investors who build positions gradually and want tighter gain/loss control.", "股价每次波动时，用户都可能回来再看一次平均成本和盈亏位置。", "Every price move can send users back to recheck their blended cost and unrealized gain/loss."),
      table: { title: tPair("分批买入结构", "Purchase-lot summary"), desc: tPair("看清每一笔买入对总成本的贡献。", "See how each lot contributes to the overall cost basis."), headers: [tPair("批次", "Lot"), tPair("股数", "Shares"), tPair("买入价", "Buy Price")], rows: [[tPair("第 1 笔", "Lot 1"), num(values["shares-1"], 0), money(values["price-1"])], [tPair("第 2 笔", "Lot 2"), num(values["shares-2"], 0), money(values["price-2"])], [tPair("第 3 笔", "Lot 3"), num(values["shares-3"], 0), money(values["price-3"])]] },
      article: createSimpleArticle("为什么平均成本会影响你的交易心态", "Why average cost affects trading psychology", "用户常常只盯当前股价，却忽略了自己真正的决策基准应该是平均持仓成本。", "Investors often stare at the latest market price and forget that the more useful decision anchor is the blended cost basis of the position.", ["补仓前先看平均成本会被拉低多少。", "止盈前看当前价离成本价还有多远。", "如果仓位越来越大，也要同步评估风险暴露。"], ["Before adding more, check how much the blended cost would fall.", "Before taking profit, compare the current price against the cost basis.", "If the position keeps growing, reassess the overall risk exposure too."], "补仓一定能降低风险吗？", "Does averaging down always reduce risk?", "不一定。它会降低平均成本，但也可能扩大仓位和单一资产暴露。", "Not always. It lowers the cost basis, but it can also increase the size and concentration of the position."),
    };
  },
};

calculatorConfigs["dividend-reinvestment"] = {
  name: { zh: "分红再投资计算器", en: "Dividend Reinvestment Calculator" },
  category: { zh: "投资理财", en: "Investing" },
  subtitle: { zh: "估算分红持续再投入后，股份数量、总市值和分红加速度会怎样变化。", en: "Estimate how reinvesting dividends changes share count, portfolio value, and income growth over time." },
  quick: { zh: ["适合股息型投资者", "看清股数增长路径", "适合长期再投资规划"], en: ["Useful for dividend investors", "Shows the share-growth path", "Great for long-term reinvestment planning"] },
  features: [
    { id: "initial-shares", type: "number", label: { zh: "初始持股", en: "Initial Shares" }, default: () => 500 },
    { id: "share-price", type: "number", step: "0.01", label: { zh: "股价", en: "Share Price" }, default: () => 25 },
    { id: "dividend-yield", type: "number", step: "0.01", label: { zh: "股息率 (%)", en: "Dividend Yield (%)" }, default: () => 4.2 },
    { id: "price-growth", type: "number", step: "0.01", label: { zh: "股价年增幅 (%)", en: "Price Growth (%)" }, default: () => 5 },
    { id: "years", type: "number", label: { zh: "持有年限", en: "Holding Years" }, default: () => 12 },
  ],
  compute(values) {
    let shares = values["initial-shares"];
    let price = values["share-price"];
    const shareSeries = [];
    const valueSeries = [];
    for (let year = 1; year <= values.years; year += 1) {
      const dividend = shares * price * values["dividend-yield"] / 100;
      shares += dividend / price;
      price *= 1 + values["price-growth"] / 100;
      shareSeries.push(shares);
      valueSeries.push(shares * price);
    }
    const finalValue = valueSeries[valueSeries.length - 1] || shares * price;
    return {
      kpis: [[tPair("期末持股", "Ending Shares"), num(shares, 2)], [tPair("预计总市值", "Projected Value"), money(finalValue)], [tPair("持股增幅", "Share Growth"), pct(((shares / values["initial-shares"]) - 1) * 100)], [tPair("股息率", "Dividend Yield"), pct(values["dividend-yield"])]],
      note: tPair("分红再投资的魅力，往往不在第一年，而在股数自己开始长出更多股数之后。", "The power of dividend reinvestment usually appears later, when the growing share count starts generating even more shares."),
      charts: [{ title: tPair("持股与总市值增长", "Share count and total value growth"), desc: tPair("同时看股数和市值增长，比只看收益率更直观。", "Watching both shares and value is often more intuitive than looking at yield alone."), legends: [tPair("持股数量", "Share count"), tPair("总市值", "Portfolio value")], valueType: "number", series: [shareSeries, valueSeries.map((value) => value / Math.max(values["share-price"], 1))] }],
      insights: createSimpleInsights("非常适合股息再投资、养老金组合和稳健现金流型资产规划。", "Excellent for dividend reinvestment, retirement portfolios, and steady-income assets.", "只要股价、股息率或持有年限变化，用户就会回来重算长期效果。", "Users naturally return whenever price assumptions, yield, or holding period changes."),
      table: { title: tPair("年度结果速览", "Annual snapshot"), desc: tPair("看股数与总市值是如何一年一年变化的。", "See how shares and total value evolve year by year."), headers: [tPair("年份", "Year"), tPair("持股数", "Shares"), tPair("总市值", "Portfolio Value")], rows: shareSeries.map((value, index) => [`${index + 1}`, num(value, 2), money(valueSeries[index])]) },
      article: createSimpleArticle("为什么分红再投资适合长期用户", "Why dividend reinvestment fits long-term investors", "很多用户只盯现金分红，却忽略了再投资后的复利效果。把股数增长过程可视化，能明显提高用户对长期策略的理解。", "Many investors focus only on cash dividends and miss the compounding effect of reinvestment. Visualizing the growing share count makes the long-term strategy easier to understand.", ["先看股息率是否稳定。", "再看再投资后股数增长是否明显。", "最后结合价格波动和持有年限判断。"], ["Start with the dividend yield and its stability.", "Then watch whether reinvestment meaningfully increases the share count.", "Finally combine that with price volatility and holding horizon."], "分红再投资一定优于拿现金吗？", "Is reinvesting dividends always better than taking the cash?", "不一定。如果你更需要现金流或价格明显高估，选择会不同。", "Not always. The better choice may differ if you need the cash flow or believe the asset is overpriced."),
    };
  },
};

calculatorConfigs["asset-allocation"] = {
  name: { zh: "资产配置收益模拟器", en: "Asset Allocation Simulator" },
  category: { zh: "投资理财", en: "Investing" },
  subtitle: { zh: "输入股票、债券和现金占比，快速看不同配置在未来几年可能形成的资产路径。", en: "Model future portfolio growth from your stock, bond, and cash allocation mix." },
  quick: { zh: ["适合保守与进取方案对比", "把配置差异直观化", "适合家庭长期资产规划"], en: ["Great for conservative vs. aggressive comparisons", "Makes allocation differences visible", "Useful for household portfolio planning"] },
  features: [
    { id: "capital", type: "number", label: { zh: "可投资资金", en: "Investable Capital" }, default: () => 500000 },
    { id: "stock-ratio", type: "number", step: "0.01", label: { zh: "股票占比 (%)", en: "Stock Allocation (%)" }, default: () => 60 },
    { id: "bond-ratio", type: "number", step: "0.01", label: { zh: "债券占比 (%)", en: "Bond Allocation (%)" }, default: () => 30 },
    { id: "cash-ratio", type: "number", step: "0.01", label: { zh: "现金占比 (%)", en: "Cash Allocation (%)" }, default: () => 10 },
    { id: "years", type: "number", label: { zh: "模拟年限", en: "Simulation Years" }, default: () => 10 },
  ],
  compute(values) {
    const weightedReturn = values["stock-ratio"] * 0.09 + values["bond-ratio"] * 0.04 + values["cash-ratio"] * 0.02;
    const annualReturn = weightedReturn / 100;
    const finalValue = values.capital * (1 + annualReturn) ** values.years;
    return {
      kpis: [[tPair("组合预期年化", "Estimated Portfolio Return"), pct(weightedReturn)], [tPair("预计期末资产", "Projected Portfolio Value"), money(finalValue)], [tPair("股票仓位", "Stock Weight"), pct(values["stock-ratio"])], [tPair("债券仓位", "Bond Weight"), pct(values["bond-ratio"])]],
      note: tPair("资产配置的价值，不是一次押中，而是用组合结构去平衡增长和波动。", "The value of asset allocation is not one perfect bet, but a portfolio structure that balances growth and stability."),
      charts: [{ title: tPair("不同配置的长期结果", "Long-term results of the allocation"), desc: tPair("帮助用户理解仓位结构和最终结果之间的关系。", "Shows how portfolio structure shapes the final outcome."), legends: [tPair("当前配置", "Current mix"), tPair("偏保守配置", "More conservative")], series: [createSeries(finalValue, values.years), createSeries(values.capital * (1 + (Math.max(weightedReturn - 2.2, 1.5) / 100)) ** values.years, values.years)] }],
      insights: createSimpleInsights("它最适合用来比较“收益更高”和“波动更低”之间的权衡。", "It is most useful for comparing the trade-off between higher return and lower volatility.", "用户会不断切换股票、债券和现金占比，直到找到更适合自己的组合。", "Users tend to keep adjusting the stock, bond, and cash weights until the mix feels right."),
      table: { title: tPair("仓位结构表", "Allocation structure"), desc: tPair("先看资金分布，再看收益预期更容易理解。", "The expected return is easier to understand once the capital split is visible."), headers: [tPair("资产", "Asset"), tPair("占比", "Weight"), tPair("金额", "Amount")], rows: [[tPair("股票", "Stocks"), pct(values["stock-ratio"]), money(values.capital * values["stock-ratio"] / 100)], [tPair("债券", "Bonds"), pct(values["bond-ratio"]), money(values.capital * values["bond-ratio"] / 100)], [tPair("现金", "Cash"), pct(values["cash-ratio"]), money(values.capital * values["cash-ratio"] / 100)]] },
      article: createSimpleArticle("为什么资产配置比单一预测更重要", "Why asset allocation matters more than one perfect forecast", "大部分长期投资结果，不是输在没有找到最强资产，而是输在配置结构不匹配自己的风险承受能力。", "Many long-term investment disappointments come not from missing the single best asset, but from owning a mix that does not match the investor's real risk tolerance.", ["先确定自己更重视增长还是稳定。", "再把股票、债券和现金比例调整到更舒服的位置。", "每隔一段时间重新平衡一次。"], ["Decide first whether growth or stability matters more right now.", "Then move the stock, bond, and cash weights to a more comfortable mix.", "Rebalance from time to time instead of setting it once forever."], "收益更高的配置一定更好吗？", "Is the highest-return mix always the best?", "不一定。能长期拿得住、睡得着的组合，往往更适合现实生活。", "Not always. The best real-life portfolio is often the one you can actually hold through the ups and downs."),
    };
  },
};

calculatorConfigs["fire-retirement"] = {
  name: { zh: "FIRE 退休计算器", en: "FIRE Calculator" },
  category: { zh: "投资理财", en: "Investing" },
  subtitle: { zh: "估算达到财务独立所需资产、当前差距以及按当前储蓄速度还需要多少年。", en: "Estimate the assets required for financial independence, the current gap, and how many years remain at your current savings pace." },
  quick: { zh: ["适合 FIRE 目标规划", "看清财务独立数字", "支持储蓄速度与回报率试算"], en: ["Useful for FIRE planning", "Shows the financial independence number clearly", "Great for savings-rate and return scenario testing"] },
  features: [
    { id: "annual-expense", type: "number", label: { zh: "年度支出", en: "Annual Spending" }, default: () => 180000 },
    { id: "safe-rate", type: "number", step: "0.01", label: { zh: "安全提取率 (%)", en: "Safe Withdrawal Rate (%)" }, default: () => 4 },
    { id: "current-assets", type: "number", label: { zh: "当前可投资资产", en: "Current Investable Assets" }, default: () => 600000 },
    { id: "annual-saving", type: "number", label: { zh: "每年新增储蓄", en: "Annual Savings" }, default: () => 160000 },
    { id: "annual-return", type: "number", step: "0.01", label: { zh: "预期年化收益率 (%)", en: "Expected Annual Return (%)" }, default: () => 7 },
  ],
  compute(values) {
    const fireNumber = values["annual-expense"] / Math.max(values["safe-rate"] / 100, 0.0001);
    let assets = values["current-assets"];
    let years = 0;
    const series = [];
    while (assets < fireNumber && years < 60) {
      assets = assets * (1 + values["annual-return"] / 100) + values["annual-saving"];
      years += 1;
      series.push(assets);
    }
    return {
      kpis: [[tPair("FIRE 目标资产", "FIRE Number"), money(fireNumber)], [tPair("当前资产", "Current Assets"), money(values["current-assets"])], [tPair("资金缺口", "Gap"), money(Math.max(fireNumber - values["current-assets"], 0))], [tPair("预计还需年数", "Estimated Years to FIRE"), `${years}`]],
      note: tPair("FIRE 的核心不是尽快离职，而是让工作和生活的主动权更多掌握在自己手里。", "The core of FIRE is not quitting as fast as possible, but gaining more control over how work and life fit together."),
      charts: [{ title: tPair("通往 FIRE 的资产路径", "Path to FIRE"), desc: tPair("看清当前资产和每年新增储蓄是如何一起推动目标的。", "Shows how current assets and annual savings work together toward the FIRE number."), legends: [tPair("资产增长", "Asset growth"), tPair("FIRE 目标线", "FIRE target")], series: [series.length ? series : [values["current-assets"]], Array.from({ length: Math.max(series.length, 1) }, () => fireNumber)] }],
      insights: createSimpleInsights("它把财务独立这个抽象概念，直接变成一个能追踪的具体数字和时间表。", "It turns financial independence from an abstract idea into a trackable number and timeline.", "只要支出、储蓄率或收益率变了，用户就会重新回来看自己距离 FIRE 还有多远。", "Whenever spending, savings, or return assumptions shift, users return to see how close FIRE still is."),
      table: { title: tPair("FIRE 关键变量", "Key FIRE variables"), desc: tPair("这三组数字最值得持续跟踪。", "These are the three groups of numbers worth tracking over time."), headers: [tPair("变量", "Variable"), tPair("当前值", "Current Value"), tPair("说明", "Meaning")], rows: [[tPair("年度支出", "Annual spending"), money(values["annual-expense"]), tPair("决定 FIRE 目标资产", "Defines the FIRE target")], [tPair("每年新增储蓄", "Annual savings"), money(values["annual-saving"]), tPair("决定前进速度", "Shapes the speed of progress")], [tPair("安全提取率", "Withdrawal rate"), pct(values["safe-rate"]), tPair("决定需要多少可投资资产", "Determines how much capital is required")]] },
      article: createSimpleArticle("为什么 FIRE 目标值得单独量化", "Why FIRE deserves its own calculator", "很多人喜欢 FIRE 的理念，但并不知道自己离目标还有多远。只要把支出、安全提取率和资产增长放进一个模型，模糊感就会大幅下降。", "Many people like the idea of FIRE but have no idea how far they are from it. Once spending, withdrawal rate, and asset growth are placed in one model, the path becomes much clearer.", ["先确认自己的真实年度支出。", "再看当前储蓄速度能否支撑目标。", "如果时间过长，再调整支出、收益率或储蓄比例。"], ["Start with a realistic annual-spending figure.", "Then check whether the current savings pace supports the target.", "If the timeline feels too long, adjust spending, return assumptions, or the savings rate."], "FIRE 只适合高收入人群吗？", "Is FIRE only for high earners?", "不一定。收入当然重要，但支出结构和储蓄率同样关键。", "Not necessarily. Income matters, but spending structure and savings rate are just as important."),
    };
  },
};

calculatorConfigs["emergency-fund"] = {
  name: { zh: "紧急备用金计算器", en: "Emergency Fund Calculator" },
  category: { zh: "储蓄 / 现金流", en: "Savings / Cash Flow" },
  subtitle: { zh: "根据月支出和希望覆盖的月数，算出应急金目标和当前差距。", en: "Estimate the emergency-fund target from your monthly spending and desired coverage period." },
  quick: { zh: ["适合现金流安全规划", "看清应急金缺口", "适合和预算工具联动"], en: ["Useful for cash-safety planning", "Shows the reserve gap clearly", "Pairs well with budgeting tools"] },
  features: [
    { id: "monthly-expense", type: "number", label: { zh: "每月必要支出", en: "Monthly Essential Spending" }, default: () => 12000 },
    { id: "months-covered", type: "number", label: { zh: "希望覆盖月数", en: "Months of Coverage" }, default: () => 6 },
    { id: "current-fund", type: "number", label: { zh: "当前备用金", en: "Current Emergency Fund" }, default: () => 30000 },
    { id: "monthly-save", type: "number", label: { zh: "每月新增储蓄", en: "Monthly Addition" }, default: () => 4000 },
  ],
  compute(values) {
    const target = values["monthly-expense"] * values["months-covered"];
    const gap = Math.max(target - values["current-fund"], 0);
    const monthsNeeded = gap === 0 ? 0 : Math.ceil(gap / Math.max(values["monthly-save"], 1));
    return {
      kpis: [[tPair("应急金目标", "Emergency Fund Target"), money(target)], [tPair("当前差距", "Current Gap"), money(gap)], [tPair("预计补齐时间", "Months to Fill"), `${monthsNeeded}${tPair("个月", " months")}`], [tPair("当前覆盖月数", "Current Coverage"), num(values["current-fund"] / Math.max(values["monthly-expense"], 1), 1)]],
      note: tPair("备用金真正买来的不是收益率，而是遇到变故时不被迫做糟糕决定的空间。", "The real value of an emergency fund is not return. It is having room to avoid bad decisions when life changes suddenly."),
      charts: [{ title: tPair("备用金补齐路径", "Emergency-fund build path"), desc: tPair("看清当前储蓄速度下，需要多久才能达到目标。", "See how long it may take to fully build the reserve at the current savings pace."), legends: [tPair("应急金积累", "Emergency fund"), tPair("目标线", "Target line")], series: [createSeries(target - gap, Math.max(monthsNeeded / 2, 6), 1), Array.from({ length: Math.max(Math.round(monthsNeeded / 2), 6) }, () => target)] }],
      insights: createSimpleInsights("它最适合用来先补安全垫，再去考虑更高波动的投资计划。", "It is most useful as a first step before taking on higher-volatility investing plans.", "每次支出结构变化或换工作前后，用户都可能回来重新算一次。", "Users often return after expense changes or around job transitions to recalculate the right reserve level."),
      table: { title: tPair("不同覆盖月数参考", "Reference by coverage months"), desc: tPair("看看 3 个月、6 个月、12 个月分别意味着什么。", "See what 3, 6, or 12 months of reserves actually mean in money terms."), headers: [tPair("覆盖月数", "Coverage"), tPair("目标金额", "Target"), tPair("当前差距", "Gap")], rows: [3, 6, 12].map((months) => [pluralize(months, "个月", "month", "months"), money(values["monthly-expense"] * months), money(Math.max(values["monthly-expense"] * months - values["current-fund"], 0))]) },
      article: createSimpleArticle("为什么应急金比很多人想的更重要", "Why an emergency fund matters more than many people expect", "突发支出、失业、家庭变动都不会提前打招呼。没有应急金时，最容易被迫借高利率的钱或在错误时点卖出资产。", "Unexpected expenses, job loss, and family changes do not arrive with warning. Without an emergency fund, people are more likely to borrow expensively or sell assets at the wrong time.", ["先确定你的必要支出是多少。", "再决定要覆盖 3 个月、6 个月还是更久。", "补齐备用金后，再去做更积极的投资。"], ["Start by defining essential monthly spending.", "Then decide whether you want 3, 6, or more months of coverage.", "Once the reserve is in place, consider more aggressive investing."], "应急金一定要放现金吗？", "Does the emergency fund need to stay in cash?", "至少核心部分应该保持高流动性和低波动，方便随时使用。", "At least the core portion should stay liquid and low-volatility so it is ready when needed."),
    };
  },
};

calculatorConfigs["monthly-budget"] = {
  name: { zh: "月度预算计算器", en: "Monthly Budget Calculator" },
  category: { zh: "储蓄 / 现金流", en: "Savings / Cash Flow" },
  subtitle: { zh: "把收入和主要支出分类放进同一页，快速看清剩余结余和储蓄空间。", en: "Put income and key spending buckets on one page to reveal leftover cash and savings potential." },
  quick: { zh: ["适合工资发放后做月预算", "看清支出结构", "适合和应急金、净资产工具一起用"], en: ["Useful right after payday", "Shows spending structure clearly", "Pairs well with emergency-fund and net-worth tools"] },
  features: [
    { id: "income", type: "number", label: { zh: "月收入", en: "Monthly Income" }, default: () => 25000 },
    { id: "housing", type: "number", label: { zh: "住房支出", en: "Housing Cost" }, default: () => 8000 },
    { id: "food", type: "number", label: { zh: "饮食支出", en: "Food Cost" }, default: () => 3500 },
    { id: "transport", type: "number", label: { zh: "交通支出", en: "Transport Cost" }, default: () => 1500 },
    { id: "other", type: "number", label: { zh: "其他支出", en: "Other Spending" }, default: () => 4500 },
  ],
  compute(values) {
    const totalExpense = values.housing + values.food + values.transport + values.other;
    const balance = values.income - totalExpense;
    return {
      kpis: [[tPair("本月结余", "Monthly Balance"), money(balance)], [tPair("总支出", "Total Spending"), money(totalExpense)], [tPair("储蓄率", "Savings Rate"), pct((balance / Math.max(values.income, 1)) * 100)], [tPair("住房占比", "Housing Share"), pct((values.housing / Math.max(values.income, 1)) * 100)]],
      note: tPair("预算最重要的作用不是省得极致，而是让你知道钱到底去了哪里。", "The point of a budget is not perfect frugality. It is knowing where the money actually goes."),
      charts: [{ title: tPair("收入与支出结构", "Income and spending structure"), desc: tPair("先把最大的支出找出来，预算就更容易优化。", "Once the biggest spending buckets are visible, the budget becomes easier to improve."), legends: [tPair("收入", "Income"), tPair("支出", "Spending")], series: [[values.income, values.income, values.income, values.income], [totalExpense, totalExpense, totalExpense, totalExpense]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("特别适合想知道自己为什么存不下钱、哪一类支出最需要收口的用户。", "Great for users who want to know why savings are stuck and which spending bucket deserves attention first.", "收入和支出每个月都在变化，预算工具天然适合月度重复使用。", "Income and spending change month by month, so budgeting tools are naturally revisited often."),
      table: { title: tPair("支出分类表", "Spending category table"), desc: tPair("看清每一类支出占收入的多少。", "See how much each category takes out of income."), headers: [tPair("分类", "Category"), tPair("金额", "Amount"), tPair("占收入比例", "Share of Income")], rows: [[tPair("住房", "Housing"), money(values.housing), pct((values.housing / Math.max(values.income, 1)) * 100)], [tPair("饮食", "Food"), money(values.food), pct((values.food / Math.max(values.income, 1)) * 100)], [tPair("交通", "Transport"), money(values.transport), pct((values.transport / Math.max(values.income, 1)) * 100)], [tPair("其他", "Other"), money(values.other), pct((values.other / Math.max(values.income, 1)) * 100)]] },
      article: createSimpleArticle("为什么月度预算不该只看剩多少钱", "Why budgeting should go beyond what is left over", "真正有用的预算不是月底看看账户里剩多少，而是提前知道哪些支出会吞掉最多现金流。", "A useful budget is not just checking what remains at the end of the month. It is seeing in advance which categories consume the most cash flow.", ["先找最大支出项。", "再判断能不能优化频率或金额。", "最后把结余优先分配给应急金和长期目标。"], ["Identify the largest spending category first.", "Then decide whether its frequency or amount can be optimized.", "Finally direct the leftover balance toward an emergency fund and long-term goals."], "预算是不是越细越好？", "Does a budget need to be ultra-detailed?", "不一定。先抓住几类大头支出，通常比把所有小额消费记得很细更有效。", "Not necessarily. Getting the biggest categories right is often more effective than tracking every tiny purchase in detail."),
    };
  },
};

calculatorConfigs["cash-flow-forecast"] = {
  name: { zh: "现金流预测计算器", en: "Cash-Flow Forecast Calculator" },
  category: { zh: "储蓄 / 现金流", en: "Savings / Cash Flow" },
  subtitle: { zh: "估算未来几个月现金净流入和账户余额变化，适合做短期资金规划。", en: "Forecast net cash flow and account-balance changes over the next few months." },
  quick: { zh: ["适合短期资金排期", "看清未来几个月是否会紧张", "适合个体户和家庭现金流规划"], en: ["Useful for short-term money planning", "Shows whether the next few months may feel tight", "Good for households and self-employed users"] },
  features: [
    { id: "starting-cash", type: "number", label: { zh: "当前现金余额", en: "Current Cash Balance" }, default: () => 50000 },
    { id: "monthly-income", type: "number", label: { zh: "月度流入", en: "Monthly Inflow" }, default: () => 26000 },
    { id: "monthly-expense", type: "number", label: { zh: "月度固定支出", en: "Monthly Fixed Outflow" }, default: () => 18000 },
    { id: "monthly-debt", type: "number", label: { zh: "月度债务支出", en: "Monthly Debt Payment" }, default: () => 3500 },
    { id: "months", type: "number", label: { zh: "预测月数", en: "Forecast Months" }, default: () => 12 },
  ],
  compute(values) {
    const netFlow = values["monthly-income"] - values["monthly-expense"] - values["monthly-debt"];
    const balanceSeries = Array.from({ length: values.months }, (_, index) => values["starting-cash"] + netFlow * (index + 1));
    const endingBalance = balanceSeries[balanceSeries.length - 1] || values["starting-cash"];
    return {
      kpis: [[tPair("每月净现金流", "Monthly Net Flow"), money(netFlow)], [tPair("预测期末余额", "Ending Cash Balance"), money(endingBalance)], [tPair("起始余额", "Starting Balance"), money(values["starting-cash"])], [tPair("预测月数", "Forecast Months"), `${values.months}`]],
      note: tPair("现金流预测真正解决的不是“赚不赚钱”，而是你会不会在某个月突然不够用。", "A cash-flow forecast answers a different question from profit: whether a certain month may leave you short on cash."),
      charts: [{ title: tPair("现金余额变化", "Cash-balance path"), desc: tPair("把未来几个月的余额变化提前看一遍，更容易发现风险点。", "Looking ahead at the balance path makes future pressure points much easier to spot."), legends: [tPair("账户余额", "Cash balance"), tPair("安全线", "Safety line")], series: [balanceSeries, Array.from({ length: values.months }, () => values["monthly-expense"] * 2)] }],
      insights: createSimpleInsights("特别适合做换工作、创业、装修、结婚或大额支出前的短期规划。", "Especially useful before job changes, starting a business, renovations, weddings, or other large expenses.", "只要收入、房租或债务计划调整，用户就会回来更新一次预测。", "Whenever income, rent, or debt plans change, users have a reason to revisit the forecast."),
      table: { title: tPair("每月预测表", "Monthly forecast table"), desc: tPair("先看哪几个月最需要留意。", "See which months deserve the closest attention."), headers: [tPair("月份", "Month"), tPair("净现金流", "Net Flow"), tPair("预测余额", "Projected Balance")], rows: balanceSeries.map((balance, index) => [lang() === "zh" ? `第${index + 1}个月` : `Month ${index + 1}`, money(netFlow), money(balance)]) },
      article: createSimpleArticle("为什么现金流预测能帮你避开大麻烦", "Why cash-flow forecasting prevents bigger problems", "很多财务压力不是因为全年赚得不够，而是因为某几个月的现金流错配。提前看见这些节点，就能提前做准备。", "Many money problems happen not because the year is unprofitable, but because a few months create a cash mismatch. Seeing those points in advance makes planning much easier.", ["先找最低余额会落在哪个月。", "如果过低，提前压缩支出或延后大额安排。", "必要时准备额外备用金。"], ["Find the month with the lowest projected balance first.", "If it looks too low, reduce spending or delay a large commitment in advance.", "Prepare an extra reserve if necessary."], "现金流预测越长越好吗？", "Is a longer forecast always better?", "短期通常更实用，因为变量更少、结果更接近现实。", "Shorter forecasts are often more practical because there are fewer moving parts and the estimate stays closer to reality."),
    };
  },
};

calculatorConfigs["net-worth"] = {
  name: { zh: "净资产计算器", en: "Net Worth Calculator" },
  category: { zh: "储蓄 / 现金流", en: "Savings / Cash Flow" },
  subtitle: { zh: "把现金、投资、房产和负债放到一起，快速知道自己真正拥有多少净资产。", en: "Combine cash, investments, property, and debt to reveal your real net worth." },
  quick: { zh: ["适合年度财务盘点", "看清资产与负债结构", "适合和预算、FIRE 工具联动"], en: ["Useful for annual financial reviews", "Shows asset and debt structure clearly", "Pairs well with budgeting and FIRE planning"] },
  features: [
    { id: "cash", type: "number", label: { zh: "现金与存款", en: "Cash and Deposits" }, default: () => 150000 },
    { id: "investments", type: "number", label: { zh: "投资资产", en: "Investments" }, default: () => 260000 },
    { id: "property", type: "number", label: { zh: "房产净值", en: "Property Equity" }, default: () => 500000 },
    { id: "other-assets", type: "number", label: { zh: "其他资产", en: "Other Assets" }, default: () => 50000 },
    { id: "debt", type: "number", label: { zh: "总负债", en: "Total Debt" }, default: () => 300000 },
  ],
  compute(values) {
    const totalAssets = values.cash + values.investments + values.property + values["other-assets"];
    const netWorth = totalAssets - values.debt;
    return {
      kpis: [[tPair("净资产", "Net Worth"), money(netWorth)], [tPair("总资产", "Total Assets"), money(totalAssets)], [tPair("总负债", "Total Debt"), money(values.debt)], [tPair("负债率", "Debt Ratio"), pct((values.debt / Math.max(totalAssets, 1)) * 100)]],
      note: tPair("净资产比单看收入更能反映你现在所处的位置，因为它把过去的积累和当前的负担都算进来了。", "Net worth often reveals your real financial position more clearly than income alone because it includes both accumulated assets and current obligations."),
      charts: [{ title: tPair("资产与负债结构", "Asset and debt structure"), desc: tPair("看清财富是由哪几部分构成的。", "See which components make up your financial position."), legends: [tPair("总资产", "Total assets"), tPair("总负债", "Total debt")], series: [[totalAssets, totalAssets, totalAssets, totalAssets], [values.debt, values.debt, values.debt, values.debt]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("特别适合做年度复盘，判断自己到底是在变得更富，还是只是收入看起来不错。", "Great for annual reviews and for asking whether wealth is truly growing, not just income.", "资产价格、房贷和投资会变化，用户会不断回来更新自己的净资产位置。", "As property values, debt, and investments change, users return to update their net-worth picture."),
      table: { title: tPair("净资产结构表", "Net-worth breakdown"), desc: tPair("最有用的是看结构，而不是只看一个总数。", "The structure is often more useful than the total alone."), headers: [tPair("项目", "Item"), tPair("金额", "Amount"), tPair("说明", "Meaning")], rows: [[tPair("现金与存款", "Cash"), money(values.cash), tPair("流动性最高", "Most liquid")], [tPair("投资资产", "Investments"), money(values.investments), tPair("决定增长性", "Drives growth")], [tPair("房产净值", "Property equity"), money(values.property), tPair("代表住房资产沉淀", "Represents housing equity")], [tPair("总负债", "Debt"), money(values.debt), tPair("决定净资产被扣掉多少", "Subtracts from net worth")]] },
      article: createSimpleArticle("为什么净资产比月收入更值得长期跟踪", "Why net worth deserves long-term tracking", "收入只能告诉你一个月赚了多少，净资产才会告诉你你到底留下了什么。", "Income shows how much you earned this month. Net worth shows what you actually kept and built over time.", ["每年固定做一次净资产盘点。", "把资产和负债分开记录。", "重点关注净资产是否稳定增长。"], ["Run a net-worth review at least once a year.", "Track assets and liabilities separately.", "Focus on whether net worth is growing steadily over time."], "净资产是负数是不是很糟？", "Is a negative net worth always terrible?", "不一定。买房初期、创业早期都可能出现负数，关键是趋势是否在改善。", "Not always. It is common early in a mortgage or a new business. What matters most is whether the trend is improving."),
    };
  },
};

calculatorConfigs.vat = {
  name: { zh: "增值税计算器", en: "VAT Calculator" },
  category: { zh: "税务", en: "Tax" },
  subtitle: { zh: "快速拆分税前金额、税额和含税总价，适合报价、开票和成本核算。", en: "Split the pre-tax amount, VAT amount, and tax-inclusive total for quoting and invoicing." },
  quick: { zh: ["适合报价和开票", "税前税后结果一页看清", "适合个体户和商家"], en: ["Useful for quotes and invoices", "Shows before-tax and after-tax values clearly", "Helpful for businesses and freelancers"] },
  features: [
    { id: "base-amount", type: "number", label: { zh: "未税金额", en: "Pre-tax Amount" }, default: () => 10000 },
    { id: "vat-rate", type: "number", step: "0.01", label: { zh: "税率 (%)", en: "VAT Rate (%)" }, default: () => 13 },
  ],
  compute(values) {
    const vat = values["base-amount"] * values["vat-rate"] / 100;
    const total = values["base-amount"] + vat;
    return {
      kpis: [[tPair("未税金额", "Pre-tax Amount"), money(values["base-amount"])], [tPair("增值税", "VAT Amount"), money(vat)], [tPair("含税金额", "Tax-inclusive Total"), money(total)], [tPair("税率", "VAT Rate"), pct(values["vat-rate"])]],
      note: tPair("做报价时把税额拆清楚，往往比只报一个总价更容易避免误会。", "Separating the tax component often prevents confusion better than quoting only one total price."),
      charts: [{ title: tPair("税前与税额结构", "Pre-tax amount and VAT structure"), desc: tPair("一眼看清总价里有多少属于税额。", "See at a glance how much of the total comes from tax."), legends: [tPair("未税金额", "Pre-tax"), tPair("税额", "VAT")], series: [[values["base-amount"], values["base-amount"], values["base-amount"], values["base-amount"]], [vat, vat, vat, vat]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("适合做开票、报价、合同金额拆分和税负预估。", "Useful for invoicing, quoting, contract pricing, and tax estimation.", "每当税率、报价或成本变化时，用户都会回来重算。", "Whenever rates, quotes, or costs change, users have a reason to recalculate."),
      table: { title: tPair("税额拆分结果", "VAT breakdown"), desc: tPair("报价和沟通时最常用的三个数字。", "The three numbers most often used in quoting and communication."), headers: [tPair("项目", "Item"), tPair("金额", "Amount"), tPair("说明", "Meaning")], rows: [[tPair("未税金额", "Pre-tax amount"), money(values["base-amount"]), tPair("商品或服务本身价格", "The underlying price of the good or service")], [tPair("增值税", "VAT amount"), money(vat), tPair("需要额外计入的税费", "The tax amount to add")], [tPair("含税金额", "Tax-inclusive total"), money(total), tPair("最终对外展示或结算金额", "The final quoted or settled amount")]] },
      article: createSimpleArticle("为什么报价时最好把增值税拆出来", "Why VAT should be separated in pricing", "如果客户或合作方不知道总价里税额占了多少，后续沟通很容易出现认知偏差。", "If a client or partner does not know how much of the total is tax, pricing discussions often become more confusing later.", ["先确认报价是未税还是含税。", "再确认适用税率。", "最后把税额和总价一起列出来。"], ["Confirm whether the quote is pre-tax or tax-inclusive first.", "Then confirm the applicable rate.", "Finally list both the tax amount and the total price."], "不同税率下都能用吗？", "Can I use it for different VAT rates?", "可以，只要填入当前适用税率即可。", "Yes. Just enter the applicable VAT rate for your case."),
    };
  },
};

calculatorConfigs["stamp-duty"] = {
  name: { zh: "印花税计算器", en: "Stamp Duty Calculator" },
  category: { zh: "税务", en: "Tax" },
  subtitle: { zh: "根据交易金额和印花税率，快速估算应缴税额。", en: "Estimate stamp duty from the transaction amount and duty rate." },
  quick: { zh: ["适合合同和交易估算", "税额计算简单直接", "适合和手续费工具搭配"], en: ["Useful for contracts and transactions", "Simple duty estimate", "Pairs well with trading-fee tools"] },
  features: [
    { id: "transaction-amount", type: "number", label: { zh: "交易金额", en: "Transaction Amount" }, default: () => 50000 },
    { id: "duty-rate", type: "number", step: "0.0001", label: { zh: "印花税率 (%)", en: "Stamp Duty Rate (%)" }, default: () => 0.05 },
  ],
  compute(values) {
    const tax = values["transaction-amount"] * values["duty-rate"] / 100;
    return {
      kpis: [[tPair("印花税额", "Stamp Duty"), money(tax)], [tPair("交易金额", "Transaction Amount"), money(values["transaction-amount"])], [tPair("税率", "Duty Rate"), pct(values["duty-rate"])], [tPair("税后成本", "Cost After Duty"), money(values["transaction-amount"] + tax)]],
      note: tPair("税率很小不代表可以忽略，频繁交易或大额合同里，印花税会直接影响最终成本。", "A small rate does not mean a small impact. On large contracts or frequent trading, stamp duty changes the final cost."),
      charts: [{ title: tPair("交易金额与税额", "Transaction amount and duty"), desc: tPair("金额越大，税额越值得提前算清楚。", "The larger the deal, the more important it is to estimate the duty clearly."), legends: [tPair("交易金额", "Transaction amount"), tPair("印花税", "Stamp duty")], series: [[values["transaction-amount"], values["transaction-amount"], values["transaction-amount"], values["transaction-amount"]], [tax, tax, tax, tax]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("适合合同签署、股权交易和大额资产转让前做税费预估。", "Useful before signing contracts, trading equity, or transferring large assets.", "用户通常会在交易金额和税率变化时回来再算一次。", "People usually revisit it when the deal size or the applicable rate changes."),
      table: { title: tPair("税费结果表", "Duty summary"), desc: tPair("最常用的金额信息放在一起。", "The most frequently used amounts in one view."), headers: [tPair("项目", "Item"), tPair("金额", "Amount"), tPair("说明", "Meaning")], rows: [[tPair("交易金额", "Transaction amount"), money(values["transaction-amount"]), tPair("税费计算基础", "The base amount for the duty")], [tPair("印花税", "Stamp duty"), money(tax), tPair("按税率估算得出", "Estimated from the given rate")], [tPair("税后总成本", "Total cost after duty"), money(values["transaction-amount"] + tax), tPair("实际支付时更接近的成本", "Closer to the final amount payable")]] },
      article: createSimpleArticle("为什么印花税也值得提前算", "Why stamp duty should be estimated early", "税率看起来小，但在大额交易里，税费常常会成为预算里必须单独考虑的一部分。", "The rate can look small, but on larger transactions it often becomes a meaningful part of the budget.", ["先确认适用税率。", "再确认计税基础金额。", "最后把税后总成本一起考虑。"], ["Confirm the applicable rate first.", "Then confirm the taxable transaction amount.", "Finally include the duty in the full transaction cost."], "印花税一定由买方承担吗？", "Is stamp duty always paid by the buyer?", "不一定，具体要看当地规则和交易安排。", "Not always. That depends on local rules and the structure of the transaction."),
    };
  },
};

calculatorConfigs["stock-fee"] = {
  name: { zh: "股票交易手续费计算器", en: "Stock Trading Fee Calculator" },
  category: { zh: "税务", en: "Tax" },
  subtitle: { zh: "把佣金、印花税和过户费拆开看，估算一笔股票交易的完整成本。", en: "Estimate the full cost of a stock trade by separating commission, stamp duty, and transfer fees." },
  quick: { zh: ["适合买入前先算成本", "看清单笔交易门槛", "适合短线和波段用户"], en: ["Useful before placing a trade", "Shows the true cost threshold", "Helpful for swing and active traders"] },
  features: [
    { id: "trade-amount", type: "number", label: { zh: "交易金额", en: "Trade Amount" }, default: () => 30000 },
    { id: "commission-rate", type: "number", step: "0.0001", label: { zh: "佣金率 (%)", en: "Commission Rate (%)" }, default: () => 0.03 },
    { id: "stamp-rate", type: "number", step: "0.0001", label: { zh: "印花税率 (%)", en: "Stamp Duty Rate (%)" }, default: () => 0.05 },
    { id: "transfer-rate", type: "number", step: "0.0001", label: { zh: "过户费率 (%)", en: "Transfer Fee Rate (%)" }, default: () => 0.001 },
  ],
  compute(values) {
    const commission = values["trade-amount"] * values["commission-rate"] / 100;
    const stamp = values["trade-amount"] * values["stamp-rate"] / 100;
    const transfer = values["trade-amount"] * values["transfer-rate"] / 100;
    const totalFee = commission + stamp + transfer;
    return {
      kpis: [[tPair("总手续费", "Total Fees"), money(totalFee)], [tPair("佣金", "Commission"), money(commission)], [tPair("印花税", "Stamp Duty"), money(stamp)], [tPair("手续费占比", "Fee Ratio"), pct((totalFee / Math.max(values["trade-amount"], 1)) * 100)]],
      note: tPair("交易频率一高，手续费就不再是边角问题，而会直接吃掉一部分收益。", "Once trading frequency rises, fees stop being a detail and start eating directly into returns."),
      charts: [{ title: tPair("手续费结构", "Fee structure"), desc: tPair("帮助用户看清哪一项费用占比更高。", "Shows which fee component has the biggest impact."), legends: [tPair("佣金", "Commission"), tPair("税费合计", "Taxes and transfer")], series: [[commission, commission, commission, commission], [stamp + transfer, stamp + transfer, stamp + transfer, stamp + transfer]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("适合交易前先判断这笔操作值不值得做。", "Useful for asking whether a trade is worth making before you place it.", "手续费、税率和交易金额一变化，用户就会回来重算成本。", "As fee rates and trade sizes change, users naturally revisit the cost estimate."),
      table: { title: tPair("费用拆分表", "Fee breakdown"), desc: tPair("一页看清整笔交易成本。", "See the full cost of the trade in one view."), headers: [tPair("费用项目", "Fee Item"), tPair("金额", "Amount"), tPair("说明", "Meaning")], rows: [[tPair("佣金", "Commission"), money(commission), tPair("券商收费", "Broker fee")], [tPair("印花税", "Stamp duty"), money(stamp), tPair("税费成本", "Tax component")], [tPair("过户费", "Transfer fee"), money(transfer), tPair("交易转移成本", "Transfer-related fee")]] },
      article: createSimpleArticle("为什么交易成本不能只看买入价", "Why trading cost is more than the buy price", "很多用户以为股票成本就是买入价，但一旦频繁交易，手续费和税费会逐渐变成真实收益的重要变量。", "Many traders assume the cost is only the purchase price, but once trading becomes frequent, fees and taxes become a meaningful part of the return equation.", ["先看总手续费占比高不高。", "再判断预期收益能否覆盖这些成本。", "如果频率高，优先优化费率和交易次数。"], ["Check whether the total fee ratio is high.", "Then decide whether the expected gain can cover it.", "If the strategy trades often, focus on reducing the fee drag and trade count."], "手续费低就一定适合频繁交易吗？", "Do low fees always justify frequent trading?", "不一定。手续费只是成本的一部分，滑点和错误决策也会吞掉收益。", "Not necessarily. Fees are only part of the cost. Slippage and poor decisions can also reduce returns."),
    };
  },
};

calculatorConfigs["credit-card-interest"] = {
  name: { zh: "信用卡利息计算器", en: "Credit Card Interest Calculator" },
  category: { zh: "生活 / 消费", en: "Consumer" },
  subtitle: { zh: "估算信用卡欠款在高利率下滚动几个月后会变成多少。", en: "Estimate how a credit-card balance grows when it rolls forward at a high annual interest rate." },
  quick: { zh: ["适合看清拖欠成本", "帮助判断是否要尽快还清", "适合和最低还款工具一起使用"], en: ["Useful for seeing the cost of carrying debt", "Helps decide whether to repay faster", "Pairs well with a minimum-payment calculator"] },
  features: [
    { id: "balance", type: "number", label: { zh: "当前欠款", en: "Current Balance" }, default: () => 12000 },
    { id: "annual-rate", type: "number", step: "0.01", label: { zh: "年利率 (%)", en: "Annual Interest Rate (%)" }, default: () => 18 },
    { id: "months", type: "number", label: { zh: "滚动月数", en: "Months Carried" }, default: () => 12 },
  ],
  compute(values) {
    const monthlyRate = values["annual-rate"] / 100 / 12;
    const futureBalance = values.balance * (1 + monthlyRate) ** values.months;
    const interest = futureBalance - values.balance;
    return {
      kpis: [[tPair("滚动后欠款", "Balance After Carrying"), money(futureBalance)], [tPair("累计利息", "Interest Charged"), money(interest)], [tPair("月利率", "Monthly Rate"), pct(values["annual-rate"] / 12)], [tPair("原始欠款", "Starting Balance"), money(values.balance)]],
      note: tPair("信用卡利息最可怕的地方，不是高，而是它很容易在“先拖一拖”里慢慢滚大。", "The danger of credit-card interest is not just that it is high, but that it quietly grows while people keep saying they will handle it later."),
      charts: [{ title: tPair("欠款滚动变化", "Balance growth over time"), desc: tPair("延迟还款会怎样，图上会看得很直观。", "The chart makes the cost of delaying repayment very visible."), legends: [tPair("欠款余额", "Balance"), tPair("原始欠款", "Starting balance")], series: [Array.from({ length: values.months }, (_, index) => values.balance * (1 + monthlyRate) ** (index + 1)), Array.from({ length: values.months }, () => values.balance)] }],
      insights: createSimpleInsights("它最适合提醒用户，信用卡滚动利息会怎样吞掉未来几个月的现金流。", "It is especially useful as a wake-up call for how revolving interest can consume future cash flow.", "用户常常会反复改月数和利率，评估拖延还款到底有多贵。", "Users often change the months and rate assumptions to see how expensive delay really becomes."),
      table: { title: tPair("时间越长成本越高", "Longer carry, higher cost"), desc: tPair("拖欠时间和利息成本的关系非常直接。", "The relationship between carried time and interest cost is very direct."), headers: [tPair("滚动月数", "Months"), tPair("滚动后欠款", "Ending Balance"), tPair("累计利息", "Interest")], rows: [3, 6, 12].map((months) => { const balance = values.balance * (1 + monthlyRate) ** months; return [`${months}`, money(balance), money(balance - values.balance)]; }) },
      article: createSimpleArticle("为什么信用卡利息需要尽早算清楚", "Why credit-card interest should be calculated early", "信用卡的痛点不在于今天多付一点，而在于它很容易把未来几个月的预算空间提前吃掉。", "The real pain of credit-card interest is not paying a little more today. It is how quickly it consumes the budget room of the next several months.", ["先看 3 个月和 12 个月会差多少。", "如果利息已经明显偏高，优先加快偿还。", "必要时和最低还款策略一起比较。"], ["Compare the 3-month and 12-month outcomes first.", "If the interest burden is already high, prioritize faster repayment.", "Compare it alongside the minimum-payment scenario if needed."], "只还最低还款会怎样？", "What happens if I only make the minimum payment?", "通常会显著拉长还款时间，并带来更高总利息。", "It usually lengthens the payoff period significantly and increases the total interest cost."),
    };
  },
};

calculatorConfigs["credit-card-minimum"] = {
  name: { zh: "信用卡最低还款计算器", en: "Credit Card Minimum Payment Calculator" },
  category: { zh: "生活 / 消费", en: "Consumer" },
  subtitle: { zh: "估算只按最低还款额还款时，需要多久还清以及总共要多付多少利息。", en: "Estimate how long a credit-card balance takes to clear and how much interest it costs when you pay only the minimum." },
  quick: { zh: ["适合判断最低还款代价", "看清时间成本和利息成本", "适合拖欠前先看一眼"], en: ["Useful for understanding the cost of minimum payments", "Shows the time and interest trade-off", "Helpful before letting a balance roll"] },
  features: [
    { id: "balance", type: "number", label: { zh: "当前欠款", en: "Current Balance" }, default: () => 15000 },
    { id: "annual-rate", type: "number", step: "0.01", label: { zh: "年利率 (%)", en: "Annual Rate (%)" }, default: () => 18 },
    { id: "minimum-rate", type: "number", step: "0.01", label: { zh: "最低还款比例 (%)", en: "Minimum Payment Rate (%)" }, default: () => 10 },
  ],
  compute(values) {
    const monthlyRate = values["annual-rate"] / 100 / 12;
    let balance = values.balance;
    let months = 0;
    let totalInterest = 0;
    while (balance > 1 && months < 240) {
      const payment = Math.max(balance * values["minimum-rate"] / 100, 10);
      const interest = balance * monthlyRate;
      totalInterest += interest;
      balance = Math.max(balance + interest - payment, 0);
      months += 1;
    }
    return {
      kpis: [[tPair("预计还清月数", "Months to Pay Off"), `${months}`], [tPair("累计利息", "Total Interest"), money(totalInterest)], [tPair("最低还款额", "Minimum Payment"), money(Math.max(values.balance * values["minimum-rate"] / 100, 10))], [tPair("起始欠款", "Starting Balance"), money(values.balance)]],
      note: tPair("最低还款能缓一口气，但也往往意味着更长时间被高利率绑定。", "Minimum payments can buy short-term breathing room, but they often mean being tied to high-interest debt for much longer."),
      charts: [{ title: tPair("最低还款的拖延成本", "The delay cost of minimum payments"), desc: tPair("时间拉长后，利息会逐渐吃掉原本可用的结余。", "As time extends, interest gradually consumes what could have been free cash flow."), legends: [tPair("还款月数", "Months to payoff"), tPair("累计利息", "Total interest")], valueType: "number", series: [[months, months, months, months], [totalInterest / Math.max(values.balance, 1), totalInterest / Math.max(values.balance, 1), totalInterest / Math.max(values.balance, 1), totalInterest / Math.max(values.balance, 1)]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("最适合让用户直观看到“先缓一缓”到底会贵多少。", "Best used to show how expensive “I will just pay the minimum for now” can become.", "用户会不断调整最低还款比例和余额，去比较哪种处理方式更能减压。", "Users often change the balance and minimum rate to compare which repayment approach relieves pressure better."),
      table: { title: tPair("关键结果表", "Key results"), desc: tPair("把时间和利息两个核心成本直接列出来。", "Puts the time cost and interest cost into one clear view."), headers: [tPair("指标", "Metric"), tPair("结果", "Result"), tPair("说明", "Meaning")], rows: [[tPair("预计月数", "Estimated months"), `${months}`, tPair("代表会被高利率拖多久", "How long the debt may keep dragging on")], [tPair("累计利息", "Total interest"), money(totalInterest), tPair("最低还款的真正代价", "The real cost of minimum payments")], [tPair("起始最低还款", "Initial minimum"), money(Math.max(values.balance * values["minimum-rate"] / 100, 10)), tPair("第一个月最少要还多少", "The lowest payment due in month one")]] },
      article: createSimpleArticle("为什么最低还款更适合当应急方案", "Why minimum payments are better treated as an emergency option", "最低还款的价值在于帮你短期腾出现金流，不在于它是划算的长期策略。", "The value of minimum payments is short-term cash-flow relief, not long-term efficiency.", ["如果只是短期压力，可以用来缓冲。", "一旦压力过去，应尽快提高还款额。", "优先避免长期滚动。"], ["If the pressure is temporary, minimum payments can act as a short buffer.", "Once the pressure passes, raise the payment as soon as possible.", "Prioritize avoiding long-term revolving debt."], "最低还款会影响信用吗？", "Do minimum payments affect credit?", "具体影响取决于规则和记录，但长期高负债通常不会是理想状态。", "The exact impact depends on reporting rules, but persistently high revolving debt is rarely ideal."),
    };
  },
};

calculatorConfigs["credit-card-points"] = {
  name: { zh: "信用卡积分价值计算器", en: "Credit Card Points Value Calculator" },
  category: { zh: "生活 / 消费", en: "Consumer" },
  subtitle: { zh: "估算信用卡积分折现后到底值多少钱，判断年费和消费返利值不值得。", en: "Estimate what your credit-card points are really worth after redemption." },
  quick: { zh: ["适合年费卡和积分党", "判断返利值不值", "适合礼品、里程、抵现比较"], en: ["Great for annual-fee cards and rewards users", "Helps compare reward value", "Useful for cash-back, gifts, and miles comparisons"] },
  features: [
    { id: "points", type: "number", label: { zh: "积分数量", en: "Points Balance" }, default: () => 120000 },
    { id: "redeem-value", type: "number", step: "0.01", label: { zh: "兑换价值", en: "Redemption Value" }, default: () => 900 },
    { id: "annual-fee", type: "number", label: { zh: "年费", en: "Annual Fee" }, default: () => 600 },
  ],
  compute(values) {
    const centsPerPoint = values["redeem-value"] / Math.max(values.points, 1);
    const netValue = values["redeem-value"] - values["annual-fee"];
    return {
      kpis: [[tPair("每积分价值", "Value per Point"), money(centsPerPoint)], [tPair("积分总价值", "Total Points Value"), money(values["redeem-value"])], [tPair("扣除年费后净值", "Net Value After Fee"), money(netValue)], [tPair("年费", "Annual Fee"), money(values["annual-fee"])]],
      note: tPair("积分看起来很多，不代表真的值很多。关键是最终能换回什么，以及为此付出了多少年费和消费成本。", "A huge point balance does not automatically mean high value. What matters is what you can redeem and what you paid to get there."),
      charts: [{ title: tPair("积分价值与年费", "Points value and annual fee"), desc: tPair("判断这张卡到底是在回馈你，还是主要在收你的年费。", "A quick way to see whether the card is rewarding you enough to justify its fee."), legends: [tPair("积分价值", "Points value"), tPair("年费", "Annual fee")], series: [[values["redeem-value"], values["redeem-value"], values["redeem-value"], values["redeem-value"]], [values["annual-fee"], values["annual-fee"], values["annual-fee"], values["annual-fee"]]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("最适合拿来比较不同兑换方式到底哪种更划算。", "Best used to compare which redemption option actually gives better value.", "积分数量和兑换方案一变，用户就会回来重算。", "Whenever the points balance or redemption method changes, users return to recalculate."),
      table: { title: tPair("价值速览", "Value snapshot"), desc: tPair("从三个角度判断积分值不值。", "Judge the reward value from three useful angles."), headers: [tPair("项目", "Item"), tPair("数值", "Value"), tPair("说明", "Meaning")], rows: [[tPair("积分总价值", "Total points value"), money(values["redeem-value"]), tPair("积分本身可换回的价值", "The gross redemption value")], [tPair("年费", "Annual fee"), money(values["annual-fee"]), tPair("持卡成本", "The cost of holding the card")], [tPair("净值", "Net value"), money(netValue), tPair("扣掉年费后更接近真实收益", "A better estimate of the real reward after fees")]] },
      article: createSimpleArticle("为什么积分的关键不在“多少”，而在“怎么换”", "Why the real question is not how many points you have, but how you redeem them", "很多人只追求积分数量，却忽略了不同兑换方式之间的价值差异可能非常大。", "Many people chase point totals and overlook how dramatically redemption value can vary across different options.", ["先看积分最终能换回多少钱。", "再扣掉年费和附带成本。", "最后比较这张卡值不值得继续持有。"], ["Check the real redemption value first.", "Then subtract the annual fee and related costs.", "Finally decide whether the card is still worth keeping."], "积分越多一定越好吗？", "Are more points always better?", "不一定。如果兑换比例差，积分再多也可能只是看起来热闹。", "Not necessarily. A large point balance with weak redemption value can still be underwhelming."),
    };
  },
};

calculatorConfigs.discount = {
  name: { zh: "消费折扣计算器", en: "Discount Calculator" },
  showRegionContext: false,
  category: { zh: "生活 / 消费", en: "Consumer" },
  subtitle: { zh: "快速算出打折、叠加优惠券和最终到手价，适合购物前判断值不值。", en: "Calculate the final price after discounts and coupons before you buy." },
  quick: { zh: ["适合购物前快速试算", "支持折扣和优惠券叠加", "适合大额消费比价"], en: ["Useful before shopping", "Combines discount rates and coupons", "Great for comparing bigger purchases"] },
  features: [
    { id: "original-price", type: "number", label: { zh: "原价", en: "Original Price" }, default: () => 899 },
    { id: "discount-rate", type: "number", step: "0.01", label: { zh: "折扣 (%)", en: "Discount (%)" }, default: () => 20 },
    { id: "coupon", type: "number", label: { zh: "优惠券金额", en: "Coupon Value" }, default: () => 50 },
  ],
  compute(values) {
    const discounted = values["original-price"] * (1 - values["discount-rate"] / 100);
    const finalPrice = Math.max(discounted - values.coupon, 0);
    return {
      kpis: [[tPair("折后价", "Discounted Price"), money(discounted)], [tPair("最终到手价", "Final Price"), money(finalPrice)], [tPair("共省下", "Total Savings"), money(values["original-price"] - finalPrice)], [tPair("实际折扣率", "Effective Discount"), pct(((values["original-price"] - finalPrice) / Math.max(values["original-price"], 1)) * 100)]],
      note: tPair("折扣真正有用的地方，不是“感觉便宜”，而是明确知道自己到底省了多少。", "The point of a discount is not just that it feels cheaper, but knowing exactly how much you are really saving."),
      charts: [{ title: tPair("价格变化", "Price reduction path"), desc: tPair("原价、折后价和最终到手价放在一起更直观。", "Putting the original, discounted, and final price together makes the savings easier to judge."), legends: [tPair("原价", "Original"), tPair("最终到手价", "Final")], series: [[values["original-price"], values["original-price"], values["original-price"], values["original-price"]], [finalPrice, finalPrice, finalPrice, finalPrice]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("适合电商促销、旅行预订和高单价商品比价前快速判断。", "Useful before e-commerce promotions, travel bookings, or higher-ticket purchases.", "促销规则一变化，用户就会回来再算一次是否真的划算。", "As promotion rules change, users return to check whether the deal is actually good."),
      table: { title: tPair("折扣结果表", "Discount summary"), desc: tPair("把最常看的三个数字放一起。", "The three most useful discount numbers in one place."), headers: [tPair("项目", "Item"), tPair("金额", "Amount"), tPair("说明", "Meaning")], rows: [[tPair("原价", "Original price"), money(values["original-price"]), tPair("活动前价格", "Price before promotion")], [tPair("折后价", "Discounted price"), money(discounted), tPair("仅按折扣计算", "After the discount only")], [tPair("最终到手价", "Final price"), money(finalPrice), tPair("再叠加优惠券后的价格", "After applying the coupon too")]] },
      article: createSimpleArticle("为什么购物前先算一下更划算", "Why a quick discount check helps before buying", "很多“限时优惠”只是把复杂规则包装得很紧张。只要把折扣和优惠券拆开，值不值往往马上就清楚了。", "Many “limited-time” promotions mainly rely on urgency and complicated rules. Once the discount and coupon are broken down, the real value becomes much clearer.", ["先看折后价。", "再扣掉优惠券。", "最后算实际折扣率，不被营销词带节奏。"], ["Check the discounted price first.", "Then subtract the coupon.", "Finally calculate the effective discount so the marketing language does not control the decision."], "折扣高就一定值得买吗？", "Does a bigger discount always mean it is worth buying?", "不一定。关键还是你是否真的需要，以及最终到手价是否合理。", "Not always. The key question is still whether you truly need the item and whether the final price is actually attractive."),
    };
  },
};

calculatorConfigs.bmr = {
  name: { zh: "基础代谢率(BMR)计算器", en: "BMR Calculator" },
  showRegionContext: false,
  category: { zh: "健康", en: "Health" },
  subtitle: { zh: "根据身高、体重、年龄和性别估算基础代谢率，帮助理解每天最基础的能量消耗。", en: "Estimate basal metabolic rate from height, weight, age, and sex." },
  quick: { zh: ["适合减脂增肌前做基线判断", "按常见公式快速估算", "适合和热量需求工具搭配"], en: ["Useful before fat-loss or muscle-gain planning", "Fast estimate from a common formula", "Pairs well with calorie-needs tools"] },
  features: [
    { id: "sex", type: "select", label: { zh: "性别", en: "Sex" }, default: () => "male", options: [{ value: "male", label: { zh: "男", en: "Male" } }, { value: "female", label: { zh: "女", en: "Female" } }] },
    { id: "age", type: "number", label: { zh: "年龄", en: "Age" }, default: () => 30 },
    { id: "height", type: "number", label: { zh: "身高（cm）", en: "Height (cm)" }, default: () => 170 },
    { id: "weight", type: "number", label: { zh: "体重（kg）", en: "Weight (kg)" }, default: () => 68 },
  ],
  compute(values) {
    const bmr = values.sex === "male"
      ? 10 * values.weight + 6.25 * values.height - 5 * values.age + 5
      : 10 * values.weight + 6.25 * values.height - 5 * values.age - 161;
    return {
      kpis: [[tPair("基础代谢率", "BMR"), `${num(bmr, 0)} kcal`], [tPair("每小时基础消耗", "Per-Hour Burn"), `${num(bmr / 24, 1)} kcal`], [tPair("当前体重", "Current Weight"), `${num(values.weight, 1)} kg`], [tPair("当前身高", "Current Height"), `${num(values.height, 0)} cm`]],
      note: tPair("BMR 不是你每天总共会消耗多少，而是身体在最基本维持状态下的大致能量需求。", "BMR is not your full daily burn. It is the approximate energy your body needs at rest to maintain basic functions."),
      charts: [{ title: tPair("基础代谢率参考", "BMR reference"), desc: tPair("帮助你理解静息状态下的基础消耗。", "Helps you interpret the body's resting energy demand."), legends: [tPair("基础代谢率", "BMR"), tPair("每小时基础消耗", "Per-hour burn")], valueType: "number", series: [[bmr, bmr, bmr, bmr], [bmr / 24, bmr / 24, bmr / 24, bmr / 24]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("适合做减脂、增肌和热量管理前的第一步。", "Useful as the first step before fat-loss, muscle-gain, or calorie planning.", "体重、身高或目标变化时，用户很容易回来更新自己的基础代谢估算。", "As body weight, height, or goals change, users tend to come back and update the estimate."),
      table: { title: tPair("BMR 结果解读", "BMR interpretation"), desc: tPair("先理解这个数字，再谈饮食计划更有意义。", "Understanding the number first makes diet planning more useful."), headers: [tPair("项目", "Item"), tPair("结果", "Result"), tPair("说明", "Meaning")], rows: [[tPair("基础代谢率", "BMR"), `${num(bmr, 0)} kcal`, tPair("静息状态下的基础消耗", "Your resting energy demand")], [tPair("每小时消耗", "Per hour"), `${num(bmr / 24, 1)} kcal`, tPair("粗略理解日常维持成本", "A rough hourly view of baseline maintenance")], [tPair("适用场景", "Use case"), tPair("饮食与训练规划", "Nutrition and training"), tPair("更适合做起点参考", "Best used as a baseline starting point")]] },
      article: createSimpleArticle("为什么先知道 BMR 很重要", "Why knowing BMR first is useful", "很多饮食计划之所以执行困难，是因为用户一开始就没有弄清楚自己的基础消耗水平。", "Many diet plans become hard to follow because the starting baseline energy demand was never understood clearly.", ["先把 BMR 当作基础参考。", "再结合活动量看总热量需求。", "不要把 BMR 当作最终摄入建议。"], ["Use BMR as your baseline reference.", "Then combine it with activity level to estimate total calorie needs.", "Do not treat BMR as the final intake target by itself."], "BMR 就是我每天应该吃多少吗？", "Is BMR the number of calories I should eat each day?", "不是。还要结合日常活动量和目标来判断。", "No. You still need to consider activity level and personal goals."),
    };
  },
};

calculatorConfigs["calorie-needs"] = {
  name: { zh: "每日热量需求计算器", en: "Daily Calorie Needs Calculator" },
  showRegionContext: false,
  category: { zh: "健康", en: "Health" },
  subtitle: { zh: "在基础代谢率之上叠加活动量，估算维持体重所需的每日总热量。", en: "Estimate total daily calorie needs by combining BMR with activity level." },
  quick: { zh: ["适合日常饮食和训练规划", "活动量会直接影响结果", "适合和 BMR 工具一起使用"], en: ["Useful for diet and training planning", "Activity level changes the result significantly", "Works well with the BMR calculator"] },
  features: [
    { id: "sex", type: "select", label: { zh: "性别", en: "Sex" }, default: () => "male", options: [{ value: "male", label: { zh: "男", en: "Male" } }, { value: "female", label: { zh: "女", en: "Female" } }] },
    { id: "age", type: "number", label: { zh: "年龄", en: "Age" }, default: () => 30 },
    { id: "height", type: "number", label: { zh: "身高（cm）", en: "Height (cm)" }, default: () => 170 },
    { id: "weight", type: "number", label: { zh: "体重（kg）", en: "Weight (kg)" }, default: () => 68 },
    { id: "activity", type: "select", label: { zh: "活动量", en: "Activity Level" }, default: () => 1.55, valueType: "number", options: [{ value: 1.2, label: { zh: "久坐", en: "Sedentary" } }, { value: 1.375, label: { zh: "轻度活动", en: "Lightly active" } }, { value: 1.55, label: { zh: "中度活动", en: "Moderately active" } }, { value: 1.725, label: { zh: "高活动量", en: "Very active" } }] },
  ],
  compute(values) {
    const bmr = values.sex === "male"
      ? 10 * values.weight + 6.25 * values.height - 5 * values.age + 5
      : 10 * values.weight + 6.25 * values.height - 5 * values.age - 161;
    const maintenance = bmr * values.activity;
    return {
      kpis: [[tPair("维持热量", "Maintenance Calories"), `${num(maintenance, 0)} kcal`], [tPair("基础代谢率", "BMR"), `${num(bmr, 0)} kcal`], [tPair("减脂参考", "Fat-Loss Range"), `${num(maintenance - 400, 0)} - ${num(maintenance - 250, 0)} kcal`], [tPair("增肌参考", "Muscle-Gain Range"), `${num(maintenance + 200, 0)} - ${num(maintenance + 350, 0)} kcal`]],
      note: tPair("热量需求不是固定死值，活动量一变，结果就会明显变化。", "Daily calorie needs are not fixed. A change in activity level can shift the result a lot."),
      charts: [{ title: tPair("不同活动量下的热量需求", "Calorie needs by activity level"), desc: tPair("帮助理解活动量是怎么拉高总热量需求的。", "Shows how activity level raises total daily energy needs."), legends: [tPair("维持热量", "Maintenance"), tPair("基础代谢", "BMR")], valueType: "number", series: [[bmr * 1.2, bmr * 1.375, bmr * 1.55, bmr * 1.725], [bmr, bmr, bmr, bmr]], labels: lang() === "zh" ? ["久坐", "轻度", "中度", "高活动"] : ["Sed", "Light", "Mod", "High"] }],
      insights: createSimpleInsights("它最适合把“我每天到底该吃多少”从感觉变成一个可估算区间。", "It turns “how much should I eat each day” from a guess into a usable range.", "用户的训练频率或目标一变化，就会回来重新算一遍。", "When training frequency or goals change, people tend to run the estimate again."),
      table: { title: tPair("热量区间参考", "Calorie range reference"), desc: tPair("维持、减脂和增肌三个区间放在一起看更容易做决定。", "Seeing maintenance, fat-loss, and muscle-gain ranges together makes planning easier."), headers: [tPair("目标", "Goal"), tPair("参考热量", "Suggested Calories"), tPair("说明", "Meaning")], rows: [[tPair("维持", "Maintain"), `${num(maintenance, 0)} kcal`, tPair("适合体重稳定期", "Useful for weight maintenance")], [tPair("减脂", "Fat loss"), `${num(maintenance - 400, 0)} - ${num(maintenance - 250, 0)} kcal`, tPair("适合适度热量缺口", "A moderate calorie deficit")], [tPair("增肌", "Muscle gain"), `${num(maintenance + 200, 0)} - ${num(maintenance + 350, 0)} kcal`, tPair("适合适度热量盈余", "A modest calorie surplus")]] },
      article: createSimpleArticle("为什么热量需求要结合活动量一起看", "Why calorie needs should always include activity level", "只看基础代谢会低估很多人的真实需求，因为走路、训练、通勤和日常活动都会消耗额外热量。", "Looking only at BMR will underestimate many people's real needs because walking, training, commuting, and everyday movement all add extra expenditure.", ["先算维持热量。", "再根据目标上调或下调。", "每隔一段时间重新校准。"], ["Calculate maintenance calories first.", "Then adjust up or down based on your goal.", "Recalibrate from time to time."], "活动量选错会影响很大吗？", "Does choosing the wrong activity level matter a lot?", "会。活动量系数是拉开总热量需求差异的重要变量。", "Yes. The activity multiplier is one of the most important drivers of total calorie needs."),
    };
  },
};

calculatorConfigs["body-fat"] = {
  name: { zh: "体脂率计算器", en: "Body Fat Calculator" },
  showRegionContext: false,
  category: { zh: "健康", en: "Health" },
  subtitle: { zh: "根据 BMI、年龄和性别做基础体脂率估算，帮助建立对身体状态的直觉。", en: "Estimate body-fat percentage from BMI, age, and sex as a simple body-composition reference." },
  quick: { zh: ["适合健康管理入门", "用简单参数做估算", "适合和 BMI、热量工具一起使用"], en: ["Useful as a body-composition starting point", "Simple estimate from basic inputs", "Pairs well with BMI and calorie tools"] },
  features: [
    { id: "sex", type: "select", label: { zh: "性别", en: "Sex" }, default: () => "male", options: [{ value: "male", label: { zh: "男", en: "Male" } }, { value: "female", label: { zh: "女", en: "Female" } }] },
    { id: "age", type: "number", label: { zh: "年龄", en: "Age" }, default: () => 30 },
    { id: "height", type: "number", label: { zh: "身高（cm）", en: "Height (cm)" }, default: () => 170 },
    { id: "weight", type: "number", label: { zh: "体重（kg）", en: "Weight (kg)" }, default: () => 68 },
  ],
  compute(values) {
    const bmi = values.weight / ((values.height / 100) ** 2);
    const sexFactor = values.sex === "male" ? 1 : 0;
    const bodyFat = 1.2 * bmi + 0.23 * values.age - 10.8 * sexFactor - 5.4;
    return {
      kpis: [[tPair("体脂率估算", "Estimated Body Fat"), pct(bodyFat)], ["BMI", num(bmi, 2)], [tPair("年龄", "Age"), `${values.age}`], [tPair("体重", "Weight"), `${num(values.weight, 1)} kg`]],
      note: tPair("这是基于常见经验公式的估算，更适合做趋势参考，而不是精密检测替代。", "This uses a common estimation formula and is better for trend awareness than for replacing precise measurement methods."),
      charts: [{ title: tPair("BMI 与体脂率关系", "BMI and body-fat relationship"), desc: tPair("帮助理解 BMI 和体脂率不是同一个概念，但二者有关联。", "Shows that BMI and body fat are not the same thing, but they do relate."), legends: ["BMI", tPair("体脂率", "Body Fat")], valueType: "number", series: [[bmi, bmi, bmi, bmi], [bodyFat, bodyFat, bodyFat, bodyFat]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("适合想要在家做一个基础体脂估算的用户。", "Useful for people who want a quick at-home body-fat estimate.", "体重、年龄和训练状态变化时，用户通常会回来更新结果。", "As weight, age, and training status change, users often revisit the estimate."),
      table: { title: tPair("结果参考", "Estimate reference"), desc: tPair("先把估算结果和 BMI 放在一起看。", "It helps to look at the body-fat estimate alongside BMI."), headers: [tPair("项目", "Item"), tPair("结果", "Result"), tPair("说明", "Meaning")], rows: [["BMI", num(bmi, 2), tPair("体重与身高比例", "Weight relative to height")], [tPair("体脂率", "Body fat"), pct(bodyFat), tPair("更接近身体成分视角", "Closer to body composition")], [tPair("适用性", "Use"), tPair("趋势参考", "Trend reference"), tPair("不替代专业测量", "Does not replace professional measurement")]] },
      article: createSimpleArticle("为什么体脂率和 BMI 要一起看", "Why body fat and BMI should be read together", "BMI 给的是体型粗略参考，体脂率则更接近身体成分。把两者放一起看，通常比只看一个数字更有帮助。", "BMI offers a broad body-size reference, while body fat is closer to body composition. Reading both together is often more useful than relying on only one number.", ["先看 BMI 大致处在哪个范围。", "再看体脂率估算是否偏高。", "如果在意精度，后续可以用更专业方式测量。"], ["Look at the BMI range first.", "Then check whether the body-fat estimate seems high.", "If precision matters, follow up with a more accurate measurement method."], "体脂率估算会很准吗？", "Is the body-fat estimate very accurate?", "不会特别精确，但很适合建立趋势直觉和做初步参考。", "It is not highly precise, but it works well for trend awareness and first-pass guidance."),
    };
  },
};

calculatorConfigs.percentage = {
  name: { zh: "百分比计算器", en: "Percentage Calculator" },
  showRegionContext: false,
  category: { zh: "数学 / 工具", en: "Math / Tools" },
  subtitle: { zh: "快速计算一个数占另一个数的百分比、百分比增减和折算结果。", en: "Quickly calculate part-to-whole percentages, percentage change, and adjusted values." },
  quick: { zh: ["适合增长率和占比场景", "公式简单但高频", "适合工作和学习日常使用"], en: ["Useful for growth and share calculations", "Simple but high-frequency", "Great for work and study use"] },
  features: [
    { id: "base", type: "number", label: { zh: "基数", en: "Base Value" }, default: () => 200 },
    { id: "part", type: "number", label: { zh: "部分值", en: "Part Value" }, default: () => 35 },
    { id: "percent", type: "number", step: "0.01", label: { zh: "百分比 (%)", en: "Percentage (%)" }, default: () => 12.5 },
  ],
  compute(values) {
    const share = values.part / Math.max(values.base, 1) * 100;
    const increase = values.base * (1 + values.percent / 100);
    return {
      kpis: [[tPair("部分占比", "Share of Base"), pct(share)], [tPair("按百分比增加后", "Value After Increase"), num(increase, 2)], [tPair("按百分比对应的值", "Percent of Base"), num(values.base * values.percent / 100, 2)], [tPair("基数", "Base"), num(values.base, 2)]],
      note: tPair("百分比公式很简单，但工作、学习和消费里用得极高频。", "Percentage math is simple, but it shows up constantly in work, study, and spending decisions."),
      charts: [{ title: tPair("基数与部分值", "Base and part value"), desc: tPair("直观看部分值在整体里的位置。", "See where the part sits relative to the whole."), legends: [tPair("基数", "Base"), tPair("部分值", "Part")], valueType: "number", series: [[values.base, values.base, values.base, values.base], [values.part, values.part, values.part, values.part]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("特别适合做涨跌幅、完成率、折扣率和同比环比计算。", "Especially useful for growth rates, completion rates, discounts, and comparisons over time.", "因为场景非常日常，用户会高频回来快速算一下。", "Because the use cases are so everyday, people return to it very often."),
      table: { title: tPair("百分比结果表", "Percentage results"), desc: tPair("一个页面同时解决三种常见问题。", "One page answers three common percentage questions."), headers: [tPair("问题", "Question"), tPair("结果", "Result"), tPair("说明", "Meaning")], rows: [[tPair("部分值占基数多少", "What share is the part of the base"), pct(share), tPair("部分 / 基数", "Part divided by base")], [tPair("基数增加百分比后是多少", "What is the base after a percentage increase"), num(increase, 2), tPair("基数 × (1 + 百分比)", "Base times one plus the percentage")], [tPair("基数的百分比对应多少", "What is this percentage of the base"), num(values.base * values.percent / 100, 2), tPair("基数 × 百分比", "Base times the percentage")]] },
      article: createSimpleArticle("为什么百分比工具看起来简单却非常高频", "Why a percentage tool is simple but extremely useful", "很多用户不是不会算，而是不想每次都重新列公式。把常用百分比场景放在一个页面里，效率会高很多。", "Many users know the math but do not want to rebuild the formula every time. Putting the common cases on one page makes the work much faster.", ["输入基数和部分值看占比。", "输入基数和百分比看增加后的值。", "把它当作工作里的快速辅助工具。"], ["Use the base and part to get the share.", "Use the base and percentage to see the adjusted value.", "Treat it as a fast helper for everyday work."], "百分比和百分点是一回事吗？", "Are percentage and percentage points the same?", "不是，二者在表达变化时含义不同。", "No. They mean different things when describing change."),
    };
  },
};

calculatorConfigs["unit-converter"] = {
  name: { zh: "单位换算计算器", en: "Unit Converter" },
  showRegionContext: false,
  category: { zh: "数学 / 工具", en: "Math / Tools" },
  subtitle: { zh: "支持常见长度单位之间的快速换算，适合装修、运动、旅行和学习。", en: "Convert common length units quickly for home projects, sports, travel, and study." },
  quick: { zh: ["支持米、厘米、公里、英尺、英寸、英里", "适合跨单位阅读和比价", "适合高频实用场景"], en: ["Supports meter, centimeter, kilometer, foot, inch, and mile", "Useful for cross-unit comparisons", "Great for frequent practical use"] },
  features: [
    { id: "value", type: "number", label: { zh: "数值", en: "Value" }, default: () => 1 },
    { id: "from-unit", type: "select", label: { zh: "原单位", en: "From Unit" }, default: () => "m", options: [{ value: "m", label: { zh: "米", en: "Meter" } }, { value: "cm", label: { zh: "厘米", en: "Centimeter" } }, { value: "km", label: { zh: "公里", en: "Kilometer" } }, { value: "ft", label: { zh: "英尺", en: "Foot" } }, { value: "in", label: { zh: "英寸", en: "Inch" } }, { value: "mi", label: { zh: "英里", en: "Mile" } }] },
    { id: "to-unit", type: "select", label: { zh: "目标单位", en: "To Unit" }, default: () => "ft", options: [{ value: "m", label: { zh: "米", en: "Meter" } }, { value: "cm", label: { zh: "厘米", en: "Centimeter" } }, { value: "km", label: { zh: "公里", en: "Kilometer" } }, { value: "ft", label: { zh: "英尺", en: "Foot" } }, { value: "in", label: { zh: "英寸", en: "Inch" } }, { value: "mi", label: { zh: "英里", en: "Mile" } }] },
  ],
  compute(values) {
    const factors = { m: 1, cm: 0.01, km: 1000, ft: 0.3048, in: 0.0254, mi: 1609.344 };
    const converted = values.value * factors[values["from-unit"]] / factors[values["to-unit"]];
    return {
      kpis: [[tPair("换算结果", "Converted Value"), num(converted, 6)], [tPair("原数值", "Source Value"), num(values.value, 6)], [tPair("原单位", "From"), values["from-unit"]], [tPair("目标单位", "To"), values["to-unit"]]],
      note: tPair("单位换算的价值不在公式，而在于减少每次跨标准阅读时的打断感。", "The value of a unit converter is not the formula itself, but avoiding repeated friction when switching standards."),
      charts: [{ title: tPair("单位换算结果", "Converted-unit result"), desc: tPair("适合快速确认大致量级。", "Useful for quickly checking the approximate scale."), legends: [tPair("原数值", "Source"), tPair("换算结果", "Converted")], valueType: "number", series: [[values.value, values.value, values.value, values.value], [converted, converted, converted, converted]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("适合装修尺寸、跑步距离、旅行里程和跨地区购物参数换算。", "Useful for renovation sizes, running distances, travel mileage, and cross-region shopping specs.", "因为实用场景非常多，这类工具天然适合高频访问。", "Because the practical use cases are endless, tools like this are naturally high-frequency."),
      table: { title: tPair("换算结果表", "Conversion summary"), desc: tPair("把原单位和目标单位结果放一起看。", "View the source and target values side by side."), headers: [tPair("项目", "Item"), tPair("数值", "Value"), tPair("说明", "Meaning")], rows: [[tPair("原数值", "Source value"), num(values.value, 6), values["from-unit"]], [tPair("目标值", "Converted value"), num(converted, 6), values["to-unit"]], [tPair("换算方向", "Conversion"), `${values["from-unit"]} -> ${values["to-unit"]}`, tPair("当前设置", "Current setup")]] },
      article: createSimpleArticle("为什么单位换算是典型的高频工具", "Why unit conversion is a classic high-frequency tool", "用户大多不是不会换，而是不想每次都重新记忆换算关系。一个打开就能用的工具，会省下很多零碎时间。", "Most users do not lack the ability to convert units. They just do not want to remember the relationships every single time. A tool that works instantly saves a lot of small interruptions.", ["先确认原单位。", "再选目标单位。", "最后直接拿结果去做判断。"], ["Confirm the source unit first.", "Then choose the target unit.", "Finally use the result directly in the decision or comparison."], "支持更多单位吗？", "Can this support more unit types later?", "可以，后续也可以继续扩展重量、体积、温度等类型。", "Yes. It can later be extended to weight, volume, temperature, and more."),
    };
  },
};

calculatorConfigs.area = {
  name: { zh: "面积计算器", en: "Area Calculator" },
  showRegionContext: false,
  category: { zh: "数学 / 工具", en: "Math / Tools" },
  subtitle: { zh: "根据长和宽快速计算矩形面积与周长，适合装修、土地和空间规划。", en: "Calculate rectangular area and perimeter quickly from length and width." },
  quick: { zh: ["适合装修与空间规划", "同时给出面积和周长", "高频实用工具"], en: ["Useful for renovations and space planning", "Returns both area and perimeter", "A practical everyday utility"] },
  features: [
    { id: "length", type: "number", label: { zh: "长度", en: "Length" }, default: () => 12 },
    { id: "width", type: "number", label: { zh: "宽度", en: "Width" }, default: () => 8 },
  ],
  compute(values) {
    const area = values.length * values.width;
    const perimeter = 2 * (values.length + values.width);
    return {
      kpis: [[tPair("面积", "Area"), num(area, 2)], [tPair("周长", "Perimeter"), num(perimeter, 2)], [tPair("长度", "Length"), num(values.length, 2)], [tPair("宽度", "Width"), num(values.width, 2)]],
      note: tPair("面积工具看起来很基础，但装修、仓储、布置空间时会反复用到。", "Area math looks basic, but it appears repeatedly in renovation, storage, and layout planning."),
      charts: [{ title: tPair("长度与宽度关系", "Length and width relation"), desc: tPair("直观看长宽组合如何形成面积。", "See visually how the two dimensions form the area."), legends: [tPair("长度", "Length"), tPair("宽度", "Width")], valueType: "number", series: [[values.length, values.length, values.length, values.length], [values.width, values.width, values.width, values.width]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("最适合装修材料估算、场地规划和基本几何计算。", "Useful for estimating materials, planning spaces, and handling simple geometry.", "尺寸一改，用户就会马上回来再算一遍。", "As soon as dimensions change, users tend to run the calculation again."),
      table: { title: tPair("结果速览", "Area summary"), desc: tPair("最常用的三个数字放在一起。", "The most useful numbers in one place."), headers: [tPair("项目", "Item"), tPair("结果", "Result"), tPair("说明", "Meaning")], rows: [[tPair("长度", "Length"), num(values.length, 2), tPair("矩形的一边", "One side of the rectangle")], [tPair("宽度", "Width"), num(values.width, 2), tPair("矩形的另一边", "The other side of the rectangle")], [tPair("面积", "Area"), num(area, 2), tPair("长度 × 宽度", "Length times width")]] },
      article: createSimpleArticle("为什么面积工具看似简单却很常用", "Why area tools stay useful despite being simple", "很多实际场景并不需要复杂几何，只需要一个能快速算出面积和周长的页面。", "Many practical situations do not require advanced geometry. They simply need a page that returns area and perimeter quickly.", ["先确认长度和宽度。", "再核对单位是否一致。", "最后把结果用于材料或空间估算。"], ["Confirm the length and width first.", "Make sure the units are consistent.", "Then use the result for material or layout planning."], "这里只能算矩形吗？", "Does this only calculate rectangles?", "当前先做矩形版本，后续也可以继续扩展圆形、三角形等。", "For now it focuses on rectangles, but it can later be extended to circles, triangles, and more."),
    };
  },
};

calculatorConfigs["scientific-notation"] = {
  name: { zh: "科学计数法计算器", en: "Scientific Notation Calculator" },
  showRegionContext: false,
  category: { zh: "数学 / 工具", en: "Math / Tools" },
  subtitle: { zh: "把普通数字转换成科学计数法，或帮助理解一个数值的数量级。", en: "Convert a standard number into scientific notation and understand its order of magnitude." },
  quick: { zh: ["适合学习和工程场景", "快速看数量级", "适合超大或超小数字"], en: ["Useful for study and engineering", "Quickly reveals the order of magnitude", "Great for very large or very small values"] },
  features: [
    { id: "number", type: "number", step: "0.000001", label: { zh: "输入数字", en: "Input Number" }, default: () => 1234567 },
  ],
  compute(values) {
    const absolute = Math.abs(values.number || 0);
    const exponent = absolute === 0 ? 0 : Math.floor(Math.log10(absolute));
    const coefficient = absolute === 0 ? 0 : values.number / (10 ** exponent);
    return {
      kpis: [[tPair("科学计数法", "Scientific Notation"), `${num(coefficient, 6)} × 10^${exponent}`], [tPair("数量级", "Order of Magnitude"), `${exponent}`], [tPair("原始数值", "Original Number"), num(values.number, 6)], [tPair("系数", "Coefficient"), num(coefficient, 6)]],
      note: tPair("科学计数法最大的好处，是让超大或超小数字一下子更容易读。", "Scientific notation makes extremely large or tiny values much easier to read at a glance."),
      charts: [{ title: tPair("系数与指数", "Coefficient and exponent"), desc: tPair("帮助理解一个数是怎么拆成科学计数法的。", "Shows how a value splits into coefficient and exponent."), legends: [tPair("系数", "Coefficient"), tPair("指数", "Exponent")], valueType: "number", series: [[coefficient, coefficient, coefficient, coefficient], [exponent, exponent, exponent, exponent]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("非常适合学习、工程和数据阅读场景。", "Useful for study, engineering, and reading large datasets.", "数字一换，结果就变，用户会高频快速使用。", "As soon as the number changes, the result changes, which makes it a naturally quick-repeat tool."),
      table: { title: tPair("拆分结果", "Notation breakdown"), desc: tPair("先看系数和指数，再看原数值会更容易理解。", "Seeing the coefficient and exponent first makes the notation easier to understand."), headers: [tPair("部分", "Part"), tPair("结果", "Result"), tPair("说明", "Meaning")], rows: [[tPair("系数", "Coefficient"), num(coefficient, 6), tPair("通常在 1 到 10 之间", "Usually between 1 and 10 in absolute value")], [tPair("指数", "Exponent"), `${exponent}`, tPair("决定数量级", "Defines the order of magnitude")], [tPair("完整表达", "Full notation"), `${num(coefficient, 6)} × 10^${exponent}`, tPair("标准科学计数法写法", "Standard scientific notation")]] },
      article: createSimpleArticle("为什么科学计数法能让数字更容易读", "Why scientific notation makes numbers easier to read", "遇到很大或很小的数字时，普通写法会迅速失去可读性。科学计数法的目的，就是把复杂数字压缩成更清晰的形式。", "When numbers become very large or very small, standard notation quickly loses readability. Scientific notation compresses them into a clearer form.", ["先看数量级。", "再看系数大小。", "最后再还原原始数值。"], ["Look at the order of magnitude first.", "Then check the size of the coefficient.", "Finally map it back to the original number."], "0 能写成科学计数法吗？", "Can zero be written in scientific notation?", "可以，但通常仍直接写作 0 更直观。", "Yes, but writing it simply as 0 is usually clearer."),
    };
  },
};

calculatorConfigs["time-difference"] = {
  name: { zh: "时间差计算器", en: "Time Difference Calculator" },
  showRegionContext: false,
  category: { zh: "数学 / 工具", en: "Math / Tools" },
  subtitle: { zh: "根据开始和结束时刻，快速算出相差多少小时和分钟。", en: "Calculate the difference between two times in hours and minutes." },
  quick: { zh: ["适合排班和时长统计", "不需要自己手算进位", "适合工作和学习日常使用"], en: ["Useful for scheduling and duration tracking", "No manual carry-over needed", "Great for everyday work and study"] },
  features: [
    { id: "start-hour", type: "number", label: { zh: "开始小时", en: "Start Hour" }, default: () => 9 },
    { id: "start-minute", type: "number", label: { zh: "开始分钟", en: "Start Minute" }, default: () => 15 },
    { id: "end-hour", type: "number", label: { zh: "结束小时", en: "End Hour" }, default: () => 18 },
    { id: "end-minute", type: "number", label: { zh: "结束分钟", en: "End Minute" }, default: () => 45 },
  ],
  compute(values) {
    const start = values["start-hour"] * 60 + values["start-minute"];
    const end = values["end-hour"] * 60 + values["end-minute"];
    const diff = Math.max(end - start, 0);
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return {
      kpis: [[tPair("时间差", "Time Difference"), lang() === "zh" ? `${hours}小时${minutes}分钟` : `${hours}h ${minutes}m`], [tPair("总分钟数", "Total Minutes"), `${diff}`], [tPair("开始时间", "Start Time"), `${values["start-hour"]}:${`${values["start-minute"]}`.padStart(2, "0")}`], [tPair("结束时间", "End Time"), `${values["end-hour"]}:${`${values["end-minute"]}`.padStart(2, "0")}`]],
      note: tPair("时间差工具最适合解决“明明不难算，但每次都容易算错”的日常问题。", "A time-difference calculator is perfect for the kind of everyday math that feels easy but is easy to get wrong."),
      charts: [{ title: tPair("开始与结束时刻", "Start and end time"), desc: tPair("帮助你更直观看出两段时间的间隔。", "Makes the interval between the two times easier to see."), legends: [tPair("开始", "Start"), tPair("结束", "End")], valueType: "number", series: [[start, start, start, start], [end, end, end, end]], labels: createQuarterLabels(4) }],
      insights: createSimpleInsights("适合排班、工时、学习时长和活动安排等高频场景。", "Useful for shifts, work hours, study sessions, and event timing.", "只要开始和结束时间变化，用户就会很自然地回来再算一次。", "As soon as the start or end time changes, people naturally recalculate."),
      table: { title: tPair("结果拆分表", "Duration breakdown"), desc: tPair("把时、分和总分钟数同时列出来。", "Show hours, minutes, and total minutes together."), headers: [tPair("项目", "Item"), tPair("结果", "Result"), tPair("说明", "Meaning")], rows: [[tPair("小时", "Hours"), `${hours}`, tPair("完整小时数", "Whole hours in the interval")], [tPair("分钟", "Minutes"), `${minutes}`, tPair("剩余分钟数", "Remaining minutes")], [tPair("总分钟", "Total minutes"), `${diff}`, tPair("最适合做工时统计", "Useful for time-sheet style tracking")]] },
      article: createSimpleArticle("为什么时间差工具这么常用", "Why time-difference tools are used so often", "从工时到课程，再到活动安排，时间差看起来简单，但涉及进位时很多人会下意识算错。", "From work logs to classes and event schedules, time differences look simple, but carrying minutes into hours often leads to mistakes.", ["先输入开始时刻。", "再输入结束时刻。", "直接看小时和分钟拆分。"], ["Enter the start time first.", "Then enter the end time.", "Read the hour-and-minute breakdown directly."], "如果跨天怎么办？", "What if the time crosses midnight?", "当前版本按同一天处理，后续也可以继续扩展跨天模式。", "This version treats both times as being on the same day, but a cross-midnight mode can be added later."),
    };
  },
};

const CATALOG_GROUPS = [
  {
    zh: "贷款 / 房产",
    en: "Loans / Housing",
    titleZh: "买房、房贷和住房决策",
    titleEn: "Mortgage and housing decisions",
    descZh: "从首付、月供到租房与买房比较，把最贵的长期决策先算明白。",
    descEn: "From down payment and monthly payment to rent-versus-buy trade-offs, calculate the big housing decisions first.",
    slugs: ["loan", "provident-fund-loan", "prepayment", "mortgage-amortized", "mortgage-principal", "rent-vs-buy", "mortgage-rate-change", "down-payment"],
  },
  {
    zh: "投资理财",
    en: "Investing",
    titleZh: "复利、收益率和长期资产增长",
    titleEn: "Compounding, returns, and long-term asset growth",
    descZh: "把定投、收益率、资产配置和财务独立目标放在一个分类里做对比。",
    descEn: "Compare SIP growth, return metrics, portfolio allocation, and FIRE planning in one section.",
    slugs: ["sip-compound", "cagr", "irr", "xirr", "etf-return", "stock-average-cost", "dividend-reinvestment", "asset-allocation", "fire-retirement", "retirement", "treasury-yield", "inflation"],
  },
  {
    zh: "储蓄 / 现金流",
    en: "Savings / Cash Flow",
    titleZh: "先把现金流和安全垫打稳",
    titleEn: "Stabilize cash flow and your financial buffer first",
    descZh: "预算、储蓄、净资产和现金流预测，适合做家庭和个人的底层财务管理。",
    descEn: "Budgeting, savings, net worth, and cash-flow planning tools for stronger financial foundations.",
    slugs: ["deposit", "savings-goal", "debt-ratio", "emergency-fund", "monthly-budget", "cash-flow-forecast", "net-worth"],
  },
  {
    zh: "税务",
    en: "Tax",
    titleZh: "税后、税费和交易成本",
    titleEn: "Taxes, after-tax outcomes, and transaction costs",
    descZh: "工资税后、增值税、印花税和股票交易手续费，都适合在动作前先算一遍。",
    descEn: "Estimate salary net pay, VAT, duties, and trading fees before committing to the transaction.",
    slugs: ["income-tax", "vat", "stamp-duty", "stock-fee"],
  },
  {
    zh: "生活 / 消费",
    en: "Consumer",
    titleZh: "消费决策和信用卡成本",
    titleEn: "Consumer choices and credit-card costs",
    descZh: "购物、信用卡和跨境消费前先算一下，通常比事后后悔便宜得多。",
    descEn: "Running the numbers before shopping, using a card, or spending across borders is often much cheaper than regretting it later.",
    slugs: ["exchange-rate", "credit-card-interest", "credit-card-minimum", "credit-card-points", "discount"],
  },
  {
    zh: "健康",
    en: "Health",
    titleZh: "健康管理里的关键基础数字",
    titleEn: "Core numbers for health planning",
    descZh: "从 BMI、体脂率到热量需求和孕期规划，适合做长期跟踪和重复测算。",
    descEn: "From BMI and body fat to calorie needs and pregnancy planning, these are made for repeat tracking.",
    slugs: ["bmi", "bmr", "calorie-needs", "body-fat", "due-date", "ovulation", "maternity-leave"],
  },
  {
    zh: "数学 / 工具",
    en: "Math / Tools",
    titleZh: "高频实用的小工具",
    titleEn: "Practical high-frequency utility tools",
    descZh: "百分比、日期、时间、单位和面积这种常用工具，最适合做成打开就能用的独立页。",
    descEn: "Percentage, date, time, unit, and area tools work best as independent pages that open ready to use.",
    slugs: ["date-days", "percentage", "unit-converter", "area", "scientific-notation", "time-difference"],
  },
];

function currentConfig() {
  const form = document.querySelector("[data-calculator-form]");
  if (!form) return null;
  return calculatorConfigs[form.getAttribute("data-calculator-form")] || null;
}

function getFormValues(config) {
  return Object.fromEntries(config.features.map((item) => {
    const raw = document.getElementById(item.id)?.value || "";
    if (item.type === "date" || item.type === "time" || item.type === "datetime-local") return [item.id, raw];
    if (item.type === "text") return [item.id, raw];
    if (item.type === "select") {
      return [item.id, item.valueType === "number" ? parseFloat(raw || "0") : raw];
    }
    return [item.id, parseFloat(raw || "0")];
  }));
}

function svgPath(series, width, height) {
  const max = Math.max(...series, 1);
  return series.map((value, index) => {
    const x = index / Math.max(series.length - 1, 1) * width;
    const y = height - (value / max) * height;
    return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
}

function buildChartGeometry(chart, width, height) {
  const isStacked = chart.mode === "stacked-area";
  const length = Math.max(...chart.series.map((series) => series.length), 1);
  const cumulative = Array.from({ length }, (_, index) => chart.series.reduce((sum, series) => sum + (series[index] || 0), 0));
  const max = Math.max(...(isStacked ? cumulative : chart.series.flat()), 1);

  const projectY = (value) => height - (value / max) * height;
  const xAt = (index) => index / Math.max(length - 1, 1) * width;

  const lines = chart.series.map((series, seriesIndex) => {
    const topSeries = series.map((value, index) => {
      if (!isStacked) return value;
      return chart.series.slice(0, seriesIndex + 1).reduce((sum, current) => sum + (current[index] || 0), 0);
    });
    const line = topSeries.map((value, index) => `${index === 0 ? "M" : "L"}${xAt(index).toFixed(2)},${projectY(value).toFixed(2)}`).join(" ");

    if (!isStacked) {
      return { line, area: `${line} L ${width},${height} L 0,${height} Z` };
    }

    const previous = seriesIndex === 0
      ? Array.from({ length }, () => 0)
      : chart.series.slice(0, seriesIndex).reduce((acc, current) => acc.map((value, index) => value + (current[index] || 0)), Array.from({ length }, () => 0));

    const lowerPath = previous.map((value, index) => `L${xAt(length - 1 - index).toFixed(2)},${projectY(previous[length - 1 - index]).toFixed(2)}`).join(" ");
    return { line, area: `${line} ${lowerPath} Z` };
  });

  return { lines, xAt, projectY, max, length, cumulative, isStacked };
}

function renderCharts(charts) {
  const root = document.querySelector("[data-charts]");
  if (!root) return;
  root.innerHTML = charts.map((chart, index) => {
    const width = 640;
    const height = 220;
    const colors = ["#51c8cf", "#ef8e8d", "#2563eb"];
    const geometry = buildChartGeometry(chart, width, height);
    const labels = chart.labels || createLabels(geometry.length);
    const areas = geometry.lines.map((shape, i) => `<path d="${shape.area}" fill="${colors[i]}" fill-opacity="${chart.mode === "stacked-area" ? (i === 0 ? 0.22 : 0.28) : 0.12}" stroke="none"></path>`).join("");
    const lines = geometry.lines.map((shape, i) => `<path d="${shape.line}" fill="none" stroke="${colors[i]}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>`).join("");
    const legends = chart.legends.map((legend, i) => `<span><span class="legend-dot" style="background:${colors[i]};"></span>${legend}</span>`).join("");
    const hoverTargets = Array.from({ length: geometry.length }, (_, i) => {
      const sliceWidth = width / Math.max(geometry.length - 1, 1);
      const x = Math.max(geometry.xAt(i) - sliceWidth / 2, 0);
      const payload = JSON.stringify({
        label: labels[i],
        valueType: chart.valueType || "currency",
        totalLabel: chart.totalLabel || "",
        values: chart.series.map((series, seriesIndex) => ({
          name: chart.legends[seriesIndex],
          color: colors[seriesIndex],
          raw: series[i] || 0,
        })),
        total: chart.totalLabel ? (chart.mode === "stacked-area" ? geometry.cumulative[i] : chart.series.reduce((sum, series) => sum + (series[i] || 0), 0)) : null,
        x: geometry.xAt(i),
      }).replace(/"/g, "&quot;");
      return `<rect class="chart-hit" data-chart-hover='${payload}' x="${x}" y="0" width="${Math.max(sliceWidth, 18)}" height="${height}" fill="transparent"></rect>`;
    }).join("");
    return `
      <article class="chart-card content-card">
        <div class="chart-card__head">
          <div>
            <h3>${chart.title}</h3>
            <p>${chart.desc}</p>
          </div>
          <span class="badge">${tPair("图表", "Chart")} ${index + 1}</span>
        </div>
        <div class="chart-stage">
          <svg class="chart-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
            ${areas}
            ${lines}
            <line class="chart-hover-line" x1="0" y1="0" x2="0" y2="${height}" visibility="hidden"></line>
            ${hoverTargets}
          </svg>
          <div class="chart-tooltip" aria-hidden="true"></div>
        </div>
        <div class="chart-legend">${legends}</div>
        <div class="chart-axis-note">
          <span>${tPair("起点", "Start")}: ${labels[0]}</span>
          <span>${tPair("终点", "End")}: ${labels[labels.length - 1]}</span>
        </div>
      </article>
    `;
  }).join("");

  root.querySelectorAll(".chart-stage").forEach((stage) => {
    const tooltip = stage.querySelector(".chart-tooltip");
    const line = stage.querySelector(".chart-hover-line");
    const svg = stage.querySelector(".chart-svg");
    stage.querySelectorAll("[data-chart-hover]").forEach((target) => {
      target.addEventListener("mouseenter", () => {
        const payload = JSON.parse(target.getAttribute("data-chart-hover"));
        const svgWidth = svg.viewBox.baseVal.width || 640;
        const xPercent = payload.x / svgWidth * 100;
        line.setAttribute("x1", payload.x);
        line.setAttribute("x2", payload.x);
        line.setAttribute("visibility", "visible");
        tooltip.classList.add("is-visible");
        tooltip.style.left = `${xPercent}%`;
        tooltip.style.top = "0";
        tooltip.innerHTML = `
          <strong>${payload.label}</strong>
          ${payload.values.map((item) => `<div><small style="color:${item.color};">${item.name}</small><span>${formatChartValue(item.raw, payload.valueType)}</span></div>`).join("")}
          ${payload.total !== null ? `<div><small>${payload.totalLabel || tPair("总计", "Total")}</small><span>${formatChartValue(payload.total, payload.valueType)}</span></div>` : ""}
        `;
      });
    });
    stage.addEventListener("mouseleave", () => {
      tooltip.classList.remove("is-visible");
      line.setAttribute("visibility", "hidden");
    });
  });
}

function formatChartValue(value, valueType) {
  if (valueType === "percent") return pct(value);
  if (valueType === "number") return num(value, 2);
  return money(value);
}

function renderInsights(items) {
  const root = document.querySelector("[data-insights]");
  if (!root) return;
  root.innerHTML = items.map((item) => `<div class="insight-card"><strong>${item[0]}</strong><p>${item[1]}</p></div>`).join("");
}

function renderTable(table) {
  const root = document.querySelector("[data-table]");
  if (!root) return;
  root.innerHTML = `
    <article class="content-card article-block table-card">
      <span class="badge">${tPair("数据对照", "Comparison")}</span>
      <h2>${table.title}</h2>
      <p>${table.desc}</p>
      <table class="data-table">
        <thead><tr>${table.headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
        <tbody>${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </article>
  `;
}

function renderArticle(article) {
  const root = document.querySelector("[data-article]");
  if (!root) return;
  const blocks = article.blocks.map((block) => `
    <article class="content-card article-block">
      <h2>${block.title}</h2>
      ${(block.paragraphs || []).map((p) => `<p>${p}</p>`).join("")}
      ${block.list ? `<ul class="list">${block.list.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
    </article>
  `).join("");
  const faq = `
    <article class="content-card article-block faq-card">
      <span class="badge">${tPair("常见问题", "FAQ")}</span>
      <h2>${tPair("用户常见问题", "Frequently Asked Questions")}</h2>
      <div class="faq-list">
        ${article.faq.map((item) => `<details class="faq-item"><summary>${item[0]}</summary><p>${item[1]}</p></details>`).join("")}
      </div>
    </article>
  `;
  root.innerHTML = `${blocks}${faq}`;
}

function renderKpis(kpis) {
  const root = document.querySelector("[data-kpis]");
  if (!root) return;
  root.innerHTML = kpis.map((item) => `<div class="kpi-card"><small>${item[0]}</small><strong>${item[1]}</strong></div>`).join("");
}

function renderResultPanel(kpis, note) {
  const root = document.querySelector("[data-result-grid]");
  if (!root) return;
  root.innerHTML = kpis.slice(0, 4).map((item) => `<div class="result__item"><small>${item[0]}</small><strong>${item[1]}</strong></div>`).join("");
  const noteNode = document.querySelector("[data-result-note]");
  if (noteNode) noteNode.textContent = note;
}

function setHeadMeta(name, content, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    if (property) node.setAttribute("property", name);
    else node.setAttribute("name", name);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function applyConfigToPage(config) {
  const slug = document.querySelector("[data-calculator-form]")?.getAttribute("data-calculator-form") || "";
  const isCnProvident = slug === "provident-fund-loan" && region().code === "CN";
  const localizedName = isCnProvident
    ? localizedPairText({ zh: "公积金贷款计算器", en: "Provident Fund Loan Calculator" })
    : slug === "provident-fund-loan"
      ? localizedPairText({ zh: "政策性住房贷款计算器", en: "Subsidized Housing Loan Calculator" })
      : localizedPairText(config.name);
  const localizedCategory = isCnProvident
    ? localizedPairText({ zh: "住房贷款", en: "Housing Loan" })
    : slug === "provident-fund-loan"
      ? localizedPairText({ zh: "住房贷款", en: "Housing Loan" })
      : localizedPairText(config.category);
  const localizedSubtitle = slug === "provident-fund-loan" && region().code !== "CN"
    ? localizedPairText({ zh: "适合估算政府支持或优惠型住房贷款的月供、总利息与长期还款成本。", en: "Estimate payments, interest, and long-term cost for subsidized or government-backed housing loans." })
    : localizedPairText(config.subtitle);

  document.title = `${localizedName} - ${tPair("全球计算器中心", "Global Calculator Hub")}`;
  const titleNodes = document.querySelectorAll("[data-calc-title]");
  const descNode = document.querySelector("[data-calc-subtitle]");
  const badgeNode = document.querySelector("[data-calc-category]");
  titleNodes.forEach((node) => {
    node.textContent = localizedName;
  });
  if (descNode) descNode.textContent = localizedSubtitle;
  if (badgeNode) badgeNode.textContent = localizedCategory;
  const quick = document.querySelector("[data-calc-quick]");
  if (quick) quick.innerHTML = (config.quick[lang()] || config.quick.en || []).map((item) => `<div class="mini-stat"><strong>${localizeEnglishText(item)}</strong><span>${tPair("适合收藏和反复试算", "Built for repeat exploration and saves")}</span></div>`).join("");
  const pageTitle = localizedName;
  const pageSubtitle = localizedSubtitle;
  const quickItems = (config.quick[lang()] || config.quick.en || []).map((item) => localizeEnglishText(item));
  const keywords = localizedSeoKeywords(config, pageTitle, localizedCategory, quickItems);
  const description = config.metaDescription?.[lang()]
    || localizedSeoDescription(pageTitle, pageSubtitle, quickItems);
  setHeadMeta("description", description);
  setHeadMeta("keywords", keywords);
  setHeadMeta("robots", "index,follow,max-image-preview:large");
  setHeadMeta("og:title", pageTitle, true);
  setHeadMeta("og:description", description, true);
  setHeadMeta("og:url", window.location.href, true);
  window.__siteI18n?.refreshStructuredData?.();

  const breadcrumbLinks = document.querySelectorAll(".breadcrumb a");
  const localPath = window.__siteI18n?.localizedPath || ((href) => href);
  if (breadcrumbLinks[0]) breadcrumbLinks[0].setAttribute("href", localPath("/"));
  if (breadcrumbLinks[1]) breadcrumbLinks[1].setAttribute("href", localPath("/calculators/"));
  if (breadcrumbLinks[0]) breadcrumbLinks[0].textContent = tPair("首页", "Home");
  if (breadcrumbLinks[1]) breadcrumbLinks[1].textContent = tPair("计算器合集", "Calculators");
}

function renderFields(config) {
  const root = document.querySelector("[data-fields]");
  if (!root) return;
  root.innerHTML = config.features.map((item) => {
    const defaultValue = typeof item.default === "function" ? item.default() : item.default;
    const label = localizedPairText(item.label);
    const inputHtml = item.type === "select"
      ? `<select id="${item.id}">${item.options.map((option) => {
        const optionLabel = localizedPairText(option.label);
        const isSelected = `${option.value}` === `${defaultValue}` ? "selected" : "";
        return `<option value="${option.value}" ${isSelected}>${optionLabel}</option>`;
      }).join("")}</select>`
      : `<input id="${item.id}" type="${item.type}" ${item.step ? `step="${item.step}"` : ""} value="${defaultValue}" />`;
    return `
      <div class="field ${config.features.length % 2 === 1 && item === config.features[config.features.length - 1] ? "field--full" : ""}">
        <label for="${item.id}">${label}</label>
        ${inputHtml}
      </div>
    `;
  }).join("");
}

function renderLocationContext(config) {
  const root = document.querySelector("[data-region-context]");
  if (!root) return;
  if (config && config.showRegionContext === false) {
    root.textContent = "";
    root.hidden = true;
    return;
  }
  root.hidden = false;
  const regionName = window.__siteI18n?.localizeCountryName
    ? window.__siteI18n.localizeCountryName(region())
    : localizeEnglishText(region().countryName);
  root.innerHTML = `${tPair("当前使用地区", "Active region")}: <strong>${regionName}</strong> · ${tPair("当前币种", "Currency")}: <strong>${region().currency}</strong>`;
}

function calculateAndRender() {
  const config = currentConfig();
  if (!config) return;
  const values = getFormValues(config);
  const result = config.compute(values);
  renderKpis(result.kpis);
  renderResultPanel(result.kpis, result.note);
  renderCharts(result.charts);
  renderInsights(result.insights);
  renderTable(result.table);
  renderArticle(result.article);
}

function applyCalculatorLanguage() {
  renderCatalog();
  const config = currentConfig();
  if (!config) return;
  applyConfigToPage(config);
  renderLocationContext(config);
  renderFields(config);
  const buttonNode = document.querySelector("[data-submit-label]");
  if (buttonNode) buttonNode.textContent = tPair("立即测算", "Run Calculation");
  const heading = document.querySelector("[data-result-heading]");
  if (heading) heading.textContent = tPair("核心结果", "Core Results");
  const disclaimer = document.querySelector("[data-disclaimer]");
  if (disclaimer) disclaimer.textContent = tPair("结果用于测算与比较，不构成投资、税务、贷款或法律建议。请以实际机构规则和最新数据为准。", "Results are for estimation and comparison only. They do not replace official tax, lending, legal, or investment guidance.");
  calculateAndRender();
}

window.applyCalculatorLanguage = applyCalculatorLanguage;

document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  const form = document.querySelector("[data-calculator-form]");
  if (!form) return;
  applyCalculatorLanguage();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAndRender();
  });
});
