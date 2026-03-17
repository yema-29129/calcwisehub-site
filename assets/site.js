const SITE = {
  name: "Global Calculator Hub",
  googleAnalyticsId: "G-6HV8RX1ERQ",
  adsenseClient: "",
  baiduAnalyticsSnippet: `<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?df4ca5e3a970fc53ae2bc1bff79ee581";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>`,
  copyrightYear: new Date().getFullYear(),
};

const SUPPORTED_LANGUAGES = [
  ["zh", "简体中文"],
  ["en", "English"],
  ["es", "Español"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["pt", "Português"],
  ["ru", "Русский"],
  ["ja", "日本語"],
  ["ko", "한국어"],
  ["ar", "العربية"],
  ["hi", "हिन्दी"],
];

const LANGUAGE_CODES = SUPPORTED_LANGUAGES.map(([code]) => code);
const LANGUAGE_PREFIXES = LANGUAGE_CODES.filter((code) => code !== "zh");

const COMMON_COPY = {
  zh: {
    brandTagline: "金融与生活计算器导航站",
    nav: ["首页", "计算器合集"],
    footerDesc: "提供贷款、税务、理财、房贷、汇率与生活测算工具，帮助用户快速完成日常决策。",
    footerLinks: ["关于我们", "使用条款", "隐私政策", "免责声明", "联系方式"],
    footerNote: "多语言金融计算器与生活工具导航站。",
    footerBrandTitle: "CalcwiseHub",
    footerBrandText: "整理贷款、税务、理财、房贷、汇率与生活测算工具，帮助你在做决定前先把关键数字算清楚。",
    footerRemindersTitle: "友情链接",
    footerReminders: [
      '<a href="https://tmhzz.com/" target="_blank" rel="noopener noreferrer">天马黑珍珠社群</a>',
      '<a href="https://vooqqqm.com/" target="_blank" rel="noopener noreferrer">HIAMA 投资理财社群</a>',
    ],
    footerInfoTitle: "网站信息",
    adTitle: "从这里开始更高效",
    adBody: "先试试最常用的贷款、个税、复利和退休工具，把关键数字一次看清，再决定下一步怎么做。",
    consent: "本站使用 Cookie 与本地存储来改善体验、统计访问表现并优化内容推荐。继续浏览即表示你理解本站的相关使用方式。",
    consentAccept: "继续浏览",
    consentDismiss: "关闭提示",
    langLabel: "语言",
  },
  en: {
    brandTagline: "Calculator directory for finance and daily life",
    nav: ["Home", "Calculators"],
    footerDesc: "Loan, tax, investing, mortgage, exchange-rate, and daily-life calculators in one multilingual hub.",
    footerLinks: ["About", "Terms", "Privacy", "Disclaimer", "Contact"],
    footerNote: "A multilingual directory for financial and practical calculators.",
    footerBrandTitle: "CalcwiseHub",
    footerBrandText: "A library of calculators for loans, tax, investing, mortgages, exchange rates, and everyday decisions.",
    footerRemindersTitle: "Partner Links",
    footerReminders: [
      '<a href="https://tmhzz.com/" target="_blank" rel="noopener noreferrer">Tianma Heizhenzhu Community</a>',
      '<a href="https://vooqqqm.com/" target="_blank" rel="noopener noreferrer">HIAMA Investing Community</a>',
    ],
    footerInfoTitle: "Site Info",
    adTitle: "Start with what matters",
    adBody: "Try the most-used loan, tax, compound-growth, and retirement tools first to see the key numbers before you decide.",
    consent: "This site uses cookies and local storage to improve experience, measure traffic, and refine content recommendations.",
    consentAccept: "Continue",
    consentDismiss: "Dismiss",
    langLabel: "Language",
  },
  es: {
    brandTagline: "Directorio de calculadoras financieras y de vida diaria",
    nav: ["Inicio", "Calculadoras"],
    footerDesc: "Calculadoras de préstamos, impuestos, inversión, hipoteca, divisas y vida diaria en un solo sitio multilingüe.",
    footerLinks: ["Nosotros", "Términos", "Privacidad", "Aviso", "Contacto"],
    footerNote: "Un directorio multilingüe de calculadoras financieras y prácticas.",
    adTitle: "Contenido patrocinado",
    adBody: "Esta zona puede mostrar contenido patrocinado, ubicaciones de socios o módulos publicitarios.",
    consent: "Este sitio usa cookies y almacenamiento local para mejorar la experiencia, medir tráfico y optimizar recomendaciones.",
    consentAccept: "Continuar",
    consentDismiss: "Cerrar",
    langLabel: "Idioma",
  },
  fr: {
    brandTagline: "Répertoire de calculateurs pour la finance et le quotidien",
    nav: ["Accueil", "Calculateurs"],
    footerDesc: "Prêts, impôts, investissement, hypothèque, change et outils pratiques dans un hub multilingue.",
    footerLinks: ["À propos", "Conditions", "Confidentialité", "Avertissement", "Contact"],
    footerNote: "Un annuaire multilingue de calculateurs financiers et pratiques.",
    adTitle: "Sponsorisé",
    adBody: "Cette zone peut afficher du contenu sponsorisé, des partenariats ou des modules publicitaires.",
    consent: "Ce site utilise des cookies et le stockage local pour améliorer l'expérience et mesurer l'audience.",
    consentAccept: "Continuer",
    consentDismiss: "Fermer",
    langLabel: "Langue",
  },
  de: {
    brandTagline: "Rechnerverzeichnis für Finanzen und Alltag",
    nav: ["Start", "Rechner"],
    footerDesc: "Darlehen, Steuern, Investments, Hypotheken, Wechselkurse und Alltagsrechner in einer mehrsprachigen Plattform.",
    footerLinks: ["Über uns", "Nutzungsbedingungen", "Datenschutz", "Haftungsausschluss", "Kontakt"],
    footerNote: "Ein mehrsprachiges Verzeichnis für Finanz- und Alltagsrechner.",
    adTitle: "Anzeige",
    adBody: "Dieser Bereich kann gesponserte Inhalte, Partnerplatzierungen oder Anzeigen aufnehmen.",
    consent: "Diese Website nutzt Cookies und lokalen Speicher, um die Nutzung zu verbessern und Reichweite zu messen.",
    consentAccept: "Weiter",
    consentDismiss: "Schließen",
    langLabel: "Sprache",
  },
  pt: {
    brandTagline: "Diretório de calculadoras financeiras e do dia a dia",
    nav: ["Início", "Calculadoras"],
    footerDesc: "Calculadoras de empréstimo, impostos, investimento, hipoteca, câmbio e rotina em um hub multilíngue.",
    footerLinks: ["Sobre", "Termos", "Privacidade", "Aviso", "Contato"],
    footerNote: "Um diretório multilíngue de calculadoras financeiras e práticas.",
    adTitle: "Patrocinado",
    adBody: "Esta área pode exibir conteúdo patrocinado, parcerias ou módulos de anúncios.",
    consent: "Este site usa cookies e armazenamento local para melhorar a experiência e medir o tráfego.",
    consentAccept: "Continuar",
    consentDismiss: "Fechar",
    langLabel: "Idioma",
  },
  ru: {
    brandTagline: "Каталог калькуляторов для финансов и повседневной жизни",
    nav: ["Главная", "Калькуляторы"],
    footerDesc: "Кредиты, налоги, инвестиции, ипотека, валюты и бытовые калькуляторы на одном многоязычном сайте.",
    footerLinks: ["О нас", "Условия", "Конфиденциальность", "Отказ", "Контакты"],
    footerNote: "Многоязычный каталог финансовых и практических калькуляторов.",
    adTitle: "Партнерский блок",
    adBody: "В этой области можно показывать рекламные или партнерские материалы.",
    consent: "Сайт использует cookie и локальное хранилище для улучшения опыта и анализа трафика.",
    consentAccept: "Продолжить",
    consentDismiss: "Закрыть",
    langLabel: "Язык",
  },
  ja: {
    brandTagline: "金融と生活のための計算ツール集",
    nav: ["ホーム", "計算機一覧"],
    footerDesc: "ローン、税金、投資、住宅ローン、為替、日常計算をまとめた多言語サイトです。",
    footerLinks: ["私たちについて", "利用規約", "プライバシー", "免責事項", "お問い合わせ"],
    footerNote: "金融と実用計算ツールの多言語ディレクトリ。",
    adTitle: "スポンサー",
    adBody: "このエリアにはスポンサー情報や広告モジュールを表示できます。",
    consent: "本サイトは、利便性向上やアクセス分析のため Cookie とローカルストレージを使用します。",
    consentAccept: "続行",
    consentDismiss: "閉じる",
    langLabel: "言語",
  },
  ko: {
    brandTagline: "금융과 일상 계산기 디렉터리",
    nav: ["홈", "계산기 모음"],
    footerDesc: "대출, 세금, 투자, 주택담보대출, 환율, 생활 계산기를 한곳에 모은 다국어 사이트입니다.",
    footerLinks: ["소개", "이용약관", "개인정보", "면책", "문의"],
    footerNote: "금융 및 실용 계산기를 위한 다국어 디렉터리.",
    adTitle: "스폰서 영역",
    adBody: "이 영역에는 스폰서 콘텐츠, 제휴 배너 또는 광고 모듈을 표시할 수 있습니다.",
    consent: "이 사이트는 사용자 경험 개선과 트래픽 분석을 위해 쿠키와 로컬 저장소를 사용합니다.",
    consentAccept: "계속",
    consentDismiss: "닫기",
    langLabel: "언어",
  },
  ar: {
    brandTagline: "دليل حاسبات للمال والحياة اليومية",
    nav: ["الرئيسية", "الحاسبات"],
    footerDesc: "قروض وضرائب واستثمار ورهن عقاري وتحويل عملات وحاسبات يومية في موقع متعدد اللغات.",
    footerLinks: ["من نحن", "الشروط", "الخصوصية", "إخلاء المسؤولية", "اتصل بنا"],
    footerNote: "دليل متعدد اللغات للحاسبات المالية والعملية.",
    adTitle: "محتوى برعاية",
    adBody: "يمكن عرض محتوى دعائي أو شراكات أو وحدات إعلانية في هذه المساحة.",
    consent: "يستخدم هذا الموقع ملفات تعريف الارتباط والتخزين المحلي لتحسين التجربة وقياس الزيارات.",
    consentAccept: "متابعة",
    consentDismiss: "إغلاق",
    langLabel: "اللغة",
  },
  hi: {
    brandTagline: "वित्त और दैनिक जीवन के लिए कैलकुलेटर निर्देशिका",
    nav: ["होम", "कैलकुलेटर"],
    footerDesc: "लोन, टैक्स, निवेश, मॉर्गेज, विनिमय दर और दैनिक उपयोग के कैलकुलेटर एक बहुभाषी साइट में।",
    footerLinks: ["हमारे बारे में", "शर्तें", "गोपनीयता", "अस्वीकरण", "संपर्क"],
    footerNote: "वित्तीय और उपयोगी कैलकुलेटरों की बहुभाषी निर्देशिका।",
    adTitle: "प्रायोजित क्षेत्र",
    adBody: "इस क्षेत्र में प्रायोजित सामग्री, साझेदारी या विज्ञापन मॉड्यूल दिखाए जा सकते हैं।",
    consent: "यह साइट अनुभव बेहतर बनाने, ट्रैफिक मापने और सामग्री सुधारने के लिए कुकी और लोकल स्टोरेज का उपयोग करती है।",
    consentAccept: "जारी रखें",
    consentDismiss: "बंद करें",
    langLabel: "भाषा",
  },
};

const PAGE_COPY = {
  "/": {
    zh: {
      title: "全球计算器中心 - 贷款、税务、理财、房贷与生活工具合集",
      description: "一个面向全球用户的多语言计算器网站，提供贷款、个税、公积金贷款、定投复利、退休、提前还款、存款、汇率、国债收益率等工具。",
      keywords: "计算器,贷款计算器,房贷计算器,税务计算器,复利计算器,退休计算器,汇率转换,全球计算器",
      items: {
        "hero-title": "买房先算月供，涨薪先算到手，投资先看复利",
        "hero-text": "贷款、个税、退休、复利、汇率这些关键决策，都值得在动手之前先算清楚。这里把复杂公式做成清晰直观的工具页，让你更快看懂结果，也更安心做决定。",
        "hero-primary": "浏览全部计算器",
        "hero-secondary": "查看使用说明",
        "metric-1-value": "101+",
        "metric-1-text": "覆盖贷款、投资、税务、健康、数学与生活等高频场景",
        "metric-2-value": "3秒",
        "metric-2-text": "输入关键数字后，更快看到结果与变化趋势",
        "metric-3-value": "全球可用",
        "metric-3-text": "自动匹配语言与地区，打开就能直接开始试算",
        "metric-4-value": "值得收藏",
        "metric-4-text": "同一工具可反复改参数比较，适合真正做决定前回来再算",
        "sec1-badge": "核心入口",
        "sec1-title": "把重要的人生数字，提前算明白",
        "sec1-text": "无论是准备买房、比较 offer、开始定投，还是规划退休，这里都能帮你把关键数字拆开看清楚，再决定下一步怎么做。",
        "card-loan-title": "贷款计算器",
        "card-loan-text": "看清月供、总利息和总成本，买房买车前先把未来 10 年到 30 年的压力算明白。",
        "card-tax-title": "个税计算器",
        "card-tax-text": "输入税前收入和扣除项，立刻看到真实到手金额，谈薪、换工作、跨城市决策更有底。",
        "card-prepay-title": "提前还款房贷计算器",
        "card-prepay-text": "一键比较降低月供和缩短年限两种路径，找到更适合你家庭现金流的提前还款策略。",
        "sec2a-badge": "看得更清楚",
        "sec2a-title": "不只是算出一个结果，而是把结果讲明白",
        "sec2a-item1": "算完之后，页面会继续给你图表、对比表、常见问题和结果说明，帮你知道数字为什么会这样变化。",
        "sec2a-item2": "你不需要来回切换多个网页查解释，同一页里就能看懂月供、税后收入、复利增长或退休缺口背后的逻辑。",
        "sec2a-item3": "当结果看得懂、看得全、还能反复改参数比较时，这个工具自然更值得收藏，也更适合在真正做决定前回来再算一次。",
        "sec2b-badge": "用得更顺手",
        "sec2b-title": "打开就能开始算，越用越贴近你的真实场景",
        "sec2b-item1": "页面会根据你的语言和地区，优先展示更熟悉的币种、单位和说明方式，减少刚打开时的陌生感。",
        "sec2b-item2": "无论你是在看房贷、做预算、算工资到手，还是规划长期投资，都能更快进入“这页就是我现在需要的工具”状态。",
        "sec2b-item3": "当一个站点能在不同阶段都帮你省时间、看清风险、找到更合适的数字方案，它就不只是工具，而会变成你愿意长期使用的决策助手。",
      },
    },
    en: {
      title: "Global Calculator Hub - Loans, Tax, Investing, Mortgage and Daily Tools",
      description: "A multilingual calculator website for global users with loan, tax, provident-fund loan, SIP compound, retirement, prepayment, deposit, exchange-rate and bond-yield tools.",
      keywords: "calculator hub,loan calculator,tax calculator,compound calculator,retirement calculator,global calculator site",
      items: {
        "hero-title": "Check the payment first, the take-home pay next, and the compounding path before you invest",
        "hero-text": "Loans, taxes, retirement, compounding, and exchange rates all shape real-life decisions. These pages turn complex formulas into tools that are easier to read, easier to trust, and easier to act on.",
        "hero-primary": "Browse all calculators",
        "hero-secondary": "Read the guide",
        "metric-1-value": "101+",
        "metric-1-text": "Covers loans, investing, tax, health, math, and everyday decisions",
        "metric-2-value": "Fast",
        "metric-2-text": "Enter the key numbers and get results with clearer comparisons right away",
        "metric-3-value": "Global",
        "metric-3-text": "Language and region defaults help each page feel ready from the first visit",
        "metric-4-value": "Save it",
        "metric-4-text": "Come back, adjust inputs, and compare scenarios before making an expensive decision",
        "sec1-badge": "Core entry",
        "sec1-title": "See the numbers clearly before the decision gets expensive",
        "sec1-text": "Whether you are comparing a mortgage, checking a raise, starting an investment plan, or preparing for retirement, these calculators help you turn uncertainty into something measurable.",
        "card-loan-title": "Loan Calculator",
        "card-loan-text": "Understand monthly payment, total interest, and long-term cost before committing to a major loan decision.",
        "card-tax-title": "Income Tax Calculator",
        "card-tax-text": "Reveal real take-home pay from salary and deductions so compensation decisions feel grounded, not guessed.",
        "card-prepay-title": "Mortgage Prepayment Calculator",
        "card-prepay-text": "Compare lower-payment and shorter-term strategies to choose the prepayment path that fits your life better.",
        "sec2a-badge": "See More",
        "sec2a-title": "More than an answer box",
        "sec2a-item1": "Each calculator goes beyond one result and keeps explaining the outcome with charts, tables, FAQs, and practical guidance.",
        "sec2a-item2": "That makes it easier to understand why the number changes, not just what the number is.",
        "sec2a-item3": "When a page feels complete, clear, and easy to compare, it becomes something people save and revisit before making expensive decisions.",
        "sec2b-badge": "Feel Local",
        "sec2b-title": "Fast to use, easier to trust, closer to real life",
        "sec2b-item1": "Language, region, currency, and unit defaults help the site feel familiar from the first visit.",
        "sec2b-item2": "That lowers friction and helps people move from curiosity to confident comparison much faster.",
        "sec2b-item3": "If the same site helps with salary choices, mortgage planning, budgeting, and investing, it stops feeling like a one-off tool and starts feeling like a reliable decision companion.",
      },
    },
  },
  "/calculators/": {
    zh: {
      title: "计算器合集 - 全球计算器中心",
      description: "浏览贷款房产、投资理财、储蓄现金流、税务、信用卡、健康与常用工具计算器。",
      keywords: "计算器合集,贷款房产计算器,投资理财计算器,税务计算器,健康计算器,数学工具计算器",
      items: {
        "calc-badge": "统一导航页",
        "calc-title": "计算器合集",
        "calc-text": "所有工具都拥有独立页面，并按贷款房产、投资理财、税务、健康和实用工具分类整理，方便检索、收藏和反复使用。",
        "calc-search-placeholder": "搜索：房贷、ETF、预算、信用卡、单位换算...",
        "calc-guide-link": "查看使用说明",
      },
    },
    en: {
      title: "Calculator Directory - Global Calculator Hub",
      description: "Browse calculators across loans, housing, investing, cash flow, tax, credit cards, health, and practical utilities.",
      keywords: "calculator directory,finance calculators,housing calculators,health calculators,math calculators",
      items: {
        "calc-badge": "Directory page",
        "calc-title": "Calculator Directory",
        "calc-text": "Every tool has its own dedicated page and is organized into clear categories like housing, investing, tax, health, and practical utilities.",
        "calc-search-placeholder": "Search: mortgage, ETF, budget, credit card, unit conversion...",
        "calc-guide-link": "Read the guide",
      },
    },
  },
};

const STATIC_PAGE_FALLBACK = {
  zh: {
    "/about/": ["关于我们", "我们持续整理与更新贷款、税务、理财和生活测算工具，让用户可以更快完成判断。"],
    "/privacy/": ["隐私政策", "我们尊重用户隐私，站点主要使用基础统计、Cookie 和本地存储来改善体验与内容展示。"],
    "/contact/": ["联系方式", "如需反馈工具问题、合作咨询或内容建议，可通过页面公开渠道联系。"],
    "/guide/": ["使用说明", "从合集页进入具体工具，填写参数后即可在结果区查看测算结果。"],
    "/terms/": ["使用条款", "访问和使用本站工具即表示你理解其仅用于一般信息参考与测算。"],
    "/disclaimer/": ["免责声明", "本站结果仅供参考，实际业务规则、价格、税率与审批条件请以官方信息为准。"],
    "/404.html": ["页面未找到", "你访问的内容可能已经变更，可以返回首页或进入计算器合集继续浏览。"],
  },
  en: {
    "/about/": ["About", "We curate calculators for loans, taxes, investing, and everyday decision-making so users can evaluate scenarios quickly."],
    "/privacy/": ["Privacy", "We respect user privacy and use essential analytics, cookies, and local storage to improve the site experience."],
    "/contact/": ["Contact", "Use the public contact channels on this page for feedback, business inquiries, or content suggestions."],
    "/guide/": ["Guide", "Open a calculator from the directory, enter your assumptions, and review the result panel instantly."],
    "/terms/": ["Terms", "By using this site, you understand that the tools are provided for general informational estimation only."],
    "/disclaimer/": ["Disclaimer", "Results are for reference only. Always rely on official rates, contracts, institutions, and regulations."],
    "/404.html": ["Page not found", "The page may have moved. Return home or open the calculator directory to continue browsing."],
  },
};

const STATIC_PAGE_CONTENT = {
  "/about/": {
    zh: {
      title: "关于我们 - CalcwiseHub",
      description: "了解 CalcwiseHub 的站点定位、内容范围、更新原则与服务方式。",
      keywords: "关于我们,calcwisehub,计算器网站,金融计算器平台,生活计算器平台",
      badge: "品牌信息",
      h1: "关于我们",
      html: `
        <p>欢迎访问 <strong>CalcwiseHub</strong>。我们致力于打造一个面向日常决策场景的计算器与信息工具站，帮助用户在买房、贷款、个税、储蓄、复利投资、退休规划、汇率换算及其他生活财务场景中，更快看清关键数字并完成初步判断。</p>
        <p>我们相信，很多复杂决策并不是因为公式难，而是因为信息分散、解释不清、比较不方便。为此，我们把常见测算场景整理成独立网页工具，并尽量配套结果说明、图表分析、常见问题与延伸阅读，让用户不只“算出一个数字”，还能理解数字背后的含义。</p>
        <h2>我们提供什么</h2>
        <ul class="list">
          <li>贷款、房贷、公积金贷款、提前还款等购房相关测算工具。</li>
          <li>个税、收入、预算、负债收入比等个人现金流判断工具。</li>
          <li>定投复利、储蓄目标、存款、退休等长期规划工具。</li>
          <li>汇率、收益率、通胀、BMI 等其他常见生活与决策工具。</li>
        </ul>
        <h2>我们的内容原则</h2>
        <ul class="list">
          <li>优先提供高频、实用、可解释、可重复使用的工具页面。</li>
          <li>尽量以清晰的结构呈现结果、说明、图表和常见问题，减少理解成本。</li>
          <li>持续更新页面内容，但不承诺所有规则、税率、利率、政策与市场数据实时同步。</li>
          <li>尊重用户体验，努力让工具、内容与广告保持合理边界。</li>
        </ul>
        <h2>服务说明</h2>
        <p>本站内容主要用于信息整理、经验分享、测算参考与学习研究，不构成投资建议、税务建议、法律建议、贷款审批建议或任何形式的官方承诺。对于涉及实际交易、报税、签约、借贷、医疗或其他重要事项，请以相关机构、专业人士及正式文件为准。</p>
        <h2>联系方式</h2>
        <p>如果您对本站内容、工具逻辑、版权问题或合作事宜有疑问，欢迎通过公开联系方式与我们联系。我们会在合理范围内持续优化站点体验与内容质量。</p>
        <p><strong>更新日期：</strong>2026年3月17日</p>
      `,
    },
    en: {
      title: "About - CalcwiseHub",
      description: "Learn about CalcwiseHub, its calculator focus, update principles, and how the site is maintained.",
      keywords: "about calcwisehub,calculator website,finance calculators,life calculators",
      badge: "About the brand",
      h1: "About",
      html: `
        <p>Welcome to <strong>CalcwiseHub</strong>. We are building a calculator and information site for everyday decisions so users can understand key numbers faster when comparing loans, taxes, saving plans, compounding, retirement goals, exchange rates, and other real-life scenarios.</p>
        <p>Many difficult decisions are not hard because the formulas are impossible. They are hard because the information is scattered, the explanation is unclear, and comparisons take too much effort. That is why we turn common decision problems into dedicated calculator pages with breakdowns, charts, FAQs, and supporting guidance.</p>
        <h2>What we provide</h2>
        <ul class="list">
          <li>Loan, mortgage, subsidized housing-loan, and prepayment tools.</li>
          <li>Income tax, salary, budgeting, and debt-to-income tools.</li>
          <li>Compound-growth, savings-goal, deposit, and retirement planning tools.</li>
          <li>Exchange-rate, yield, inflation, BMI, and other practical decision tools.</li>
        </ul>
        <h2>Our content principles</h2>
        <ul class="list">
          <li>We prioritize pages that are practical, explainable, and worth revisiting.</li>
          <li>We try to present results with enough structure, charts, and FAQs to lower interpretation cost.</li>
          <li>We keep improving the site, but we do not promise that every market rule, tax rate, interest rate, or policy is updated in real time.</li>
          <li>We respect user experience and try to keep a reasonable boundary between tools, content, and ads.</li>
        </ul>
        <h2>Service scope</h2>
        <p>The content on this site is intended for information organization, early-stage estimation, learning, and comparison. It does not replace official investment, tax, legal, medical, or lending advice. For real transactions, filings, contracts, borrowing, healthcare, or other important decisions, always confirm the latest official information and professional guidance.</p>
        <h2>Contact</h2>
        <p>If you have questions about site content, calculator logic, copyright issues, or partnerships, please use the public contact details on this site. We continue improving the experience and content quality over time.</p>
        <p><strong>Updated:</strong> March 17, 2026</p>
      `,
    },
  },
  "/privacy/": {
    zh: {
      title: "隐私政策 - CalcwiseHub",
      description: "CalcwiseHub 隐私政策，说明站点在访问统计、Cookie、广告与联系场景中的数据处理方式。",
      keywords: "隐私政策,calcwisehub,网站隐私政策,cookie政策,数据说明",
      badge: "合规说明",
      h1: "隐私政策",
      html: `
        <p>欢迎您访问 <strong>CalcwiseHub</strong>（网址：<strong>https://calcwisehub.com</strong>）。我们重视用户隐私，并承诺在合法、正当、必要的范围内处理与站点运行相关的数据。本政策用于说明我们可能收集哪些信息、如何使用这些信息，以及您可行使的相关权利。</p>
        <p>当您继续访问或使用本站时，即表示您已阅读并理解本隐私政策。</p>
        <h2>一、我们可能收集的信息</h2>
        <ul class="list">
          <li>访问日志信息，例如访问时间、访问页面、来源渠道、设备类型、浏览器类型、操作系统、IP 地址、语言设置和停留时长等基础访问数据。</li>
          <li>Cookie、本地存储或类似技术，用于记住语言偏好、改善页面体验、统计访问表现及辅助广告展示。</li>
          <li>您主动提交的信息，例如通过联系方式页发送给我们的邮箱内容、咨询信息或反馈内容。</li>
        </ul>
        <h2>二、我们如何使用这些信息</h2>
        <ul class="list">
          <li>保障站点正常运行，提升页面性能、兼容性和访问稳定性。</li>
          <li>记住您选择的语言、地区或其他基础偏好设置，优化后续使用体验。</li>
          <li>统计页面访问表现，用于分析受欢迎内容、改进工具结构与内容布局。</li>
          <li>在站点接入广告服务时，用于广告展示、频次控制和广告效果衡量。</li>
          <li>响应您主动发起的咨询、建议、反馈或版权投诉。</li>
        </ul>
        <h2>三、关于 Cookie 与本地存储</h2>
        <p>本站可能会使用 Cookie、本地存储或类似技术保存必要的偏好信息，例如语言选择、地区识别结果或基础访问行为统计。这些技术通常不直接包含您的真实身份信息，但可能用于识别同一浏览器的重复访问。</p>
        <p>您可以通过浏览器设置清除、限制或拒绝 Cookie。但需要说明的是，部分功能在关闭相关技术后可能无法保持最优体验。</p>
        <h2>四、广告与第三方服务</h2>
        <p>本站可能接入第三方广告与统计服务，例如 Google AdSense、Google Search Console、Bing Webmaster Tools、百度统计或其他类似服务。这些服务可能依据其自身规则收集设备标识、Cookie、访问行为或广告交互信息，用于内容统计、流量分析、广告投放与效果评估。</p>
        <p>对于第三方服务如何处理数据，请以其各自的隐私政策和服务条款为准。本站无法控制第三方平台的数据处理方式。</p>
        <h2>五、外部链接与嵌入内容</h2>
        <p>本站部分页面可能包含指向第三方网站的链接，或展示来自第三方平台的嵌入内容。您一旦点击或访问这些内容，即可能受到相应第三方网站政策的约束。对于第三方网站的隐私实践、安全性或内容准确性，本站不承担责任。</p>
        <h2>六、信息保留与安全</h2>
        <p>我们会在实现本政策所述目的所需的合理期限内保留相关数据，并采取合理措施防止数据被未经授权访问、披露、篡改或丢失。但互联网传输和存储无法保证绝对安全，您理解并接受相关风险的客观存在。</p>
        <h2>七、您的权利</h2>
        <p>对于您主动提供给我们的联系信息或反馈内容，您可以通过公开联系方式联系我们，要求查询、更正或删除在合理范围内可处理的信息。对于 Cookie 与本地存储，您也可以自行通过浏览器设置进行控制或清除。</p>
        <h2>八、未成年人说明</h2>
        <p>本站主要面向具备独立判断能力的普通互联网用户。若未成年人使用本站，应在监护人指导下访问和理解相关内容。</p>
        <h2>九、政策更新</h2>
        <p>我们可能会根据站点功能、法律要求或第三方服务变化对本政策进行更新。更新后的版本将发布在本页面，并以页面显示的更新时间为准。</p>
        <p><strong>更新日期：</strong>2026年3月17日</p>
      `,
    },
    en: {
      title: "Privacy Policy - CalcwiseHub",
      description: "CalcwiseHub privacy policy explaining how the site handles analytics, cookies, ads, and contact-related data.",
      keywords: "privacy policy,calcwisehub,cookies,analytics,adsense policy",
      badge: "Compliance",
      h1: "Privacy Policy",
      html: `
        <p>Welcome to <strong>CalcwiseHub</strong> (<strong>https://calcwisehub.com</strong>). We respect user privacy and handle site-related data only in lawful, legitimate, and necessary ways. This policy explains what information may be collected, how it may be used, and what choices are available to you.</p>
        <p>By continuing to access or use this site, you confirm that you have read and understood this privacy policy.</p>
        <h2>1. Information we may collect</h2>
        <ul class="list">
          <li>Basic access-log data such as visit time, visited pages, referral source, device type, browser type, operating system, IP address, language settings, and time on site.</li>
          <li>Cookies, local storage, or similar technologies used to remember language preferences, improve page experience, measure traffic, and support ad delivery.</li>
          <li>Information you actively submit, such as emails or feedback sent through the public contact channels on this site.</li>
        </ul>
        <h2>2. How we use this information</h2>
        <ul class="list">
          <li>To keep the site running and improve performance, compatibility, and reliability.</li>
          <li>To remember language, region, and other basic preferences for a smoother experience.</li>
          <li>To measure page performance and improve the structure, coverage, and usefulness of the tools.</li>
          <li>To support ad serving, frequency control, and performance measurement when third-party ad services are enabled.</li>
          <li>To respond to feedback, business inquiries, copyright requests, or other messages you send to us.</li>
        </ul>
        <h2>3. Cookies and local storage</h2>
        <p>This site may use cookies, local storage, or similar technologies to store basic preferences such as language, detected region, or non-sensitive usage signals. These technologies do not usually identify you directly, but they may help recognize repeated visits from the same browser.</p>
        <p>You can clear, restrict, or reject cookies through your browser settings. Please note that doing so may reduce the quality of some site functions.</p>
        <h2>4. Ads and third-party services</h2>
        <p>This site may use third-party services such as Google AdSense, Google Search Console, Bing Webmaster Tools, Baidu Tongji, or similar analytics and ad platforms. These services may process cookies, device identifiers, visit behavior, or ad interactions according to their own policies.</p>
        <p>For details on how third-party services handle data, please review their own privacy policies and service terms. This site does not control third-party processing practices.</p>
        <h2>5. External links and embedded content</h2>
        <p>Some pages may link to third-party sites or include embedded content from other platforms. Once you visit those resources, their own rules and privacy policies may apply. We are not responsible for the privacy or security practices of third-party websites.</p>
        <h2>6. Retention and security</h2>
        <p>We retain information only for a reasonable period required to achieve the purposes described in this policy, and we take reasonable steps to protect it. However, no internet transmission or storage system can be guaranteed to be completely secure.</p>
        <h2>7. Your choices and rights</h2>
        <p>For information that you actively send to us, you may contact us through the public contact channels on this site and request review, correction, or deletion where reasonably possible. You can also manage cookies and local storage through your browser settings.</p>
        <h2>8. Children</h2>
        <p>This site is intended for general users who can make independent judgments. Minors should access and use the site with guidance from a parent or guardian.</p>
        <h2>9. Policy updates</h2>
        <p>We may update this policy when site functions, legal requirements, or third-party services change. The latest version published on this page will apply.</p>
        <p><strong>Updated:</strong> March 17, 2026</p>
      `,
    },
  },
  "/contact/": {
    zh: {
      title: "联系方式 - CalcwiseHub",
      description: "联系 CalcwiseHub，反馈问题、合作咨询、内容修正与广告合作。",
      keywords: "联系方式,calcwisehub,联系我们,合作咨询,问题反馈",
      badge: "联系页",
      h1: "联系方式",
      html: `
        <p>如需反馈计算结果、指出内容问题、提出合作意向或建议新增工具，可以通过以下公共渠道联系站点团队。</p>
        <ul class="list">
          <li>邮箱：mashuya29129@gmail.com</li>
          <li>商务合作：mashuya29129@gmail.com</li>
          <li>内容反馈：mashuya29129@gmail.com</li>
        </ul>
      `,
    },
    en: {
      title: "Contact - CalcwiseHub",
      description: "Contact CalcwiseHub for feedback, partnerships, corrections, or advertising inquiries.",
      keywords: "contact calcwisehub,feedback,partnership,advertising inquiry",
      badge: "Contact",
      h1: "Contact",
      html: `
        <p>If you want to report a calculator issue, suggest a new tool, discuss a partnership, or request a content correction, you can use the public contact channels below.</p>
        <ul class="list">
          <li>Email: mashuya29129@gmail.com</li>
          <li>Business inquiries: mashuya29129@gmail.com</li>
          <li>Content feedback: mashuya29129@gmail.com</li>
        </ul>
      `,
    },
  },
  "/guide/": {
    zh: {
      title: "使用说明与部署指南 - CalcwiseHub",
      description: "介绍如何使用站内计算器、理解结果区并更高效地完成多次测算比较。",
      keywords: "使用说明,calcwisehub,计算器使用方法,网站使用指南,工具说明",
      badge: "使用指南",
      h1: "使用说明与部署指南",
      html: `
        <h2>如何使用本站</h2>
        <p><a class="button" href="/calculators/">立即进入计算器合集</a></p>
        <ul class="list">
          <li>先从计算器合集页进入具体工具。</li>
          <li>填写参数后提交表单，结果会在右侧实时展示。</li>
          <li>页面结果适合做初步估算，不应替代正式合同或专业意见。</li>
        </ul>
        <h2>使用建议</h2>
        <ul class="list">
          <li>同一项目可以尝试不同参数，多次比较月供、收益率或目标差额。</li>
          <li>涉及贷款、税率、债券价格和汇率时，请结合实际机构的最新规则与报价。</li>
          <li>如果你来自不同国家或地区，可以先切换顶部语言，再开始输入数据。</li>
        </ul>
      `,
    },
    en: {
      title: "Guide - CalcwiseHub",
      description: "Learn how to use the calculators, understand the result panel, and compare scenarios more efficiently.",
      keywords: "guide calcwisehub,calculator guide,how to use calculator pages",
      badge: "Guide",
      h1: "Guide",
      html: `
        <h2>How to use the site</h2>
        <p><a class="button" href="/calculators/">Open the calculator directory</a></p>
        <ul class="list">
          <li>Start from the calculator directory and open the tool that matches your scenario.</li>
          <li>Enter your assumptions and submit the form. The key result panel updates on the page.</li>
          <li>Results are useful for first-pass estimation and comparison, but they do not replace official contracts or professional advice.</li>
        </ul>
        <h2>Usage tips</h2>
        <ul class="list">
          <li>Try different assumptions for the same scenario to compare payments, returns, or financial gaps.</li>
          <li>For loans, taxes, bond yields, or exchange rates, always confirm the latest official rules and market data.</li>
          <li>If you are visiting from a different region, switch the site language first and then start entering values.</li>
        </ul>
      `,
    },
  },
  "/terms/": {
    zh: {
      title: "使用条款 - CalcwiseHub",
      description: "CalcwiseHub 的使用条款，说明站点服务边界、用户责任和内容使用原则。",
      keywords: "使用条款,calcwisehub,网站条款,服务条款,用户协议",
      badge: "合规页",
      h1: "使用条款",
      html: `
        <p>访问和使用本站，即表示你理解并同意本站仅提供一般信息展示和工具测算服务。用户应自行判断页面结果是否适用于自身场景，并对基于本站信息作出的决定负责。</p>
        <ul class="list">
          <li>本站保留更新、暂停或移除任意计算器页面的权利。</li>
          <li>用户不得利用本站从事违法、侵权或破坏性行为。</li>
          <li>本站内容不构成专业投资、法律、医疗、税务或贷款建议。</li>
        </ul>
      `,
    },
    en: {
      title: "Terms - CalcwiseHub",
      description: "Terms of use for CalcwiseHub, including service scope, user responsibility, and content-use principles.",
      keywords: "terms of use,calcwisehub,site terms,user responsibility",
      badge: "Terms",
      h1: "Terms",
      html: `
        <p>By accessing and using this site, you understand and accept that the tools are provided for general information display and estimation only. You are responsible for deciding whether a page result fits your situation and for any decision made based on site content.</p>
        <ul class="list">
          <li>We may update, suspend, or remove calculator pages at any time.</li>
          <li>Users may not use the site for unlawful, infringing, or destructive purposes.</li>
          <li>Site content does not replace professional investment, legal, medical, tax, or lending advice.</li>
        </ul>
      `,
    },
  },
  "/disclaimer/": {
    zh: {
      title: "免责声明 - CalcwiseHub",
      description: "CalcwiseHub 免责声明，说明站点内容、工具结果、广告展示与外部链接的责任边界。",
      keywords: "免责声明,calcwisehub,网站免责声明,工具免责声明,结果免责声明",
      badge: "使用提示",
      h1: "免责声明",
      html: `
        <p>欢迎您访问 <strong>CalcwiseHub</strong>（https://calcwisehub.com）。在您浏览和使用本站前，请仔细阅读以下免责声明内容。您一旦访问、浏览或使用本站，即表示您已阅读、理解并同意受本声明约束。</p>
        <h2>一、信息与工具内容说明</h2>
        <p>本站展示的内容，包括但不限于文章、说明文字、观点整理、图表、计算器工具、公式演示、结果估算、经验性建议及相关页面信息，仅用于信息分享、学习参考与初步测算，不构成任何形式的投资建议、税务建议、法律建议、医疗建议、贷款审批建议或官方指导意见。</p>
        <p>本站力求内容清晰、准确并保持更新，但无法保证所有信息在任何时间点都完全准确、完整、实时或适用于您的具体情况。您应结合自身情况独立判断，并在必要时咨询相关专业人士或官方机构。</p>
        <h2>二、工具结果说明</h2>
        <p>本站的贷款、个税、复利、退休、汇率、收益率、BMI 及其他计算器结果，均基于用户输入信息、预设参数或通用公式自动生成，仅适合作为演示、估算、比较与辅助判断之用。实际结果可能因利率、税率、地区政策、市场报价、机构规则、合同条款、审批条件、舍入方式或数据更新时间不同而产生差异。</p>
        <p>因此，任何涉及借贷、投资、报税、医疗、签约、交易、购房、移居或重大财务安排的决定，请务必以银行、税务机关、政府部门、交易平台、医疗机构或其他相关主体公布的正式信息为准。</p>
        <h2>三、版权声明</h2>
        <p>本站原创内容的著作权归本站所有。未经明确授权，任何单位或个人不得擅自转载、复制、修改、传播或用于商业用途。</p>
        <h2>四、外部链接说明</h2>
        <p>本站可能包含指向第三方网站、平台、产品页面或外部服务的链接，仅为用户提供更多参考信息或使用便利。对于第三方网站的内容准确性、合法性、可用性、安全性、隐私政策及后续服务，本站不作任何保证，也不承担任何责任。</p>
        <h2>五、广告与推广说明</h2>
        <p>本站部分页面可能展示由第三方广告平台、联盟平台或合作方提供的广告、推广信息、赞助内容或推荐模块。相关内容由相应提供方负责，其真实性、合法性、有效性及后续履约责任应由相关主体自行承担。</p>
        <h2>六、责任限制</h2>
        <p>对于因用户依据本站内容或工具结果作出的个人决策、政策变动、市场变化、数据延迟、第三方接口问题、输入错误或理解偏差所导致的任何后果，本站在法律允许范围内不承担责任。</p>
        <h2>七、最终解释与更新</h2>
        <p>本站有权根据业务调整、法律要求或站点功能变化，对本免责声明进行更新或修订。更新后的版本自发布之日起生效。</p>
        <p><strong>更新日期：</strong>2026年3月17日</p>
      `,
    },
    en: {
      title: "Disclaimer - CalcwiseHub",
      description: "CalcwiseHub disclaimer explaining the limits of responsibility for site content, calculator results, ads, and external links.",
      keywords: "disclaimer,calcwisehub,tool disclaimer,result disclaimer",
      badge: "Important notice",
      h1: "Disclaimer",
      html: `
        <p>Welcome to <strong>CalcwiseHub</strong> (https://calcwisehub.com). Before using this site, please review the following disclaimer carefully. By visiting, browsing, or using the site, you confirm that you have read, understood, and accepted this statement.</p>
        <h2>1. Site information and tool content</h2>
        <p>Site content including articles, notes, charts, calculator tools, formula demonstrations, estimated outputs, and related information is provided for information sharing, learning, and preliminary estimation only. It does not replace investment, tax, legal, medical, lending, or other official advice.</p>
        <p>We try to keep the content clear and reasonably accurate, but we cannot guarantee that every rule, market value, rate, or data point is always complete, current, or suitable for your specific situation.</p>
        <h2>2. About calculator results</h2>
        <p>Results from loan, tax, compound-growth, retirement, exchange-rate, yield, BMI, and other calculators are generated from user inputs, preset assumptions, or general formulas. They are designed for illustration, comparison, and early-stage decision support only.</p>
        <p>Actual outcomes may differ because of interest rates, tax rules, local policy, market pricing, institutional rules, contract details, approval standards, rounding methods, or data timing. For real transactions, filings, borrowing, investment, contracts, healthcare, or relocation, always rely on the latest official information and qualified professional advice.</p>
        <h2>3. Copyright</h2>
        <p>Original site content remains the property of this site unless stated otherwise. No organization or individual may reproduce, copy, modify, distribute, or use original content for commercial purposes without clear authorization.</p>
        <h2>4. External links</h2>
        <p>This site may include links to third-party websites, product pages, or services for convenience and reference. We do not guarantee the accuracy, legality, availability, security, privacy practices, or follow-up service of third-party websites.</p>
        <h2>5. Advertising and promotion</h2>
        <p>Some pages may display advertising, sponsored content, or partner placements provided by third-party ad networks or collaborators. Those materials are the responsibility of the relevant provider, not this site.</p>
        <h2>6. Limitation of liability</h2>
        <p>To the extent permitted by law, this site is not responsible for consequences arising from reliance on site content, parameter differences, policy changes, market changes, third-party service issues, input mistakes, or interpretation errors.</p>
        <h2>7. Updates</h2>
        <p>We may update this disclaimer when site functions, business scope, or legal requirements change. The latest published version will apply.</p>
        <p><strong>Updated:</strong> March 17, 2026</p>
      `,
    },
  },
};

const NAV_ITEMS = [
  ["/", "home"],
  ["/calculators/", "calculators"],
];

function normalizePath(pathname) {
  if (pathname.endsWith("index.html")) return pathname.replace("index.html", "");
  if (!pathname.endsWith("/")) return `${pathname}/`;
  return pathname;
}

function languageFromPath(pathname) {
  const parts = normalizePath(pathname).split("/").filter(Boolean);
  if (parts.length && LANGUAGE_PREFIXES.includes(parts[0])) return parts[0];
  return null;
}

function basePath(pathname) {
  const normalized = normalizePath(pathname);
  const lang = languageFromPath(normalized);
  if (!lang) return normalized;
  return normalized.replace(`/${lang}`, "") || "/";
}

function localizedPath(pathname, lang = currentLanguage) {
  const normalized = normalizePath(pathname);
  if (lang === "zh") return normalized;
  return `/${lang}${normalized === "/" ? "/" : normalized}`;
}

function absoluteUrl(pathname, lang = currentLanguage) {
  return `https://calcwisehub.com${localizedPath(pathname, lang)}`;
}

function setHeadMeta(name, content, property = false) {
  if (!content) return;
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let node = document.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(property ? "property" : "name", name);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function setHeadLink(rel, href, hreflang = "") {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", rel);
    if (hreflang) node.setAttribute("hreflang", hreflang);
    document.head.appendChild(node);
  }
  node.setAttribute("href", href);
}

function refreshAlternateLinks() {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove());
  const currentBase = basePath(window.location.pathname);
  LANGUAGE_CODES.forEach((code) => {
    const hreflang = code === "zh" ? "zh-CN" : code;
    setHeadLink("alternate", absoluteUrl(currentBase, code), hreflang);
  });
  setHeadLink("alternate", absoluteUrl(currentBase, "en"), "x-default");
  setHeadLink("canonical", absoluteUrl(currentBase, currentLanguage));
}

function injectStructuredData() {
  const existing = document.querySelector('script[data-structured-data="1"]');
  if (existing) existing.remove();
  const title = document.title || SITE.name;
  const description = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.structuredData = "1";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: SITE.name,
        url: absoluteUrl("/", currentLanguage),
        inLanguage: currentLanguage,
      },
      {
        "@type": "WebPage",
        name: title,
        url: absoluteUrl(basePath(window.location.pathname), currentLanguage),
        description,
        inLanguage: currentLanguage,
        isPartOf: {
          "@type": "WebSite",
          name: SITE.name,
          url: absoluteUrl("/", currentLanguage),
        },
      },
    ],
  });
  document.head.appendChild(script);
}

function detectLanguage() {
  const fromPath = languageFromPath(window.location.pathname);
  if (fromPath && COMMON_COPY[fromPath]) return fromPath;
  const saved = localStorage.getItem("preferred-language");
  if (saved && COMMON_COPY[saved]) return saved;
  return detectBrowserLanguage();
}

function detectBrowserLanguage() {
  const nav = (navigator.language || "en").toLowerCase();
  const exact = SUPPORTED_LANGUAGES.find(([code]) => nav === code);
  if (exact) return exact[0];
  const partial = SUPPORTED_LANGUAGES.find(([code]) => nav.startsWith(`${code}-`) || nav.startsWith(code));
  return partial ? partial[0] : "en";
}

let currentLanguage = detectLanguage();
const browserLanguage = detectBrowserLanguage();

function detectRegion() {
  const locale = navigator.language || "en-US";
  let regionCode = "";
  try {
    regionCode = new Intl.Locale(locale).region || "";
  } catch (error) {
    regionCode = "";
  }
  if (!regionCode) {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (timeZone.includes("Shanghai") || timeZone.includes("Hong_Kong")) regionCode = "CN";
    else if (timeZone.includes("Tokyo")) regionCode = "JP";
    else if (timeZone.includes("Seoul")) regionCode = "KR";
    else if (timeZone.includes("London")) regionCode = "GB";
    else if (timeZone.includes("Berlin") || timeZone.includes("Paris") || timeZone.includes("Madrid")) regionCode = "EU";
    else if (timeZone.includes("New_York") || timeZone.includes("Chicago") || timeZone.includes("Los_Angeles")) regionCode = "US";
    else if (timeZone.includes("Kolkata")) regionCode = "IN";
    else regionCode = "GLOBAL";
  }

  const map = {
    CN: { code: "CN", countryName: "China", currency: "CNY", taxMode: "cn", units: "metric" },
    US: { code: "US", countryName: "United States", currency: "USD", taxMode: "us", units: "imperial" },
    GB: { code: "GB", countryName: "United Kingdom", currency: "GBP", taxMode: "eu", units: "metric" },
    JP: { code: "JP", countryName: "Japan", currency: "JPY", taxMode: "eu", units: "metric" },
    KR: { code: "KR", countryName: "South Korea", currency: "KRW", taxMode: "eu", units: "metric" },
    IN: { code: "IN", countryName: "India", currency: "INR", taxMode: "eu", units: "metric" },
    EU: { code: "EU", countryName: "Europe", currency: "EUR", taxMode: "eu", units: "metric" },
    GLOBAL: { code: "GLOBAL", countryName: "Global", currency: "USD", taxMode: "standard", units: "metric" },
  };
  return map[regionCode] || map.GLOBAL;
}

const detectedRegion = detectRegion();

const LANGUAGE_REGION_MAP = {
  zh: "CN",
  en: "US",
  es: "EU",
  fr: "EU",
  de: "EU",
  pt: "EU",
  ru: "EU",
  ja: "JP",
  ko: "KR",
  ar: "GLOBAL",
  hi: "IN",
};

const REGION_LANGUAGE_MAP = {
  CN: "zh",
  US: "en",
  GB: "en",
  JP: "ja",
  KR: "ko",
  IN: "hi",
  EU: "en",
  GLOBAL: "en",
};

const LOCALIZED_COUNTRY_NAMES = {
  CN: { zh: "中国", en: "China", ja: "中国", ko: "중국", es: "China", fr: "Chine", de: "China", pt: "China", ru: "Китай", ar: "الصين", hi: "चीन" },
  US: { zh: "美国", en: "United States", ja: "アメリカ", ko: "미국", es: "Estados Unidos", fr: "États-Unis", de: "Vereinigte Staaten", pt: "Estados Unidos", ru: "США", ar: "الولايات المتحدة", hi: "संयुक्त राज्य" },
  GB: { zh: "英国", en: "United Kingdom", ja: "イギリス", ko: "영국", es: "Reino Unido", fr: "Royaume-Uni", de: "Vereinigtes Königreich", pt: "Reino Unido", ru: "Великобритания", ar: "المملكة المتحدة", hi: "यूनाइटेड किंगडम" },
  JP: { zh: "日本", en: "Japan", ja: "日本", ko: "일본", es: "Japón", fr: "Japon", de: "Japan", pt: "Japão", ru: "Япония", ar: "اليابان", hi: "जापान" },
  KR: { zh: "韩国", en: "South Korea", ja: "韓国", ko: "대한민국", es: "Corea del Sur", fr: "Corée du Sud", de: "Südkorea", pt: "Coreia do Sul", ru: "Южная Корея", ar: "كوريا الجنوبية", hi: "दक्षिण कोरिया" },
  IN: { zh: "印度", en: "India", ja: "インド", ko: "인도", es: "India", fr: "Inde", de: "Indien", pt: "Índia", ru: "Индия", ar: "الهند", hi: "भारत" },
  EU: { zh: "欧洲", en: "Europe", ja: "ヨーロッパ", ko: "유럽", es: "Europa", fr: "Europe", de: "Europa", pt: "Europa", ru: "Европа", ar: "أوروبا", hi: "यूरोप" },
  GLOBAL: { zh: "全球", en: "Global", ja: "グローバル", ko: "글로벌", es: "Global", fr: "Global", de: "Global", pt: "Global", ru: "Глобально", ar: "عالمي", hi: "वैश्विक" },
};

function buildRegionProfile(code) {
  const map = {
    CN: { code: "CN", countryName: "China", currency: "CNY", taxMode: "cn", units: "metric" },
    US: { code: "US", countryName: "United States", currency: "USD", taxMode: "us", units: "imperial" },
    GB: { code: "GB", countryName: "United Kingdom", currency: "GBP", taxMode: "eu", units: "metric" },
    JP: { code: "JP", countryName: "Japan", currency: "JPY", taxMode: "eu", units: "metric" },
    KR: { code: "KR", countryName: "South Korea", currency: "KRW", taxMode: "eu", units: "metric" },
    IN: { code: "IN", countryName: "India", currency: "INR", taxMode: "eu", units: "metric" },
    EU: { code: "EU", countryName: "Europe", currency: "EUR", taxMode: "eu", units: "metric" },
    GLOBAL: { code: "GLOBAL", countryName: "Global", currency: "USD", taxMode: "standard", units: "metric" },
  };
  return map[code] || map.GLOBAL;
}

function currentRegionSettings() {
  const regionDefaultLanguage = REGION_LANGUAGE_MAP[detectedRegion.code] || "en";
  if (currentLanguage === regionDefaultLanguage) return detectedRegion;
  return buildRegionProfile(LANGUAGE_REGION_MAP[currentLanguage] || detectedRegion.code);
}

function localizeCountryName(region) {
  const bucket = LOCALIZED_COUNTRY_NAMES[region.code] || LOCALIZED_COUNTRY_NAMES.GLOBAL;
  return bucket[currentLanguage] || bucket.en || region.countryName;
}

function localeForFormatting() {
  const region = currentRegionSettings();
  const localeMap = {
    zh: "zh-CN",
    en: region.code === "GB" ? "en-GB" : "en-US",
    es: "es-ES",
    fr: "fr-FR",
    de: "de-DE",
    pt: "pt-PT",
    ru: "ru-RU",
    ja: "ja-JP",
    ko: "ko-KR",
    ar: "ar",
    hi: "hi-IN",
  };
  return localeMap[currentLanguage] || "en-US";
}

function tCommon(key) {
  return (COMMON_COPY[currentLanguage] && COMMON_COPY[currentLanguage][key]) || COMMON_COPY.en[key];
}

function pathCopy(pathname) {
  const path = basePath(pathname);
  return (PAGE_COPY[path] && (PAGE_COPY[path][currentLanguage] || PAGE_COPY[path].en || PAGE_COPY[path].zh)) || null;
}

function staticPageCopy(pathname) {
  const path = basePath(pathname);
  const bucket = STATIC_PAGE_CONTENT[path];
  if (!bucket) return null;
  return bucket[currentLanguage] || bucket.en || bucket.zh || null;
}

function setLanguage(lang) {
  currentLanguage = COMMON_COPY[lang] ? lang : "en";
  localStorage.setItem("preferred-language", currentLanguage);
  window.location.href = absoluteUrl(basePath(window.location.pathname), currentLanguage);
}

function renderHeader() {
  document.querySelectorAll("[data-site-header]").forEach((node) => {
    const current = basePath(window.location.pathname);
    const navLabels = tCommon("nav");
    const nav = NAV_ITEMS.map(([href], index) => {
      const active = current === normalizePath(href) ? ' aria-current="page"' : "";
      return `<a href="${localizedPath(href)}"${active}>${navLabels[index]}</a>`;
    }).join("");

    const options = SUPPORTED_LANGUAGES.map(([code, label]) => {
      const selected = code === currentLanguage ? " selected" : "";
      return `<option value="${code}"${selected}>${label}</option>`;
    }).join("");

    node.innerHTML = `
      <header class="site-header">
        <div class="container site-header__inner">
          <a class="brand" href="${localizedPath("/")}">
            <span class="brand__mark">算</span>
            <span class="brand__text">
              <strong>${SITE.name}</strong>
              <span>${tCommon("brandTagline")}</span>
            </span>
          </a>
          <nav class="nav" aria-label="Main navigation">
            ${nav}
            <label style="display:none;" for="site-language">${tCommon("langLabel")}</label>
            <select class="nav__lang" id="site-language" data-language-switcher>${options}</select>
          </nav>
        </div>
      </header>
    `;
  });

  document.querySelectorAll("[data-language-switcher]").forEach((node) => {
    node.addEventListener("change", (event) => setLanguage(event.target.value));
  });
}

function renderFooter() {
  document.querySelectorAll("[data-site-footer]").forEach((node) => {
    const links = tCommon("footerLinks");
    const reminders = tCommon("footerReminders");
    node.innerHTML = `
      <footer class="site-footer">
        <div class="container site-footer__inner">
          <div class="site-footer__brand">
            <div class="site-footer__mark">算</div>
            <div class="site-footer__brand-copy">
              <strong>${tCommon("footerBrandTitle")}</strong>
              <p>${tCommon("footerBrandText")}</p>
            </div>
          </div>
          <div class="site-footer__aside">
            <div class="site-footer__meta">
              <strong>${tCommon("footerRemindersTitle")}</strong>
              <div class="site-footer__list">
                ${reminders.map((item) => `<span>${item}</span>`).join("")}
              </div>
            </div>
            <div class="site-footer__meta">
              <strong>${tCommon("footerInfoTitle")}</strong>
              <div class="site-footer__links">
                <a href="${localizedPath("/about/")}">${links[0]}</a>
                <a href="${localizedPath("/terms/")}">${links[1]}</a>
                <a href="${localizedPath("/privacy/")}">${links[2]}</a>
                <a href="${localizedPath("/disclaimer/")}">${links[3]}</a>
                <a href="${localizedPath("/contact/")}">${links[4]}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="container site-footer__bottom">
          <small>© ${SITE.copyrightYear} ${SITE.name}. ${tCommon("footerNote")}</small>
        </div>
      </footer>
    `;
  });
}

function renderAdPlaceholders() {
  document.querySelectorAll("[data-ad-slot]").forEach((node) => {
    node.innerHTML = `
      <div class="ad-card">
        <strong>${tCommon("adTitle")}</strong>
        <p>${tCommon("adBody")}</p>
      </div>
    `;
  });
}

function initConsentBanner() {
  const banner = document.querySelector("[data-consent-banner]");
  if (!banner) return;
  const textNode = banner.querySelector("[data-consent-text]");
  const acceptNode = banner.querySelector("[data-consent-accept]");
  const dismissNode = banner.querySelector("[data-consent-dismiss]");
  if (textNode) textNode.textContent = tCommon("consent");
  if (acceptNode) acceptNode.textContent = tCommon("consentAccept");
  if (dismissNode) dismissNode.textContent = tCommon("consentDismiss");
  const stored = localStorage.getItem("site-consent-v1");
  if (!stored) banner.classList.add("is-visible");
  acceptNode?.addEventListener("click", () => {
    localStorage.setItem("site-consent-v1", "accepted");
    banner.classList.remove("is-visible");
  });
  dismissNode?.addEventListener("click", () => {
    localStorage.setItem("site-consent-v1", "dismissed");
    banner.classList.remove("is-visible");
  });
}

function injectThirdPartyScripts() {
  if (SITE.googleAnalyticsId) {
    const existingLoader = document.querySelector('script[data-ga-loader="1"]');
    if (!existingLoader) {
      const loader = document.createElement("script");
      loader.async = true;
      loader.dataset.gaLoader = "1";
      loader.src = `https://www.googletagmanager.com/gtag/js?id=${SITE.googleAnalyticsId}`;
      document.head.appendChild(loader);
    }

    if (!window.dataLayer || !window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", SITE.googleAnalyticsId);
    }
  }

  if (SITE.adsenseClient) {
    const existing = document.querySelector('script[data-adsense-loader="1"]');
    if (!existing) {
      const script = document.createElement("script");
      script.async = true;
      script.dataset.adsenseLoader = "1";
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsenseClient}`;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
  }

  if (SITE.baiduAnalyticsSnippet) {
    const template = document.createElement("template");
    template.innerHTML = SITE.baiduAnalyticsSnippet.trim();
    Array.from(template.content.childNodes).forEach((node) => {
      if (node.nodeName === "SCRIPT") {
        const script = document.createElement("script");
        Array.from(node.attributes).forEach((attr) => script.setAttribute(attr.name, attr.value));
        script.textContent = node.textContent;
        document.body.appendChild(script);
        return;
      }
      document.body.appendChild(node.cloneNode(true));
    });
  }
}

function applyMappedItems(items) {
  Object.entries(items || {}).forEach(([key, value]) => {
    const nodes = document.querySelectorAll(`[data-i18n="${key}"]`);
    nodes.forEach((node) => {
      if (node.tagName === "INPUT" && node.type === "search") {
        node.placeholder = value;
      } else {
        node.textContent = value;
      }
    });
  });
}

function localizeInternalLinks(root = document) {
  root.querySelectorAll('a[href^="/"]').forEach((node) => {
    const href = node.getAttribute("href");
    if (!href || href.startsWith("//") || href.startsWith("/assets/")) return;
    node.setAttribute("href", localizedPath(basePath(href)));
  });
}

function applyPageTranslations() {
  const copy = pathCopy(window.location.pathname);
  if (copy) {
    document.title = copy.title;
    setHeadMeta("description", copy.description);
    if (copy.keywords) setHeadMeta("keywords", copy.keywords);
    setHeadMeta("og:title", copy.title, true);
    setHeadMeta("og:description", copy.description, true);
    setHeadMeta("og:url", absoluteUrl(basePath(window.location.pathname), currentLanguage), true);
    refreshAlternateLinks();
    applyMappedItems(copy.items);
    localizeInternalLinks();
    injectStructuredData();
  }

  const staticCopy = staticPageCopy(window.location.pathname);
  if (staticCopy) {
    document.title = staticCopy.title;
    setHeadMeta("description", staticCopy.description);
    setHeadMeta("keywords", staticCopy.keywords);
    setHeadMeta("og:title", staticCopy.title, true);
    setHeadMeta("og:description", staticCopy.description, true);
    setHeadMeta("og:url", absoluteUrl(basePath(window.location.pathname), currentLanguage), true);
    const rich = document.querySelector(".rich-text");
    if (rich) {
      rich.innerHTML = `
        <span class="badge">${staticCopy.badge}</span>
        <h1>${staticCopy.h1}</h1>
        ${staticCopy.html}
      `;
      localizeInternalLinks(rich);
    }
    const crumb = document.querySelector(".breadcrumb");
    if (crumb) {
      const nav = tCommon("nav");
      const current = staticCopy.h1;
      crumb.innerHTML = `<a href="${localizedPath("/")}">${nav[0]}</a><span>/</span><span>${current}</span>`;
    }
    refreshAlternateLinks();
    localizeInternalLinks();
    injectStructuredData();
    return;
  }

  const fallback = STATIC_PAGE_FALLBACK[currentLanguage] || STATIC_PAGE_FALLBACK.en;
  const currentPath = basePath(window.location.pathname);
  if (fallback[currentPath]) {
    const [title, desc] = fallback[currentPath];
    const titleNode = document.querySelector("main h1");
    const descNode = document.querySelector("main h1 + p");
    if (titleNode) titleNode.textContent = title;
    if (descNode) descNode.textContent = desc;
  }
  refreshAlternateLinks();
  localizeInternalLinks();
  injectStructuredData();
}

function formatCurrency(value, currency = "CNY") {
  return new Intl.NumberFormat(localeForFormatting(), {
    style: "currency",
    currency: currency || currentRegionSettings().currency || "USD",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatPercent(value) {
  return `${(Number.isFinite(value) ? value : 0).toFixed(2)}%`;
}

function formatNumber(value, digits = 2) {
  return new Intl.NumberFormat(localeForFormatting(), {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(Number.isFinite(value) ? value : 0);
}

window.__siteI18n = {
  get language() {
    return currentLanguage;
  },
  get regionSettings() {
    return currentRegionSettings();
  },
  get detectedRegionSettings() {
    return detectedRegion;
  },
  localizedPath,
  basePath,
  setLanguage,
  formatCurrency,
  formatPercent,
  formatNumber,
  localizeCountryName,
  refreshStructuredData: injectStructuredData,
};

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  renderHeader();
  renderFooter();
  renderAdPlaceholders();
  applyPageTranslations();
  initConsentBanner();
  injectThirdPartyScripts();
});
