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
    footerBrandTitle: "CalcwiseHub",
    footerBrandText: "Una biblioteca de calculadoras de préstamos, impuestos, inversión, hipotecas, tipos de cambio y decisiones cotidianas.",
    footerRemindersTitle: "Socios",
    footerReminders: [
      '<a href="https://tmhzz.com/" target="_blank" rel="noopener noreferrer">Comunidad Tianma Heizhenzhu</a>',
      '<a href="https://vooqqqm.com/" target="_blank" rel="noopener noreferrer">Comunidad de Inversión HIAMA</a>',
    ],
    footerInfoTitle: "Información",
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
    footerBrandTitle: "CalcwiseHub",
    footerBrandText: "Une bibliothèque de calculateurs pour les prêts, impôts, investissements, hypothèques, taux de change et décisions du quotidien.",
    footerRemindersTitle: "Partenaires",
    footerReminders: [
      '<a href="https://tmhzz.com/" target="_blank" rel="noopener noreferrer">Communauté Tianma Heizhenzhu</a>',
      '<a href="https://vooqqqm.com/" target="_blank" rel="noopener noreferrer">Communauté d\'investissement HIAMA</a>',
    ],
    footerInfoTitle: "Infos site",
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
    footerBrandTitle: "CalcwiseHub",
    footerBrandText: "Eine Bibliothek von Rechnern für Darlehen, Steuern, Investitionen, Hypotheken, Wechselkurse und alltägliche Entscheidungen.",
    footerRemindersTitle: "Partner",
    footerReminders: [
      '<a href="https://tmhzz.com/" target="_blank" rel="noopener noreferrer">Tianma Heizhenzhu Community</a>',
      '<a href="https://vooqqqm.com/" target="_blank" rel="noopener noreferrer">HIAMA Investment Community</a>',
    ],
    footerInfoTitle: "Websiteinfo",
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
    footerBrandTitle: "CalcwiseHub",
    footerBrandText: "Uma biblioteca de calculadoras para empréstimos, impostos, investimentos, hipotecas, câmbio e decisões do dia a dia.",
    footerRemindersTitle: "Parceiros",
    footerReminders: [
      '<a href="https://tmhzz.com/" target="_blank" rel="noopener noreferrer">Comunidade Tianma Heizhenzhu</a>',
      '<a href="https://vooqqqm.com/" target="_blank" rel="noopener noreferrer">Comunidade de Investimento HIAMA</a>',
    ],
    footerInfoTitle: "Informações",
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
    footerBrandTitle: "CalcwiseHub",
    footerBrandText: "Библиотека калькуляторов по кредитам, налогам, инвестициям, ипотеке, валютным курсам и повседневным решениям.",
    footerRemindersTitle: "Партнёры",
    footerReminders: [
      '<a href="https://tmhzz.com/" target="_blank" rel="noopener noreferrer">Сообщество Tianma Heizhenzhu</a>',
      '<a href="https://vooqqqm.com/" target="_blank" rel="noopener noreferrer">Инвестиционное сообщество HIAMA</a>',
    ],
    footerInfoTitle: "О сайте",
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
    footerBrandTitle: "CalcwiseHub",
    footerBrandText: "ローン、税金、投資、住宅ローン、為替レート、日常の意思決定のための計算ツール集。",
    footerRemindersTitle: "パートナー",
    footerReminders: [
      '<a href="https://tmhzz.com/" target="_blank" rel="noopener noreferrer">天馬黒真珠コミュニティ</a>',
      '<a href="https://vooqqqm.com/" target="_blank" rel="noopener noreferrer">HIAMA 投資コミュニティ</a>',
    ],
    footerInfoTitle: "サイト情報",
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
    footerBrandTitle: "CalcwiseHub",
    footerBrandText: "대출, 세금, 투자, 주택담보대출, 환율 및 일상적 의사결정을 위한 계산기 모음.",
    footerRemindersTitle: "파트너",
    footerReminders: [
      '<a href="https://tmhzz.com/" target="_blank" rel="noopener noreferrer">톈마 헤이전주 커뮤니티</a>',
      '<a href="https://vooqqqm.com/" target="_blank" rel="noopener noreferrer">HIAMA 투자 커뮤니티</a>',
    ],
    footerInfoTitle: "사이트 정보",
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
    footerBrandTitle: "CalcwiseHub",
    footerBrandText: "مكتبة حاسبات للقروض والضرائب والاستثمار والرهن العقاري وأسعار الصرف وقرارات الحياة اليومية.",
    footerRemindersTitle: "الشركاء",
    footerReminders: [
      '<a href="https://tmhzz.com/" target="_blank" rel="noopener noreferrer">مجتمع Tianma Heizhenzhu</a>',
      '<a href="https://vooqqqm.com/" target="_blank" rel="noopener noreferrer">مجتمع الاستثمار HIAMA</a>',
    ],
    footerInfoTitle: "معلومات الموقع",
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
    footerBrandTitle: "CalcwiseHub",
    footerBrandText: "लोन, टैक्स, निवेश, मॉर्गेज, विनिमय दर और दैनिक निर्णयों के लिए कैलकुलेटर का संग्रह।",
    footerRemindersTitle: "साझेदार",
    footerReminders: [
      '<a href="https://tmhzz.com/" target="_blank" rel="noopener noreferrer">Tianma Heizhenzhu समुदाय</a>',
      '<a href="https://vooqqqm.com/" target="_blank" rel="noopener noreferrer">HIAMA निवेश समुदाय</a>',
    ],
    footerInfoTitle: "साइट जानकारी",
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
    ja: {
      title: "グローバル計算機ハブ - ローン・税金・投資・住宅ローン・日常ツール",
      description: "ローン、税金、複利、退職、繰上返済、預金、為替レートなど多言語対応の計算ツール集。",
      keywords: "計算機,ローン計算機,住宅ローン計算機,税務計算機,複利計算機,退職計算機,為替換算",
      items: {
        "hero-title": "まず月返済額を確認し、次に手取り収入、そして投資前に複利効果を把握しよう",
        "hero-text": "ローン、税金、退職、複利、為替レートはすべて実生活の判断に影響します。複雑な計算式をわかりやすいツールに変え、より確実な意思決定をサポートします。",
        "hero-primary": "全ての計算機を見る",
        "hero-secondary": "ガイドを読む",
        "metric-1-value": "101+",
        "metric-1-text": "ローン、投資、税金、健康、数学、日常の場面をカバー",
        "metric-2-value": "すぐに",
        "metric-2-text": "数字を入力するとすぐに結果と比較が表示される",
        "metric-3-value": "グローバル",
        "metric-3-text": "言語と地域のデフォルト設定で最初から使いやすい",
        "metric-4-value": "保存推奨",
        "metric-4-text": "戻ってきて数字を変えて、重要な決断の前にシナリオを比較しよう",
        "sec1-badge": "コア機能",
        "sec1-title": "大切なお金の数字を、決断前に明確に把握する",
        "sec1-text": "住宅ローンの比較、昇給の確認、投資計画の開始、退職準備など、不確かな数字を測定可能なものに変えるお手伝いをします。",
        "card-loan-title": "ローン計算機",
        "card-loan-text": "重要なローン決定をする前に、月返済額、総利息、長期コストを把握しましょう。",
        "card-tax-title": "所得税計算機",
        "card-tax-text": "給与と控除から実際の手取り収入を明らかにし、報酬の判断に根拠を持たせましょう。",
        "card-prepay-title": "住宅ローン繰上返済計算機",
        "card-prepay-text": "返済額削減と期間短縮の戦略を比較して、あなたの生活に合った繰上返済の道を選びましょう。",
        "sec2a-badge": "より詳しく",
        "sec2a-title": "単なる計算結果以上のもの",
        "sec2a-item1": "各計算機は一つの結果にとどまらず、チャート、表、FAQ、実践的なガイダンスで結果を説明し続けます。",
        "sec2a-item2": "それにより、数字が何であるかだけでなく、なぜそうなるかを理解しやすくなります。",
        "sec2a-item3": "ページが充実していて明確で比較しやすいとき、重要な決断の前に保存して再訪するものになります。",
        "sec2b-badge": "地元感覚",
        "sec2b-title": "使いやすく、信頼しやすく、実生活に近い",
        "sec2b-item1": "言語、地域、通貨、単位のデフォルト設定で、最初の訪問から親しみやすく感じられます。",
        "sec2b-item2": "摩擦を減らし、好奇心から自信ある比較へと素早く移行できます。",
        "sec2b-item3": "給与選択、住宅ローン計画、予算作成、投資すべてに役立てば、一回限りのツールではなく信頼できる決断のパートナーになります。",
      },
    },
    ko: {
      title: "글로벌 계산기 허브 - 대출, 세금, 투자, 주택담보대출, 일상 도구",
      description: "대출, 세금, 복리, 은퇴, 중도상환, 예금, 환율 등 다국어 계산기 모음.",
      keywords: "계산기,대출계산기,주택담보대출계산기,세금계산기,복리계산기,은퇴계산기,환율환산",
      items: {
        "hero-title": "먼저 월납입금을 확인하고, 다음엔 실수령액, 투자 전엔 복리를 파악하세요",
        "hero-text": "대출, 세금, 은퇴, 복리, 환율은 모두 실생활 결정에 영향을 줍니다. 복잡한 공식을 읽기 쉽고 신뢰할 수 있는 도구로 바꿔드립니다.",
        "hero-primary": "모든 계산기 보기",
        "hero-secondary": "가이드 읽기",
        "metric-1-value": "101+",
        "metric-1-text": "대출, 투자, 세금, 건강, 수학, 일상 결정 분야 커버",
        "metric-2-value": "빠르게",
        "metric-2-text": "숫자를 입력하면 바로 결과와 비교가 나타납니다",
        "metric-3-value": "글로벌",
        "metric-3-text": "언어와 지역 기본값으로 처음부터 익숙하게 사용 가능",
        "metric-4-value": "즐겨찾기",
        "metric-4-text": "다시 돌아와 입력값을 바꿔가며 중요한 결정 전에 시나리오를 비교하세요",
        "sec1-badge": "핵심 기능",
        "sec1-title": "비용이 큰 결정 전에 숫자를 명확하게 파악하세요",
        "sec1-text": "모기지 비교, 인상 확인, 투자 계획 시작, 은퇴 준비 등 불확실한 숫자를 측정 가능한 것으로 바꿔드립니다.",
        "card-loan-title": "대출 계산기",
        "card-loan-text": "중요한 대출 결정 전에 월납입금, 총이자, 장기 비용을 파악하세요.",
        "card-tax-title": "소득세 계산기",
        "card-tax-text": "급여와 공제액으로 실제 실수령액을 확인해 보상 결정에 근거를 갖추세요.",
        "card-prepay-title": "주택담보대출 중도상환 계산기",
        "card-prepay-text": "납입액 감소와 기간 단축 전략을 비교해 내 생활에 맞는 중도상환 방법을 선택하세요.",
        "sec2a-badge": "더 자세히",
        "sec2a-title": "단순한 답변 박스 그 이상",
        "sec2a-item1": "각 계산기는 하나의 결과를 넘어 차트, 표, FAQ, 실용적인 가이드로 결과를 설명합니다.",
        "sec2a-item2": "숫자가 무엇인지뿐 아니라 왜 변하는지 이해하기 쉬워집니다.",
        "sec2a-item3": "페이지가 완전하고 명확하며 비교하기 쉬울 때, 중요한 결정 전에 저장하고 다시 찾는 도구가 됩니다.",
        "sec2b-badge": "현지 감각",
        "sec2b-title": "빠르게 사용하고, 신뢰하기 쉽고, 실생활에 가깝게",
        "sec2b-item1": "언어, 지역, 통화, 단위 기본값으로 첫 방문부터 친숙하게 느껴집니다.",
        "sec2b-item2": "마찰을 줄이고 호기심에서 자신 있는 비교로 훨씬 빠르게 이동할 수 있습니다.",
        "sec2b-item3": "급여 선택, 모기지 계획, 예산 수립, 투자 모두에 도움이 되면 일회성 도구가 아닌 신뢰할 수 있는 결정 파트너가 됩니다.",
      },
    },
    es: {
      title: "Hub Global de Calculadoras - Préstamos, Impuestos, Inversión, Hipoteca y Herramientas Diarias",
      description: "Un sitio de calculadoras multilingüe para usuarios globales con herramientas de préstamos, impuestos, ahorro, jubilación, prepago, depósito, tipo de cambio y más.",
      keywords: "calculadora,calculadora de préstamos,calculadora hipotecaria,calculadora de impuestos,calculadora de interés compuesto,calculadora de jubilación,conversión de divisas",
      items: {
        "hero-title": "Primero calcula la cuota, luego el salario neto, y antes de invertir revisa el interés compuesto",
        "hero-text": "Los préstamos, impuestos, jubilación, interés compuesto y tipos de cambio influyen en las decisiones reales. Estas páginas convierten fórmulas complejas en herramientas fáciles de leer y en las que confiar.",
        "hero-primary": "Ver todas las calculadoras",
        "hero-secondary": "Leer la guía",
        "metric-1-value": "101+",
        "metric-1-text": "Cubre préstamos, inversión, impuestos, salud, matemáticas y decisiones cotidianas",
        "metric-2-value": "Rápido",
        "metric-2-text": "Introduce los números clave y obtén resultados con comparativas claras de inmediato",
        "metric-3-value": "Global",
        "metric-3-text": "Los ajustes de idioma y región hacen que cada página se sienta lista desde la primera visita",
        "metric-4-value": "Guárdalo",
        "metric-4-text": "Vuelve, ajusta las entradas y compara escenarios antes de tomar una decisión costosa",
        "sec1-badge": "Entrada principal",
        "sec1-title": "Ve los números con claridad antes de que la decisión sea costosa",
        "sec1-text": "Ya sea comparando una hipoteca, revisando un aumento de sueldo, iniciando un plan de inversión o preparando la jubilación, estas calculadoras ayudan a convertir la incertidumbre en algo medible.",
        "card-loan-title": "Calculadora de Préstamos",
        "card-loan-text": "Entiende la cuota mensual, el interés total y el coste a largo plazo antes de comprometerte con un préstamo importante.",
        "card-tax-title": "Calculadora de Impuesto sobre la Renta",
        "card-tax-text": "Descubre el salario neto real a partir del bruto y las deducciones para tomar decisiones salariales con base sólida.",
        "card-prepay-title": "Calculadora de Prepago Hipotecario",
        "card-prepay-text": "Compara las estrategias de cuota reducida y plazo más corto para elegir la opción de prepago que mejor se adapte a tu vida.",
        "sec2a-badge": "Ver más",
        "sec2a-title": "Más que un simple resultado",
        "sec2a-item1": "Cada calculadora va más allá de un resultado y sigue explicando el resultado con gráficos, tablas, preguntas frecuentes y orientación práctica.",
        "sec2a-item2": "Eso facilita entender por qué cambia el número, no solo cuál es el número.",
        "sec2a-item3": "Cuando una página es completa, clara y fácil de comparar, la gente la guarda y revisita antes de tomar decisiones costosas.",
        "sec2b-badge": "Sensación local",
        "sec2b-title": "Rápido de usar, fácil de confiar, más cercano a la vida real",
        "sec2b-item1": "Los ajustes predeterminados de idioma, región, moneda y unidades hacen que el sitio resulte familiar desde la primera visita.",
        "sec2b-item2": "Eso reduce la fricción y ayuda a pasar de la curiosidad a la comparación segura mucho más rápido.",
        "sec2b-item3": "Si el mismo sitio ayuda con decisiones salariales, planificación hipotecaria, presupuestos e inversión, deja de sentirse como una herramienta puntual y empieza a ser un compañero de decisiones fiable.",
      },
    },
    fr: {
      title: "Hub Mondial de Calculateurs - Prêts, Impôts, Investissement, Hypothèque et Outils Quotidiens",
      description: "Un site de calculateurs multilingue pour les utilisateurs mondiaux avec des outils de prêt, impôt, épargne, retraite, remboursement anticipé, dépôt, taux de change et plus.",
      keywords: "calculateur,calculateur de prêt,calculateur hypothécaire,calculateur fiscal,calculateur de capitalisation,calculateur de retraite,conversion de devises",
      items: {
        "hero-title": "Vérifiez d'abord la mensualité, puis le salaire net, et la capitalisation avant d'investir",
        "hero-text": "Les prêts, impôts, retraite, capitalisation et taux de change influencent toutes les décisions réelles. Ces pages transforment des formules complexes en outils plus lisibles, plus fiables et plus faciles à utiliser.",
        "hero-primary": "Voir tous les calculateurs",
        "hero-secondary": "Lire le guide",
        "metric-1-value": "101+",
        "metric-1-text": "Couvre les prêts, investissements, impôts, santé, mathématiques et décisions du quotidien",
        "metric-2-value": "Rapide",
        "metric-2-text": "Entrez les chiffres clés et obtenez des résultats avec des comparaisons claires immédiatement",
        "metric-3-value": "Mondial",
        "metric-3-text": "Les paramètres de langue et de région rendent chaque page prête dès la première visite",
        "metric-4-value": "À conserver",
        "metric-4-text": "Revenez, ajustez les données et comparez les scénarios avant de prendre une décision coûteuse",
        "sec1-badge": "Entrée principale",
        "sec1-title": "Voyez les chiffres clairement avant que la décision ne devienne coûteuse",
        "sec1-text": "Que vous compariez un prêt immobilier, vérifiiez une augmentation, démarriez un plan d'investissement ou prépariez votre retraite, ces calculateurs transforment l'incertitude en quelque chose de mesurable.",
        "card-loan-title": "Calculateur de Prêt",
        "card-loan-text": "Comprenez la mensualité, les intérêts totaux et le coût à long terme avant de vous engager dans un emprunt important.",
        "card-tax-title": "Calculateur d'Impôt sur le Revenu",
        "card-tax-text": "Révélez le salaire net réel à partir du brut et des déductions pour des décisions salariales fondées sur des faits.",
        "card-prepay-title": "Calculateur de Remboursement Anticipé",
        "card-prepay-text": "Comparez les stratégies de mensualité réduite et de durée raccourcie pour choisir la voie de remboursement anticipé qui vous convient.",
        "sec2a-badge": "Voir plus",
        "sec2a-title": "Plus qu'une simple réponse",
        "sec2a-item1": "Chaque calculateur va au-delà d'un résultat et continue d'expliquer avec des graphiques, des tableaux, des FAQ et des conseils pratiques.",
        "sec2a-item2": "Cela facilite la compréhension du pourquoi du changement, pas seulement du chiffre lui-même.",
        "sec2a-item3": "Quand une page est complète, claire et facile à comparer, les gens la sauvegardent et y reviennent avant les décisions importantes.",
        "sec2b-badge": "Sensation locale",
        "sec2b-title": "Rapide à utiliser, facile à faire confiance, proche de la réalité",
        "sec2b-item1": "Les paramètres de langue, région, devise et unités rendent le site familier dès la première visite.",
        "sec2b-item2": "Cela réduit la friction et aide à passer de la curiosité à la comparaison confiante beaucoup plus vite.",
        "sec2b-item3": "Si le même site aide pour les choix salariaux, la planification hypothécaire, le budget et l'investissement, il cesse d'être un outil ponctuel et devient un compagnon de décision fiable.",
      },
    },
    de: {
      title: "Globaler Rechner-Hub - Darlehen, Steuern, Investitionen, Hypotheken und Alltagstools",
      description: "Eine mehrsprachige Rechner-Website für globale Nutzer mit Darlehens-, Steuer-, Spar-, Renten-, Sondertilgungs-, Einlagen-, Wechselkurs- und weiteren Werkzeugen.",
      keywords: "Rechner,Darlehensrechner,Hypothekenrechner,Steuerrechner,Zinseszinsrechner,Rentenrechner,Währungsumrechnung",
      items: {
        "hero-title": "Erst die Rate prüfen, dann das Nettogehalt, und vor dem Investieren den Zinseszins verstehen",
        "hero-text": "Darlehen, Steuern, Rente, Zinseszins und Wechselkurse beeinflussen alle realen Entscheidungen. Diese Seiten machen komplexe Formeln in leicht lesbare, vertrauenswürdige und handlungsorientierte Werkzeuge.",
        "hero-primary": "Alle Rechner durchsuchen",
        "hero-secondary": "Anleitung lesen",
        "metric-1-value": "101+",
        "metric-1-text": "Deckt Darlehen, Investitionen, Steuern, Gesundheit, Mathematik und Alltagsentscheidungen ab",
        "metric-2-value": "Schnell",
        "metric-2-text": "Schlüsselzahlen eingeben und sofort Ergebnisse mit klaren Vergleichen erhalten",
        "metric-3-value": "Global",
        "metric-3-text": "Sprach- und Regionseinstellungen machen jede Seite ab dem ersten Besuch vertraut",
        "metric-4-value": "Speichern",
        "metric-4-text": "Zurückkommen, Eingaben anpassen und Szenarien vor einer teuren Entscheidung vergleichen",
        "sec1-badge": "Kernbereich",
        "sec1-title": "Die Zahlen klar sehen, bevor die Entscheidung teuer wird",
        "sec1-text": "Ob Hypothekenvergleich, Gehaltserhöhung prüfen, Investitionsplan starten oder Rentenplanung – diese Rechner machen aus Unsicherheit etwas Messbares.",
        "card-loan-title": "Darlehensrechner",
        "card-loan-text": "Monatliche Rate, Gesamtzinsen und langfristige Kosten verstehen, bevor man sich für ein wichtiges Darlehen entscheidet.",
        "card-tax-title": "Einkommensteuerrechner",
        "card-tax-text": "Das tatsächliche Nettogehalt aus Bruttogehalt und Abzügen ermitteln, damit Gehaltsentscheidungen fundiert sind.",
        "card-prepay-title": "Hypotheken-Sondertilgungsrechner",
        "card-prepay-text": "Strategien für niedrigere Raten und kürzere Laufzeiten vergleichen und den passenden Sondertilgungsweg finden.",
        "sec2a-badge": "Mehr sehen",
        "sec2a-title": "Mehr als ein Antwortfeld",
        "sec2a-item1": "Jeder Rechner geht über ein Ergebnis hinaus und erklärt das Resultat mit Diagrammen, Tabellen, FAQs und praktischen Hinweisen.",
        "sec2a-item2": "Das erleichtert das Verständnis, warum sich die Zahl ändert, nicht nur was die Zahl ist.",
        "sec2a-item3": "Wenn eine Seite vollständig, klar und leicht vergleichbar ist, wird sie zu etwas, das man vor teuren Entscheidungen speichert und erneut besucht.",
        "sec2b-badge": "Lokales Gefühl",
        "sec2b-title": "Schnell zu nutzen, leicht zu vertrauen, näher am echten Leben",
        "sec2b-item1": "Standard-Einstellungen für Sprache, Region, Währung und Einheiten machen die Website ab dem ersten Besuch vertraut.",
        "sec2b-item2": "Das senkt die Hemmschwelle und hilft, schneller von der Neugier zum selbstsicheren Vergleich zu kommen.",
        "sec2b-item3": "Wenn dieselbe Website bei Gehaltsentscheidungen, Hypothekenplanung, Budgetierung und Investitionen hilft, fühlt sie sich nicht mehr wie ein Einmal-Tool an, sondern wie ein zuverlässiger Entscheidungsbegleiter.",
      },
    },
    pt: {
      title: "Hub Global de Calculadoras - Empréstimos, Impostos, Investimento, Hipoteca e Ferramentas Diárias",
      description: "Um site de calculadoras multilíngue para usuários globais com ferramentas de empréstimo, imposto, poupança, aposentadoria, amortização, depósito, câmbio e mais.",
      keywords: "calculadora,calculadora de empréstimo,calculadora hipotecária,calculadora fiscal,calculadora de juros compostos,calculadora de aposentadoria,conversão de câmbio",
      items: {
        "hero-title": "Primeiro calcule a parcela, depois o salário líquido, e antes de investir veja os juros compostos",
        "hero-text": "Empréstimos, impostos, aposentadoria, juros compostos e câmbio influenciam decisões reais. Estas páginas transformam fórmulas complexas em ferramentas mais fáceis de ler, confiar e usar.",
        "hero-primary": "Ver todas as calculadoras",
        "hero-secondary": "Ler o guia",
        "metric-1-value": "101+",
        "metric-1-text": "Cobre empréstimos, investimento, impostos, saúde, matemática e decisões do dia a dia",
        "metric-2-value": "Rápido",
        "metric-2-text": "Insira os números e obtenha resultados com comparações claras imediatamente",
        "metric-3-value": "Global",
        "metric-3-text": "Configurações de idioma e região tornam cada página pronta desde a primeira visita",
        "metric-4-value": "Salvar",
        "metric-4-text": "Volte, ajuste os dados e compare cenários antes de tomar uma decisão cara",
        "sec1-badge": "Entrada principal",
        "sec1-title": "Veja os números claramente antes que a decisão fique cara",
        "sec1-text": "Comparando hipoteca, verificando um aumento, iniciando um plano de investimento ou preparando a aposentadoria, estas calculadoras transformam incerteza em algo mensurável.",
        "card-loan-title": "Calculadora de Empréstimo",
        "card-loan-text": "Entenda a parcela mensal, juros totais e custo a longo prazo antes de se comprometer com um empréstimo importante.",
        "card-tax-title": "Calculadora de Imposto de Renda",
        "card-tax-text": "Descubra o salário líquido real a partir do bruto e deduções para decisões de remuneração fundamentadas.",
        "card-prepay-title": "Calculadora de Amortização Antecipada",
        "card-prepay-text": "Compare estratégias de parcela reduzida e prazo menor para escolher o caminho de amortização que melhor se adapta à sua vida.",
        "sec2a-badge": "Ver mais",
        "sec2a-title": "Mais do que uma caixa de resposta",
        "sec2a-item1": "Cada calculadora vai além de um resultado e continua explicando com gráficos, tabelas, perguntas frequentes e orientação prática.",
        "sec2a-item2": "Isso facilita entender por que o número muda, não apenas qual é o número.",
        "sec2a-item3": "Quando uma página é completa, clara e fácil de comparar, as pessoas a salvam e revisitam antes de decisões caras.",
        "sec2b-badge": "Sensação local",
        "sec2b-title": "Rápido de usar, fácil de confiar, mais perto da vida real",
        "sec2b-item1": "Configurações padrão de idioma, região, moeda e unidades tornam o site familiar desde a primeira visita.",
        "sec2b-item2": "Isso reduz a fricção e ajuda a passar da curiosidade à comparação confiante muito mais rápido.",
        "sec2b-item3": "Se o mesmo site ajuda com escolhas salariais, planejamento hipotecário, orçamento e investimento, deixa de ser uma ferramenta pontual e passa a ser um companheiro de decisão confiável.",
      },
    },
    ru: {
      title: "Глобальный хаб калькуляторов - Кредиты, Налоги, Инвестиции, Ипотека и Бытовые инструменты",
      description: "Многоязычный сайт калькуляторов для пользователей по всему миру: кредиты, налоги, накопления, пенсия, досрочное погашение, вклады, курсы валют и другое.",
      keywords: "калькулятор,кредитный калькулятор,ипотечный калькулятор,налоговый калькулятор,калькулятор сложных процентов,пенсионный калькулятор,конвертер валют",
      items: {
        "hero-title": "Сначала посчитайте платёж, потом зарплату на руки, а перед инвестициями — сложный процент",
        "hero-text": "Кредиты, налоги, пенсия, сложный процент и курсы валют влияют на реальные решения. Эти страницы превращают сложные формулы в понятные, надёжные и удобные инструменты.",
        "hero-primary": "Смотреть все калькуляторы",
        "hero-secondary": "Читать руководство",
        "metric-1-value": "101+",
        "metric-1-text": "Кредиты, инвестиции, налоги, здоровье, математика и повседневные решения",
        "metric-2-value": "Быстро",
        "metric-2-text": "Введите ключевые цифры и сразу получите результаты с понятными сравнениями",
        "metric-3-value": "Глобально",
        "metric-3-text": "Настройки языка и региона делают каждую страницу удобной с первого посещения",
        "metric-4-value": "Сохраните",
        "metric-4-text": "Возвращайтесь, меняйте параметры и сравнивайте сценарии перед важным решением",
        "sec1-badge": "Основной вход",
        "sec1-title": "Видите цифры чётко до того, как решение станет дорогим",
        "sec1-text": "Сравниваете ипотеку, проверяете повышение зарплаты, начинаете инвестиционный план или готовитесь к пенсии — эти калькуляторы превращают неопределённость в нечто измеримое.",
        "card-loan-title": "Кредитный калькулятор",
        "card-loan-text": "Узнайте ежемесячный платёж, общую сумму процентов и долгосрочные расходы до принятия важного кредитного решения.",
        "card-tax-title": "Калькулятор подоходного налога",
        "card-tax-text": "Узнайте реальную зарплату на руки из брутто и вычетов, чтобы принимать обоснованные решения по оплате труда.",
        "card-prepay-title": "Калькулятор досрочного погашения ипотеки",
        "card-prepay-text": "Сравните стратегии снижения платежа и сокращения срока, чтобы выбрать подходящий путь досрочного погашения.",
        "sec2a-badge": "Больше деталей",
        "sec2a-title": "Больше, чем просто ответ",
        "sec2a-item1": "Каждый калькулятор идёт дальше одного результата и продолжает объяснять итог с помощью графиков, таблиц, FAQ и практических советов.",
        "sec2a-item2": "Это помогает понять, почему меняется цифра, а не только что это за цифра.",
        "sec2a-item3": "Когда страница полная, понятная и удобная для сравнения, люди сохраняют её и возвращаются перед важными решениями.",
        "sec2b-badge": "Локальный подход",
        "sec2b-title": "Быстро использовать, легко доверять, ближе к реальной жизни",
        "sec2b-item1": "Настройки языка, региона, валюты и единиц измерения по умолчанию делают сайт знакомым с первого посещения.",
        "sec2b-item2": "Это снижает барьер и помогает быстрее перейти от любопытства к уверенному сравнению.",
        "sec2b-item3": "Если один и тот же сайт помогает с выбором зарплаты, планированием ипотеки, бюджетированием и инвестициями, он перестаёт быть разовым инструментом и становится надёжным помощником в принятии решений.",
      },
    },
    ar: {
      title: "مركز الحاسبات العالمي - قروض، ضرائب، استثمار، رهن عقاري وأدوات يومية",
      description: "موقع حاسبات متعدد اللغات للمستخدمين العالميين: قروض، ضرائب، مدخرات، تقاعد، سداد مبكر، ودائع، أسعار صرف والمزيد.",
      keywords: "حاسبة,حاسبة قروض,حاسبة رهن عقاري,حاسبة ضريبة,حاسبة فائدة مركبة,حاسبة تقاعد,تحويل العملات",
      items: {
        "hero-title": "احسب القسط أولاً، ثم صافي الراتب، وقبل الاستثمار راجع الفائدة المركبة",
        "hero-text": "القروض والضرائب والتقاعد والفائدة المركبة وأسعار الصرف تؤثر كلها على القرارات الحقيقية. تحوّل هذه الصفحات الصيغ المعقدة إلى أدوات أسهل في القراءة والثقة والعمل بها.",
        "hero-primary": "تصفح جميع الحاسبات",
        "hero-secondary": "اقرأ الدليل",
        "metric-1-value": "101+",
        "metric-1-text": "تغطي القروض والاستثمار والضرائب والصحة والرياضيات والقرارات اليومية",
        "metric-2-value": "سريع",
        "metric-2-text": "أدخل الأرقام الرئيسية واحصل على نتائج مع مقارنات واضحة فوراً",
        "metric-3-value": "عالمي",
        "metric-3-text": "إعدادات اللغة والمنطقة تجعل كل صفحة جاهزة من أول زيارة",
        "metric-4-value": "احفظه",
        "metric-4-text": "عد، عدّل المدخلات وقارن السيناريوهات قبل اتخاذ قرار مكلف",
        "sec1-badge": "الدخول الرئيسي",
        "sec1-title": "انظر إلى الأرقام بوضوح قبل أن يصبح القرار مكلفاً",
        "sec1-text": "سواء كنت تقارن رهناً عقارياً أو تتحقق من زيادة راتب أو تبدأ خطة استثمار أو تستعد للتقاعد، تساعدك هذه الحاسبات على تحويل الغموض إلى شيء قابل للقياس.",
        "card-loan-title": "حاسبة القروض",
        "card-loan-text": "افهم القسط الشهري وإجمالي الفوائد والتكلفة طويلة المدى قبل الالتزام بقرار قرض مهم.",
        "card-tax-title": "حاسبة ضريبة الدخل",
        "card-tax-text": "اكشف صافي الراتب الحقيقي من الراتب الإجمالي والخصومات لاتخاذ قرارات تعويضية مدروسة.",
        "card-prepay-title": "حاسبة السداد المبكر للرهن العقاري",
        "card-prepay-text": "قارن استراتيجيات خفض القسط وتقليل المدة لاختيار مسار السداد المبكر الأنسب لحياتك.",
        "sec2a-badge": "المزيد",
        "sec2a-title": "أكثر من مجرد نتيجة",
        "sec2a-item1": "كل حاسبة تتجاوز نتيجة واحدة وتستمر في شرح النتيجة بالرسوم البيانية والجداول والأسئلة الشائعة والإرشادات العملية.",
        "sec2a-item2": "يسهّل ذلك فهم سبب تغيّر الرقم، وليس فقط ما هو الرقم.",
        "sec2a-item3": "عندما تكون الصفحة كاملة وواضحة وسهلة المقارنة، يحفظها الناس ويعودون إليها قبل القرارات المكلفة.",
        "sec2b-badge": "طابع محلي",
        "sec2b-title": "سريع الاستخدام، سهل الثقة، أقرب إلى الحياة الواقعية",
        "sec2b-item1": "الإعدادات الافتراضية للغة والمنطقة والعملة والوحدات تجعل الموقع مألوفاً من أول زيارة.",
        "sec2b-item2": "يقلل ذلك الاحتكاك ويساعد على الانتقال من الفضول إلى المقارنة الواثقة بشكل أسرع.",
        "sec2b-item3": "إذا ساعد نفس الموقع في اختيارات الراتب وتخطيط الرهن العقاري والميزانية والاستثمار، يتوقف عن كونه أداة مرة واحدة ويصبح رفيقاً موثوقاً في اتخاذ القرار.",
      },
    },
    hi: {
      title: "ग्लोबल कैलकुलेटर हब - लोन, टैक्स, निवेश, मॉर्गेज और दैनिक उपकरण",
      description: "वैश्विक उपयोगकर्ताओं के लिए बहुभाषी कैलकुलेटर वेबसाइट: लोन, टैक्स, बचत, रिटायरमेंट, प्री-पेमेंट, जमा, विनिमय दर और अधिक।",
      keywords: "कैलकुलेटर,लोन कैलकुलेटर,मॉर्गेज कैलकुलेटर,टैक्स कैलकुलेटर,चक्रवृद्धि ब्याज कैलकुलेटर,रिटायरमेंट कैलकुलेटर,मुद्रा रूपांतरण",
      items: {
        "hero-title": "पहले EMI चेक करें, फिर नेट सैलरी, और निवेश से पहले चक्रवृद्धि ब्याज समझें",
        "hero-text": "लोन, टैक्स, रिटायरमेंट, चक्रवृद्धि ब्याज और विनिमय दर सभी वास्तविक जीवन के निर्णयों को प्रभावित करते हैं। ये पेज जटिल फॉर्मूले को आसान, भरोसेमंद और कार्रवाई योग्य टूल में बदलते हैं।",
        "hero-primary": "सभी कैलकुलेटर देखें",
        "hero-secondary": "गाइड पढ़ें",
        "metric-1-value": "101+",
        "metric-1-text": "लोन, निवेश, टैक्स, स्वास्थ्य, गणित और रोज़मर्रा के निर्णय कवर करता है",
        "metric-2-value": "तेज़",
        "metric-2-text": "मुख्य संख्याएं दर्ज करें और तुरंत स्पष्ट तुलना के साथ परिणाम पाएं",
        "metric-3-value": "वैश्विक",
        "metric-3-text": "भाषा और क्षेत्र की डिफ़ॉल्ट सेटिंग हर पेज को पहली विज़िट से तैयार बनाती हैं",
        "metric-4-value": "सेव करें",
        "metric-4-text": "वापस आएं, इनपुट बदलें और महंगे फैसले से पहले परिदृश्यों की तुलना करें",
        "sec1-badge": "मुख्य प्रवेश",
        "sec1-title": "निर्णय महंगा होने से पहले संख्याओं को स्पष्ट देखें",
        "sec1-text": "चाहे मॉर्गेज की तुलना करना हो, वेतन वृद्धि जांचनी हो, निवेश योजना शुरू करनी हो या रिटायरमेंट की तैयारी करनी हो — ये कैलकुलेटर अनिश्चितता को मापने योग्य बनाते हैं।",
        "card-loan-title": "लोन कैलकुलेटर",
        "card-loan-text": "किसी बड़े लोन निर्णय से पहले मासिक EMI, कुल ब्याज और दीर्घकालिक लागत समझें।",
        "card-tax-title": "आयकर कैलकुलेटर",
        "card-tax-text": "सैलरी और कटौतियों से वास्तविक नेट सैलरी जानें ताकि वेतन निर्णय आधारित हों।",
        "card-prepay-title": "मॉर्गेज प्री-पेमेंट कैलकुलेटर",
        "card-prepay-text": "कम EMI और कम अवधि की रणनीतियों की तुलना करें और अपने जीवन के अनुकूल प्री-पेमेंट का रास्ता चुनें।",
        "sec2a-badge": "और देखें",
        "sec2a-title": "सिर्फ एक उत्तर बॉक्स से ज़्यादा",
        "sec2a-item1": "हर कैलकुलेटर एक परिणाम से आगे जाकर चार्ट, टेबल, FAQ और व्यावहारिक मार्गदर्शन से परिणाम समझाता रहता है।",
        "sec2a-item2": "इससे यह समझना आसान हो जाता है कि संख्या क्यों बदलती है, न कि केवल संख्या क्या है।",
        "sec2a-item3": "जब कोई पेज पूर्ण, स्पष्ट और तुलना में आसान लगता है, तो लोग महंगे फैसले से पहले उसे सेव करके लौटते हैं।",
        "sec2b-badge": "स्थानीय अनुभव",
        "sec2b-title": "उपयोग में तेज़, भरोसे में आसान, वास्तविक जीवन के करीब",
        "sec2b-item1": "भाषा, क्षेत्र, मुद्रा और इकाइयों की डिफ़ॉल्ट सेटिंग साइट को पहली विज़िट से परिचित बनाती हैं।",
        "sec2b-item2": "यह घर्षण कम करता है और जिज्ञासा से आत्मविश्वास से भरी तुलना तक बहुत तेज़ी से पहुंचने में मदद करता है।",
        "sec2b-item3": "अगर एक ही साइट वेतन चुनाव, मॉर्गेज योजना, बजटिंग और निवेश में मदद करती है, तो वह एकबारगी टूल नहीं रहती बल्कि एक विश्वसनीय निर्णय साथी बन जाती है।",
      },
    },
    ja: {
      title: "計算機一覧 - グローバル計算機ハブ",
      description: "ローン・住宅・投資・キャッシュフロー・税金・クレジットカード・健康・実用ツールの計算機を探す。",
      keywords: "計算機一覧,金融計算機,住宅計算機,健康計算機,数学計算機",
      items: {
        "calc-badge": "一覧ページ",
        "calc-title": "計算機一覧",
        "calc-text": "すべてのツールに専用ページがあり、住宅、投資、税金、健康、実用ツールなどの明確なカテゴリに整理されています。",
        "calc-search-placeholder": "検索：住宅ローン、ETF、予算、クレジットカード、単位換算...",
        "calc-guide-link": "ガイドを読む",
      },
    },
    ko: {
      title: "계산기 모음 - 글로벌 계산기 허브",
      description: "대출, 주택, 투자, 현금흐름, 세금, 신용카드, 건강, 실용 유틸리티 계산기를 찾아보세요.",
      keywords: "계산기 모음,금융 계산기,주택 계산기,건강 계산기,수학 계산기",
      items: {
        "calc-badge": "목록 페이지",
        "calc-title": "계산기 모음",
        "calc-text": "모든 도구에는 전용 페이지가 있으며 주택, 투자, 세금, 건강, 실용 유틸리티 등 명확한 카테고리로 정리되어 있습니다.",
        "calc-search-placeholder": "검색: 모기지, ETF, 예산, 신용카드, 단위 변환...",
        "calc-guide-link": "가이드 읽기",
      },
    },
    es: {
      title: "Directorio de Calculadoras - Hub Global de Calculadoras",
      description: "Explora calculadoras de préstamos, vivienda, inversión, flujo de caja, impuestos, tarjetas de crédito, salud y utilidades prácticas.",
      keywords: "directorio de calculadoras,calculadoras financieras,calculadoras de vivienda,calculadoras de salud,calculadoras matemáticas",
      items: {
        "calc-badge": "Página de directorio",
        "calc-title": "Directorio de Calculadoras",
        "calc-text": "Cada herramienta tiene su propia página dedicada y está organizada en categorías claras como vivienda, inversión, impuestos, salud y utilidades prácticas.",
        "calc-search-placeholder": "Buscar: hipoteca, ETF, presupuesto, tarjeta de crédito, conversión de unidades...",
        "calc-guide-link": "Leer la guía",
      },
    },
    fr: {
      title: "Répertoire de Calculateurs - Hub Mondial de Calculateurs",
      description: "Parcourez des calculateurs de prêts, logement, investissement, trésorerie, fiscalité, cartes de crédit, santé et utilitaires pratiques.",
      keywords: "répertoire de calculateurs,calculateurs financiers,calculateurs immobiliers,calculateurs de santé,calculateurs mathématiques",
      items: {
        "calc-badge": "Page répertoire",
        "calc-title": "Répertoire de Calculateurs",
        "calc-text": "Chaque outil dispose de sa propre page dédiée et est organisé en catégories claires : immobilier, investissement, fiscalité, santé et utilitaires pratiques.",
        "calc-search-placeholder": "Rechercher : hypothèque, ETF, budget, carte de crédit, conversion d'unités...",
        "calc-guide-link": "Lire le guide",
      },
    },
    de: {
      title: "Rechnerverzeichnis - Globaler Rechner-Hub",
      description: "Rechner für Darlehen, Wohnen, Investitionen, Cashflow, Steuern, Kreditkarten, Gesundheit und praktische Hilfsprogramme durchsuchen.",
      keywords: "Rechnerverzeichnis,Finanzrechner,Wohnrechner,Gesundheitsrechner,Mathematikrechner",
      items: {
        "calc-badge": "Verzeichnisseite",
        "calc-title": "Rechnerverzeichnis",
        "calc-text": "Jedes Werkzeug hat seine eigene Seite und ist in übersichtliche Kategorien wie Wohnen, Investitionen, Steuern, Gesundheit und praktische Hilfsprogramme gegliedert.",
        "calc-search-placeholder": "Suchen: Hypothek, ETF, Budget, Kreditkarte, Einheitenumrechnung...",
        "calc-guide-link": "Anleitung lesen",
      },
    },
    pt: {
      title: "Diretório de Calculadoras - Hub Global de Calculadoras",
      description: "Explore calculadoras de empréstimos, habitação, investimento, fluxo de caixa, impostos, cartões de crédito, saúde e utilitários práticos.",
      keywords: "diretório de calculadoras,calculadoras financeiras,calculadoras de habitação,calculadoras de saúde,calculadoras matemáticas",
      items: {
        "calc-badge": "Página de diretório",
        "calc-title": "Diretório de Calculadoras",
        "calc-text": "Cada ferramenta tem sua própria página dedicada e está organizada em categorias claras como habitação, investimento, impostos, saúde e utilitários práticos.",
        "calc-search-placeholder": "Pesquisar: hipoteca, ETF, orçamento, cartão de crédito, conversão de unidades...",
        "calc-guide-link": "Ler o guia",
      },
    },
    ru: {
      title: "Каталог калькуляторов - Глобальный хаб калькуляторов",
      description: "Просматривайте калькуляторы по кредитам, жилью, инвестициям, денежным потокам, налогам, кредитным картам, здоровью и практическим утилитам.",
      keywords: "каталог калькуляторов,финансовые калькуляторы,жилищные калькуляторы,калькуляторы здоровья,математические калькуляторы",
      items: {
        "calc-badge": "Страница каталога",
        "calc-title": "Каталог калькуляторов",
        "calc-text": "Каждый инструмент имеет собственную страницу и организован по понятным категориям: жильё, инвестиции, налоги, здоровье и практические утилиты.",
        "calc-search-placeholder": "Поиск: ипотека, ETF, бюджет, кредитная карта, конвертер единиц...",
        "calc-guide-link": "Читать руководство",
      },
    },
    ar: {
      title: "دليل الحاسبات - مركز الحاسبات العالمي",
      description: "تصفح حاسبات القروض والسكن والاستثمار والتدفق النقدي والضرائب وبطاقات الائتمان والصحة والأدوات العملية.",
      keywords: "دليل الحاسبات,الحاسبات المالية,حاسبات السكن,حاسبات الصحة,الحاسبات الرياضية",
      items: {
        "calc-badge": "صفحة الدليل",
        "calc-title": "دليل الحاسبات",
        "calc-text": "كل أداة لها صفحتها المخصصة ومنظمة في فئات واضحة مثل السكن والاستثمار والضرائب والصحة والأدوات العملية.",
        "calc-search-placeholder": "البحث: رهن عقاري، ETF، ميزانية، بطاقة ائتمان، تحويل الوحدات...",
        "calc-guide-link": "اقرأ الدليل",
      },
    },
    hi: {
      title: "कैलकुलेटर निर्देशिका - ग्लोबल कैलकुलेटर हब",
      description: "लोन, आवास, निवेश, कैश फ्लो, टैक्स, क्रेडिट कार्ड, स्वास्थ्य और व्यावहारिक उपकरणों के कैलकुलेटर खोजें।",
      keywords: "कैलकुलेटर निर्देशिका,वित्त कैलकुलेटर,आवास कैलकुलेटर,स्वास्थ्य कैलकुलेटर,गणित कैलकुलेटर",
      items: {
        "calc-badge": "निर्देशिका पेज",
        "calc-title": "कैलकुलेटर निर्देशिका",
        "calc-text": "हर टूल का अपना डेडिकेटेड पेज है और आवास, निवेश, टैक्स, स्वास्थ्य और व्यावहारिक उपयोगिताओं जैसी स्पष्ट श्रेणियों में व्यवस्थित है।",
        "calc-search-placeholder": "खोजें: मॉर्गेज, ETF, बजट, क्रेडिट कार्ड, यूनिट रूपांतरण...",
        "calc-guide-link": "गाइड पढ़ें",
      },
    },
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
  ja: {
    "/about/": ["私たちについて", "ローン、税金、理財、生活計算ツールを継続的に整理・更新し、ユーザーが迅速に判断できるようにしています。"],
    "/privacy/": ["プライバシーポリシー", "ユーザーのプライバシーを尊重し、基本的な統計、Cookie、ローカルストレージのみを体験改善に使用しています。"],
    "/contact/": ["お問い合わせ", "ツールの問題、提携のご相談、コンテンツのご提案は、ページの公開チャンネルからご連絡ください。"],
    "/guide/": ["ガイド", "計算機一覧から目的のツールを開き、前提条件を入力して結果パネルをすぐに確認できます。"],
    "/terms/": ["利用規約", "本サイトを利用することで、ツールが一般的な情報提供と試算のみに提供されていることを理解したものとします。"],
    "/disclaimer/": ["免責事項", "結果は参考用のみです。公式レート、契約、機関、規制に基づいて確認してください。"],
    "/404.html": ["ページが見つかりません", "ページが移動した可能性があります。ホームに戻るか、計算機一覧を開いてください。"],
  },
  ko: {
    "/about/": ["소개", "대출, 세금, 재무, 생활 계산 도구를 지속적으로 정리·업데이트하여 사용자가 빠르게 판단할 수 있도록 합니다."],
    "/privacy/": ["개인정보 처리방침", "사용자 개인정보를 존중하며 기본 통계, 쿠키, 로컬 저장소만 경험 개선에 사용합니다."],
    "/contact/": ["문의", "도구 문제, 제휴 문의, 콘텐츠 제안은 페이지의 공개 채널을 통해 연락해 주세요."],
    "/guide/": ["가이드", "목록에서 계산기를 열고 가정값을 입력하면 결과 패널을 바로 확인할 수 있습니다."],
    "/terms/": ["이용약관", "이 사이트를 이용함으로써 도구가 일반 정보 추정용으로만 제공됨을 이해합니다."],
    "/disclaimer/": ["면책 조항", "결과는 참고용입니다. 항상 공식 금리, 계약, 기관, 규정을 확인하세요."],
    "/404.html": ["페이지를 찾을 수 없습니다", "페이지가 이동했을 수 있습니다. 홈으로 돌아가거나 계산기 목록을 열어보세요."],
  },
  es: {
    "/about/": ["Acerca de", "Organizamos y actualizamos calculadoras de préstamos, impuestos, inversión y vida diaria para que los usuarios puedan evaluar escenarios rápidamente."],
    "/privacy/": ["Privacidad", "Respetamos la privacidad del usuario y usamos solo análisis esenciales, cookies y almacenamiento local para mejorar el sitio."],
    "/contact/": ["Contacto", "Utilice los canales de contacto públicos de esta página para comentarios, consultas comerciales o sugerencias de contenido."],
    "/guide/": ["Guía", "Abra una calculadora del directorio, ingrese sus supuestos y revise el panel de resultados al instante."],
    "/terms/": ["Términos", "Al usar este sitio, usted entiende que las herramientas se proporcionan solo para estimación informativa general."],
    "/disclaimer/": ["Aviso legal", "Los resultados son solo de referencia. Confíe siempre en tasas, contratos, instituciones y regulaciones oficiales."],
    "/404.html": ["Página no encontrada", "La página puede haberse movido. Vuelva al inicio o abra el directorio de calculadoras para continuar."],
  },
  fr: {
    "/about/": ["À propos", "Nous organisons et mettons à jour des calculateurs de prêts, impôts, investissements et vie quotidienne pour que les utilisateurs évaluent rapidement leurs scénarios."],
    "/privacy/": ["Confidentialité", "Nous respectons la vie privée des utilisateurs et n'utilisons que des analyses essentielles, cookies et stockage local pour améliorer le site."],
    "/contact/": ["Contact", "Utilisez les canaux de contact publics de cette page pour les retours, demandes professionnelles ou suggestions de contenu."],
    "/guide/": ["Guide", "Ouvrez un calculateur dans le répertoire, entrez vos hypothèses et consultez le panneau de résultats immédiatement."],
    "/terms/": ["Conditions", "En utilisant ce site, vous comprenez que les outils sont fournis uniquement à des fins d'estimation informative générale."],
    "/disclaimer/": ["Avertissement", "Les résultats sont uniquement indicatifs. Fiez-vous toujours aux taux, contrats, institutions et réglementations officiels."],
    "/404.html": ["Page introuvable", "La page a peut-être été déplacée. Retournez à l'accueil ou ouvrez le répertoire de calculateurs."],
  },
  de: {
    "/about/": ["Über uns", "Wir pflegen und aktualisieren Rechner für Darlehen, Steuern, Investitionen und Alltag, damit Nutzer Szenarien schnell bewerten können."],
    "/privacy/": ["Datenschutz", "Wir respektieren die Privatsphäre der Nutzer und verwenden nur wesentliche Analysen, Cookies und lokale Speicherung zur Verbesserung der Website."],
    "/contact/": ["Kontakt", "Nutzen Sie die öffentlichen Kontaktkanäle auf dieser Seite für Feedback, Geschäftsanfragen oder Inhaltsvorschläge."],
    "/guide/": ["Anleitung", "Öffnen Sie einen Rechner aus dem Verzeichnis, geben Sie Ihre Annahmen ein und überprüfen Sie das Ergebnispanel sofort."],
    "/terms/": ["Nutzungsbedingungen", "Durch die Nutzung dieser Website verstehen Sie, dass die Werkzeuge nur zur allgemeinen informativen Schätzung bereitgestellt werden."],
    "/disclaimer/": ["Haftungsausschluss", "Ergebnisse dienen nur als Referenz. Verlassen Sie sich stets auf offizielle Kurse, Verträge, Institutionen und Vorschriften."],
    "/404.html": ["Seite nicht gefunden", "Die Seite wurde möglicherweise verschoben. Kehren Sie zur Startseite zurück oder öffnen Sie das Rechnerverzeichnis."],
  },
  pt: {
    "/about/": ["Sobre", "Organizamos e atualizamos calculadoras de empréstimos, impostos, investimentos e vida diária para que os usuários avaliem cenários rapidamente."],
    "/privacy/": ["Privacidade", "Respeitamos a privacidade do usuário e usamos apenas análises essenciais, cookies e armazenamento local para melhorar o site."],
    "/contact/": ["Contato", "Use os canais de contato públicos nesta página para feedback, consultas comerciais ou sugestões de conteúdo."],
    "/guide/": ["Guia", "Abra uma calculadora do diretório, insira suas premissas e revise o painel de resultados instantaneamente."],
    "/terms/": ["Termos", "Ao usar este site, você entende que as ferramentas são fornecidas apenas para estimativa informativa geral."],
    "/disclaimer/": ["Aviso legal", "Os resultados são apenas para referência. Sempre confie em taxas, contratos, instituições e regulamentos oficiais."],
    "/404.html": ["Página não encontrada", "A página pode ter sido movida. Volte à página inicial ou abra o diretório de calculadoras para continuar."],
  },
  ru: {
    "/about/": ["О нас", "Мы постоянно обновляем калькуляторы по кредитам, налогам, инвестициям и бытовым расчётам, чтобы пользователи могли быстро оценивать сценарии."],
    "/privacy/": ["Конфиденциальность", "Мы уважаем конфиденциальность пользователей и используем только необходимые аналитику, файлы cookie и локальное хранилище."],
    "/contact/": ["Контакты", "Используйте публичные контактные каналы на этой странице для обратной связи, деловых запросов или предложений по контенту."],
    "/guide/": ["Руководство", "Откройте калькулятор из каталога, введите параметры и сразу просмотрите панель результатов."],
    "/terms/": ["Условия", "Используя этот сайт, вы понимаете, что инструменты предоставляются только для общей информационной оценки."],
    "/disclaimer/": ["Отказ от ответственности", "Результаты носят справочный характер. Всегда проверяйте официальные ставки, договоры, учреждения и нормативные акты."],
    "/404.html": ["Страница не найдена", "Страница могла быть перемещена. Вернитесь на главную или откройте каталог калькуляторов."],
  },
  ar: {
    "/about/": ["من نحن", "نقوم بتنظيم وتحديث حاسبات القروض والضرائب والاستثمار والحياة اليومية لمساعدة المستخدمين على تقييم السيناريوهات بسرعة."],
    "/privacy/": ["الخصوصية", "نحترم خصوصية المستخدم ونستخدم فقط التحليلات الأساسية وملفات تعريف الارتباط والتخزين المحلي لتحسين الموقع."],
    "/contact/": ["اتصل بنا", "استخدم قنوات الاتصال العامة في هذه الصفحة للملاحظات أو الاستفسارات التجارية أو اقتراحات المحتوى."],
    "/guide/": ["الدليل", "افتح حاسبة من الدليل وأدخل افتراضاتك وراجع لوحة النتائج فوراً."],
    "/terms/": ["الشروط", "باستخدام هذا الموقع، تفهم أن الأدوات مقدمة لأغراض التقدير المعلوماتي العام فقط."],
    "/disclaimer/": ["إخلاء المسؤولية", "النتائج للرجوع إليها فقط. اعتمد دائمًا على الأسعار والعقود والمؤسسات والأنظمة الرسمية."],
    "/404.html": ["الصفحة غير موجودة", "ربما تم نقل الصفحة. عد إلى الرئيسية أو افتح دليل الحاسبات للمتابعة."],
  },
  hi: {
    "/about/": ["हमारे बारे में", "हम लोन, टैक्स, निवेश और दैनिक जीवन के कैलकुलेटर को लगातार व्यवस्थित और अपडेट करते हैं ताकि उपयोगकर्ता जल्दी मूल्यांकन कर सकें।"],
    "/privacy/": ["गोपनीयता", "हम उपयोगकर्ता की गोपनीयता का सम्मान करते हैं और साइट सुधार के लिए केवल आवश्यक एनालिटिक्स, कुकी और लोकल स्टोरेज का उपयोग करते हैं।"],
    "/contact/": ["संपर्क", "फीडबैक, व्यावसायिक पूछताछ या सामग्री सुझाव के लिए इस पेज पर सार्वजनिक संपर्क चैनलों का उपयोग करें।"],
    "/guide/": ["गाइड", "निर्देशिका से कैलकुलेटर खोलें, अपनी मान्यताएं दर्ज करें और तुरंत परिणाम पैनल देखें।"],
    "/terms/": ["शर्तें", "इस साइट का उपयोग करके, आप समझते हैं कि टूल केवल सामान्य सूचना अनुमान के लिए प्रदान किए गए हैं।"],
    "/disclaimer/": ["अस्वीकरण", "परिणाम केवल संदर्भ के लिए हैं। हमेशा आधिकारिक दरों, अनुबंधों, संस्थाओं और विनियमों पर निर्भर रहें।"],
    "/404.html": ["पेज नहीं मिला", "पेज स्थानांतरित हो सकता है। होम पर वापस जाएं या ब्राउज़िंग जारी रखने के लिए कैलकुलेटर निर्देशिका खोलें।"],
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
    ja: {
      title: "私たちについて - CalcwiseHub",
      description: "CalcwiseHubの方針、計算機の範囲、更新原則、サービス方針をご紹介します。",
      keywords: "私たちについて,calcwisehub,計算機サイト,金融計算機",
      badge: "ブランド情報",
      h1: "私たちについて",
      html: `
        <p><strong>CalcwiseHub</strong>へようこそ。私たちは日常の意思決定に向けた計算機・情報サイトの構築に取り組んでいます。住宅ローン、税金、貯蓄、複利投資、退職計画、為替換算など、多様な場面で重要な数字をすばやく把握できるようサポートします。</p>
        <h2>提供するもの</h2>
        <ul class="list">
          <li>ローン、住宅ローン、住宅積立基金ローン、繰上返済ツール。</li>
          <li>所得税、給与、予算、負債収入比ツール。</li>
          <li>複利成長、貯蓄目標、預金、退職計画ツール。</li>
          <li>為替レート、利回り、インフレ、BMIなどの実用ツール。</li>
        </ul>
        <h2>コンテンツの原則</h2>
        <ul class="list">
          <li>実用的で再利用価値のあるページを優先します。</li>
          <li>結果を図表やFAQで丁寧に説明し、理解コストを下げます。</li>
          <li>サイトを継続的に改善しますが、市場ルールや税率のリアルタイム更新は保証しません。</li>
          <li>ユーザー体験を尊重し、ツール・コンテンツ・広告の適切なバランスを保ちます。</li>
        </ul>
        <h2>サービス範囲</h2>
        <p>本サイトのコンテンツは情報整理、初期試算、学習、比較を目的とするものであり、公式な投資・税務・法律・医療・融資に関するアドバイスの代替となるものではありません。</p>
        <h2>お問い合わせ</h2>
        <p>コンテンツ、計算ロジック、著作権、提携に関するご質問は、本サイトの公開連絡先をご利用ください。</p>
        <p><strong>更新日：</strong>2026年3月17日</p>
      `,
    },
    ko: {
      title: "소개 - CalcwiseHub",
      description: "CalcwiseHub의 방향, 계산기 범위, 업데이트 원칙, 서비스 방식을 알아보세요.",
      keywords: "소개,calcwisehub,계산기 웹사이트,금융 계산기",
      badge: "브랜드 정보",
      h1: "소개",
      html: `
        <p><strong>CalcwiseHub</strong>에 오신 것을 환영합니다. 우리는 일상 의사결정을 위한 계산기 및 정보 사이트를 구축하고 있습니다. 주택담보대출, 세금, 저축, 복리 투자, 은퇴 계획, 환율 환산 등 다양한 상황에서 핵심 숫자를 빠르게 파악할 수 있도록 도와드립니다.</p>
        <h2>제공 서비스</h2>
        <ul class="list">
          <li>대출, 주택담보대출, 정책형 주택대출, 중도상환 도구.</li>
          <li>소득세, 급여, 예산, 부채비율 도구.</li>
          <li>복리 성장, 저축 목표, 예금, 은퇴 계획 도구.</li>
          <li>환율, 수익률, 인플레이션, BMI 등 실용 도구.</li>
        </ul>
        <h2>콘텐츠 원칙</h2>
        <ul class="list">
          <li>실용적이고 재방문 가치 있는 페이지를 우선합니다.</li>
          <li>차트와 FAQ로 결과를 충분히 설명해 이해 비용을 낮춥니다.</li>
          <li>지속적으로 개선하지만 모든 시장 규칙이나 세율의 실시간 업데이트는 보장하지 않습니다.</li>
          <li>사용자 경험을 존중하고 도구·콘텐츠·광고의 합리적인 경계를 유지합니다.</li>
        </ul>
        <h2>서비스 범위</h2>
        <p>본 사이트 콘텐츠는 정보 정리, 초기 추정, 학습 및 비교를 목적으로 하며, 공식 투자·세금·법률·의료·대출 조언을 대체하지 않습니다.</p>
        <h2>문의</h2>
        <p>콘텐츠, 계산 로직, 저작권, 제휴에 관한 문의는 사이트의 공개 연락처를 이용해 주세요.</p>
        <p><strong>업데이트:</strong> 2026년 3월 17일</p>
      `,
    },
    es: {
      title: "Acerca de - CalcwiseHub",
      description: "Conozca CalcwiseHub, su enfoque en calculadoras, principios de actualización y cómo se mantiene el sitio.",
      keywords: "acerca de calcwisehub,sitio de calculadoras,calculadoras financieras",
      badge: "Sobre la marca",
      h1: "Acerca de",
      html: `
        <p>Bienvenido a <strong>CalcwiseHub</strong>. Estamos construyendo un sitio de calculadoras e información para decisiones cotidianas, ayudando a los usuarios a entender números clave al comparar préstamos, impuestos, planes de ahorro, capitalización, metas de jubilación, tipos de cambio y otros escenarios reales.</p>
        <h2>Lo que ofrecemos</h2>
        <ul class="list">
          <li>Herramientas de préstamos, hipotecas, fondo de vivienda y prepago.</li>
          <li>Herramientas de impuesto sobre la renta, salario, presupuesto y ratio deuda/ingresos.</li>
          <li>Herramientas de crecimiento compuesto, ahorro, depósito y planificación de jubilación.</li>
          <li>Herramientas de tipo de cambio, rendimiento, inflación, IMC y otras decisiones prácticas.</li>
        </ul>
        <h2>Nuestros principios de contenido</h2>
        <ul class="list">
          <li>Priorizamos páginas prácticas, explicables y que vale la pena revisitar.</li>
          <li>Presentamos resultados con suficiente estructura, gráficos y FAQs para reducir el coste de interpretación.</li>
          <li>Seguimos mejorando el sitio, pero no prometemos que cada tasa, regla o dato esté actualizado en tiempo real.</li>
          <li>Respetamos la experiencia del usuario y mantenemos un límite razonable entre herramientas, contenido y publicidad.</li>
        </ul>
        <h2>Alcance del servicio</h2>
        <p>El contenido es para organización de información, estimaciones preliminares, aprendizaje y comparación. No reemplaza el asesoramiento oficial de inversión, fiscal, legal, médico o de préstamos.</p>
        <h2>Contacto</h2>
        <p>Para preguntas sobre el contenido del sitio, lógica de calculadoras, derechos de autor o asociaciones, use los datos de contacto públicos del sitio.</p>
        <p><strong>Actualizado:</strong> 17 de marzo de 2026</p>
      `,
    },
    fr: {
      title: "À propos - CalcwiseHub",
      description: "Découvrez CalcwiseHub, son orientation sur les calculateurs, ses principes de mise à jour et son fonctionnement.",
      keywords: "à propos calcwisehub,site de calculateurs,calculateurs financiers",
      badge: "À propos de la marque",
      h1: "À propos",
      html: `
        <p>Bienvenue sur <strong>CalcwiseHub</strong>. Nous construisons un site de calculateurs et d'informations pour les décisions quotidiennes, aidant les utilisateurs à comprendre les chiffres clés lors de comparaisons de prêts, d'impôts, de plans d'épargne, de capitalisation, d'objectifs de retraite et d'autres scénarios réels.</p>
        <h2>Ce que nous offrons</h2>
        <ul class="list">
          <li>Outils de prêts, hypothèques, fonds logement et remboursement anticipé.</li>
          <li>Outils d'impôt sur le revenu, salaire, budget et ratio dette/revenus.</li>
          <li>Outils de croissance capitalisée, épargne, dépôt et planification retraite.</li>
          <li>Outils de change, rendement, inflation, IMC et autres décisions pratiques.</li>
        </ul>
        <h2>Nos principes de contenu</h2>
        <ul class="list">
          <li>Nous privilégions les pages pratiques, explicables et qui méritent d'être revisitées.</li>
          <li>Nous présentons les résultats avec suffisamment de structure, graphiques et FAQ pour réduire le coût d'interprétation.</li>
          <li>Nous améliorons continuellement le site, mais ne promettons pas que chaque taux ou règle soit mis à jour en temps réel.</li>
          <li>Nous respectons l'expérience utilisateur et maintenons une limite raisonnable entre outils, contenu et publicité.</li>
        </ul>
        <h2>Portée du service</h2>
        <p>Le contenu est destiné à l'organisation d'informations, l'estimation préliminaire, l'apprentissage et la comparaison. Il ne remplace pas les conseils officiels en matière d'investissement, de fiscalité, de droit ou de prêt.</p>
        <h2>Contact</h2>
        <p>Pour toute question sur le contenu, la logique des calculateurs, les droits d'auteur ou les partenariats, utilisez les coordonnées publiques du site.</p>
        <p><strong>Mis à jour :</strong> 17 mars 2026</p>
      `,
    },
    de: {
      title: "Über uns - CalcwiseHub",
      description: "Erfahren Sie mehr über CalcwiseHub, seinen Fokus auf Rechner, Aktualisierungsprinzipien und die Funktionsweise der Website.",
      keywords: "über calcwisehub,Rechnerwebsite,Finanzrechner",
      badge: "Über die Marke",
      h1: "Über uns",
      html: `
        <p>Willkommen bei <strong>CalcwiseHub</strong>. Wir bauen eine Rechner- und Informationswebsite für alltägliche Entscheidungen auf, die Nutzern hilft, Schlüsselzahlen beim Vergleich von Darlehen, Steuern, Sparplänen, Zinseszins, Rentenzielen und anderen realen Szenarien schnell zu verstehen.</p>
        <h2>Was wir anbieten</h2>
        <ul class="list">
          <li>Werkzeuge für Darlehen, Hypotheken, Wohnungsfonds und Sondertilgung.</li>
          <li>Werkzeuge für Einkommensteuer, Gehalt, Budget und Schulden-Einkommens-Verhältnis.</li>
          <li>Werkzeuge für Zinseszins-Wachstum, Sparziel, Einlagen und Rentenplanung.</li>
          <li>Werkzeuge für Wechselkurse, Rendite, Inflation, BMI und andere Alltagsentscheidungen.</li>
        </ul>
        <h2>Unsere Inhaltsprinzipien</h2>
        <ul class="list">
          <li>Wir priorisieren Seiten, die praktisch, erklärbar und es wert sind, erneut besucht zu werden.</li>
          <li>Wir präsentieren Ergebnisse mit ausreichend Struktur, Diagrammen und FAQs.</li>
          <li>Wir verbessern die Website kontinuierlich, garantieren aber keine Echtzeit-Aktualisierung aller Marktregeln.</li>
          <li>Wir respektieren die Benutzererfahrung und halten eine angemessene Grenze zwischen Werkzeugen, Inhalten und Werbung.</li>
        </ul>
        <h2>Dienstleistungsumfang</h2>
        <p>Die Inhalte dienen der Informationsorganisation, ersten Schätzungen, dem Lernen und Vergleichen. Sie ersetzen keine offiziellen Anlage-, Steuer-, Rechts-, Medizin- oder Kreditberatungen.</p>
        <h2>Kontakt</h2>
        <p>Für Fragen zu Website-Inhalten, Rechenlogik, Urheberrecht oder Partnerschaften nutzen Sie bitte die öffentlichen Kontaktdaten der Website.</p>
        <p><strong>Aktualisiert:</strong> 17. März 2026</p>
      `,
    },
    pt: {
      title: "Sobre - CalcwiseHub",
      description: "Conheça o CalcwiseHub, seu foco em calculadoras, princípios de atualização e como o site é mantido.",
      keywords: "sobre calcwisehub,site de calculadoras,calculadoras financeiras",
      badge: "Sobre a marca",
      h1: "Sobre",
      html: `
        <p>Bem-vindo ao <strong>CalcwiseHub</strong>. Estamos construindo um site de calculadoras e informações para decisões cotidianas, ajudando os usuários a entender números-chave ao comparar empréstimos, impostos, planos de poupança, juros compostos, metas de aposentadoria e outros cenários reais.</p>
        <h2>O que oferecemos</h2>
        <ul class="list">
          <li>Ferramentas de empréstimos, hipotecas, fundo habitacional e amortização antecipada.</li>
          <li>Ferramentas de imposto de renda, salário, orçamento e relação dívida/renda.</li>
          <li>Ferramentas de crescimento composto, meta de poupança, depósito e planejamento de aposentadoria.</li>
          <li>Ferramentas de câmbio, rendimento, inflação, IMC e outras decisões práticas.</li>
        </ul>
        <h2>Nossos princípios de conteúdo</h2>
        <ul class="list">
          <li>Priorizamos páginas práticas, explicáveis e que valem a pena revisitar.</li>
          <li>Apresentamos resultados com estrutura, gráficos e FAQs suficientes para reduzir o custo de interpretação.</li>
          <li>Continuamos melhorando o site, mas não prometemos que cada taxa ou regra seja atualizada em tempo real.</li>
          <li>Respeitamos a experiência do usuário e mantemos um limite razoável entre ferramentas, conteúdo e publicidade.</li>
        </ul>
        <h2>Escopo do serviço</h2>
        <p>O conteúdo destina-se à organização de informações, estimativas preliminares, aprendizado e comparação. Não substitui assessoria oficial de investimento, fiscal, jurídica, médica ou de crédito.</p>
        <h2>Contato</h2>
        <p>Para dúvidas sobre conteúdo do site, lógica de calculadoras, direitos autorais ou parcerias, use os contatos públicos do site.</p>
        <p><strong>Atualizado:</strong> 17 de março de 2026</p>
      `,
    },
    ru: {
      title: "О нас - CalcwiseHub",
      description: "Узнайте о CalcwiseHub, его подходе к калькуляторам, принципах обновления и принципах работы сайта.",
      keywords: "о нас calcwisehub,сайт калькуляторов,финансовые калькуляторы",
      badge: "О бренде",
      h1: "О нас",
      html: `
        <p>Добро пожаловать на <strong>CalcwiseHub</strong>. Мы создаём сайт калькуляторов и информации для повседневных решений, помогая пользователям быстро разобраться в ключевых цифрах при сравнении кредитов, налогов, планов накопления, сложных процентов, пенсионных целей и других реальных сценариев.</p>
        <h2>Что мы предлагаем</h2>
        <ul class="list">
          <li>Инструменты для кредитов, ипотеки, жилищного фонда и досрочного погашения.</li>
          <li>Инструменты для подоходного налога, зарплаты, бюджета и соотношения долга к доходу.</li>
          <li>Инструменты для сложного роста, цели накопления, вкладов и пенсионного планирования.</li>
          <li>Инструменты для курсов валют, доходности, инфляции, ИМТ и других практических решений.</li>
        </ul>
        <h2>Наши принципы</h2>
        <ul class="list">
          <li>Приоритет — практичные, объяснимые страницы, к которым стоит возвращаться.</li>
          <li>Результаты представлены с достаточной структурой, графиками и FAQ для снижения затрат на понимание.</li>
          <li>Мы постоянно улучшаем сайт, но не гарантируем обновление каждого рыночного правила в реальном времени.</li>
          <li>Уважаем пользователей и поддерживаем разумный баланс между инструментами, контентом и рекламой.</li>
        </ul>
        <h2>Область применения</h2>
        <p>Контент предназначен для организации информации, первичных расчётов, обучения и сравнения. Он не заменяет официальные инвестиционные, налоговые, юридические, медицинские или кредитные консультации.</p>
        <h2>Контакты</h2>
        <p>По вопросам содержания сайта, логики расчётов, авторских прав или партнёрства используйте публичные контактные данные сайта.</p>
        <p><strong>Обновлено:</strong> 17 марта 2026 г.</p>
      `,
    },
    ar: {
      title: "من نحن - CalcwiseHub",
      description: "تعرف على CalcwiseHub وتركيزه على الحاسبات ومبادئ التحديث وكيفية إدارة الموقع.",
      keywords: "من نحن calcwisehub,موقع حاسبات,حاسبات مالية",
      badge: "عن العلامة التجارية",
      h1: "من نحن",
      html: `
        <p>مرحباً بك في <strong>CalcwiseHub</strong>. نبني موقعاً للحاسبات والمعلومات للقرارات اليومية، مساعداً المستخدمين على فهم الأرقام الرئيسية عند مقارنة القروض والضرائب وخطط الادخار والفائدة المركبة وأهداف التقاعد وغيرها.</p>
        <h2>ما نقدمه</h2>
        <ul class="list">
          <li>أدوات القروض والرهن العقاري وصندوق الإسكان والسداد المبكر.</li>
          <li>أدوات ضريبة الدخل والراتب والميزانية ونسبة الدين إلى الدخل.</li>
          <li>أدوات النمو المركب وهدف الادخار والودائع وتخطيط التقاعد.</li>
          <li>أدوات أسعار الصرف والعائد والتضخم ومؤشر كتلة الجسم وغيرها.</li>
        </ul>
        <h2>مبادئ المحتوى</h2>
        <ul class="list">
          <li>نولي الأولوية للصفحات العملية القابلة للشرح التي تستحق العودة إليها.</li>
          <li>نقدم النتائج مع هيكل وبيانات وأسئلة شائعة كافية لتقليل تكلفة الفهم.</li>
          <li>نواصل تحسين الموقع لكننا لا نضمن تحديث كل قاعدة سوق أو معدل ضريبي فورياً.</li>
          <li>نحترم تجربة المستخدم ونحافظ على حدود معقولة بين الأدوات والمحتوى والإعلانات.</li>
        </ul>
        <h2>نطاق الخدمة</h2>
        <p>المحتوى مخصص لتنظيم المعلومات والتقدير الأولي والتعلم والمقارنة. لا يحل محل المشورة الرسمية في الاستثمار والضرائب والقانون والطب والإقراض.</p>
        <h2>التواصل</h2>
        <p>لأي استفسارات حول محتوى الموقع أو منطق الحاسبات أو حقوق النشر أو الشراكات، يرجى استخدام بيانات الاتصال العامة في الموقع.</p>
        <p><strong>تاريخ التحديث:</strong> 17 مارس 2026</p>
      `,
    },
    hi: {
      title: "हमारे बारे में - CalcwiseHub",
      description: "CalcwiseHub के बारे में जानें: कैलकुलेटर फोकस, अपडेट सिद्धांत और साइट कैसे बनाए रखी जाती है।",
      keywords: "हमारे बारे में calcwisehub,कैलकुलेटर वेबसाइट,वित्त कैलकुलेटर",
      badge: "ब्रांड के बारे में",
      h1: "हमारे बारे में",
      html: `
        <p><strong>CalcwiseHub</strong> में आपका स्वागत है। हम रोज़मर्रा के निर्णयों के लिए एक कैलकुलेटर और सूचना साइट बना रहे हैं, जो उपयोगकर्ताओं को लोन, टैक्स, बचत योजनाओं, चक्रवृद्धि ब्याज, रिटायरमेंट लक्ष्यों और अन्य वास्तविक परिदृश्यों की तुलना करते समय मुख्य संख्याओं को जल्दी समझने में मदद करती है।</p>
        <h2>हम क्या प्रदान करते हैं</h2>
        <ul class="list">
          <li>लोन, मॉर्गेज, हाउसिंग फंड लोन और प्री-पेमेंट टूल।</li>
          <li>आयकर, वेतन, बजट और ऋण-आय अनुपात टूल।</li>
          <li>चक्रवृद्धि वृद्धि, बचत लक्ष्य, जमा और रिटायरमेंट योजना टूल।</li>
          <li>विनिमय दर, उपज, मुद्रास्फीति, BMI और अन्य व्यावहारिक निर्णय टूल।</li>
        </ul>
        <h2>हमारे सामग्री सिद्धांत</h2>
        <ul class="list">
          <li>हम व्यावहारिक, समझाने योग्य और पुनः देखने योग्य पेजों को प्राथमिकता देते हैं।</li>
          <li>परिणामों को पर्याप्त संरचना, चार्ट और FAQ के साथ प्रस्तुत करते हैं।</li>
          <li>साइट में सुधार जारी रखते हैं, लेकिन हर बाज़ार नियम या कर दर की रियल-टाइम अपडेट का वादा नहीं करते।</li>
          <li>उपयोगकर्ता अनुभव का सम्मान करते हैं और टूल, सामग्री और विज्ञापन के बीच उचित सीमा बनाए रखते हैं।</li>
        </ul>
        <h2>सेवा का दायरा</h2>
        <p>साइट की सामग्री जानकारी संगठन, प्रारंभिक अनुमान, सीखने और तुलना के लिए है। यह आधिकारिक निवेश, कर, कानूनी, चिकित्सा या ऋण सलाह का विकल्प नहीं है।</p>
        <h2>संपर्क</h2>
        <p>साइट सामग्री, कैलकुलेटर लॉजिक, कॉपीराइट या साझेदारी के बारे में प्रश्नों के लिए साइट पर सार्वजनिक संपर्क विवरण का उपयोग करें।</p>
        <p><strong>अपडेट किया:</strong> 17 मार्च 2026</p>
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
    ja: { title: "プライバシーポリシー - CalcwiseHub", description: "CalcwiseHubのプライバシーポリシー：アクセス統計、Cookie、広告、連絡シーンでのデータ処理を説明します。", keywords: "プライバシーポリシー,calcwisehub,cookie,分析", badge: "コンプライアンス", h1: "プライバシーポリシー", html: `<p><strong>CalcwiseHub</strong>のプライバシーポリシーをお読みいただきありがとうございます。本サイトはユーザーのプライバシーを尊重し、適法な範囲でのみデータを処理します。</p><h2>収集する情報</h2><ul class="list"><li>アクセスログ、Cookie、ローカルストレージ、ユーザーが送信した情報。</li></ul><h2>情報の利用</h2><ul class="list"><li>サービス改善、言語・地域設定の記憶、アクセス分析、広告表示。</li></ul><h2>第三者サービス</h2><p>Google Analytics、AdSense等の第三者サービスを利用する場合があります。</p><h2>ポリシーの更新</h2><p>本ポリシーは変更される場合があります。<strong>更新日：</strong>2026年3月17日</p>` },
    ko: { title: "개인정보 처리방침 - CalcwiseHub", description: "CalcwiseHub 개인정보 처리방침: 방문 통계, 쿠키, 광고 및 연락 관련 데이터 처리를 설명합니다.", keywords: "개인정보 처리방침,calcwisehub,쿠키,분석", badge: "준수 사항", h1: "개인정보 처리방침", html: `<p><strong>CalcwiseHub</strong> 개인정보 처리방침을 읽어주셔서 감사합니다. 본 사이트는 사용자 개인정보를 존중하며 합법적인 범위 내에서만 데이터를 처리합니다.</p><h2>수집하는 정보</h2><ul class="list"><li>접속 로그, 쿠키, 로컬 저장소, 사용자가 제출한 정보.</li></ul><h2>정보 이용</h2><ul class="list"><li>서비스 개선, 언어·지역 설정 기억, 트래픽 분석, 광고 게재.</li></ul><h2>제3자 서비스</h2><p>Google Analytics, AdSense 등 제3자 서비스를 이용할 수 있습니다.</p><h2>정책 업데이트</h2><p>본 정책은 변경될 수 있습니다. <strong>업데이트:</strong> 2026년 3월 17일</p>` },
    es: { title: "Política de Privacidad - CalcwiseHub", description: "Política de privacidad de CalcwiseHub que explica el manejo de datos en estadísticas, cookies, publicidad y contacto.", keywords: "política de privacidad,calcwisehub,cookies,análisis", badge: "Cumplimiento", h1: "Política de Privacidad", html: `<p>En <strong>CalcwiseHub</strong> respetamos su privacidad y procesamos los datos solo de manera legal y necesaria.</p><h2>Información que podemos recopilar</h2><ul class="list"><li>Registros de acceso, cookies, almacenamiento local e información que usted envía.</li></ul><h2>Cómo usamos la información</h2><ul class="list"><li>Mejorar el sitio, recordar preferencias de idioma, medir el tráfico y gestionar publicidad.</li></ul><h2>Servicios de terceros</h2><p>Podemos usar servicios de terceros como Google Analytics o AdSense, que tienen sus propias políticas.</p><h2>Actualizaciones</h2><p>Esta política puede actualizarse. <strong>Actualizado:</strong> 17 de marzo de 2026</p>` },
    fr: { title: "Politique de Confidentialité - CalcwiseHub", description: "Politique de confidentialité de CalcwiseHub expliquant la gestion des données pour les statistiques, cookies, publicité et contact.", keywords: "politique de confidentialité,calcwisehub,cookies,analyse", badge: "Conformité", h1: "Politique de Confidentialité", html: `<p>Chez <strong>CalcwiseHub</strong>, nous respectons votre vie privée et ne traitons les données que de manière légale et nécessaire.</p><h2>Informations collectées</h2><ul class="list"><li>Journaux d'accès, cookies, stockage local et informations soumises par l'utilisateur.</li></ul><h2>Utilisation des informations</h2><ul class="list"><li>Améliorer le site, mémoriser les préférences de langue, mesurer le trafic et gérer la publicité.</li></ul><h2>Services tiers</h2><p>Nous pouvons utiliser des services tiers comme Google Analytics ou AdSense, qui ont leurs propres politiques.</p><h2>Mises à jour</h2><p>Cette politique peut être mise à jour. <strong>Mis à jour :</strong> 17 mars 2026</p>` },
    de: { title: "Datenschutzrichtlinie - CalcwiseHub", description: "CalcwiseHub-Datenschutzrichtlinie: Erklärung zur Datenverarbeitung bei Statistiken, Cookies, Werbung und Kontakt.", keywords: "Datenschutzrichtlinie,calcwisehub,Cookies,Analyse", badge: "Compliance", h1: "Datenschutzrichtlinie", html: `<p>Bei <strong>CalcwiseHub</strong> respektieren wir Ihre Privatsphäre und verarbeiten Daten nur auf rechtmäßige und notwendige Weise.</p><h2>Gesammelte Informationen</h2><ul class="list"><li>Zugriffsprotokolle, Cookies, lokaler Speicher und vom Benutzer übermittelte Informationen.</li></ul><h2>Verwendung der Informationen</h2><ul class="list"><li>Website verbessern, Sprachpräferenzen speichern, Datenverkehr messen und Werbung verwalten.</li></ul><h2>Drittanbieter-Dienste</h2><p>Wir können Dienste wie Google Analytics oder AdSense nutzen, die eigene Richtlinien haben.</p><h2>Aktualisierungen</h2><p>Diese Richtlinie kann aktualisiert werden. <strong>Aktualisiert:</strong> 17. März 2026</p>` },
    pt: { title: "Política de Privacidade - CalcwiseHub", description: "Política de privacidade do CalcwiseHub explicando o tratamento de dados em estatísticas, cookies, publicidade e contato.", keywords: "política de privacidade,calcwisehub,cookies,análise", badge: "Conformidade", h1: "Política de Privacidade", html: `<p>Na <strong>CalcwiseHub</strong>, respeitamos sua privacidade e processamos dados apenas de forma legal e necessária.</p><h2>Informações coletadas</h2><ul class="list"><li>Logs de acesso, cookies, armazenamento local e informações enviadas pelo usuário.</li></ul><h2>Uso das informações</h2><ul class="list"><li>Melhorar o site, lembrar preferências de idioma, medir tráfego e gerenciar publicidade.</li></ul><h2>Serviços de terceiros</h2><p>Podemos usar serviços como Google Analytics ou AdSense, que têm suas próprias políticas.</p><h2>Atualizações</h2><p>Esta política pode ser atualizada. <strong>Atualizado:</strong> 17 de março de 2026</p>` },
    ru: { title: "Политика конфиденциальности - CalcwiseHub", description: "Политика конфиденциальности CalcwiseHub: обработка данных при аналитике, cookie, рекламе и контактах.", keywords: "политика конфиденциальности,calcwisehub,cookie,аналитика", badge: "Соответствие", h1: "Политика конфиденциальности", html: `<p>В <strong>CalcwiseHub</strong> мы уважаем вашу конфиденциальность и обрабатываем данные только законными и необходимыми способами.</p><h2>Собираемая информация</h2><ul class="list"><li>Журналы доступа, файлы cookie, локальное хранилище и информация, отправленная пользователем.</li></ul><h2>Использование информации</h2><ul class="list"><li>Улучшение сайта, запоминание языковых предпочтений, измерение трафика и управление рекламой.</li></ul><h2>Сторонние сервисы</h2><p>Мы можем использовать сервисы Google Analytics, AdSense и другие, имеющие собственные политики.</p><h2>Обновления</h2><p>Данная политика может изменяться. <strong>Обновлено:</strong> 17 марта 2026 г.</p>` },
    ar: { title: "سياسة الخصوصية - CalcwiseHub", description: "سياسة خصوصية CalcwiseHub توضح معالجة البيانات في الإحصاءات وملفات تعريف الارتباط والإعلانات والتواصل.", keywords: "سياسة الخصوصية,calcwisehub,ملفات تعريف الارتباط,تحليلات", badge: "الامتثال", h1: "سياسة الخصوصية", html: `<p>في <strong>CalcwiseHub</strong>، نحترم خصوصيتك ولا نعالج البيانات إلا بطرق قانونية وضرورية.</p><h2>المعلومات التي نجمعها</h2><ul class="list"><li>سجلات الوصول وملفات تعريف الارتباط والتخزين المحلي والمعلومات التي يرسلها المستخدم.</li></ul><h2>كيف نستخدم المعلومات</h2><ul class="list"><li>تحسين الموقع، تذكر تفضيلات اللغة، قياس الزيارات، وإدارة الإعلانات.</li></ul><h2>خدمات الطرف الثالث</h2><p>قد نستخدم خدمات مثل Google Analytics أو AdSense التي لها سياساتها الخاصة.</p><h2>التحديثات</h2><p>قد تُحدَّث هذه السياسة. <strong>تاريخ التحديث:</strong> 17 مارس 2026</p>` },
    hi: { title: "गोपनीयता नीति - CalcwiseHub", description: "CalcwiseHub गोपनीयता नीति: आंकड़े, कुकी, विज्ञापन और संपर्क में डेटा प्रबंधन की व्याख्या।", keywords: "गोपनीयता नीति,calcwisehub,कुकी,विश्लेषण", badge: "अनुपालन", h1: "गोपनीयता नीति", html: `<p><strong>CalcwiseHub</strong> में हम आपकी गोपनीयता का सम्मान करते हैं और केवल कानूनी और आवश्यक तरीकों से डेटा संसाधित करते हैं।</p><h2>हम जो जानकारी एकत्र कर सकते हैं</h2><ul class="list"><li>एक्सेस लॉग, कुकी, लोकल स्टोरेज और उपयोगकर्ता द्वारा भेजी गई जानकारी।</li></ul><h2>जानकारी का उपयोग</h2><ul class="list"><li>साइट सुधार, भाषा प्राथमिकताएं याद रखना, ट्रैफिक मापना और विज्ञापन प्रबंधन।</li></ul><h2>तृतीय-पक्ष सेवाएं</h2><p>हम Google Analytics, AdSense जैसी सेवाओं का उपयोग कर सकते हैं जिनकी अपनी नीतियां हैं।</p><h2>अपडेट</h2><p>यह नीति अपडेट हो सकती है। <strong>अपडेट किया:</strong> 17 मार्च 2026</p>` },
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
    ja: { title: "お問い合わせ - CalcwiseHub", description: "CalcwiseHubへのフィードバック、提携、修正、広告に関するお問い合わせ。", keywords: "お問い合わせ,calcwisehub,フィードバック,提携", badge: "お問い合わせ", h1: "お問い合わせ", html: `<p>計算機の問題の報告、新しいツールの提案、提携のご相談、コンテンツの修正依頼は、以下の公開チャンネルをご利用ください。</p><ul class="list"><li>メール：mashuya29129@gmail.com</li><li>ビジネスのお問い合わせ：mashuya29129@gmail.com</li><li>コンテンツのフィードバック：mashuya29129@gmail.com</li></ul>` },
    ko: { title: "문의 - CalcwiseHub", description: "피드백, 파트너십, 수정, 광고 문의를 위한 CalcwiseHub 연락처.", keywords: "문의,calcwisehub,피드백,파트너십", badge: "문의", h1: "문의", html: `<p>계산기 문제 보고, 새 도구 제안, 파트너십 논의 또는 콘텐츠 수정 요청은 아래 공개 연락 채널을 이용해 주세요.</p><ul class="list"><li>이메일: mashuya29129@gmail.com</li><li>비즈니스 문의: mashuya29129@gmail.com</li><li>콘텐츠 피드백: mashuya29129@gmail.com</li></ul>` },
    es: { title: "Contacto - CalcwiseHub", description: "Contacta con CalcwiseHub para comentarios, colaboraciones, correcciones o consultas publicitarias.", keywords: "contacto calcwisehub,comentarios,colaboración,publicidad", badge: "Contacto", h1: "Contacto", html: `<p>Si deseas informar de un problema con una calculadora, sugerir una nueva herramienta, hablar de una colaboración o solicitar una corrección de contenido, usa los canales de contacto públicos a continuación.</p><ul class="list"><li>Correo: mashuya29129@gmail.com</li><li>Consultas comerciales: mashuya29129@gmail.com</li><li>Comentarios de contenido: mashuya29129@gmail.com</li></ul>` },
    fr: { title: "Contact - CalcwiseHub", description: "Contactez CalcwiseHub pour des retours, partenariats, corrections ou demandes publicitaires.", keywords: "contact calcwisehub,retours,partenariat,publicité", badge: "Contact", h1: "Contact", html: `<p>Si vous souhaitez signaler un problème, suggérer un nouvel outil, discuter d'un partenariat ou demander une correction de contenu, utilisez les canaux de contact publics ci-dessous.</p><ul class="list"><li>Email : mashuya29129@gmail.com</li><li>Demandes commerciales : mashuya29129@gmail.com</li><li>Retours sur le contenu : mashuya29129@gmail.com</li></ul>` },
    de: { title: "Kontakt - CalcwiseHub", description: "Kontaktieren Sie CalcwiseHub für Feedback, Partnerschaften, Korrekturen oder Werbeanfragen.", keywords: "Kontakt calcwisehub,Feedback,Partnerschaft,Werbung", badge: "Kontakt", h1: "Kontakt", html: `<p>Wenn Sie ein Problem mit einem Rechner melden, ein neues Werkzeug vorschlagen, eine Partnerschaft besprechen oder eine Inhaltskorrektur anfordern möchten, nutzen Sie die öffentlichen Kontaktkanäle unten.</p><ul class="list"><li>E-Mail: mashuya29129@gmail.com</li><li>Geschäftsanfragen: mashuya29129@gmail.com</li><li>Inhaltsfeedback: mashuya29129@gmail.com</li></ul>` },
    pt: { title: "Contato - CalcwiseHub", description: "Entre em contato com o CalcwiseHub para feedback, parcerias, correções ou consultas de publicidade.", keywords: "contato calcwisehub,feedback,parceria,publicidade", badge: "Contato", h1: "Contato", html: `<p>Se quiser reportar um problema com uma calculadora, sugerir uma nova ferramenta, discutir uma parceria ou solicitar uma correção de conteúdo, use os canais de contato públicos abaixo.</p><ul class="list"><li>E-mail: mashuya29129@gmail.com</li><li>Consultas comerciais: mashuya29129@gmail.com</li><li>Feedback de conteúdo: mashuya29129@gmail.com</li></ul>` },
    ru: { title: "Контакты - CalcwiseHub", description: "Свяжитесь с CalcwiseHub для обратной связи, партнёрства, исправлений или рекламных запросов.", keywords: "контакты calcwisehub,обратная связь,партнёрство,реклама", badge: "Контакты", h1: "Контакты", html: `<p>Если вы хотите сообщить о проблеме с калькулятором, предложить новый инструмент, обсудить партнёрство или запросить исправление контента, воспользуйтесь публичными контактными каналами ниже.</p><ul class="list"><li>Email: mashuya29129@gmail.com</li><li>Деловые запросы: mashuya29129@gmail.com</li><li>Обратная связь по контенту: mashuya29129@gmail.com</li></ul>` },
    ar: { title: "اتصل بنا - CalcwiseHub", description: "تواصل مع CalcwiseHub للملاحظات والشراكات والتصحيحات والاستفسارات الإعلانية.", keywords: "اتصل بنا calcwisehub,ملاحظات,شراكة,إعلانات", badge: "اتصل بنا", h1: "اتصل بنا", html: `<p>إذا أردت الإبلاغ عن مشكلة في حاسبة أو اقتراح أداة جديدة أو مناقشة شراكة أو طلب تصحيح محتوى، استخدم قنوات التواصل العامة أدناه.</p><ul class="list"><li>البريد الإلكتروني: mashuya29129@gmail.com</li><li>الاستفسارات التجارية: mashuya29129@gmail.com</li><li>ملاحظات المحتوى: mashuya29129@gmail.com</li></ul>` },
    hi: { title: "संपर्क - CalcwiseHub", description: "फीडबैक, साझेदारी, सुधार या विज्ञापन पूछताछ के लिए CalcwiseHub से संपर्क करें।", keywords: "संपर्क calcwisehub,फीडबैक,साझेदारी,विज्ञापन", badge: "संपर्क", h1: "संपर्क", html: `<p>यदि आप कैलकुलेटर की समस्या रिपोर्ट करना, नया टूल सुझाना, साझेदारी पर चर्चा करना या सामग्री सुधार का अनुरोध करना चाहते हैं, तो नीचे दिए गए सार्वजनिक संपर्क चैनलों का उपयोग करें।</p><ul class="list"><li>ईमेल: mashuya29129@gmail.com</li><li>व्यावसायिक पूछताछ: mashuya29129@gmail.com</li><li>सामग्री फीडबैक: mashuya29129@gmail.com</li></ul>` },
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
    ja: { title: "ガイド - CalcwiseHub", description: "計算機の使い方、結果パネルの見方、シナリオの効率的な比較方法を学びましょう。", keywords: "ガイド calcwisehub,計算機の使い方", badge: "ガイド", h1: "ガイド", html: `<h2>本サイトの使い方</h2><p><a class="button" href="/calculators/">計算機一覧を開く</a></p><ul class="list"><li>計算機一覧から目的のツールを開く。</li><li>前提条件を入力して送信すると、結果パネルが更新される。</li><li>結果は初期試算・比較に適しており、正式な契約や専門アドバイスの代替にはならない。</li></ul><h2>使用のヒント</h2><ul class="list"><li>同じシナリオで異なる前提条件を試して返済額や収益を比較しよう。</li><li>ローン、税金、債券利回り、為替レートは最新の公式情報を確認してください。</li><li>別の地域からご利用の場合は、まず言語を切り替えてから数値を入力してください。</li></ul>` },
    ko: { title: "가이드 - CalcwiseHub", description: "계산기 사용 방법, 결과 패널 이해, 시나리오 효율적 비교 방법을 알아보세요.", keywords: "가이드 calcwisehub,계산기 사용법", badge: "가이드", h1: "가이드", html: `<h2>사이트 사용 방법</h2><p><a class="button" href="/calculators/">계산기 목록 열기</a></p><ul class="list"><li>계산기 목록에서 시나리오에 맞는 도구를 엽니다.</li><li>가정값을 입력하고 제출하면 결과 패널이 업데이트됩니다.</li><li>결과는 초기 추정 및 비교에 유용하지만 공식 계약이나 전문 조언을 대체하지 않습니다.</li></ul><h2>사용 팁</h2><ul class="list"><li>같은 시나리오에서 다른 가정값을 시도하여 납입금, 수익률 또는 재무 차이를 비교하세요.</li><li>대출, 세금, 채권 수익률, 환율에 대해서는 최신 공식 규칙과 시장 데이터를 확인하세요.</li><li>다른 지역에서 방문하는 경우 먼저 사이트 언어를 전환한 후 값을 입력하세요.</li></ul>` },
    es: { title: "Guía - CalcwiseHub", description: "Aprende a usar las calculadoras, entender el panel de resultados y comparar escenarios de manera eficiente.", keywords: "guía calcwisehub,cómo usar calculadoras", badge: "Guía", h1: "Guía", html: `<h2>Cómo usar el sitio</h2><p><a class="button" href="/calculators/">Abrir el directorio de calculadoras</a></p><ul class="list"><li>Comienza en el directorio de calculadoras y abre la herramienta que se adapte a tu escenario.</li><li>Ingresa tus supuestos y envía el formulario. El panel de resultados se actualiza en la página.</li><li>Los resultados son útiles para estimaciones iniciales, pero no reemplazan contratos oficiales o asesoramiento profesional.</li></ul><h2>Consejos de uso</h2><ul class="list"><li>Prueba diferentes supuestos para el mismo escenario y compara pagos, rendimientos o brechas financieras.</li><li>Para préstamos, impuestos, rendimientos de bonos o tipos de cambio, confirma siempre las reglas oficiales más recientes.</li><li>Si visitas desde una región diferente, cambia primero el idioma del sitio y luego empieza a ingresar valores.</li></ul>` },
    fr: { title: "Guide - CalcwiseHub", description: "Apprenez à utiliser les calculateurs, comprendre le panneau de résultats et comparer les scénarios efficacement.", keywords: "guide calcwisehub,comment utiliser les calculateurs", badge: "Guide", h1: "Guide", html: `<h2>Comment utiliser le site</h2><p><a class="button" href="/calculators/">Ouvrir le répertoire de calculateurs</a></p><ul class="list"><li>Commencez dans le répertoire de calculateurs et ouvrez l'outil correspondant à votre scénario.</li><li>Entrez vos hypothèses et soumettez le formulaire. Le panneau de résultats se met à jour sur la page.</li><li>Les résultats sont utiles pour les estimations préliminaires, mais ne remplacent pas les contrats officiels ou les conseils professionnels.</li></ul><h2>Conseils d'utilisation</h2><ul class="list"><li>Essayez différentes hypothèses pour le même scénario afin de comparer les paiements, les rendements ou les écarts financiers.</li><li>Pour les prêts, impôts, rendements obligataires ou taux de change, confirmez toujours les dernières règles officielles.</li><li>Si vous visitez depuis une région différente, changez d'abord la langue du site avant de saisir des valeurs.</li></ul>` },
    de: { title: "Anleitung - CalcwiseHub", description: "Lernen Sie, wie Sie die Rechner verwenden, das Ergebnisfenster verstehen und Szenarien effizient vergleichen.", keywords: "Anleitung calcwisehub,Rechner verwenden", badge: "Anleitung", h1: "Anleitung", html: `<h2>So nutzen Sie die Website</h2><p><a class="button" href="/calculators/">Rechnerverzeichnis öffnen</a></p><ul class="list"><li>Beginnen Sie im Rechnerverzeichnis und öffnen Sie das Werkzeug, das zu Ihrem Szenario passt.</li><li>Geben Sie Ihre Annahmen ein und senden Sie das Formular ab. Das Ergebnisfenster wird auf der Seite aktualisiert.</li><li>Ergebnisse eignen sich für erste Schätzungen, ersetzen aber keine offiziellen Verträge oder Fachberatung.</li></ul><h2>Nutzungstipps</h2><ul class="list"><li>Probieren Sie verschiedene Annahmen für dasselbe Szenario aus, um Zahlungen, Renditen oder finanzielle Lücken zu vergleichen.</li><li>Für Darlehen, Steuern, Anleiherenditen oder Wechselkurse immer die neuesten offiziellen Regeln bestätigen.</li><li>Wenn Sie aus einer anderen Region besuchen, wechseln Sie zuerst die Website-Sprache und geben Sie dann Werte ein.</li></ul>` },
    pt: { title: "Guia - CalcwiseHub", description: "Aprenda a usar as calculadoras, entender o painel de resultados e comparar cenários de forma eficiente.", keywords: "guia calcwisehub,como usar calculadoras", badge: "Guia", h1: "Guia", html: `<h2>Como usar o site</h2><p><a class="button" href="/calculators/">Abrir o diretório de calculadoras</a></p><ul class="list"><li>Comece no diretório de calculadoras e abra a ferramenta que corresponde ao seu cenário.</li><li>Insira suas premissas e envie o formulário. O painel de resultados é atualizado na página.</li><li>Os resultados são úteis para estimativas preliminares, mas não substituem contratos oficiais ou assessoria profissional.</li></ul><h2>Dicas de uso</h2><ul class="list"><li>Experimente diferentes premissas para o mesmo cenário e compare pagamentos, retornos ou lacunas financeiras.</li><li>Para empréstimos, impostos, rendimentos de títulos ou câmbio, confirme sempre as regras oficiais mais recentes.</li><li>Se estiver visitando de uma região diferente, mude primeiro o idioma do site e depois comece a inserir valores.</li></ul>` },
    ru: { title: "Руководство - CalcwiseHub", description: "Научитесь использовать калькуляторы, понимать панель результатов и эффективно сравнивать сценарии.", keywords: "руководство calcwisehub,как пользоваться калькуляторами", badge: "Руководство", h1: "Руководство", html: `<h2>Как пользоваться сайтом</h2><p><a class="button" href="/calculators/">Открыть каталог калькуляторов</a></p><ul class="list"><li>Начните с каталога и откройте инструмент, подходящий для вашего сценария.</li><li>Введите параметры и отправьте форму. Панель результатов обновится на странице.</li><li>Результаты полезны для предварительной оценки, но не заменяют официальные договоры или профессиональные консультации.</li></ul><h2>Советы по использованию</h2><ul class="list"><li>Попробуйте разные параметры для одного сценария, чтобы сравнить платежи, доходность или финансовые разрывы.</li><li>Для кредитов, налогов, доходности облигаций или валютных курсов всегда проверяйте актуальные официальные данные.</li><li>Если вы заходите из другого региона, сначала переключите язык сайта, а затем вводите значения.</li></ul>` },
    ar: { title: "الدليل - CalcwiseHub", description: "تعلم كيفية استخدام الحاسبات وفهم لوحة النتائج ومقارنة السيناريوهات بكفاءة.", keywords: "دليل calcwisehub,كيفية استخدام الحاسبات", badge: "الدليل", h1: "الدليل", html: `<h2>كيفية استخدام الموقع</h2><p><a class="button" href="/calculators/">فتح دليل الحاسبات</a></p><ul class="list"><li>ابدأ من دليل الحاسبات وافتح الأداة التي تناسب سيناريوك.</li><li>أدخل افتراضاتك وأرسل النموذج. تتحدث لوحة النتائج في الصفحة.</li><li>النتائج مفيدة للتقدير الأولي لكنها لا تحل محل العقود الرسمية أو الاستشارات المهنية.</li></ul><h2>نصائح الاستخدام</h2><ul class="list"><li>جرب افتراضات مختلفة لنفس السيناريو لمقارنة الدفعات أو العوائد أو الفجوات المالية.</li><li>للقروض والضرائب وعائدات السندات وأسعار الصرف، تأكد دائماً من آخر القواعد الرسمية.</li><li>إذا كنت تزور من منطقة مختلفة، بدّل لغة الموقع أولاً ثم ابدأ إدخال القيم.</li></ul>` },
    hi: { title: "गाइड - CalcwiseHub", description: "कैलकुलेटर का उपयोग, परिणाम पैनल समझना और परिदृश्यों की कुशलतापूर्वक तुलना करना सीखें।", keywords: "गाइड calcwisehub,कैलकुलेटर कैसे उपयोग करें", badge: "गाइड", h1: "गाइड", html: `<h2>साइट का उपयोग कैसे करें</h2><p><a class="button" href="/calculators/">कैलकुलेटर निर्देशिका खोलें</a></p><ul class="list"><li>कैलकुलेटर निर्देशिका से शुरू करें और अपने परिदृश्य से मेल खाने वाला टूल खोलें।</li><li>अपनी मान्यताएं दर्ज करें और फॉर्म सबमिट करें। परिणाम पैनल पेज पर अपडेट होता है।</li><li>परिणाम प्रारंभिक अनुमान और तुलना के लिए उपयोगी हैं, लेकिन आधिकारिक अनुबंध या पेशेवर सलाह का विकल्प नहीं हैं।</li></ul><h2>उपयोग टिप्स</h2><ul class="list"><li>भुगतान, रिटर्न या वित्तीय अंतर की तुलना करने के लिए एक ही परिदृश्य के लिए अलग-अलग मान्यताएं आज़माएं।</li><li>लोन, टैक्स, बॉन्ड यील्ड या विनिमय दरों के लिए हमेशा नवीनतम आधिकारिक नियमों और बाज़ार डेटा की पुष्टि करें।</li><li>यदि आप किसी अलग क्षेत्र से विज़िट कर रहे हैं, तो पहले साइट भाषा बदलें और फिर मान दर्ज करना शुरू करें।</li></ul>` },
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
    ja: { title: "利用規約 - CalcwiseHub", description: "CalcwiseHubの利用規約：サービス範囲、ユーザー責任、コンテンツ利用原則。", keywords: "利用規約,calcwisehub,サービス条件", badge: "利用規約", h1: "利用規約", html: `<p>本サイトを利用することで、ツールが一般的な情報表示と試算のみを目的として提供されることを理解し同意します。</p><ul class="list"><li>計算機ページはいつでも更新・一時停止・削除される場合があります。</li><li>不法・侵害・破壊的な目的での使用は禁止されています。</li><li>サイトコンテンツは投資・法律・医療・税務・融資の専門アドバイスの代替となりません。</li></ul>` },
    ko: { title: "이용약관 - CalcwiseHub", description: "CalcwiseHub 이용약관: 서비스 범위, 사용자 책임, 콘텐츠 이용 원칙.", keywords: "이용약관,calcwisehub,서비스 조건", badge: "이용약관", h1: "이용약관", html: `<p>본 사이트를 이용함으로써 도구가 일반 정보 표시 및 추정 목적으로만 제공됨을 이해하고 동의합니다.</p><ul class="list"><li>계산기 페이지는 언제든지 업데이트·일시 중단·제거될 수 있습니다.</li><li>불법적·침해적·파괴적 목적으로 사이트를 사용할 수 없습니다.</li><li>사이트 콘텐츠는 전문 투자·법률·의료·세금·대출 조언을 대체하지 않습니다.</li></ul>` },
    es: { title: "Términos - CalcwiseHub", description: "Términos de uso de CalcwiseHub: alcance del servicio, responsabilidad del usuario y principios de uso del contenido.", keywords: "términos de uso,calcwisehub,condiciones de servicio", badge: "Términos", h1: "Términos", html: `<p>Al acceder y usar este sitio, usted entiende y acepta que las herramientas se proporcionan solo para información general y estimación.</p><ul class="list"><li>Podemos actualizar, suspender o eliminar páginas de calculadoras en cualquier momento.</li><li>Los usuarios no pueden usar el sitio para propósitos ilegales, infractores o destructivos.</li><li>El contenido del sitio no reemplaza el asesoramiento profesional de inversión, legal, médico, fiscal o de préstamos.</li></ul>` },
    fr: { title: "Conditions - CalcwiseHub", description: "Conditions d'utilisation de CalcwiseHub : portée du service, responsabilité de l'utilisateur et principes d'utilisation du contenu.", keywords: "conditions d'utilisation,calcwisehub,conditions de service", badge: "Conditions", h1: "Conditions", html: `<p>En accédant et en utilisant ce site, vous comprenez et acceptez que les outils sont fournis uniquement à des fins d'information générale et d'estimation.</p><ul class="list"><li>Nous pouvons mettre à jour, suspendre ou supprimer des pages de calculateurs à tout moment.</li><li>Les utilisateurs ne peuvent pas utiliser le site à des fins illégales, portant atteinte aux droits ou destructrices.</li><li>Le contenu du site ne remplace pas les conseils professionnels en investissement, droit, médecine, fiscalité ou prêt.</li></ul>` },
    de: { title: "Nutzungsbedingungen - CalcwiseHub", description: "Nutzungsbedingungen von CalcwiseHub: Leistungsumfang, Nutzerpflichten und Grundsätze zur Inhaltsnutzung.", keywords: "Nutzungsbedingungen,calcwisehub,Servicebedingungen", badge: "Nutzungsbedingungen", h1: "Nutzungsbedingungen", html: `<p>Durch die Nutzung dieser Website verstehen und akzeptieren Sie, dass die Werkzeuge nur zur allgemeinen Informationsanzeige und Schätzung bereitgestellt werden.</p><ul class="list"><li>Wir können Rechnerseiten jederzeit aktualisieren, aussetzen oder entfernen.</li><li>Nutzer dürfen die Website nicht für rechtswidrige, rechtsverletzende oder destruktive Zwecke nutzen.</li><li>Website-Inhalte ersetzen keine professionelle Anlage-, Rechts-, Medizin-, Steuer- oder Kreditberatung.</li></ul>` },
    pt: { title: "Termos - CalcwiseHub", description: "Termos de uso do CalcwiseHub: escopo do serviço, responsabilidade do usuário e princípios de uso do conteúdo.", keywords: "termos de uso,calcwisehub,condições de serviço", badge: "Termos", h1: "Termos", html: `<p>Ao acessar e usar este site, você entende e aceita que as ferramentas são fornecidas apenas para exibição de informações gerais e estimativa.</p><ul class="list"><li>Podemos atualizar, suspender ou remover páginas de calculadoras a qualquer momento.</li><li>Os usuários não podem usar o site para fins ilegais, infratores ou destrutivos.</li><li>O conteúdo do site não substitui assessoria profissional de investimento, jurídica, médica, fiscal ou de crédito.</li></ul>` },
    ru: { title: "Условия использования - CalcwiseHub", description: "Условия использования CalcwiseHub: объём услуг, ответственность пользователя и принципы использования контента.", keywords: "условия использования,calcwisehub,условия сервиса", badge: "Условия", h1: "Условия использования", html: `<p>Используя этот сайт, вы понимаете и принимаете, что инструменты предоставляются только в информационных целях и для оценочных расчётов.</p><ul class="list"><li>Мы можем обновлять, приостанавливать или удалять страницы калькуляторов в любое время.</li><li>Пользователи не вправе использовать сайт в незаконных, нарушающих права или деструктивных целях.</li><li>Контент сайта не заменяет профессиональные инвестиционные, юридические, медицинские, налоговые или кредитные консультации.</li></ul>` },
    ar: { title: "الشروط - CalcwiseHub", description: "شروط استخدام CalcwiseHub: نطاق الخدمة ومسؤولية المستخدم ومبادئ استخدام المحتوى.", keywords: "شروط الاستخدام,calcwisehub,شروط الخدمة", badge: "الشروط", h1: "الشروط", html: `<p>بالوصول إلى هذا الموقع واستخدامه، تفهم وتقبل أن الأدوات مقدمة لعرض المعلومات العامة والتقدير فحسب.</p><ul class="list"><li>قد نحدّث صفحات الحاسبات أو نوقفها أو نزيلها في أي وقت.</li><li>لا يجوز استخدام الموقع لأغراض غير قانونية أو انتهاكية أو تدميرية.</li><li>محتوى الموقع لا يحل محل المشورة الاستثمارية أو القانونية أو الطبية أو الضريبية أو الائتمانية المهنية.</li></ul>` },
    hi: { title: "शर्तें - CalcwiseHub", description: "CalcwiseHub की उपयोग शर्तें: सेवा का दायरा, उपयोगकर्ता जिम्मेदारी और सामग्री उपयोग सिद्धांत।", keywords: "उपयोग शर्तें,calcwisehub,सेवा शर्तें", badge: "शर्तें", h1: "शर्तें", html: `<p>इस साइट का उपयोग करने से, आप समझते और स्वीकार करते हैं कि टूल केवल सामान्य जानकारी प्रदर्शन और अनुमान के लिए प्रदान किए गए हैं।</p><ul class="list"><li>हम किसी भी समय कैलकुलेटर पेजों को अपडेट, निलंबित या हटा सकते हैं।</li><li>उपयोगकर्ता अवैध, उल्लंघनकारी या विनाशकारी उद्देश्यों के लिए साइट का उपयोग नहीं कर सकते।</li><li>साइट सामग्री पेशेवर निवेश, कानूनी, चिकित्सा, कर या ऋण सलाह का विकल्प नहीं है।</li></ul>` },
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
    ja: {
      title: "免責事項 - CalcwiseHub",
      description: "CalcwiseHub免責事項：サイトコンテンツ、計算結果、広告、外部リンクの責任範囲について説明します。",
      keywords: "免責事項,calcwisehub,ツール免責事項,結果免責事項",
      badge: "重要なお知らせ",
      h1: "免責事項",
      html: `
        <p><strong>CalcwiseHub</strong>（https://calcwisehub.com）へようこそ。本サイトを使用する前に、以下の免責事項をよくお読みください。</p>
        <h2>1. サイト情報とツールについて</h2>
        <p>本サイトのコンテンツは、情報共有、学習、初期試算のためのものであり、投資・税務・法律・医療・融資に関する公式アドバイスの代替となるものではありません。</p>
        <h2>2. 計算結果について</h2>
        <p>ローン、税金、複利、退職、為替レート等の計算結果はユーザー入力と一般的な計算式に基づくものです。実際の結果は金利、税率、地域の政策等により異なる場合があります。</p>
        <h2>3. 著作権</h2>
        <p>本サイトのオリジナルコンテンツの著作権は本サイトに帰属します。明示的な許可なく複製・転載・商業利用はできません。</p>
        <h2>4. 外部リンク</h2>
        <p>本サイトには第三者サイトへのリンクが含まれる場合があります。第三者サイトの正確性、合法性、利用可能性、セキュリティについて保証しません。</p>
        <h2>5. 広告と宣伝</h2>
        <p>一部ページには第三者広告ネットワークやパートナーによる広告が表示される場合があります。</p>
        <h2>6. 責任の制限</h2>
        <p>法律が許す範囲において、本サイトはサイトコンテンツへの依存から生じる結果について責任を負いません。</p>
        <h2>7. 更新</h2>
        <p>本免責事項は変更される場合があります。最新版が適用されます。</p>
        <p><strong>更新日：</strong>2026年3月17日</p>
      `,
    },
    ko: {
      title: "면책 조항 - CalcwiseHub",
      description: "CalcwiseHub 면책 조항: 사이트 콘텐츠, 계산기 결과, 광고, 외부 링크의 책임 범위를 설명합니다.",
      keywords: "면책 조항,calcwisehub,도구 면책,결과 면책",
      badge: "중요 공지",
      h1: "면책 조항",
      html: `
        <p><strong>CalcwiseHub</strong>(https://calcwisehub.com)에 오신 것을 환영합니다. 본 사이트를 이용하기 전에 다음 면책 조항을 주의 깊게 읽어 주세요.</p>
        <h2>1. 사이트 정보 및 도구 콘텐츠</h2>
        <p>본 사이트 콘텐츠는 정보 공유, 학습, 초기 추정을 위한 것으로, 투자·세금·법률·의료·대출에 관한 공식 조언을 대체하지 않습니다.</p>
        <h2>2. 계산기 결과에 대하여</h2>
        <p>대출, 세금, 복리, 은퇴, 환율 등의 계산 결과는 사용자 입력과 일반 공식에 기반합니다. 실제 결과는 이자율, 세율, 지역 정책 등에 따라 다를 수 있습니다.</p>
        <h2>3. 저작권</h2>
        <p>본 사이트 원본 콘텐츠의 저작권은 본 사이트에 귀속됩니다. 명시적 허가 없이 복제·전재·상업적 이용은 금지됩니다.</p>
        <h2>4. 외부 링크</h2>
        <p>본 사이트에는 제3자 사이트 링크가 포함될 수 있습니다. 제3자 사이트의 정확성, 합법성, 보안에 대해 보증하지 않습니다.</p>
        <h2>5. 광고 및 홍보</h2>
        <p>일부 페이지에는 제3자 광고 네트워크나 협력사의 광고가 표시될 수 있습니다.</p>
        <h2>6. 책임 제한</h2>
        <p>법률이 허용하는 범위 내에서, 본 사이트는 사이트 콘텐츠 의존으로 발생한 결과에 대해 책임지지 않습니다.</p>
        <h2>7. 업데이트</h2>
        <p>본 면책 조항은 변경될 수 있습니다. 최신 버전이 적용됩니다.</p>
        <p><strong>업데이트:</strong> 2026년 3월 17일</p>
      `,
    },
    es: {
      title: "Aviso Legal - CalcwiseHub",
      description: "Aviso legal de CalcwiseHub que explica los límites de responsabilidad del contenido del sitio, resultados de calculadoras, anuncios y enlaces externos.",
      keywords: "aviso legal,calcwisehub,descargo de responsabilidad,herramientas",
      badge: "Aviso importante",
      h1: "Aviso Legal",
      html: `
        <p>Bienvenido a <strong>CalcwiseHub</strong> (https://calcwisehub.com). Antes de usar este sitio, lea detenidamente el siguiente aviso legal.</p>
        <h2>1. Información del sitio y contenido de herramientas</h2>
        <p>El contenido del sitio se proporciona para compartir información, aprender y estimaciones preliminares únicamente. No reemplaza el asesoramiento oficial de inversión, fiscal, legal, médico o de préstamos.</p>
        <h2>2. Resultados de las calculadoras</h2>
        <p>Los resultados de préstamos, impuestos, interés compuesto, jubilación, tipo de cambio, etc. se generan a partir de entradas del usuario y fórmulas generales. Los resultados reales pueden diferir debido a tasas de interés, normas fiscales, políticas locales y otros factores.</p>
        <h2>3. Derechos de autor</h2>
        <p>El contenido original del sitio es propiedad del mismo. No se puede reproducir, copiar o usar comercialmente sin autorización expresa.</p>
        <h2>4. Enlaces externos</h2>
        <p>El sitio puede incluir enlaces a sitios de terceros. No garantizamos la exactitud, legalidad, disponibilidad o seguridad de sitios de terceros.</p>
        <h2>5. Publicidad y promoción</h2>
        <p>Algunas páginas pueden mostrar publicidad o contenido patrocinado de redes publicitarias de terceros o colaboradores.</p>
        <h2>6. Limitación de responsabilidad</h2>
        <p>En la medida permitida por la ley, este sitio no es responsable de consecuencias derivadas del uso del contenido del sitio.</p>
        <h2>7. Actualizaciones</h2>
        <p>Podemos actualizar este aviso legal. La última versión publicada será la aplicable.</p>
        <p><strong>Actualizado:</strong> 17 de marzo de 2026</p>
      `,
    },
    fr: {
      title: "Avertissement - CalcwiseHub",
      description: "Avertissement de CalcwiseHub expliquant les limites de responsabilité pour le contenu du site, les résultats des calculateurs, les annonces et les liens externes.",
      keywords: "avertissement,calcwisehub,limitation de responsabilité,outils",
      badge: "Avis important",
      h1: "Avertissement",
      html: `
        <p>Bienvenue sur <strong>CalcwiseHub</strong> (https://calcwisehub.com). Avant d'utiliser ce site, veuillez lire attentivement l'avertissement suivant.</p>
        <h2>1. Informations du site et contenu des outils</h2>
        <p>Le contenu du site est fourni à des fins de partage d'informations, d'apprentissage et d'estimation préliminaire uniquement. Il ne remplace pas les conseils officiels en matière d'investissement, de fiscalité, de droit, de médecine ou de prêt.</p>
        <h2>2. Résultats des calculateurs</h2>
        <p>Les résultats de prêts, impôts, capitalisation, retraite, taux de change, etc. sont générés à partir des saisies utilisateur et de formules générales. Les résultats réels peuvent différer en raison des taux d'intérêt, règles fiscales et politiques locales.</p>
        <h2>3. Droits d'auteur</h2>
        <p>Le contenu original du site est la propriété de ce site. Toute reproduction, copie ou utilisation commerciale sans autorisation explicite est interdite.</p>
        <h2>4. Liens externes</h2>
        <p>Le site peut inclure des liens vers des sites tiers. Nous ne garantissons pas l'exactitude, la légalité ou la sécurité des sites tiers.</p>
        <h2>5. Publicité et promotion</h2>
        <p>Certaines pages peuvent afficher des publicités ou du contenu sponsorisé de réseaux publicitaires tiers ou de collaborateurs.</p>
        <h2>6. Limitation de responsabilité</h2>
        <p>Dans la mesure permise par la loi, ce site n'est pas responsable des conséquences découlant de l'utilisation du contenu du site.</p>
        <h2>7. Mises à jour</h2>
        <p>Nous pouvons mettre à jour cet avertissement. La dernière version publiée sera applicable.</p>
        <p><strong>Mis à jour :</strong> 17 mars 2026</p>
      `,
    },
    de: {
      title: "Haftungsausschluss - CalcwiseHub",
      description: "CalcwiseHub-Haftungsausschluss, der die Grenzen der Verantwortung für Site-Inhalte, Rechnerergebnisse, Anzeigen und externe Links erklärt.",
      keywords: "Haftungsausschluss,calcwisehub,Werkzeuge,Ergebnisse",
      badge: "Wichtiger Hinweis",
      h1: "Haftungsausschluss",
      html: `
        <p>Willkommen bei <strong>CalcwiseHub</strong> (https://calcwisehub.com). Bitte lesen Sie den folgenden Haftungsausschluss sorgfältig durch, bevor Sie diese Website nutzen.</p>
        <h2>1. Website-Informationen und Tool-Inhalte</h2>
        <p>Die Inhalte dieser Website dienen der Informationsweitergabe, dem Lernen und der ersten Einschätzung. Sie ersetzen keine offizielle Anlage-, Steuer-, Rechts-, Medizin- oder Kreditberatung.</p>
        <h2>2. Rechnerergebnisse</h2>
        <p>Ergebnisse von Darlehens-, Steuer-, Zinseszins-, Renten-, Wechselkursrechnern basieren auf Nutzereingaben und allgemeinen Formeln. Tatsächliche Ergebnisse können abweichen.</p>
        <h2>3. Urheberrecht</h2>
        <p>Originale Website-Inhalte sind Eigentum dieser Website. Vervielfältigung oder kommerzielle Nutzung ohne ausdrückliche Genehmigung ist nicht gestattet.</p>
        <h2>4. Externe Links</h2>
        <p>Diese Website kann Links zu Drittanbieter-Websites enthalten. Wir garantieren nicht die Richtigkeit, Rechtmäßigkeit oder Sicherheit dieser Websites.</p>
        <h2>5. Werbung und Sponsoring</h2>
        <p>Einige Seiten können Werbung oder gesponserte Inhalte von Drittanbieter-Werbenetzwerken oder Kooperationspartnern anzeigen.</p>
        <h2>6. Haftungsbeschränkung</h2>
        <p>Soweit gesetzlich zulässig, haftet diese Website nicht für Folgen, die sich aus der Nutzung der Website-Inhalte ergeben.</p>
        <h2>7. Aktualisierungen</h2>
        <p>Dieser Haftungsausschluss kann geändert werden. Die jeweils aktuelle Version ist maßgebend.</p>
        <p><strong>Aktualisiert:</strong> 17. März 2026</p>
      `,
    },
    pt: {
      title: "Aviso Legal - CalcwiseHub",
      description: "Aviso legal do CalcwiseHub explicando os limites de responsabilidade pelo conteúdo do site, resultados de calculadoras, anúncios e links externos.",
      keywords: "aviso legal,calcwisehub,isenção de responsabilidade,ferramentas",
      badge: "Aviso importante",
      h1: "Aviso Legal",
      html: `
        <p>Bem-vindo ao <strong>CalcwiseHub</strong> (https://calcwisehub.com). Antes de usar este site, leia atentamente o seguinte aviso legal.</p>
        <h2>1. Informações do site e conteúdo das ferramentas</h2>
        <p>O conteúdo do site é fornecido para compartilhamento de informações, aprendizado e estimativas preliminares apenas. Não substitui assessoria oficial de investimento, fiscal, jurídica, médica ou de crédito.</p>
        <h2>2. Resultados das calculadoras</h2>
        <p>Resultados de empréstimos, impostos, juros compostos, aposentadoria, câmbio, etc. são gerados com base nas entradas do usuário e fórmulas gerais. Os resultados reais podem diferir devido a taxas de juros, regras fiscais e políticas locais.</p>
        <h2>3. Direitos autorais</h2>
        <p>O conteúdo original do site é propriedade deste site. Reprodução, cópia ou uso comercial sem autorização expressa é proibido.</p>
        <h2>4. Links externos</h2>
        <p>O site pode incluir links para sites de terceiros. Não garantimos a precisão, legalidade ou segurança de sites de terceiros.</p>
        <h2>5. Publicidade e promoção</h2>
        <p>Algumas páginas podem exibir publicidade ou conteúdo patrocinado de redes de publicidade de terceiros ou colaboradores.</p>
        <h2>6. Limitação de responsabilidade</h2>
        <p>Na medida permitida por lei, este site não é responsável por consequências decorrentes do uso do conteúdo do site.</p>
        <h2>7. Atualizações</h2>
        <p>Podemos atualizar este aviso legal. A versão mais recente publicada será aplicável.</p>
        <p><strong>Atualizado:</strong> 17 de março de 2026</p>
      `,
    },
    ru: {
      title: "Отказ от ответственности - CalcwiseHub",
      description: "Отказ от ответственности CalcwiseHub, объясняющий пределы ответственности за контент сайта, результаты калькуляторов, рекламу и внешние ссылки.",
      keywords: "отказ от ответственности,calcwisehub,инструменты,результаты",
      badge: "Важное уведомление",
      h1: "Отказ от ответственности",
      html: `
        <p>Добро пожаловать на <strong>CalcwiseHub</strong> (https://calcwisehub.com). Прежде чем использовать этот сайт, внимательно ознакомьтесь со следующим заявлением.</p>
        <h2>1. Информация сайта и содержание инструментов</h2>
        <p>Содержание сайта предназначено для обмена информацией, обучения и предварительных расчётов. Оно не заменяет официальные инвестиционные, налоговые, юридические, медицинские или кредитные консультации.</p>
        <h2>2. Результаты калькуляторов</h2>
        <p>Результаты расчётов по кредитам, налогам, сложным процентам, пенсии, валютным курсам и т.д. формируются на основе данных пользователя и общих формул. Фактические результаты могут отличаться.</p>
        <h2>3. Авторские права</h2>
        <p>Оригинальный контент сайта является собственностью этого сайта. Воспроизведение или коммерческое использование без явного разрешения запрещено.</p>
        <h2>4. Внешние ссылки</h2>
        <p>Сайт может содержать ссылки на сторонние ресурсы. Мы не гарантируем точность, законность или безопасность сторонних сайтов.</p>
        <h2>5. Реклама и продвижение</h2>
        <p>Некоторые страницы могут отображать рекламу или спонсируемый контент от сторонних рекламных сетей или партнёров.</p>
        <h2>6. Ограничение ответственности</h2>
        <p>В пределах, допустимых законом, этот сайт не несёт ответственности за последствия, возникшие в результате использования контента сайта.</p>
        <h2>7. Обновления</h2>
        <p>Мы можем обновлять данное заявление. Актуальная версия является обязательной.</p>
        <p><strong>Обновлено:</strong> 17 марта 2026 г.</p>
      `,
    },
    ar: {
      title: "إخلاء المسؤولية - CalcwiseHub",
      description: "إخلاء مسؤولية CalcwiseHub يوضح حدود المسؤولية عن محتوى الموقع ونتائج الحاسبات والإعلانات والروابط الخارجية.",
      keywords: "إخلاء المسؤولية,calcwisehub,أدوات,نتائج",
      badge: "إشعار مهم",
      h1: "إخلاء المسؤولية",
      html: `
        <p>مرحباً بك في <strong>CalcwiseHub</strong> (https://calcwisehub.com). قبل استخدام هذا الموقع، يرجى قراءة إخلاء المسؤولية التالي بعناية.</p>
        <h2>1. معلومات الموقع ومحتوى الأدوات</h2>
        <p>محتوى الموقع مقدم لأغراض مشاركة المعلومات والتعلم والتقدير الأولي فحسب. لا يحل محل المشورة الرسمية في مجالات الاستثمار والضرائب والقانون والطب والإقراض.</p>
        <h2>2. نتائج الحاسبات</h2>
        <p>نتائج القروض والضرائب والفائدة المركبة والتقاعد وأسعار الصرف وغيرها تُنتج استناداً إلى مدخلات المستخدم والصيغ العامة. قد تختلف النتائج الفعلية.</p>
        <h2>3. حقوق النشر</h2>
        <p>المحتوى الأصلي للموقع مملوك لهذا الموقع. يُحظر النسخ أو إعادة النشر أو الاستخدام التجاري دون إذن صريح.</p>
        <h2>4. الروابط الخارجية</h2>
        <p>قد يتضمن الموقع روابط لمواقع طرف ثالث. لا نضمن دقة أو قانونية أو أمان تلك المواقع.</p>
        <h2>5. الإعلانات والترويج</h2>
        <p>قد تعرض بعض الصفحات إعلانات أو محتوى برعاية من شبكات إعلانية أو شركاء.</p>
        <h2>6. تحديد المسؤولية</h2>
        <p>بالقدر الذي يسمح به القانون، لا يتحمل هذا الموقع مسؤولية العواقب الناجمة عن الاعتماد على محتواه.</p>
        <h2>7. التحديثات</h2>
        <p>قد نحدّث هذا الإخلاء. تسري أحدث نسخة منشورة.</p>
        <p><strong>تاريخ التحديث:</strong> 17 مارس 2026</p>
      `,
    },
    hi: {
      title: "अस्वीकरण - CalcwiseHub",
      description: "CalcwiseHub अस्वीकरण: साइट सामग्री, कैलकुलेटर परिणाम, विज्ञापन और बाहरी लिंक के लिए जिम्मेदारी की सीमाएं।",
      keywords: "अस्वीकरण,calcwisehub,टूल,परिणाम",
      badge: "महत्वपूर्ण सूचना",
      h1: "अस्वीकरण",
      html: `
        <p><strong>CalcwiseHub</strong> (https://calcwisehub.com) में आपका स्वागत है। इस साइट का उपयोग करने से पहले कृपया निम्नलिखित अस्वीकरण ध्यान से पढ़ें।</p>
        <h2>1. साइट जानकारी और टूल सामग्री</h2>
        <p>साइट की सामग्री केवल जानकारी साझा करने, सीखने और प्रारंभिक अनुमान के लिए है। यह निवेश, कर, कानूनी, चिकित्सा या ऋण संबंधी आधिकारिक सलाह का विकल्प नहीं है।</p>
        <h2>2. कैलकुलेटर परिणाम</h2>
        <p>लोन, टैक्स, चक्रवृद्धि ब्याज, रिटायरमेंट, विनिमय दर आदि के परिणाम उपयोगकर्ता इनपुट और सामान्य फॉर्मूले से उत्पन्न होते हैं। वास्तविक परिणाम भिन्न हो सकते हैं।</p>
        <h2>3. कॉपीराइट</h2>
        <p>साइट की मूल सामग्री इस साइट की संपत्ति है। स्पष्ट अनुमति के बिना प्रतिलिपि या व्यावसायिक उपयोग निषिद्ध है।</p>
        <h2>4. बाहरी लिंक</h2>
        <p>साइट में तृतीय-पक्ष साइटों के लिंक हो सकते हैं। हम उन साइटों की सटीकता, वैधता या सुरक्षा की गारंटी नहीं देते।</p>
        <h2>5. विज्ञापन और प्रचार</h2>
        <p>कुछ पेजों पर तृतीय-पक्ष विज्ञापन नेटवर्क या सहयोगियों से विज्ञापन या प्रायोजित सामग्री दिखाई जा सकती है।</p>
        <h2>6. देयता की सीमा</h2>
        <p>कानून द्वारा अनुमत सीमा तक, यह साइट साइट सामग्री पर निर्भरता से उत्पन्न परिणामों के लिए जिम्मेदार नहीं है।</p>
        <h2>7. अपडेट</h2>
        <p>हम इस अस्वीकरण को अपडेट कर सकते हैं। नवीनतम प्रकाशित संस्करण लागू होगा।</p>
        <p><strong>अपडेट किया:</strong> 17 मार्च 2026</p>
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
  const pageUrl = absoluteUrl(basePath(window.location.pathname), currentLanguage);
  const siteUrl = absoluteUrl("/", currentLanguage);
  const currentPath = basePath(window.location.pathname);

  const webSiteSchema = {
    "@type": "WebSite",
    "@id": `${absoluteUrl("/", "en")}#website`,
    name: SITE.name,
    url: absoluteUrl("/", "en"),
    inLanguage: currentLanguage,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${absoluteUrl("/calculators/", "en")}?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: title,
    url: pageUrl,
    description,
    inLanguage: currentLanguage,
    image: OG_IMAGE_URL,
    isPartOf: { "@id": `${absoluteUrl("/", "en")}#website` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: buildBreadcrumbItems(currentPath),
    },
  };

  const graph = [webSiteSchema, webPageSchema];

  // Add SoftwareApplication schema for calculator pages
  const isCalculator = currentPath.startsWith("/calculators/") && currentPath !== "/calculators/";
  if (isCalculator) {
    graph.push({
      "@type": "SoftwareApplication",
      "@id": `${pageUrl}#app`,
      name: title,
      url: pageUrl,
      description,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: currentRegionSettings().currency || "USD" },
      inLanguage: currentLanguage,
    });
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.structuredData = "1";
  script.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  document.head.appendChild(script);
}

function buildBreadcrumbItems(path) {
  const nav = tCommon("nav");
  const items = [{ "@type": "ListItem", position: 1, name: nav[0], item: absoluteUrl("/", currentLanguage) }];
  if (path === "/calculators/" || path.startsWith("/calculators/")) {
    items.push({ "@type": "ListItem", position: 2, name: nav[1], item: absoluteUrl("/calculators/", currentLanguage) });
  }
  const h1 = document.querySelector("main h1, [data-calc-title]");
  if (h1 && path !== "/" && path !== "/calculators/") {
    items.push({ "@type": "ListItem", position: items.length + 1, name: h1.textContent.trim(), item: absoluteUrl(path, currentLanguage) });
  }
  return items;
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
    else if (timeZone.includes("Moscow") || timeZone.includes("Yekaterinburg") || timeZone.includes("Krasnoyarsk")) regionCode = "RU";
    else if (timeZone.includes("Sao_Paulo") || timeZone.includes("Fortaleza") || timeZone.includes("Manaus")) regionCode = "BR";
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
    RU: { code: "RU", countryName: "Russia", currency: "RUB", taxMode: "eu", units: "metric" },
    BR: { code: "BR", countryName: "Brazil", currency: "BRL", taxMode: "eu", units: "metric" },
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
  pt: "BR",
  ru: "RU",
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
  RU: { zh: "俄罗斯", en: "Russia", ja: "ロシア", ko: "러시아", es: "Rusia", fr: "Russie", de: "Russland", pt: "Rússia", ru: "Россия", ar: "روسيا", hi: "रूस" },
  BR: { zh: "巴西", en: "Brazil", ja: "ブラジル", ko: "브라질", es: "Brasil", fr: "Brésil", de: "Brasilien", pt: "Brasil", ru: "Бразилия", ar: "البرازيل", hi: "ब्राज़ील" },
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
    RU: { code: "RU", countryName: "Russia", currency: "RUB", taxMode: "eu", units: "metric" },
    BR: { code: "BR", countryName: "Brazil", currency: "BRL", taxMode: "eu", units: "metric" },
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

const OG_IMAGE_URL = "https://calcwisehub.com/assets/og-cover.jpg";
const OG_IMAGE_W = "1200";
const OG_IMAGE_H = "630";

function applyCommonSeoMeta(title, description, pageUrl) {
  const locale = localeForFormatting().replace("-", "_");
  setHeadMeta("og:site_name", SITE.name, true);
  setHeadMeta("og:locale", locale, true);
  setHeadMeta("og:image", OG_IMAGE_URL, true);
  setHeadMeta("og:image:width", OG_IMAGE_W, true);
  setHeadMeta("og:image:height", OG_IMAGE_H, true);
  setHeadMeta("og:image:alt", title, true);
  setHeadMeta("twitter:card", "summary_large_image");
  setHeadMeta("twitter:site", "@calcwisehub");
  setHeadMeta("twitter:title", title);
  setHeadMeta("twitter:description", description);
  setHeadMeta("twitter:image", OG_IMAGE_URL);
  setHeadMeta("twitter:url", pageUrl);
}

function applyPageTranslations() {
  const copy = pathCopy(window.location.pathname);
  if (copy) {
    document.title = copy.title;
    setHeadMeta("description", copy.description);
    if (copy.keywords) setHeadMeta("keywords", copy.keywords);
    setHeadMeta("og:title", copy.title, true);
    setHeadMeta("og:description", copy.description, true);
    const pageUrl = absoluteUrl(basePath(window.location.pathname), currentLanguage);
    setHeadMeta("og:url", pageUrl, true);
    applyCommonSeoMeta(copy.title, copy.description, pageUrl);
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
    const staticPageUrl = absoluteUrl(basePath(window.location.pathname), currentLanguage);
    setHeadMeta("og:url", staticPageUrl, true);
    applyCommonSeoMeta(staticCopy.title, staticCopy.description, staticPageUrl);
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
  // Ensure og:image and Twitter Cards are always set (covers calculator pages)
  const fallbackTitle = document.title || SITE.name;
  const fallbackDesc = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
  const fallbackUrl = absoluteUrl(basePath(window.location.pathname), currentLanguage);
  applyCommonSeoMeta(fallbackTitle, fallbackDesc, fallbackUrl);
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
