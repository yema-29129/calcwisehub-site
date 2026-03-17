(function () {
  const configs = typeof calculatorConfigs !== "undefined" ? calculatorConfigs : window.calculatorConfigs;
  const groups = typeof CATALOG_GROUPS !== "undefined" ? CATALOG_GROUPS : (window.CATALOG_GROUPS || []);
  if (!configs) return;

  function parseNumberList(input) {
    return String(input || "")
      .split(/[，,\s]+/)
      .map((item) => parseFloat(item))
      .filter((value) => Number.isFinite(value));
  }

  function clampYears(value) {
    return Math.max(1, Math.min(Math.round(value || 1), 60));
  }

  function factorial(n) {
    const safe = Math.max(0, Math.min(170, Math.floor(n)));
    let result = 1;
    for (let i = 2; i <= safe; i += 1) result *= i;
    return result;
  }

  function meanOf(list) {
    return list.length ? list.reduce((sum, value) => sum + value, 0) / list.length : 0;
  }

  function varianceOf(list) {
    if (!list.length) return 0;
    const avg = meanOf(list);
    return meanOf(list.map((value) => (value - avg) ** 2));
  }

  function medianOf(list) {
    if (!list.length) return 0;
    const sorted = [...list].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
  }

  function createLabels(length, suffixZh = "期", suffixEn = "p") {
    return Array.from({ length }, (_, index) => `${index + 1}${tPair(suffixZh, suffixEn)}`);
  }

  function createChart(seriesA, seriesB, opts) {
    return {
      title: tPair(opts.titleZh, opts.titleEn),
      desc: tPair(opts.descZh, opts.descEn),
      legends: [tPair(opts.legendAZh, opts.legendAEn), tPair(opts.legendBZh, opts.legendBEn)],
      series: [seriesA, seriesB],
      valueType: opts.valueType || "currency",
      mode: opts.mode,
      labels: opts.labels || createLabels(Math.max(seriesA.length, seriesB.length)),
      tooltipLabel: opts.tooltipLabel || "",
      totalLabel: opts.totalLabel || "",
    };
  }

  function normalizeExpression(expr, extraScope = {}) {
    const reserved = new Set(["Math", "PI", "E"]);
    return String(expr || "")
      .replace(/，/g, ",")
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/\^/g, "**")
      .replace(/√/g, "sqrt")
      .replace(/\bpi\b/gi, "PI")
      .replace(/\be\b/g, "E")
      .replace(/\bln\(/gi, "log(")
      .replace(/\blog\(/gi, "log10(")
      .replace(/\babs\(/gi, "abs(")
      .replace(/\bsin\(/gi, "sin(")
      .replace(/\bcos\(/gi, "cos(")
      .replace(/\btan\(/gi, "tan(")
      .replace(/\bsqrt\(/gi, "sqrt(")
      .replace(/\bexp\(/gi, "exp(")
      .replace(/\b([a-zA-Z_]\w*)\b/g, (match, name) => {
        if (reserved.has(name)) return name;
        if (Object.prototype.hasOwnProperty.call(extraScope, name)) return name;
        const fnNames = ["sin", "cos", "tan", "sqrt", "abs", "exp", "log", "log10"];
        if (fnNames.includes(name)) return `Math.${name}`;
        return name;
      });
  }

  function safeEvaluate(expr, scope = {}) {
    const source = normalizeExpression(expr, scope);
    try {
      const names = Object.keys(scope);
      const values = Object.values(scope);
      const fn = new Function(...names, "PI", "E", `return (${source});`);
      const result = fn(...values, Math.PI, Math.E);
      return Number.isFinite(result) ? result : NaN;
    } catch (error) {
      return NaN;
    }
  }

  function createSeoConfig(nameZh, nameEn, categoryZh, categoryEn, subtitleZh, subtitleEn, extraZh, extraEn) {
    return {
      name: { zh: nameZh, en: nameEn },
      category: { zh: categoryZh, en: categoryEn },
      subtitle: { zh: subtitleZh, en: subtitleEn },
      metaDescription: {
        zh: `${nameZh}，${subtitleZh} 适合在线试算、结果比较、Google 与百度收录页面建设。`,
        en: `${nameEn}. ${subtitleEn} Built as an indexable calculator page for search and repeat usage.`,
      },
      seoKeywords: {
        zh: [nameZh, `${nameZh}在线`, `${nameZh}公式`, `${nameZh}结果`, ...(extraZh || [])],
        en: [nameEn, `${nameEn} online`, `${nameEn} formula`, `${nameEn} result`, ...(extraEn || [])],
      },
    };
  }

  function createSimpleInfoSection(topicZh, topicEn, bodyZh, bodyEn, listZh, listEn, faqQZh, faqQEn, faqAZh, faqAEn) {
    return createSimpleArticle(topicZh, topicEn, bodyZh, bodyEn, listZh, listEn, faqQZh, faqQEn, faqAZh, faqAEn);
  }

  function twoSeriesFromValue(valueA, valueB, years, mode) {
    const length = clampYears(years);
    return createChart(
      createSeries(valueA, length),
      createSeries(valueB, length),
      {
        titleZh: mode.titleZh,
        titleEn: mode.titleEn,
        descZh: mode.descZh,
        descEn: mode.descEn,
        legendAZh: mode.legendAZh,
        legendAEn: mode.legendAEn,
        legendBZh: mode.legendBZh,
        legendBEn: mode.legendBEn,
        mode: mode.mode,
        valueType: mode.valueType,
      },
    );
  }

  function simpleInsights(aZh, aEn, bZh, bEn) {
    return createSimpleInsights(aZh, aEn, bZh, bEn);
  }

  function appendToGroup(groupNameZh, titleZh, titleEn, descZh, descEn, slugs) {
    let group = groups.find((item) => item.zh === groupNameZh);
    if (!group) {
      group = { zh: groupNameZh, en: titleEn, titleZh, titleEn, descZh, descEn, slugs: [] };
      groups.push(group);
    }
    slugs.forEach((slug) => {
      if (!group.slugs.includes(slug)) group.slugs.push(slug);
    });
  }

  function financeResult(config, values, output) {
    const years = clampYears(values.years || values.periods || 10);
    return {
      kpis: output.kpis,
      note: output.note,
      charts: output.charts || [
        twoSeriesFromValue(output.chartA || 0, output.chartB || 0, years, {
          titleZh: "结果趋势图",
          titleEn: "Trend chart",
          descZh: "把关键结果放在同一张图里做比较。",
          descEn: "Compare the key results in one trend chart.",
          legendAZh: "主要结果",
          legendAEn: "Main result",
          legendBZh: "对比结果",
          legendBEn: "Comparison result",
        }),
      ],
      insights: output.insights,
      table: output.table,
      article: output.article,
    };
  }

  const additions = {
    "combination-loan": {
      ...createSeoConfig(
        "组合贷款计算器",
        "Combination Loan Calculator",
        "贷款 / 房产",
        "Loans / Housing",
        "同时测算公积金贷款和商业贷款两部分月供、总利息和总还款。",
        "Estimate provident and commercial mortgage components together.",
        ["组合房贷计算器", "公积金商贷计算器"],
        ["blended mortgage calculator"],
      ),
      quick: {
        zh: ["同时看公积金与商贷部分", "适合买房方案对比", "结果拆分更直观"],
        en: ["See provident and commercial parts together", "Useful for comparing mortgage plans", "Split results more clearly"],
      },
      features: [
        { id: "fund-principal", type: "number", label: { zh: "公积金贷款", en: "Provident Loan" }, default: () => 500000 },
        { id: "fund-rate", type: "number", step: "0.01", label: { zh: "公积金利率 (%)", en: "Provident Rate (%)" }, default: () => 2.85 },
        { id: "commercial-principal", type: "number", label: { zh: "商业贷款", en: "Commercial Loan" }, default: () => 900000 },
        { id: "commercial-rate", type: "number", step: "0.01", label: { zh: "商业贷款利率 (%)", en: "Commercial Rate (%)" }, default: () => 3.95 },
        { id: "years", type: "number", label: { zh: "贷款年限", en: "Years" }, default: () => 30 },
      ],
      compute(values) {
        const fundPayment = monthlyPayment(values["fund-principal"], values["fund-rate"], values.years);
        const commercialPayment = monthlyPayment(values["commercial-principal"], values["commercial-rate"], values.years);
        const monthly = fundPayment + commercialPayment;
        const principal = values["fund-principal"] + values["commercial-principal"];
        const total = monthly * values.years * 12;
        const interest = total - principal;
        return financeResult(this, values, {
          kpis: [
            [tPair("组合月供", "Combined Payment"), money(monthly)],
            [tPair("贷款本金", "Principal"), money(principal)],
            [tPair("总利息", "Total Interest"), money(interest)],
            [tPair("总还款", "Total Repayment"), money(total)],
          ],
          note: tPair("组合贷款的重点不是看哪一部分便宜，而是看合并后的月供压力和总成本。", "The key is not which component is cheaper in isolation, but what the merged payment and total cost look like."),
          chartA: total,
          chartB: interest,
          insights: simpleInsights("适合买房时比较组合贷款与纯商贷方案。", "Useful for comparing a blended mortgage with a pure commercial-loan plan.", "用户通常会反复调利率、额度和年限，是很强的留存工具。", "Users revisit to compare rates, caps, and terms repeatedly."),
          table: {
            title: tPair("两部分贷款拆解", "Loan split overview"),
            desc: tPair("把公积金和商业贷款放到同一张表里。", "See provident and commercial parts in the same table."),
            headers: [tPair("部分", "Part"), tPair("月供", "Monthly Payment"), tPair("总还款", "Total Repayment")],
            rows: [
              [tPair("公积金", "Provident"), money(fundPayment), money(fundPayment * values.years * 12)],
              [tPair("商业贷款", "Commercial"), money(commercialPayment), money(commercialPayment * values.years * 12)],
            ],
          },
          article: createSimpleInfoSection(
            "为什么组合贷款值得单独算",
            "Why a blended mortgage deserves its own page",
            "组合贷款把两种利率结构叠在一起，只有单独拆开，才能更清楚地比较长期成本。",
            "A blended mortgage combines two rate structures. Breaking them out separately makes long-term cost comparison clearer.",
            ["先看组合月供。", "再看总利息。", "最后比较与纯商贷的差距。"],
            ["Start with the combined payment.", "Then inspect total interest.", "Finally compare it with a pure commercial mortgage."],
            "组合贷款一定更划算吗？",
            "Is a combination loan always cheaper?",
            "不一定，还要结合额度上限、首付安排和利率差来判断。",
            "Not always. Loan caps, down-payment setup, and rate spread still matter.",
          ),
        });
      },
    },
    "etf-sip": {
      ...createSeoConfig(
        "ETF定投计算器",
        "ETF SIP Calculator",
        "投资理财",
        "Investing",
        "按 ETF 长期定投节奏测算累计投入、持仓终值和收益增速。",
        "Project long-term ETF periodic investing and growth.",
        ["ETF投资计算器", "指数基金定投计算器"],
        ["ETF recurring investment calculator"],
      ),
      quick: {
        zh: ["适合 ETF 长期定投", "看累计投入与收益增长", "图表展示长期结果"],
        en: ["Useful for long-term ETF investing", "See contribution and gain growth", "Visualize long-term results"],
      },
      features: [
        { id: "monthly-invest", type: "number", label: { zh: "每月投入", en: "Monthly Contribution" }, default: () => 2000 },
        { id: "annual-rate", type: "number", step: "0.01", label: { zh: "预期年化收益率 (%)", en: "Expected Annual Return (%)" }, default: () => 8 },
        { id: "years", type: "number", label: { zh: "投资年限", en: "Years" }, default: () => 15 },
        { id: "starting-balance", type: "number", label: { zh: "已有本金", en: "Starting Balance" }, default: () => 0 },
      ],
      compute(values) {
        const total = futureValueMonthly(values["starting-balance"], values["monthly-invest"], values["annual-rate"], values.years);
        const principal = values["starting-balance"] + values["monthly-invest"] * values.years * 12;
        const gain = total - principal;
        return financeResult(this, values, {
          kpis: [
            [tPair("预计终值", "Projected Value"), money(total)],
            [tPair("累计投入", "Contribution"), money(principal)],
            [tPair("预估收益", "Gain"), money(gain)],
            [tPair("收益占比", "Gain Share"), pct(gain / Math.max(total, 1) * 100)],
          ],
          note: tPair("ETF 定投更适合按长期目标来理解，而不是只盯着某一年涨跌。", "ETF periodic investing works better when understood through long-term goals rather than one-year swings."),
          chartA: principal,
          chartB: gain,
          insights: simpleInsights("适合长期资产增长和目标导向投资。", "Useful for long-term asset growth and goal-based investing.", "收益率、年限和投入额经常会被反复修改，是高频工具。", "Users repeatedly adjust return assumptions, time horizon, and contribution size, making it a repeat-use tool."),
          table: {
            title: tPair("不同持有年限下的结果", "Results by holding period"),
            desc: tPair("看同样投入节奏下，时间如何放大复利差异。", "See how time amplifies compounding with the same contribution pace."),
            headers: [tPair("年限", "Years"), tPair("累计投入", "Contribution"), tPair("预计终值", "Projected Value")],
            rows: [5, 10, 15, 20].map((year) => [
              `${year}${tPair("年", " years")}`,
              money(values["starting-balance"] + values["monthly-invest"] * year * 12),
              money(futureValueMonthly(values["starting-balance"], values["monthly-invest"], values["annual-rate"], year)),
            ]),
          },
          article: createSimpleInfoSection(
            "为什么 ETF 定投适合独立页面",
            "Why ETF periodic investing deserves an independent page",
            "ETF 定投用户通常会长期回来比较投入额、收益率和目标金额，这使它天然适合做高留存和可收录的工具页。",
            "ETF investors often return to compare contribution size, return assumptions, and target values over time, which makes this naturally fit a sticky, indexable tool page.",
            ["先定投入金额。", "再看目标年限。", "最后对比收益情景。"],
            ["Start with a contribution amount.", "Then choose the horizon.", "Finally compare return scenarios."],
            "ETF 定投一定比存款好吗？",
            "Is ETF investing always better than saving cash?",
            "不一定，它通常有更高收益预期，但也会承受波动。",
            "Not always. It may offer stronger expected growth, but it also carries volatility.",
          ),
        });
      },
    },
    "investment-goal": {
      ...createSeoConfig(
        "投资目标计算器",
        "Investment Goal Calculator",
        "投资理财",
        "Investing",
        "反推为了达到目标资产，你每月需要投入多少资金。",
        "Backsolve the monthly contribution needed to reach a target asset value.",
        ["目标金额计算器", "理财目标计算器"],
        ["target portfolio calculator"],
      ),
      quick: {
        zh: ["反推每月所需投入", "适合目标导向理财", "适合教育金与退休金规划"],
        en: ["Backsolve required monthly contributions", "Useful for goal-based investing", "Great for education and retirement planning"],
      },
      features: [
        { id: "target-value", type: "number", label: { zh: "目标金额", en: "Target Value" }, default: () => 1000000 },
        { id: "starting-balance", type: "number", label: { zh: "已有本金", en: "Starting Balance" }, default: () => 100000 },
        { id: "annual-rate", type: "number", step: "0.01", label: { zh: "预期年化收益率 (%)", en: "Expected Annual Return (%)" }, default: () => 7 },
        { id: "years", type: "number", label: { zh: "目标年限", en: "Years to Goal" }, default: () => 12 },
      ],
      compute(values) {
        const r = values["annual-rate"] / 100 / 12;
        const n = values.years * 12;
        const futureStarting = values["starting-balance"] * (1 + r) ** n;
        const requiredMonthly = r === 0
          ? Math.max((values["target-value"] - futureStarting) / Math.max(n, 1), 0)
          : Math.max((values["target-value"] - futureStarting) / ((((1 + r) ** n - 1) / r) * (1 + r)), 0);
        return financeResult(this, values, {
          kpis: [
            [tPair("每月所需投入", "Required Monthly Contribution"), money(requiredMonthly)],
            [tPair("目标金额", "Target Value"), money(values["target-value"])],
            [tPair("当前本金未来值", "Future Value of Current Capital"), money(futureStarting)],
            [tPair("目标年限", "Years"), `${values.years}`],
          ],
          note: tPair("目标型投资最重要的不是知道想要多少钱，而是把目标拆成每月行动。", "The most important part of goal-based investing is turning the target into a monthly action plan."),
          chartA: values["target-value"],
          chartB: futureStarting,
          insights: simpleInsights("适合教育金、买房首付和养老金目标。", "Useful for education funds, down-payment planning, and retirement targets.", "用户会因为目标和收益预期变化而反复回来调整。", "Users revisit as targets and return assumptions change."),
          table: {
            title: tPair("不同年限所需投入", "Required contribution by years"),
            desc: tPair("目标不变时，看时间如何改变月度压力。", "See how time changes the required monthly pressure for the same target."),
            headers: [tPair("年限", "Years"), tPair("每月所需投入", "Monthly Need"), tPair("目标金额", "Target")],
            rows: [5, 10, 15, 20].map((year) => {
              const rr = values["annual-rate"] / 100 / 12;
              const nn = year * 12;
              const currentFuture = values["starting-balance"] * (1 + rr) ** nn;
              const need = rr === 0
                ? Math.max((values["target-value"] - currentFuture) / Math.max(nn, 1), 0)
                : Math.max((values["target-value"] - currentFuture) / ((((1 + rr) ** nn - 1) / rr) * (1 + rr)), 0);
              return [`${year}${tPair("年", " years")}`, money(need), money(values["target-value"])];
            }),
          },
          article: createSimpleInfoSection(
            "为什么投资目标要反推",
            "Why investment goals should be reverse engineered",
            "很多人知道自己想要多少钱，却不知道从今天开始每月应该做什么。目标型工具的价值，就是把结果转成行动。",
            "Many people know the target amount they want but do not know what to do each month from today onward. A goal tool turns the result into action.",
            ["先定目标金额。", "再估算收益率。", "最后倒推每月投入。"],
            ["Set the target amount.", "Estimate the return assumption.", "Finally backsolve the monthly contribution."],
            "收益率填高一点是不是更轻松？",
            "Does a higher return assumption make the plan easier?",
            "会，但也更乐观。做长期规划时建议同时看保守与基准情景。",
            "Yes, but it also makes the plan more optimistic. Compare conservative and base scenarios.",
          ),
        });
      },
    },
    "dividend-growth": {
      ...createSeoConfig(
        "股息增长计算器",
        "Dividend Growth Calculator",
        "投资理财",
        "Investing",
        "估算股息按固定增速增长后，未来现金分红会达到什么水平。",
        "Estimate future dividend income when payouts grow at a steady annual rate.",
        ["分红增长计算器", "股息成长计算器"],
        ["income growth calculator"],
      ),
      quick: {
        zh: ["适合分红型资产", "看未来现金流增长", "支持长期收入规划"],
        en: ["Great for dividend assets", "See future income growth", "Useful for long-term income planning"],
      },
      features: [
        { id: "current-income", type: "number", label: { zh: "当前年股息", en: "Current Annual Dividend" }, default: () => 12000 },
        { id: "growth-rate", type: "number", step: "0.01", label: { zh: "年增长率 (%)", en: "Annual Growth Rate (%)" }, default: () => 6 },
        { id: "years", type: "number", label: { zh: "年限", en: "Years" }, default: () => 10 },
      ],
      compute(values) {
        const series = Array.from({ length: clampYears(values.years) }, (_, i) => values["current-income"] * (1 + values["growth-rate"] / 100) ** (i + 1));
        const futureIncome = series[series.length - 1] || values["current-income"];
        const sumIncome = series.reduce((sum, value) => sum + value, 0);
        return financeResult(this, values, {
          kpis: [
            [tPair("未来年股息", "Future Annual Dividend"), money(futureIncome)],
            [tPair("累计股息", "Cumulative Dividend"), money(sumIncome)],
            [tPair("当前年股息", "Current Annual Dividend"), money(values["current-income"])],
            [tPair("增长率", "Growth Rate"), pct(values["growth-rate"])],
          ],
          note: tPair("分红增长型工具最能让用户感受到未来现金流是如何慢慢长大的。", "Dividend-growth tools work because they make future cash flow expansion more tangible."),
          charts: [
            createChart(series, createSeries(values["current-income"], series.length), {
              titleZh: "股息增长路径",
              titleEn: "Dividend growth path",
              descZh: "看未来年股息如何随增长率放大。",
              descEn: "See how annual dividend income expands over time.",
              legendAZh: "增长后的股息",
              legendAEn: "Grown dividend",
              legendBZh: "当前股息基线",
              legendBEn: "Current baseline",
            }),
          ],
          insights: simpleInsights("适合以现金流为核心目标的长期投资用户。", "Useful for long-term investors focused on cash income.", "只要增长率和年限变化，用户就会回来重算。", "Users return whenever growth-rate or time assumptions change."),
          table: {
            title: tPair("不同年份的年股息", "Annual dividend by year"),
            desc: tPair("看时间和增长率如何共同作用。", "See how time and growth work together."),
            headers: [tPair("年份", "Year"), tPair("年股息", "Annual Dividend"), tPair("累计股息", "Cumulative")],
            rows: series.map((value, index) => [
              `${index + 1}`,
              money(value),
              money(series.slice(0, index + 1).reduce((sum, item) => sum + item, 0)),
            ]),
          },
          article: createSimpleInfoSection(
            "为什么股息增长值得单独算",
            "Why dividend growth deserves a dedicated calculator",
            "很多人只看当前股息，却忽略了未来几年分红增长后，收入曲线可能会完全不同。",
            "Many people focus on current dividend income and ignore how much different the income stream can look after years of growth.",
            ["先看当前年股息。", "再看增长率。", "最后看未来几年现金流。"],
            ["Start with the current annual dividend.", "Then review the growth rate.", "Finally inspect the future income path."],
            "股息增长会一直持续吗？",
            "Can dividend growth continue forever?",
            "不能保证，所以长期规划时建议同时看保守和基准情景。",
            "It is never guaranteed, so long-term planning should compare both conservative and base scenarios.",
          ),
        });
      },
    },
    "dividend-yield": {
      ...createSeoConfig(
        "股息收益率计算器",
        "Dividend Yield Calculator",
        "投资理财",
        "Investing",
        "快速换算股价、年股息和股息收益率，方便筛选分红型资产。",
        "Convert share price and annual dividend into dividend yield for screening income assets.",
        ["股息率计算器", "分红收益率计算器"],
        ["yield on cost calculator"],
      ),
      quick: {
        zh: ["适合分红股筛选", "快速换算股息率", "比较不同买入价格"],
        en: ["Useful for dividend-stock screening", "Quickly calculate yield", "Compare purchase prices"],
      },
      features: [
        { id: "annual-dividend", type: "number", label: { zh: "每股年股息", en: "Annual Dividend Per Share" }, default: () => 4.8 },
        { id: "share-price", type: "number", label: { zh: "当前股价", en: "Share Price" }, default: () => 80 },
        { id: "shares", type: "number", label: { zh: "持股数量", en: "Number of Shares" }, default: () => 1000 },
      ],
      compute(values) {
        const yieldRate = values["annual-dividend"] / Math.max(values["share-price"], 0.0001) * 100;
        const annualIncome = values["annual-dividend"] * values.shares;
        const marketValue = values["share-price"] * values.shares;
        return financeResult(this, values, {
          kpis: [
            [tPair("股息收益率", "Dividend Yield"), pct(yieldRate)],
            [tPair("年股息收入", "Annual Dividend Income"), money(annualIncome)],
            [tPair("持仓市值", "Portfolio Value"), money(marketValue)],
            [tPair("每股年股息", "Dividend Per Share"), money(values["annual-dividend"])],
          ],
          note: tPair("股息率页最适合帮助用户先筛掉不符合目标收益率的资产。", "A dividend-yield page works well as a first-pass filter for income targets."),
          chartA: annualIncome,
          chartB: marketValue,
          insights: simpleInsights("适合初筛分红股、REITs 和高股息资产。", "Useful for screening dividend stocks, REITs, and high-yield assets.", "股价和分红变化时，用户会回来重新核算。", "Users revisit when price or dividend assumptions change."),
          table: {
            title: tPair("不同股价下的股息率", "Dividend yield at different prices"),
            desc: tPair("看价格变化如何影响股息率判断。", "See how share-price changes affect yield."),
            headers: [tPair("股价", "Share Price"), tPair("股息率", "Dividend Yield"), tPair("年股息收入", "Annual Income")],
            rows: [values["share-price"] * 0.9, values["share-price"], values["share-price"] * 1.1].map((price) => [
              money(price),
              pct(values["annual-dividend"] / Math.max(price, 0.0001) * 100),
              money(values["annual-dividend"] * values.shares),
            ]),
          },
          article: createSimpleInfoSection(
            "为什么股息率适合独立页面",
            "Why dividend yield fits a standalone page",
            "分红型投资者通常先看股息率，再决定是否继续研究公司质量和增长能力。",
            "Income-focused investors usually look at yield first before deciding whether the company deserves deeper analysis on quality or growth.",
            ["先输入每股股息。", "再输入股价。", "最后看收益率。"],
            ["Enter annual dividend per share.", "Then input the share price.", "Finally inspect the yield."],
            "股息率越高越好吗？",
            "Is a higher yield always better?",
            "不一定，过高股息率可能来自股价大跌，也可能意味着风险更高。",
            "Not always. A very high yield can come from a falling share price or imply higher risk.",
          ),
        });
      },
    },
  };

  additions["social-security"] = {
    ...createSeoConfig("社保计算器", "Social Security Calculator", "税务", "Tax", "估算工资基数下的个人社保缴费、单位成本和税前扣除影响。", "Estimate employee social-security contribution and employer cost from salary base.", ["五险一金计算器", "社保缴费计算器"], ["payroll social security calculator"]),
    quick: { zh: ["适合薪资到手测算", "看个人和单位缴费", "适合 Offer 比较"], en: ["Useful for payroll planning", "See employee and employer cost", "Helpful for offer comparison"] },
    features: [
      { id: "salary", type: "number", label: { zh: "缴费基数", en: "Contribution Base" }, default: () => region().currency === "CNY" ? 12000 : region().currency === "USD" ? 6000 : 4000 },
      { id: "employee-rate", type: "number", step: "0.01", label: { zh: "个人缴费率 (%)", en: "Employee Rate (%)" }, default: () => region().code === "CN" ? 10.5 : region().code === "US" ? 7.65 : 9.5 },
      { id: "employer-rate", type: "number", step: "0.01", label: { zh: "单位缴费率 (%)", en: "Employer Rate (%)" }, default: () => region().code === "CN" ? 26 : region().code === "US" ? 7.65 : 18 },
    ],
    compute(values) {
      const employee = values.salary * values["employee-rate"] / 100;
      const employer = values.salary * values["employer-rate"] / 100;
      return financeResult(this, values, {
        kpis: [[tPair("个人月缴费", "Employee Contribution"), money(employee)], [tPair("单位月缴费", "Employer Contribution"), money(employer)], [tPair("税前扣除影响", "Deduction Impact"), money(employee)], [tPair("总社保成本", "Total Social Security Cost"), money(employee + employer)]],
        note: tPair("社保对到手收入和企业用工成本都会产生影响，适合在谈薪前先算清楚。", "Social security affects both take-home pay and employer cost, so it is worth calculating before compensation discussions."),
        chartA: employer,
        chartB: employee,
        insights: simpleInsights("适合看税前扣除和企业用工总成本。", "Useful for understanding payroll deductions and total employment cost.", "换城市、谈薪或转正时，用户会反复用它。", "Users revisit it when relocating, negotiating, or switching employment terms."),
        table: { title: tPair("不同基数下的缴费", "Contribution by salary base"), desc: tPair("看工资基数变化如何影响个人与单位成本。", "See how salary-base changes affect employee and employer cost."), headers: [tPair("基数", "Base"), tPair("个人缴费", "Employee"), tPair("单位缴费", "Employer")], rows: [0.8, 1, 1.2].map((ratio) => [money(values.salary * ratio), money(values.salary * ratio * values["employee-rate"] / 100), money(values.salary * ratio * values["employer-rate"] / 100)]) },
        article: createSimpleInfoSection("为什么社保页值得保留", "Why a social-security page is worth indexing", "很多用户在谈薪时只看税前工资，忽略了社保缴费基数对到手和企业成本的影响。", "Many users only look at gross salary and miss the impact of social-security base on take-home and employer cost.", ["先看个人缴费。", "再看单位成本。", "最后再和税后收入一起判断。"], ["Check the employee contribution first.", "Then inspect employer cost.", "Finally combine it with net-pay analysis."], "社保缴费是不是越低越好？", "Is a lower social-security payment always better?", "不一定，缴费越低虽然短期到手更高，但长期保障可能也会降低。", "Not necessarily. Lower contributions may improve short-term take-home pay but can reduce long-term protection."),
      });
    },
  };

  additions["profit-margin"] = {
    ...createSeoConfig("利润率计算器", "Profit Margin Calculator", "经营 / 成本", "Business / Margin", "快速计算收入、成本、利润和利润率，适合报价和经营分析。", "Calculate revenue, cost, profit, and margin for pricing and operations.", ["净利润率计算器"], ["profit ratio calculator"]),
    quick: { zh: ["适合报价与经营分析", "看收入与利润关系", "适合小团队和个体经营"], en: ["Useful for pricing and operations", "See revenue and profit relation", "Good for small businesses"] },
    features: [
      { id: "revenue", type: "number", label: { zh: "营业收入", en: "Revenue" }, default: () => 100000 },
      { id: "cost", type: "number", label: { zh: "总成本", en: "Total Cost" }, default: () => 68000 },
    ],
    compute(values) {
      const profit = values.revenue - values.cost;
      const margin = profit / Math.max(values.revenue, 1) * 100;
      return financeResult(this, values, {
        kpis: [[tPair("利润", "Profit"), money(profit)], [tPair("利润率", "Profit Margin"), pct(margin)], [tPair("收入", "Revenue"), money(values.revenue)], [tPair("成本", "Cost"), money(values.cost)]],
        note: tPair("利润率最适合做报价前后的快速判断，先看利润有没有留下来。", "Profit margin is useful before and after pricing decisions: first see whether enough profit remains."),
        chartA: values.revenue,
        chartB: values.cost,
        insights: simpleInsights("适合报价、活动复盘和渠道利润判断。", "Useful for pricing, campaign review, and channel profit evaluation.", "只要收入或成本变动，这个页面就值得再次打开。", "Any change in revenue or cost makes this worth revisiting."),
        table: { title: tPair("不同收入情景", "Different revenue scenarios"), desc: tPair("看收入变化后利润率如何变化。", "See how margin changes as revenue changes."), headers: [tPair("收入", "Revenue"), tPair("利润", "Profit"), tPair("利润率", "Margin")], rows: [0.9, 1, 1.1].map((ratio) => { const revenue = values.revenue * ratio; const profitAlt = revenue - values.cost; return [money(revenue), money(profitAlt), pct(profitAlt / Math.max(revenue, 1) * 100)]; }) },
        article: createSimpleInfoSection("为什么利润率页适合 SEO", "Why a profit-margin page works well for SEO", "经营者经常需要快速看一单生意值不值得做，利润率页能直接解决这个高频问题。", "Operators often need to decide quickly whether a deal is worth taking. A margin page answers that frequent question directly.", ["先填收入。", "再填总成本。", "最后看利润和利润率。"], ["Enter revenue first.", "Then total cost.", "Finally inspect profit and margin."], "利润率多少才算健康？", "What profit margin is considered healthy?", "没有绝对标准，要看行业、固定成本和增长阶段。", "There is no universal answer. It depends on industry, fixed cost, and growth stage."),
      });
    },
  };

  additions["gross-margin"] = {
    ...createSeoConfig("毛利率计算器", "Gross Margin Calculator", "经营 / 成本", "Business / Margin", "计算售价、进货成本、毛利润和毛利率，适合电商、零售和服务定价。", "Calculate selling price, cost, gross profit, and gross margin.", ["毛利润计算器"], ["gross profit calculator"]),
    quick: { zh: ["适合零售与电商", "看售价和进货成本", "适合调价试算"], en: ["Useful for retail and ecommerce", "See price and product cost", "Good for repricing analysis"] },
    features: [
      { id: "sale-price", type: "number", label: { zh: "销售收入", en: "Selling Price" }, default: () => 299 },
      { id: "product-cost", type: "number", label: { zh: "产品成本", en: "Product Cost" }, default: () => 168 },
    ],
    compute(values) {
      const grossProfit = values["sale-price"] - values["product-cost"];
      const margin = grossProfit / Math.max(values["sale-price"], 1) * 100;
      return financeResult(this, values, {
        kpis: [[tPair("毛利润", "Gross Profit"), money(grossProfit)], [tPair("毛利率", "Gross Margin"), pct(margin)], [tPair("销售收入", "Revenue"), money(values["sale-price"])], [tPair("产品成本", "Product Cost"), money(values["product-cost"])]],
        note: tPair("毛利率页适合先算单品、再算整体，避免忙了一圈却没有空间覆盖运营费用。", "A gross-margin page helps you validate unit economics before you scale."),
        chartA: values["sale-price"],
        chartB: values["product-cost"],
        insights: simpleInsights("适合商品报价、促销折扣和单品筛选。", "Useful for product pricing, promotions, and SKU screening.", "调价格、调成本时，用户会反复回来对比。", "Users revisit whenever prices or costs change."),
        table: { title: tPair("不同售价情景", "Different pricing scenarios"), desc: tPair("看售价变化后毛利率会怎么变。", "See how gross margin changes under different prices."), headers: [tPair("售价", "Price"), tPair("毛利润", "Gross Profit"), tPair("毛利率", "Gross Margin")], rows: [0.9, 1, 1.1].map((ratio) => { const price = values["sale-price"] * ratio; return [money(price), money(price - values["product-cost"]), pct((price - values["product-cost"]) / Math.max(price, 1) * 100)]; }) },
        article: createSimpleInfoSection("为什么毛利率要单独看", "Why gross margin should be viewed separately", "毛利率不是最终利润，但它决定了你有没有空间覆盖营销、人工和管理费用。", "Gross margin is not final profit, but it determines whether there is room to cover marketing, labor, and overhead.", ["先看单件毛利。", "再看毛利率。", "最后再估算固定成本。"], ["Start with unit gross profit.", "Then gross margin.", "Finally estimate fixed overhead."], "毛利率高就一定赚钱吗？", "Does a high gross margin always mean profitability?", "不一定，还要看投放、人工、租金和其他费用。", "Not always. Advertising, labor, rent, and other overhead still matter."),
      });
    },
  };

  additions["cost-of-living"] = {
    ...createSeoConfig("生活成本计算器", "Cost of Living Calculator", "储蓄 / 现金流", "Savings / Cash Flow", "比较不同城市或不同生活方式下的月支出和年支出差异。", "Compare monthly and yearly living costs across cities or lifestyles.", ["月生活成本计算器"], ["living expense calculator"]),
    quick: { zh: ["适合换城市预算", "适合家庭月支出盘点", "看月度与年度差额"], en: ["Useful for relocation budgeting", "Great for household cost review", "See monthly and yearly differences"] },
    features: [
      { id: "housing", type: "number", label: { zh: "住房", en: "Housing" }, default: () => 4000 },
      { id: "food", type: "number", label: { zh: "餐饮", en: "Food" }, default: () => 2200 },
      { id: "transport", type: "number", label: { zh: "交通", en: "Transport" }, default: () => 900 },
      { id: "other", type: "number", label: { zh: "其他支出", en: "Other Costs" }, default: () => 1800 },
    ],
    compute(values) {
      const monthly = values.housing + values.food + values.transport + values.other;
      const annual = monthly * 12;
      return financeResult(this, values, {
        kpis: [[tPair("月生活成本", "Monthly Cost"), money(monthly)], [tPair("年生活成本", "Annual Cost"), money(annual)], [tPair("住房占比", "Housing Share"), pct(values.housing / Math.max(monthly, 1) * 100)], [tPair("弹性支出", "Flexible Spending"), money(values.food + values.transport + values.other)]],
        note: tPair("生活成本页适合在换城市、换工作或做家庭预算前先看一遍。", "A cost-of-living page is useful before relocation, job changes, or household budgeting."),
        chartA: annual,
        chartB: values.housing * 12,
        insights: simpleInsights("适合换城市、换房和做家庭预算。", "Useful for relocation, moving, and household budgeting.", "支出结构一变，这个页面就值得再算一次。", "Any change in spending structure makes this worth recalculating."),
        table: { title: tPair("支出结构", "Cost structure"), desc: tPair("把不同支出项拆开，更容易知道哪里最值得优化。", "Splitting costs helps reveal where optimization matters most."), headers: [tPair("项目", "Category"), tPair("月支出", "Monthly"), tPair("占比", "Share")], rows: [[tPair("住房", "Housing"), money(values.housing), pct(values.housing / Math.max(monthly, 1) * 100)], [tPair("餐饮", "Food"), money(values.food), pct(values.food / Math.max(monthly, 1) * 100)], [tPair("交通", "Transport"), money(values.transport), pct(values.transport / Math.max(monthly, 1) * 100)], [tPair("其他", "Other"), money(values.other), pct(values.other / Math.max(monthly, 1) * 100)]] },
        article: createSimpleInfoSection("为什么生活成本工具值得做成长页", "Why a cost-of-living tool deserves a fuller page", "很多人知道工资涨了，却不知道新城市和新生活方式会不会把涨幅吃掉。", "Many people know their salary will rise, but do not know whether a new city or lifestyle will absorb the gain.", ["先填固定支出。", "再填弹性支出。", "最后看年度总额。"], ["Start with fixed costs.", "Then flexible spending.", "Finally inspect the annual total."], "生活成本越低越好吗？", "Is a lower cost of living always better?", "不一定，还要看收入机会、通勤成本和生活质量。", "Not necessarily. Income opportunities, commute, and quality of life still matter."),
      });
    },
  };

  additions["walking-calories"] = {
    ...createSeoConfig("步行卡路里计算器", "Walking Calories Calculator", "健康 / 营养", "Health / Nutrition", "根据体重、步行时长和速度估算步行消耗的热量。", "Estimate calories burned from walking based on weight, duration, and pace.", ["走路卡路里计算器"], ["walking calorie burn calculator"]),
    quick: { zh: ["适合日常运动记录", "按体重与时长估算", "适合减脂期跟踪"], en: ["Useful for daily activity tracking", "Estimate by weight and duration", "Helpful during fat-loss planning"] },
    features: [
      { id: "weight", type: "number", label: { zh: "体重 (kg)", en: "Weight (kg)" }, default: () => 65 },
      { id: "minutes", type: "number", label: { zh: "步行时长 (分钟)", en: "Walking Minutes" }, default: () => 45 },
      { id: "met", type: "number", step: "0.1", label: { zh: "强度系数 MET", en: "MET" }, default: () => 3.5 },
    ],
    compute(values) {
      const calories = values.met * values.weight * values.minutes / 60;
      return financeResult(this, { ...values, years: 8 }, {
        kpis: [[tPair("预估消耗", "Estimated Burn"), `${num(calories)} kcal`], [tPair("每小时消耗", "Burn Per Hour"), `${num(values.met * values.weight)} kcal`], [tPair("时长", "Duration"), `${num(values.minutes)} min`], [tPair("体重", "Weight"), `${num(values.weight)} kg`]],
        note: tPair("步行卡路里适合做日常活动记录，不适合替代医疗或运动处方。", "Walking-calorie estimates are useful for daily tracking, not as a medical or training prescription."),
        charts: [createChart(createSeries(calories, 8), createSeries(values.weight, 8), { titleZh: "步行消耗与体重参考", titleEn: "Walking burn and weight reference", descZh: "把热量消耗和体重放在一个图里看。", descEn: "Compare calorie burn with body-weight reference in one chart.", legendAZh: "热量消耗", legendAEn: "Calories burned", legendBZh: "体重参考", legendBEn: "Weight reference", valueType: "number" })],
        insights: simpleInsights("适合记录日常散步、通勤和轻运动消耗。", "Useful for casual walking, commuting, and light exercise tracking.", "体重、时长和强度一变，结果就值得重算。", "When weight, duration, or intensity changes, the result is worth recalculating."),
        table: { title: tPair("不同时长下的消耗", "Burn by duration"), desc: tPair("看时长变化如何影响热量消耗。", "See how duration changes calorie burn."), headers: [tPair("时长", "Minutes"), tPair("消耗", "Burn"), tPair("每小时参考", "Hourly Reference")], rows: [30, 45, 60].map((m) => [`${m}`, `${num(values.met * values.weight * m / 60)} kcal`, `${num(values.met * values.weight)} kcal`]) },
        article: createSimpleInfoSection("为什么步行热量页很适合收录", "Why a walking-calorie page indexes well", "这类页面解决的是高频、轻决策、反复查询的问题，天然适合搜索引擎收录和长期回访。", "This kind of page solves a frequent, lightweight, repeat-query need, making it naturally suitable for search indexing and repeat visits.", ["先填体重。", "再填时长。", "最后根据强度看热量。"], ["Enter weight first.", "Then duration.", "Finally review calories by intensity."], "热量消耗一定准确吗？", "Is the calorie estimate exact?", "不是，它是按体重和运动强度估算的参考值。", "No. It is an estimate based on body weight and exercise intensity."),
      });
    },
  };

  additions["running-calories"] = {
    ...createSeoConfig("跑步卡路里计算器", "Running Calories Calculator", "健康 / 营养", "Health / Nutrition", "根据体重、跑步时长和强度估算跑步热量消耗。", "Estimate calories burned from running using weight, duration, and intensity.", ["跑步热量计算器"], ["running calorie calculator"]),
    quick: { zh: ["适合跑步训练记录", "看时长和体重影响", "适合减脂规划"], en: ["Useful for run tracking", "See the impact of duration and weight", "Helpful for fat-loss planning"] },
    features: [
      { id: "weight", type: "number", label: { zh: "体重 (kg)", en: "Weight (kg)" }, default: () => 65 },
      { id: "minutes", type: "number", label: { zh: "跑步时长 (分钟)", en: "Running Minutes" }, default: () => 35 },
      { id: "met", type: "number", step: "0.1", label: { zh: "强度系数 MET", en: "MET" }, default: () => 8.3 },
    ],
    compute(values) {
      const calories = values.met * values.weight * values.minutes / 60;
      return additions["walking-calories"].compute.call(this, { ...values, met: values.met, years: 8 });
    },
  };

  additions["swimming-calories"] = {
    ...createSeoConfig("游泳卡路里计算器", "Swimming Calories Calculator", "健康 / 营养", "Health / Nutrition", "根据体重、游泳时长和强度估算游泳热量消耗。", "Estimate calories burned from swimming using weight, duration, and intensity.", ["游泳热量计算器"], ["swimming calorie calculator"]),
    quick: { zh: ["适合游泳训练记录", "按体重和时长估算", "适合运动计划"], en: ["Useful for swimming tracking", "Estimate by weight and duration", "Helpful for training plans"] },
    features: [
      { id: "weight", type: "number", label: { zh: "体重 (kg)", en: "Weight (kg)" }, default: () => 65 },
      { id: "minutes", type: "number", label: { zh: "游泳时长 (分钟)", en: "Swimming Minutes" }, default: () => 40 },
      { id: "met", type: "number", step: "0.1", label: { zh: "强度系数 MET", en: "MET" }, default: () => 6.0 },
    ],
    compute(values) {
      return additions["walking-calories"].compute.call(this, values);
    },
  };

  function macroConfig(slug, zhName, enName, factorDefault, extraZh, extraEn) {
    return {
      ...createSeoConfig(zhName, enName, "健康 / 营养", "Health / Nutrition", `按体重和目标强度估算每日${zhName.replace("计算器", "")}。`, `Estimate daily ${enName.replace(" Calculator", "")} from body weight and target intensity.`, extraZh, extraEn),
      quick: { zh: ["适合增肌减脂规划", "按体重快速估算", "适合做饮食目标"], en: ["Useful for body-composition goals", "Quickly estimate by body weight", "Helpful for meal planning"] },
      features: [
        { id: "weight", type: "number", label: { zh: "体重 (kg)", en: "Weight (kg)" }, default: () => 65 },
        { id: "factor", type: "number", step: "0.1", label: { zh: "每公斤系数", en: "Per kg Factor" }, default: () => factorDefault },
      ],
      compute(values) {
        const amount = values.weight * values.factor;
        return financeResult(this, { ...values, years: 8 }, {
          kpis: [[tPair("每日建议摄入", "Suggested Daily Intake"), `${num(amount)} g`], [tPair("体重", "Weight"), `${num(values.weight)} kg`], [tPair("每公斤系数", "Per kg Factor"), `${num(values.factor)} g`], [tPair("每周总量", "Weekly Total"), `${num(amount * 7)} g`]],
          note: tPair("营养摄入页适合做目标型参考，不适合替代个体化营养建议。", "Nutrition-intake pages are useful for goal-based reference, not as a replacement for individualized advice."),
          charts: [createChart(createSeries(amount, 8), createSeries(amount * 7, 8), { titleZh: `${zhName.replace("计算器", "")}日摄入与周总量`, titleEn: `${enName.replace(" Calculator", "")} daily vs weekly`, descZh: "把每日与每周放在一起看，更方便制定饮食计划。", descEn: "Compare daily and weekly totals to make meal planning easier.", legendAZh: "每日", legendAEn: "Daily", legendBZh: "每周", legendBEn: "Weekly", valueType: "number" })],
          insights: simpleInsights("适合做增肌、减脂和维持期的日常营养参考。", "Useful as a daily reference for fat loss, maintenance, and muscle gain.", "体重或目标变化后，用户会回来重新试算。", "Users revisit when body weight or nutrition goals change."),
          table: { title: tPair("不同体重下的建议量", "Suggested intake by body weight"), desc: tPair("看体重变化如何影响建议摄入量。", "See how body-weight changes affect intake."), headers: [tPair("体重", "Weight"), tPair("每日建议量", "Daily"), tPair("每周总量", "Weekly")], rows: [55, 65, 75].map((weight) => [`${weight} kg`, `${num(weight * values.factor)} g`, `${num(weight * values.factor * 7)} g`]) },
          article: createSimpleInfoSection(`${zhName}为什么值得做成独立页面`, `Why ${enName} deserves its own page`, "营养类工具天然适合搜索和反复查询，因为用户会随着体重、训练量和目标变化不断回来调整。", "Nutrition tools naturally fit search and repeat use because users revisit whenever body weight, training load, or goals change.", ["先填体重。", "再设定每公斤系数。", "最后看每日总量。"], ["Enter body weight first.", "Set the per-kg factor.", "Then inspect the daily total."], `${zhName.replace("计算器", "")}越多越好吗？`, `Is more ${enName.replace(" Calculator", "")} always better?`, "不一定，还要结合目标、总热量和个体耐受度。", "Not necessarily. It still depends on total calories, goals, and individual tolerance."),
        });
      },
    };
  }

  additions["protein-intake"] = macroConfig("protein-intake", "蛋白质摄入计算器", "Protein Intake Calculator", 1.6, ["每日蛋白质计算器"], ["protein per day calculator"]);
  additions["carb-intake"] = macroConfig("carb-intake", "碳水摄入计算器", "Carb Intake Calculator", 3.0, ["每日碳水计算器"], ["carbohydrate intake calculator"]);
  additions["fat-intake"] = macroConfig("fat-intake", "脂肪摄入计算器", "Fat Intake Calculator", 0.8, ["每日脂肪计算器"], ["fat intake calculator"]);

  function singleValueMathConfig(slug, zhName, enName, inputLabelZh, inputLabelEn, formula, extraZh, extraEn) {
    return {
      ...createSeoConfig(zhName, enName, "代数 / 函数", "Algebra / Functions", `${zhName.replace("计算器", "")}在线测算，适合公式验证和结果比较。`, `${enName.replace(" Calculator", "")} online for quick formula checks and comparisons.`, extraZh, extraEn),
      quick: { zh: ["输入后立即出结果", "适合学习和复核", "结果页面可收录"], en: ["Instant result after input", "Useful for study and checking", "Designed as an indexable results page"] },
      features: [{ id: "value", type: "number", label: { zh: inputLabelZh, en: inputLabelEn }, default: () => 16 }],
      compute(values) {
        const result = formula(values.value);
        return financeResult(this, { ...values, years: 6 }, {
          kpis: [[tPair("计算结果", "Result"), num(result)], [tPair("输入值", "Input"), num(values.value)], [tPair("结果绝对值", "Absolute Result"), num(Math.abs(result))], [tPair("平方", "Square"), num(values.value ** 2)]],
          note: tPair(`${zhName}适合做高频、快速、可反复验证的独立工具页。`, `${enName} works well as a high-frequency, repeat-check calculator page.`),
          charts: [createChart(createSeries(result, 6), createSeries(values.value, 6), { titleZh: "输入值与结果", titleEn: "Input vs result", descZh: "把输入和结果放在一起比较。", descEn: "Compare the input with the result in one chart.", legendAZh: "结果", legendAEn: "Result", legendBZh: "输入", legendBEn: "Input", valueType: "number" })],
          insights: simpleInsights("适合课堂练习、题目验证和快速复核。", "Useful for exercises, quick checking, and verification.", "这类工具搜索需求稳定，适合做独立收录页面。", "Search demand for these tools is steady, which makes them good independent pages."),
          table: { title: tPair("不同输入值对比", "Results for different inputs"), desc: tPair("看输入变化后结果如何变化。", "See how the result changes with different inputs."), headers: [tPair("输入", "Input"), tPair("结果", "Result"), tPair("绝对值", "Absolute")], rows: [values.value * 0.5, values.value, values.value * 1.5].map((v) => [num(v), num(formula(v)), num(Math.abs(formula(v)))]) },
          article: createSimpleInfoSection(`${zhName}为什么适合 SEO`, `Why ${enName} works for SEO`, "简单工具如果能把结果、解释和示例放在同一页，通常就能兼顾搜索需求和用户体验。", "Simple tools perform well when results, explanations, and examples live on the same page, satisfying both search demand and user experience.", ["先输入数值。", "再看结果。", "最后对照示例复核。"], ["Enter the value first.", "Then inspect the result.", "Finally compare with examples."], `${zhName}结果出现误差怎么办？`, `What if the ${enName} result looks wrong?`, "先检查输入格式和单位，再确认公式适用范围。", "Check input format and units first, then confirm the formula fits the use case."),
        });
      },
    };
  }

  additions.fraction = {
    ...createSeoConfig("分数计算器", "Fraction Calculator", "代数 / 函数", "Algebra / Functions", "支持两个分数的加减乘除和约分。", "Perform fraction addition, subtraction, multiplication, and division with simplification.", ["分数加减乘除计算器"], ["fraction math calculator"]),
    quick: { zh: ["支持四则运算", "自动约分", "适合学习和检查"], en: ["Supports four operations", "Simplifies automatically", "Useful for study and checking"] },
    features: [
      { id: "a-num", type: "number", label: { zh: "分子 A", en: "Numerator A" }, default: () => 1 },
      { id: "a-den", type: "number", label: { zh: "分母 A", en: "Denominator A" }, default: () => 2 },
      { id: "b-num", type: "number", label: { zh: "分子 B", en: "Numerator B" }, default: () => 1 },
      { id: "b-den", type: "number", label: { zh: "分母 B", en: "Denominator B" }, default: () => 3 },
      { id: "op", type: "select", valueType: "string", label: { zh: "运算", en: "Operation" }, default: () => "add", options: [{ value: "add", label: { zh: "加", en: "Add" } }, { value: "sub", label: { zh: "减", en: "Subtract" } }, { value: "mul", label: { zh: "乘", en: "Multiply" } }, { value: "div", label: { zh: "除", en: "Divide" } }] },
    ],
    compute(values) {
      const a = values["a-num"] / Math.max(values["a-den"], 1);
      const b = values["b-num"] / Math.max(values["b-den"], 1);
      let result;
      if (values.op === "sub") result = a - b;
      else if (values.op === "mul") result = a * b;
      else if (values.op === "div") result = b === 0 ? 0 : a / b;
      else result = a + b;
      return financeResult(this, { ...values, years: 6 }, {
        kpis: [[tPair("结果", "Result"), num(result)], [tPair("A 值", "Value A"), num(a)], [tPair("B 值", "Value B"), num(b)], [tPair("结果百分比", "Result %"), pct(result * 100)]],
        note: tPair("分数计算器适合把课业和工作里的比例问题快速算清楚。", "A fraction calculator helps solve ratio-style problems quickly in study or work."),
        charts: [createChart(createSeries(result, 6), createSeries(a + b, 6), { titleZh: "结果与基准对比", titleEn: "Result vs baseline", descZh: "把结果和输入基准放在一张图里。", descEn: "Compare the result against the input baseline in one chart.", legendAZh: "结果", legendAEn: "Result", legendBZh: "输入基准", legendBEn: "Input baseline", valueType: "number" })],
        insights: simpleInsights("适合课堂练习、配比问题和公式检查。", "Useful for exercises, ratios, and formula checks.", "用户会经常在手机端临时打开这类页面。", "Users often open pages like this quickly on mobile."),
        table: { title: tPair("输入拆解", "Input breakdown"), desc: tPair("把分数先换成小数，更容易理解结果。", "Convert fractions into decimals to interpret the result more easily."), headers: [tPair("项目", "Item"), tPair("分数", "Fraction"), tPair("小数", "Decimal")], rows: [[tPair("A", "A"), `${values["a-num"]}/${values["a-den"]}`, num(a)], [tPair("B", "B"), `${values["b-num"]}/${values["b-den"]}`, num(b)], [tPair("结果", "Result"), "-", num(result)]] },
        article: createSimpleInfoSection("为什么分数页值得保留", "Why a fraction page is worth keeping", "分数类工具看起来简单，但搜索频率高，用户也会反复回来验证作业和题目结果。", "Fraction tools look simple, but search frequency is high and users revisit them to verify exercises and answers.", ["先填两个分数。", "再选择运算。", "最后看小数结果。"], ["Enter the two fractions.", "Choose the operation.", "Then inspect the decimal result."], "分母可以填 0 吗？", "Can the denominator be 0?", "不可以，分母为 0 没有实际数学意义。", "No. A denominator of 0 is not mathematically valid."),
      });
    },
  };

  additions.exponent = singleValueMathConfig("exponent", "指数计算器", "Exponent Calculator", "底数", "Base", (value) => value ** 3, ["幂计算器"], ["power calculator"]);
  additions.logarithm = {
    ...createSeoConfig("对数计算器", "Logarithm Calculator", "代数 / 函数", "Algebra / Functions", "输入底数和真数，快速计算对数结果。", "Calculate logarithms from a chosen base and argument.", ["log计算器"], ["logarithm base calculator"]),
    quick: { zh: ["支持自定义底数", "适合学习和验算", "结果清晰直观"], en: ["Supports custom base", "Useful for study and checking", "Clear result output"] },
    features: [
      { id: "base", type: "number", label: { zh: "底数", en: "Base" }, default: () => 10 },
      { id: "value", type: "number", label: { zh: "真数", en: "Argument" }, default: () => 1000 },
    ],
    compute(values) {
      const result = Math.log(values.value) / Math.log(values.base);
      return singleValueMathConfig("logarithm", "对数计算器", "Logarithm Calculator", "真数", "Argument", () => result, ["log值计算器"], ["log result calculator"]).compute({ value: values.value });
    },
  };

  additions["scientific-calculator"] = {
    ...createSeoConfig("科学计算器", "Scientific Calculator", "代数 / 函数", "Algebra / Functions", "支持常见表达式、三角函数、对数和幂运算。", "Evaluate expressions with trig, logarithms, powers, and more.", ["在线科学计算器"], ["scientific expression calculator"]),
    quick: { zh: ["支持表达式输入", "适合快速验算", "适合公式试算"], en: ["Supports expression input", "Useful for quick checks", "Useful for formula testing"] },
    features: [{ id: "expression", type: "text", label: { zh: "表达式", en: "Expression" }, default: () => "sin(1)+2^3" }],
    compute(values) {
      const result = safeEvaluate(values.expression);
      return financeResult(this, { years: 6 }, {
        kpis: [[tPair("计算结果", "Result"), Number.isFinite(result) ? num(result) : tPair("无法计算", "Invalid")], [tPair("表达式长度", "Expression Length"), `${String(values.expression).length}`], [tPair("是否有效", "Valid"), Number.isFinite(result) ? tPair("是", "Yes") : tPair("否", "No")], [tPair("示例", "Example"), "sin(1)+2^3"]],
        note: tPair("科学计算器页适合高频验证和表达式试算。", "A scientific-calculator page works well for frequent expression checks."),
        charts: [createChart(createSeries(Number.isFinite(result) ? result : 0, 6), createSeries(String(values.expression).length, 6), { titleZh: "结果与表达式长度", titleEn: "Result and expression length", descZh: "把结果和表达式复杂度放在一起看。", descEn: "Compare output with expression complexity.", legendAZh: "结果", legendAEn: "Result", legendBZh: "长度", legendBEn: "Length", valueType: "number" })],
        insights: simpleInsights("适合学生、财务和工程类快速验算。", "Useful for students, finance, and engineering quick checks.", "表达式工具的搜索需求稳定，也适合做搜索流量入口。", "Expression tools have stable search demand and work well as entry pages."),
        table: { title: tPair("常见示例", "Common examples"), desc: tPair("这些示例可以直接照着输入。", "These examples can be typed directly."), headers: [tPair("表达式", "Expression"), tPair("结果", "Result"), tPair("说明", "Meaning")], rows: [["2^3", "8", tPair("幂运算", "Power")], ["sqrt(16)", "4", tPair("平方根", "Square root")], ["sin(1)", num(Math.sin(1)), tPair("正弦", "Sine")]] },
        article: createSimpleInfoSection("为什么科学计算器适合做独立页面", "Why a scientific calculator fits a standalone page", "这类工具搜索需求足够宽，而且用户往往会在不同时间、不同题目里反复回来使用。", "Demand for this type of tool is broad, and users often come back repeatedly for different tasks.", ["先输入表达式。", "再看结果。", "如果报错就检查括号和符号。"], ["Enter the expression.", "Inspect the result.", "If it errors, check brackets and symbols."], "支持所有数学函数吗？", "Does it support every math function?", "不是，目前支持常见表达式、三角函数、对数和幂运算。", "No. It currently supports common expressions, trigonometry, logarithms, and powers."),
      });
    },
  };

  additions["square-root"] = singleValueMathConfig("square-root", "平方根计算器", "Square Root Calculator", "输入值", "Input", (value) => Math.sqrt(Math.max(value, 0)), ["sqrt计算器"], ["square root calculator"]);
  additions["cube-root"] = singleValueMathConfig("cube-root", "立方根计算器", "Cube Root Calculator", "输入值", "Input", (value) => Math.cbrt(value), ["cbrt计算器"], ["cube root calculator"]);

  additions["equation-solver"] = {
    ...createSeoConfig("方程求解计算器", "Equation Solver Calculator", "代数 / 函数", "Algebra / Functions", "按 ax+b=0 模型快速求解一元一次方程。", "Solve a simple linear equation in the form ax+b=0.", ["解方程计算器"], ["equation solver"]),
    quick: { zh: ["适合基础代数", "支持一元一次方程", "结果直观"], en: ["Useful for basic algebra", "Supports linear equations", "Clear result output"] },
    features: [
      { id: "a", type: "number", label: { zh: "a", en: "a" }, default: () => 3 },
      { id: "b", type: "number", label: { zh: "b", en: "b" }, default: () => -12 },
    ],
    compute(values) {
      const x = values.a === 0 ? 0 : -values.b / values.a;
      return financeResult(this, { ...values, years: 6 }, {
        kpis: [[tPair("x 的值", "Value of x"), num(x)], [tPair("系数 a", "Coefficient a"), num(values.a)], [tPair("常数 b", "Constant b"), num(values.b)], [tPair("代入验证", "Check"), num(values.a * x + values.b)]],
        note: tPair("基础方程页适合课程学习和快速验算。", "A simple equation page is useful for coursework and quick validation."),
        charts: [createChart(createSeries(x, 6), createSeries(values.b, 6), { titleZh: "解与常数对比", titleEn: "Solution vs constant", descZh: "把方程解和常数项放在一起看。", descEn: "Compare the solution with the constant term.", legendAZh: "解 x", legendAEn: "Solution x", legendBZh: "常数 b", legendBEn: "Constant b", valueType: "number" })],
        insights: simpleInsights("适合学生和家长做题目检查。", "Useful for students and parents checking homework.", "这类基础数学工具适合做长期收录页。", "Basic math tools like this fit long-term indexable pages."),
        table: { title: tPair("方程结构", "Equation structure"), desc: tPair("把方程拆开，更容易理解求解过程。", "Break the equation apart to understand the solving process."), headers: [tPair("项目", "Item"), tPair("数值", "Value"), tPair("说明", "Meaning")], rows: [["a", num(values.a), tPair("未知数前系数", "Coefficient of x")], ["b", num(values.b), tPair("常数项", "Constant term")], ["x", num(x), tPair("方程解", "Solution")]] },
        article: createSimpleInfoSection("为什么基础方程工具也值得做", "Why a basic equation tool is still worth building", "基础数学搜索需求很稳定，而且用户常在手机端快速验证结果。", "Demand for basic math pages is stable, and users often verify answers quickly on mobile.", ["先输入 a。", "再输入 b。", "最后看 x 的值。"], ["Enter a first.", "Then b.", "Finally inspect x."], "a 可以等于 0 吗？", "Can a equal 0?", "可以，但那时不再是正常的一元一次方程。", "Yes, but then it is no longer a standard linear equation."),
      });
    },
  };

  additions["quadratic-equation"] = {
    ...createSeoConfig("二次方程计算器", "Quadratic Equation Calculator", "代数 / 函数", "Algebra / Functions", "按 ax²+bx+c=0 计算判别式和两个根。", "Compute the discriminant and roots for ax²+bx+c=0.", ["一元二次方程计算器"], ["quadratic roots calculator"]),
    quick: { zh: ["支持判别式", "支持两个根", "适合学习和验算"], en: ["Includes discriminant", "Returns both roots", "Useful for study and checking"] },
    features: [
      { id: "a", type: "number", label: { zh: "a", en: "a" }, default: () => 1 },
      { id: "b", type: "number", label: { zh: "b", en: "b" }, default: () => -5 },
      { id: "c", type: "number", label: { zh: "c", en: "c" }, default: () => 6 },
    ],
    compute(values) {
      const d = values.b ** 2 - 4 * values.a * values.c;
      const root1 = d >= 0 ? (-values.b + Math.sqrt(d)) / (2 * values.a) : 0;
      const root2 = d >= 0 ? (-values.b - Math.sqrt(d)) / (2 * values.a) : 0;
      return financeResult(this, { ...values, years: 6 }, {
        kpis: [[tPair("判别式", "Discriminant"), num(d)], [tPair("根 x1", "Root x1"), num(root1)], [tPair("根 x2", "Root x2"), num(root2)], [tPair("是否有实数根", "Real Roots"), d >= 0 ? tPair("有", "Yes") : tPair("无", "No")]],
        note: tPair("二次方程页适合把判别式和根一起展示，方便学习与复核。", "A quadratic-equation page works well when the discriminant and roots are shown together."),
        charts: [createChart(createSeries(root1, 6), createSeries(root2, 6), { titleZh: "两个根的对比", titleEn: "Comparison of two roots", descZh: "在同一张图里看两个解。", descEn: "View the two solutions in one chart.", legendAZh: "x1", legendAEn: "x1", legendBZh: "x2", legendBEn: "x2", valueType: "number" })],
        insights: simpleInsights("适合学生、老师和家长快速验算。", "Useful for students, teachers, and parents checking answers.", "带公式解释的二次方程页比单纯结果页更利于收录。", "A quadratic page with formula explanation is more indexable than a bare result page."),
        table: { title: tPair("系数与结果", "Coefficients and outputs"), desc: tPair("把系数和方程结果统一展示。", "Show the coefficients and outcomes together."), headers: [tPair("项目", "Item"), tPair("数值", "Value"), tPair("说明", "Meaning")], rows: [["a", num(values.a), tPair("二次项系数", "Quadratic coefficient")], ["b", num(values.b), tPair("一次项系数", "Linear coefficient")], ["c", num(values.c), tPair("常数项", "Constant term")], [tPair("判别式", "Discriminant"), num(d), tPair("决定根的类型", "Determines root type")]] },
        article: createSimpleInfoSection("为什么二次方程页值得做", "Why a quadratic-equation page is worth building", "二次方程有稳定搜索需求，只要页面同时提供结果、判别式和说明，就适合做长期工具页。", "Quadratic equations have stable search demand. A page that includes roots, discriminant, and explanation fits long-term utility traffic well.", ["先输入 a、b、c。", "再看判别式。", "最后看根。"], ["Enter a, b, and c.", "Then inspect the discriminant.", "Finally view the roots."], "没有实数根怎么办？", "What if there are no real roots?", "说明判别式小于 0，此时方程只有复数根。", "It means the discriminant is below zero, so the equation has complex roots only."),
      });
    },
  };

  additions["linear-equation"] = {
    ...createSeoConfig("线性方程计算器", "Linear Equation Calculator", "代数 / 函数", "Algebra / Functions", "根据两点求直线斜率、截距和方程表达式。", "Solve a line equation from two points and calculate slope and intercept.", ["直线方程计算器"], ["line equation calculator"]),
    quick: { zh: ["适合解析几何", "输入两点即可", "结果清晰"], en: ["Useful for coordinate geometry", "Works from two points", "Clear result output"] },
    features: [
      { id: "x1", type: "number", label: { zh: "x1", en: "x1" }, default: () => 1 },
      { id: "y1", type: "number", label: { zh: "y1", en: "y1" }, default: () => 2 },
      { id: "x2", type: "number", label: { zh: "x2", en: "x2" }, default: () => 4 },
      { id: "y2", type: "number", label: { zh: "y2", en: "y2" }, default: () => 8 },
    ],
    compute(values) {
      const slope = (values.y2 - values.y1) / Math.max(values.x2 - values.x1, 0.0001);
      const intercept = values.y1 - slope * values.x1;
      return financeResult(this, { ...values, years: 6 }, {
        kpis: [[tPair("斜率", "Slope"), num(slope)], [tPair("截距", "Intercept"), num(intercept)], [tPair("方程", "Equation"), `y=${num(slope)}x+${num(intercept)}`], [tPair("两点距离", "Point Distance"), num(Math.hypot(values.x2 - values.x1, values.y2 - values.y1))]],
        note: tPair("线性方程页适合把点、斜率和方程一起展示，减少来回切换。", "A line-equation page works better when points, slope, and equation are shown together."),
        charts: [createChart(createSeries(values.y1, 6), createSeries(values.y2, 6), { titleZh: "两点纵坐标对比", titleEn: "Point y-value comparison", descZh: "先从两点变化看斜率方向。", descEn: "Use the y-value difference to understand slope direction.", legendAZh: "点 1", legendAEn: "Point 1", legendBZh: "点 2", legendBEn: "Point 2", valueType: "number" })],
        insights: simpleInsights("适合解析几何学习和直线方程复核。", "Useful for coordinate geometry study and line-equation checks.", "学生和老师都很容易反复使用它。", "Both students and teachers can use it repeatedly."),
        table: { title: tPair("输入点与结果", "Input points and results"), desc: tPair("把点位和结果放在一张表里。", "See the points and derived results together."), headers: [tPair("项目", "Item"), tPair("数值", "Value"), tPair("说明", "Meaning")], rows: [["(x1,y1)", `(${num(values.x1)}, ${num(values.y1)})`, tPair("第一个点", "First point")], ["(x2,y2)", `(${num(values.x2)}, ${num(values.y2)})`, tPair("第二个点", "Second point")], [tPair("斜率", "Slope"), num(slope), tPair("变化速度", "Rate of change")]] },
        article: createSimpleInfoSection("为什么线性方程页也值得做", "Why a linear-equation page is worth adding", "点斜式、斜截式和两点式之间切换频繁，这类页面能减少用户在不同工具之间来回跳转。", "Users often switch between two-point, slope-intercept, and point-slope forms. A dedicated page reduces that friction.", ["先填两个点。", "再看斜率。", "最后看表达式。"], ["Enter two points.", "Inspect the slope.", "Then read the equation."], "x1 和 x2 可以一样吗？", "Can x1 equal x2?", "可以，但那会形成垂直线，普通斜率形式无法直接表示。", "Yes, but then the line is vertical and cannot be represented in normal slope form."),
      });
    },
  };

  additions.matrix = {
    ...createSeoConfig("矩阵计算器", "Matrix Calculator", "代数 / 函数", "Algebra / Functions", "计算 2x2 矩阵的行列式、和矩阵与差矩阵。", "Calculate determinant, sum, and difference for 2x2 matrices.", ["2x2矩阵计算器"], ["2x2 matrix calculator"]),
    quick: { zh: ["适合基础线代", "支持 2x2 矩阵", "结果清晰"], en: ["Useful for basic linear algebra", "Supports 2x2 matrices", "Clear outputs"] },
    features: [
      { id: "a11", type: "number", label: { zh: "A11", en: "A11" }, default: () => 1 },
      { id: "a12", type: "number", label: { zh: "A12", en: "A12" }, default: () => 2 },
      { id: "a21", type: "number", label: { zh: "A21", en: "A21" }, default: () => 3 },
      { id: "a22", type: "number", label: { zh: "A22", en: "A22" }, default: () => 4 },
      { id: "b11", type: "number", label: { zh: "B11", en: "B11" }, default: () => 4 },
      { id: "b12", type: "number", label: { zh: "B12", en: "B12" }, default: () => 3 },
      { id: "b21", type: "number", label: { zh: "B21", en: "B21" }, default: () => 2 },
      { id: "b22", type: "number", label: { zh: "B22", en: "B22" }, default: () => 1 },
    ],
    compute(values) {
      const detA = values.a11 * values.a22 - values.a12 * values.a21;
      const detB = values.b11 * values.b22 - values.b12 * values.b21;
      const sum11 = values.a11 + values.b11;
      const sum22 = values.a22 + values.b22;
      return financeResult(this, { ...values, years: 6 }, {
        kpis: [[tPair("det(A)", "det(A)"), num(detA)], [tPair("det(B)", "det(B)"), num(detB)], [tPair("和矩阵迹", "Trace of A+B"), num(sum11 + sum22)], [tPair("差矩阵迹", "Trace of A-B"), num((values.a11 - values.b11) + (values.a22 - values.b22))]],
        note: tPair("矩阵页可以先解决最常见的 2x2 场景，降低学习门槛。", "A matrix page can start with the most common 2x2 use case and keep the learning curve low."),
        charts: [createChart(createSeries(detA, 6), createSeries(detB, 6), { titleZh: "两个矩阵行列式对比", titleEn: "Determinant comparison", descZh: "把 A、B 两个矩阵的行列式放在一起看。", descEn: "Compare the determinants of matrix A and B in one chart.", legendAZh: "det(A)", legendAEn: "det(A)", legendBZh: "det(B)", legendBEn: "det(B)", valueType: "number" })],
        insights: simpleInsights("适合线性代数入门练习和题目检查。", "Useful for entry-level linear algebra exercises and answer checking.", "矩阵类工具适合学生群体高频使用。", "Matrix tools are useful for frequent student use."),
        table: { title: tPair("矩阵结果", "Matrix results"), desc: tPair("这里给出 A+B 和 A-B 的关键结果。", "This shows the key outputs for A+B and A-B."), headers: [tPair("项目", "Item"), tPair("值", "Value"), tPair("说明", "Meaning")], rows: [[tPair("A+B 左上", "A+B top-left"), num(sum11), tPair("相加结果", "Addition result")], [tPair("A+B 右下", "A+B bottom-right"), num(sum22), tPair("相加结果", "Addition result")], [tPair("det(A)", "det(A)"), num(detA), tPair("矩阵 A 行列式", "Determinant of A")]] },
        article: createSimpleInfoSection("为什么矩阵页适合独立收录", "Why a matrix page fits standalone indexing", "矩阵是高频课程工具，只要页面给出清晰结果和说明，就适合做稳定的搜索入口。", "Matrix operations are common classroom needs. A page with clear results and explanation works well as a stable search entry point.", ["先输入两个矩阵。", "再看行列式。", "最后看加减结果。"], ["Enter the two matrices.", "Check the determinants.", "Then review the add/subtract outputs."], "为什么这里只做 2x2？", "Why is this only 2x2?", "因为 2x2 是最高频和最直观的使用场景。", "Because 2x2 is the highest-frequency and most intuitive use case."),
      });
    },
  };

  additions.trigonometry = {
    ...createSeoConfig("三角函数计算器", "Trigonometry Calculator", "代数 / 函数", "Algebra / Functions", "输入角度，快速计算正弦、余弦和正切。", "Enter an angle to calculate sine, cosine, and tangent quickly.", ["sin cos tan 计算器"], ["trig calculator"]),
    quick: { zh: ["输入角度立即算", "支持常见三角函数", "适合学习与验算"], en: ["Instant calculation from angle", "Supports main trig functions", "Useful for study and checking"] },
    features: [{ id: "angle", type: "number", label: { zh: "角度 (°)", en: "Angle (°)" }, default: () => 30 }],
    compute(values) {
      const rad = values.angle * Math.PI / 180;
      const sin = Math.sin(rad);
      const cos = Math.cos(rad);
      const tan = Math.tan(rad);
      return financeResult(this, { ...values, years: 6 }, {
        kpis: [[tPair("sin", "sin"), num(sin)], [tPair("cos", "cos"), num(cos)], [tPair("tan", "tan"), num(tan)], [tPair("弧度", "Radians"), num(rad)]],
        note: tPair("三角函数页适合做学习和公式复核，不适合替代专业软件。", "A trigonometry page works well for study and formula checking, not as a replacement for specialist software."),
        charts: [createChart(createSeries(sin, 6), createSeries(cos, 6), { titleZh: "sin 与 cos 对比", titleEn: "sin vs cos", descZh: "把两个最常见的三角函数放在一起看。", descEn: "Compare the two most common trigonometric functions together.", legendAZh: "sin", legendAEn: "sin", legendBZh: "cos", legendBEn: "cos", valueType: "number" })],
        insights: simpleInsights("适合课堂、练习题和工程基础计算。", "Useful for classes, practice problems, and basic engineering math.", "角度类工具适合移动端快速验证。", "Angle-based tools work well for quick mobile verification."),
        table: { title: tPair("常见角度参考", "Common angle reference"), desc: tPair("拿当前角度和常见角度对照。", "Compare the current angle with common reference angles."), headers: [tPair("角度", "Angle"), "sin", "cos"], rows: [0, 30, 45, 60, 90].map((angle) => [ `${angle}°`, num(Math.sin(angle * Math.PI / 180)), num(Math.cos(angle * Math.PI / 180)) ]) },
        article: createSimpleInfoSection("为什么三角函数页很适合被搜索", "Why a trigonometry page is good for search", "学生和工程类用户经常会临时查角度对应的函数值，因此页面天然适合高频搜索和回访。", "Students and engineering users often need quick trig values by angle, which makes this naturally suited to frequent search and revisits.", ["先输入角度。", "再看 sin cos tan。", "最后与常见角度对照。"], ["Enter the angle.", "Inspect sin, cos, and tan.", "Then compare with common reference angles."], "输入的是角度还是弧度？", "Is the input angle or radians?", "当前页面默认输入的是角度。", "This page currently expects degrees."),
      });
    },
  };

  additions.vector = {
    ...createSeoConfig("向量计算器", "Vector Calculator", "代数 / 函数", "Algebra / Functions", "计算两个二维向量的长度、点积和夹角参考。", "Calculate magnitude, dot product, and angle reference for two 2D vectors.", ["二维向量计算器"], ["vector math calculator"]),
    quick: { zh: ["适合二维向量", "支持点积和长度", "适合学习与工程基础"], en: ["Useful for 2D vectors", "Supports dot product and magnitude", "Useful for study and basics"] },
    features: [
      { id: "ax", type: "number", label: { zh: "向量 A x", en: "Vector A x" }, default: () => 3 },
      { id: "ay", type: "number", label: { zh: "向量 A y", en: "Vector A y" }, default: () => 4 },
      { id: "bx", type: "number", label: { zh: "向量 B x", en: "Vector B x" }, default: () => 2 },
      { id: "by", type: "number", label: { zh: "向量 B y", en: "Vector B y" }, default: () => 1 },
    ],
    compute(values) {
      const magA = Math.hypot(values.ax, values.ay);
      const magB = Math.hypot(values.bx, values.by);
      const dot = values.ax * values.bx + values.ay * values.by;
      const angle = Math.acos(dot / Math.max(magA * magB, 0.0001)) * 180 / Math.PI;
      return financeResult(this, { ...values, years: 6 }, {
        kpis: [[tPair("向量 A 长度", "Magnitude A"), num(magA)], [tPair("向量 B 长度", "Magnitude B"), num(magB)], [tPair("点积", "Dot Product"), num(dot)], [tPair("夹角", "Angle"), `${num(angle)}°`]],
        note: tPair("向量页把长度、点积和角度放在一起，更适合快速复核。", "A vector page works better when magnitude, dot product, and angle are shown together."),
        charts: [createChart(createSeries(magA, 6), createSeries(magB, 6), { titleZh: "两个向量长度", titleEn: "Vector magnitudes", descZh: "先看长度差，再看点积和夹角。", descEn: "Compare magnitudes before inspecting dot product and angle.", legendAZh: "向量 A", legendAEn: "Vector A", legendBZh: "向量 B", legendBEn: "Vector B", valueType: "number" })],
        insights: simpleInsights("适合数学、物理和图形基础计算。", "Useful for math, physics, and graphics basics.", "向量页搜索需求稳定，适合做长期流量入口。", "Vector pages have steady search demand and can serve as long-term traffic entry points."),
        table: { title: tPair("向量分量", "Vector components"), desc: tPair("把两个向量拆成分量和关键结果。", "Break the vectors into components and key outputs."), headers: [tPair("项目", "Item"), tPair("值", "Value"), tPair("说明", "Meaning")], rows: [["A", `(${num(values.ax)}, ${num(values.ay)})`, tPair("向量 A", "Vector A")], ["B", `(${num(values.bx)}, ${num(values.by)})`, tPair("向量 B", "Vector B")], [tPair("点积", "Dot Product"), num(dot), tPair("方向关系参考", "Direction relationship")]] },
        article: createSimpleInfoSection("为什么向量页值得做", "Why a vector page is worth building", "向量类问题在学习和基础工程计算里都很常见，把结果和解释放在同一页更适合收录和反复使用。", "Vector problems are common in both study and basic engineering. Keeping results and explanation together makes the page better for indexing and repeat use.", ["先输入两个向量。", "再看长度。", "最后看点积和夹角。"], ["Enter two vectors.", "Check magnitudes.", "Then review dot product and angle."], "为什么夹角显示异常？", "Why can the angle look unusual?", "通常是因为其中一个向量长度接近 0，导致结果不稳定。", "It usually happens when one vector has near-zero magnitude, making the angle unstable."),
      });
    },
  };

  additions.probability = {
    ...createSeoConfig("概率计算器", "Probability Calculator", "统计 / 概率", "Statistics / Probability", "根据事件发生次数和总次数快速估算概率。", "Estimate probability from successful outcomes and total trials.", ["概率公式计算器"], ["probability estimator"]),
    quick: { zh: ["适合基础概率", "输入成功次数和总次数", "适合学习与验算"], en: ["Useful for basic probability", "Enter successes and total trials", "Useful for study and checking"] },
    features: [
      { id: "success", type: "number", label: { zh: "成功次数", en: "Successes" }, default: () => 3 },
      { id: "total", type: "number", label: { zh: "总次数", en: "Total Trials" }, default: () => 10 },
    ],
    compute(values) {
      const p = values.success / Math.max(values.total, 1) * 100;
      return financeResult(this, { ...values, years: 6 }, {
        kpis: [[tPair("概率", "Probability"), pct(p)], [tPair("成功次数", "Successes"), `${num(values.success)}`], [tPair("总次数", "Total"), `${num(values.total)}`], [tPair("失败次数", "Failures"), `${num(values.total - values.success)}`]],
        note: tPair("概率页适合快速给出基础结果，再配说明帮助用户理解。", "A probability page works best when it gives a quick result plus enough explanation to interpret it."),
        charts: [createChart(createSeries(values.success, 6), createSeries(values.total - values.success, 6), { titleZh: "成功与失败对比", titleEn: "Success vs failure", descZh: "把成功和失败放在一张图里。", descEn: "Compare successes and failures in one chart.", legendAZh: "成功", legendAEn: "Success", legendBZh: "失败", legendBEn: "Failure", valueType: "number" })],
        insights: simpleInsights("适合学习基础概率和快速判断事件可能性。", "Useful for learning basic probability and judging event likelihood.", "简单统计工具很适合搜索引擎长尾流量。", "Simple statistics tools fit long-tail search traffic well."),
        table: { title: tPair("不同成功次数下的概率", "Probability by success count"), desc: tPair("总次数不变时，看成功次数变化。", "See how probability changes as success count changes with the same total."), headers: [tPair("成功次数", "Successes"), tPair("总次数", "Total"), tPair("概率", "Probability")], rows: [Math.max(values.success - 1, 0), values.success, Math.min(values.success + 1, values.total)].map((success) => [`${success}`, `${values.total}`, pct(success / Math.max(values.total, 1) * 100)]) },
        article: createSimpleInfoSection("为什么概率页适合长期收录", "Why a probability page fits long-term indexing", "概率问题看似简单，但搜索频率高，适合把结果、解释和例子放在一个页面里。", "Probability questions may seem simple, but search frequency is high and they work well when results, explanation, and examples are combined in one page.", ["先填成功次数。", "再填总次数。", "最后看概率。"], ["Enter successes first.", "Then total trials.", "Finally inspect the probability."], "概率一定能预测结果吗？", "Does probability guarantee an outcome?", "不能，它只能表示发生的可能性大小。", "No. It only describes the likelihood, not certainty."),
      });
    },
  };

  additions["permutation-combination"] = {
    ...createSeoConfig("排列组合计算器", "Permutation and Combination Calculator", "统计 / 概率", "Statistics / Probability", "快速计算 nPr 和 nCr，适合概率题和计数组合问题。", "Calculate nPr and nCr quickly for counting and probability problems.", ["排列计算器", "组合计算器"], ["permutation calculator", "combination calculator"]),
    quick: { zh: ["支持 nPr 和 nCr", "适合概率与计数题", "结果清晰"], en: ["Supports nPr and nCr", "Useful for counting and probability", "Clear outputs"] },
    features: [
      { id: "n", type: "number", label: { zh: "n", en: "n" }, default: () => 8 },
      { id: "r", type: "number", label: { zh: "r", en: "r" }, default: () => 3 },
    ],
    compute(values) {
      const n = Math.max(Math.floor(values.n), 0);
      const r = Math.max(Math.min(Math.floor(values.r), n), 0);
      const nPr = factorial(n) / Math.max(factorial(n - r), 1);
      const nCr = factorial(n) / Math.max(factorial(r) * factorial(n - r), 1);
      return financeResult(this, { ...values, years: 6 }, {
        kpis: [[tPair("排列 nPr", "Permutation nPr"), num(nPr)], [tPair("组合 nCr", "Combination nCr"), num(nCr)], [tPair("n", "n"), `${n}`], [tPair("r", "r"), `${r}`]],
        note: tPair("排列组合页最适合直接把两个结果一起给出，减少来回切换。", "A permutation-combination page works best when it returns both values together."),
        charts: [createChart(createSeries(nPr, 6), createSeries(nCr, 6), { titleZh: "排列与组合对比", titleEn: "Permutation vs combination", descZh: "看顺序是否影响结果规模。", descEn: "See how ordering changes the magnitude of the result.", legendAZh: "nPr", legendAEn: "nPr", legendBZh: "nCr", legendBEn: "nCr", valueType: "number" })],
        insights: simpleInsights("适合概率、离散数学和考试题目。", "Useful for probability, discrete math, and exam practice.", "这类工具很适合搜索长尾问题。", "This kind of tool fits long-tail search queries well."),
        table: { title: tPair("结果拆解", "Result breakdown"), desc: tPair("排列和组合最大的区别在于是否区分顺序。", "The key difference is whether order matters."), headers: [tPair("类型", "Type"), tPair("公式", "Formula"), tPair("结果", "Result")], rows: [["nPr", "n!/(n-r)!", num(nPr)], ["nCr", "n!/(r!(n-r)!)", num(nCr)]] },
        article: createSimpleInfoSection("为什么排列组合工具适合搜索", "Why a permutation-combination tool fits search", "用户通常会在做题时临时搜索这类公式工具，只要页面清楚，回访率和收录价值都不错。", "Users often search for this kind of formula tool during practice. A clear page can perform well for both repeat use and indexing.", ["先填 n 和 r。", "再看排列和组合结果。", "最后理解顺序是否重要。"], ["Enter n and r.", "Inspect both results.", "Then understand whether order matters."], "r 可以大于 n 吗？", "Can r be greater than n?", "不可以，组合和排列通常都要求 r 小于或等于 n。", "No. For standard combinations and permutations, r must be less than or equal to n."),
      });
    },
  };

  function statsListConfig(slug, zhName, enName, calcFn, extraZh, extraEn) {
    return {
      ...createSeoConfig(zhName, enName, "统计 / 概率", "Statistics / Probability", `输入一组数字，快速得到${zhName.replace("计算器", "")}结果。`, `Enter a number list and get the ${enName.replace(" Calculator", "")} instantly.`, extraZh, extraEn),
      quick: { zh: ["支持数字列表输入", "适合统计入门", "适合学习与复核"], en: ["Supports number-list input", "Useful for statistics basics", "Good for learning and checking"] },
      features: [{ id: "numbers", type: "text", label: { zh: "数字列表", en: "Number List" }, default: () => "12,15,18,20,21" }],
      compute(values) {
        const list = parseNumberList(values.numbers);
        const result = calcFn(list);
        return financeResult(this, { years: 6 }, {
          kpis: [[tPair("结果", "Result"), num(result)], [tPair("样本数", "Count"), `${list.length}`], [tPair("最小值", "Min"), num(Math.min(...list))], [tPair("最大值", "Max"), num(Math.max(...list))]],
          note: tPair("统计类工具最重要的是输入简单、结果直接，方便用户反复试不同数据。", "Statistical tools work best when input is simple and results are immediate."),
          charts: [createChart(list, createSeries(result, list.length), { titleZh: "样本值与结果线", titleEn: "Samples and result line", descZh: "把样本值和统计结果放在一起。", descEn: "Place sample values and the result on the same chart.", legendAZh: "样本值", legendAEn: "Samples", legendBZh: "结果线", legendBEn: "Result line", valueType: "number", labels: list.map((_, index) => `${index + 1}`) })],
          insights: simpleInsights("适合统计学习、作业复核和数据速查。", "Useful for learning statistics, homework checks, and quick data review.", "列表类工具天然适合用户反复试不同数据集。", "List-based tools naturally suit repeated testing with different datasets."),
          table: { title: tPair("输入数据", "Input data"), desc: tPair("把样本和统计结果放到同一张表里。", "Put the samples and statistical result into one table."), headers: [tPair("序号", "Index"), tPair("数值", "Value"), tPair("说明", "Note")], rows: list.map((value, index) => [`${index + 1}`, num(value), index === 0 ? tPair("样本起点", "Sample start") : ""]) },
          article: createSimpleInfoSection(`${zhName}为什么适合做独立页`, `Why ${enName} works as a standalone page`, "统计工具往往是高频、长尾、反复查询的内容，很适合通过清晰页面承接搜索流量。", "Statistics tools are often frequent, long-tail, repeat-query content and fit search traffic well when presented clearly.", ["先输入一组数字。", "再看统计结果。", "最后和样本本身对照。"], ["Enter a number list.", "Inspect the result.", "Then compare it with the samples."], "输入可以有空格吗？", "Can the input include spaces?", "可以，支持逗号和空格分隔。", "Yes. Both commas and spaces are supported as separators."),
        });
      },
    };
  }

  additions["standard-deviation"] = statsListConfig("standard-deviation", "标准差计算器", "Standard Deviation Calculator", (list) => Math.sqrt(varianceOf(list)), ["标准差在线计算器"], ["std dev calculator"]);
  additions.mean = statsListConfig("mean", "平均值计算器", "Mean Calculator", (list) => meanOf(list), ["均值计算器"], ["average calculator"]);
  additions.median = statsListConfig("median", "中位数计算器", "Median Calculator", (list) => medianOf(list), ["中位数在线计算器"], ["median number calculator"]);
  additions.variance = statsListConfig("variance", "方差计算器", "Variance Calculator", (list) => varianceOf(list), ["方差在线计算器"], ["variance statistics calculator"]);

  additions["data-distribution"] = {
    ...createSeoConfig("数据分布计算器", "Data Distribution Calculator", "统计 / 概率", "Statistics / Probability", "对一组数据给出最小值、最大值、均值、中位数和波动范围。", "Summarize distribution statistics for a list of values.", ["数据分布分析计算器"], ["data distribution summary calculator"]),
    quick: { zh: ["看分布和波动范围", "适合基础统计", "适合数据速查"], en: ["See distribution and range", "Useful for basic stats", "Good for quick data review"] },
    features: [{ id: "numbers", type: "text", label: { zh: "数字列表", en: "Number List" }, default: () => "3,5,8,8,10,12,15" }],
    compute(values) {
      const list = parseNumberList(values.numbers);
      const avg = meanOf(list);
      const med = medianOf(list);
      const min = Math.min(...list);
      const max = Math.max(...list);
      const range = max - min;
      return financeResult(this, { years: 6 }, {
        kpis: [[tPair("均值", "Mean"), num(avg)], [tPair("中位数", "Median"), num(med)], [tPair("最小值", "Min"), num(min)], [tPair("极差", "Range"), num(range)]],
        note: tPair("分布页适合先看整体轮廓，再决定是否深入看标准差或方差。", "A distribution page works well as a first-pass summary before diving into variance or standard deviation."),
        charts: [createChart(list, createSeries(avg, list.length), { titleZh: "样本分布与均值线", titleEn: "Sample distribution and mean line", descZh: "先看样本值，再看均值位置。", descEn: "See sample values first, then the mean line.", legendAZh: "样本", legendAEn: "Samples", legendBZh: "均值线", legendBEn: "Mean line", valueType: "number", labels: list.map((_, index) => `${index + 1}`) })],
        insights: simpleInsights("适合做数据初筛和统计入门。", "Useful for initial data screening and statistics basics.", "用户通常会在看分布后再跳到方差或标准差页。", "Users often move on to variance or standard-deviation pages after viewing the distribution."),
        table: { title: tPair("分布摘要", "Distribution summary"), desc: tPair("把几项关键统计量放在同一张表里。", "Put the key summary statistics into one table."), headers: [tPair("指标", "Metric"), tPair("结果", "Result"), tPair("说明", "Meaning")], rows: [[tPair("均值", "Mean"), num(avg), tPair("平均水平", "Average level")], [tPair("中位数", "Median"), num(med), tPair("中间位置", "Middle point")], [tPair("极差", "Range"), num(range), tPair("波动区间", "Spread")]] },
        article: createSimpleInfoSection("为什么数据分布页适合做入口", "Why a distribution page makes a good entry point", "很多用户并不知道自己应该看标准差还是中位数，分布页可以先给一个整体视角。", "Many users do not know whether they should inspect median or standard deviation first. A distribution page provides the overall view first.", ["先输入数据。", "再看均值和中位数。", "最后看极差和波动。"], ["Enter the data.", "Check mean and median.", "Then inspect range and spread."], "分布页能替代标准差页吗？", "Can a distribution page replace a standard-deviation page?", "不能，它更适合做总览，标准差页适合看波动程度。", "No. It is better for an overview, while a standard-deviation page focuses on variability."),
      });
    },
  };

  additions.sequence = {
    ...createSeoConfig("数列计算器", "Sequence Calculator", "数列 / 高等数学", "Sequences / Calculus", "根据首项、公差或公比快速生成数列前几项。", "Generate a numeric sequence quickly from a first term and step or ratio.", ["通用数列计算器"], ["number sequence calculator"]),
    quick: { zh: ["支持等差与等比思路", "看前几项结果", "适合学习和题目检查"], en: ["Covers arithmetic and geometric styles", "View first several terms", "Useful for study and checks"] },
    features: [
      { id: "first", type: "number", label: { zh: "首项", en: "First Term" }, default: () => 2 },
      { id: "step", type: "number", label: { zh: "变化值", en: "Step / Ratio" }, default: () => 3 },
      { id: "count", type: "number", label: { zh: "项数", en: "Terms" }, default: () => 6 },
      { id: "mode", type: "select", valueType: "string", label: { zh: "类型", en: "Type" }, default: () => "arithmetic", options: [{ value: "arithmetic", label: { zh: "等差", en: "Arithmetic" } }, { value: "geometric", label: { zh: "等比", en: "Geometric" } }] },
    ],
    compute(values) {
      const count = Math.max(Math.floor(values.count), 1);
      const list = Array.from({ length: count }, (_, index) => (values.mode === "geometric" ? values.first * (values.step ** index) : values.first + values.step * index));
      return financeResult(this, { years: count }, {
        kpis: [[tPair("第 n 项", "Nth Term"), num(list[list.length - 1])], [tPair("前 n 项和", "Sum of Terms"), num(list.reduce((sum, value) => sum + value, 0))], [tPair("项数", "Count"), `${count}`], [tPair("首项", "First Term"), num(values.first)]],
        note: tPair("数列页适合把前几项直接展示出来，帮助用户快速确认规律。", "A sequence page works well when it shows the first several terms directly."),
        charts: [createChart(list, createSeries(meanOf(list), list.length), { titleZh: "数列变化与均值", titleEn: "Sequence path and mean", descZh: "先看数列变化，再看均值参考。", descEn: "Inspect the sequence path first, then compare it with the mean.", legendAZh: "数列项", legendAEn: "Terms", legendBZh: "均值线", legendBEn: "Mean line", valueType: "number", labels: list.map((_, index) => `${index + 1}`) })],
        insights: simpleInsights("适合通用数列学习和题目验证。", "Useful for general sequence learning and answer checks.", "用户通常会再去等差和等比专页做更细的试算。", "Users often proceed to the arithmetic and geometric sequence pages for more specific checks."),
        table: { title: tPair("前几项结果", "First terms"), desc: tPair("把前几项放成表格，更适合手机端查看。", "A term table is easier to inspect on mobile."), headers: [tPair("序号", "Index"), tPair("项值", "Term"), tPair("累计和", "Cumulative Sum")], rows: list.map((value, index) => [`${index + 1}`, num(value), num(list.slice(0, index + 1).reduce((sum, item) => sum + item, 0))]) },
        article: createSimpleInfoSection("为什么数列页值得做", "Why a sequence page is worth building", "数列类问题搜索需求稳定，而且非常适合做可解释、可重复使用的独立工具页。", "Demand for sequence tools is stable, and they fit explanatory, repeat-use standalone pages very well.", ["先填首项。", "再选变化方式。", "最后看前几项和总和。"], ["Enter the first term.", "Choose the progression type.", "Then inspect the terms and sum."], "变化值在等比里代表什么？", "What does the step mean in geometric mode?", "在等比数列里，它代表公比。", "In geometric mode, it represents the common ratio."),
      });
    },
  };

  additions["arithmetic-sequence"] = {
    ...createSeoConfig("等差数列计算器", "Arithmetic Sequence Calculator", "数列 / 高等数学", "Sequences / Calculus", "根据首项和公差计算第 n 项与前 n 项和。", "Calculate the nth term and sum of an arithmetic sequence.", ["等差求和计算器"], ["arithmetic progression calculator"]),
    quick: { zh: ["支持第 n 项", "支持前 n 项和", "适合学习与验算"], en: ["Includes nth term", "Includes sum of n terms", "Useful for study and checking"] },
    features: [
      { id: "first", type: "number", label: { zh: "首项", en: "First Term" }, default: () => 2 },
      { id: "diff", type: "number", label: { zh: "公差", en: "Common Difference" }, default: () => 3 },
      { id: "n", type: "number", label: { zh: "第 n 项", en: "n" }, default: () => 8 },
    ],
    compute(values) {
      const nth = values.first + (values.n - 1) * values.diff;
      const sum = values.n * (values.first + nth) / 2;
      return additions.sequence.compute.call(this, { first: values.first, step: values.diff, count: values.n, mode: "arithmetic" });
    },
  };

  additions["geometric-sequence"] = {
    ...createSeoConfig("等比数列计算器", "Geometric Sequence Calculator", "数列 / 高等数学", "Sequences / Calculus", "根据首项和公比计算第 n 项与前 n 项和。", "Calculate the nth term and sum of a geometric sequence.", ["等比求和计算器"], ["geometric progression calculator"]),
    quick: { zh: ["支持第 n 项", "支持前 n 项和", "适合学习与验算"], en: ["Includes nth term", "Includes sum of n terms", "Useful for study and checking"] },
    features: [
      { id: "first", type: "number", label: { zh: "首项", en: "First Term" }, default: () => 2 },
      { id: "ratio", type: "number", label: { zh: "公比", en: "Ratio" }, default: () => 2 },
      { id: "n", type: "number", label: { zh: "第 n 项", en: "n" }, default: () => 6 },
    ],
    compute(values) {
      return additions.sequence.compute.call(this, { first: values.first, step: values.ratio, count: values.n, mode: "geometric" });
    },
  };

  function expressionXConfig(slug, zhName, enName, extraZh, extraEn, type) {
    return {
      ...createSeoConfig(zhName, enName, "高等数学", "Calculus", `基于表达式和指定位置快速估算${zhName.replace("计算器", "")}。`, `Estimate ${enName.replace(" Calculator", "")} from an expression and a target point.`, extraZh, extraEn),
      quick: { zh: ["支持表达式输入", "适合学习和验算", "适合题目复核"], en: ["Supports expression input", "Useful for study and checking", "Good for reviewing problems"] },
      features: [
        { id: "expression", type: "text", label: { zh: "表达式 f(x)", en: "Expression f(x)" }, default: () => "x^2+3*x" },
        { id: "x", type: "number", step: "0.01", label: { zh: "x 值", en: "x value" }, default: () => 2 },
      ],
      compute(values) {
        const x = values.x;
        const h = 0.0001;
        let result = 0;
        if (type === "limit") {
          result = (safeEvaluate(values.expression, { x: x - h }) + safeEvaluate(values.expression, { x: x + h })) / 2;
        } else if (type === "derivative") {
          result = (safeEvaluate(values.expression, { x: x + h }) - safeEvaluate(values.expression, { x: x - h })) / (2 * h);
        } else {
          const steps = 100;
          const stepSize = x / steps;
          let area = 0;
          for (let i = 0; i < steps; i += 1) {
            const currentX = i * stepSize;
            area += safeEvaluate(values.expression, { x: currentX }) * stepSize;
          }
          result = area;
        }
        return financeResult(this, { years: 6 }, {
          kpis: [[tPair("结果", "Result"), num(result)], [tPair("x 值", "x value"), num(x)], [tPair("f(x)", "f(x)"), num(safeEvaluate(values.expression, { x }))], [tPair("表达式长度", "Expression Length"), `${String(values.expression).length}`]],
          note: tPair(`${zhName}适合作为学习参考和快速估算结果页。`, `${enName} works as a study reference and a quick estimate page.`),
          charts: [createChart(createSeries(result, 6), createSeries(safeEvaluate(values.expression, { x }), 6), { titleZh: "结果与函数值", titleEn: "Result vs function value", descZh: "把估算结果和函数值放在同一张图里。", descEn: "Compare the estimated result with the function value in one chart.", legendAZh: "结果", legendAEn: "Result", legendBZh: "f(x)", legendBEn: "f(x)", valueType: "number" })],
          insights: simpleInsights("适合微积分入门、课程练习和公式验证。", "Useful for calculus basics, coursework, and formula checks.", "表达式类工具的用户会反复试不同函数。", "Users revisit expression-based tools to try different functions."),
          table: { title: tPair("不同 x 下的结果", "Result across x values"), desc: tPair("看 x 变化后结果怎么变。", "See how the result changes as x changes."), headers: [tPair("x", "x"), tPair("f(x)", "f(x)"), tPair("结果", "Result")], rows: [x - 1, x, x + 1].map((vx) => { const fx = safeEvaluate(values.expression, { x: vx }); let val = fx; if (type === "derivative") val = (safeEvaluate(values.expression, { x: vx + h }) - safeEvaluate(values.expression, { x: vx - h })) / (2 * h); if (type === "limit") val = (safeEvaluate(values.expression, { x: vx - h }) + safeEvaluate(values.expression, { x: vx + h })) / 2; return [num(vx), num(fx), num(val)]; }) },
          article: createSimpleInfoSection(`${zhName}为什么适合独立页`, `Why ${enName} works as a standalone page`, "只要页面既能给出结果，又能给出解释和示例，它就不只是公式工具，而是更容易被搜索引擎理解的内容页。", "When a page offers both a result and an explanation with examples, it becomes more than a formula tool and is easier for search engines to understand.", ["先输入表达式。", "再填 x。", "最后看结果与对照。"], ["Enter the expression.", "Then enter x.", "Finally inspect the result and comparison."], "结果为什么只是近似值？", "Why is the result only approximate?", "因为这里采用的是数值估算，不是符号推导。", "Because this page uses numerical estimation, not symbolic derivation."),
        });
      },
    };
  }

  additions.limit = expressionXConfig("limit", "极限计算器", "Limit Calculator", ["函数极限计算器"], ["function limit calculator"], "limit");
  additions.derivative = expressionXConfig("derivative", "导数计算器", "Derivative Calculator", ["求导计算器"], ["derivative estimator"], "derivative");
  additions.integral = expressionXConfig("integral", "积分计算器", "Integral Calculator", ["定积分计算器"], ["integral estimator"], "integral");

  additions.volume = {
    ...createSeoConfig("体积计算器", "Volume Calculator", "数学 / 工具", "Math / Tools", "按长宽高快速计算长方体体积，适合日常和工程基础换算。", "Calculate cuboid volume from length, width, and height.", ["立方体体积计算器"], ["volume formula calculator"]),
    quick: { zh: ["适合日常和工程基础", "输入长宽高即可", "支持快速换算"], en: ["Useful for daily and basic engineering use", "Enter length, width, and height", "Supports quick checks"] },
    features: [
      { id: "length", type: "number", label: { zh: "长", en: "Length" }, default: () => 5 },
      { id: "width", type: "number", label: { zh: "宽", en: "Width" }, default: () => 3 },
      { id: "height", type: "number", label: { zh: "高", en: "Height" }, default: () => 2 },
    ],
    compute(values) {
      const volume = values.length * values.width * values.height;
      return financeResult(this, { ...values, years: 6 }, {
        kpis: [[tPair("体积", "Volume"), num(volume)], [tPair("底面积", "Base Area"), num(values.length * values.width)], [tPair("长", "Length"), num(values.length)], [tPair("高", "Height"), num(values.height)]],
        note: tPair("体积类工具适合做高频基础工具页。", "Volume tools fit high-frequency foundational utility pages."),
        charts: [createChart(createSeries(volume, 6), createSeries(values.length * values.width, 6), { titleZh: "体积与底面积", titleEn: "Volume and base area", descZh: "把立体结果和底面放一起看。", descEn: "Compare the 3D result with the base area.", legendAZh: "体积", legendAEn: "Volume", legendBZh: "底面积", legendBEn: "Base area", valueType: "number" })],
        insights: simpleInsights("适合包装、仓储和基础几何。", "Useful for packaging, storage, and basic geometry.", "工具页很适合日常搜索和移动端快速打开。", "Utility pages work well for daily search and mobile use."),
        table: { title: tPair("尺寸拆解", "Dimension breakdown"), desc: tPair("把几何尺寸和结果放在一起。", "Put the dimensions and result together."), headers: [tPair("项目", "Item"), tPair("数值", "Value"), tPair("说明", "Meaning")], rows: [[tPair("长", "Length"), num(values.length), "-"], [tPair("宽", "Width"), num(values.width), "-"], [tPair("高", "Height"), num(values.height), "-"], [tPair("体积", "Volume"), num(volume), tPair("长宽高相乘", "Length × width × height")]] },
        article: createSimpleInfoSection("为什么体积页也值得做", "Why a volume page is worth adding", "几何类基础工具需求稳定，而且用户经常在手机端临时查用。", "Demand for basic geometry tools is stable, and users often open them quickly on mobile.", ["先填长宽高。", "再看体积结果。", "最后与面积一并理解。"], ["Enter length, width, and height.", "Inspect the volume.", "Then compare it with area."], "支持哪些图形？", "What shapes does it support?", "当前版本先覆盖最常见的长方体场景。", "The current version focuses on the most common cuboid case."),
      });
    },
  };

  additions.countdown = {
    ...createSeoConfig("倒计时计算器", "Countdown Calculator", "时间 / 日期", "Time / Date", "输入目标日期时间，快速查看还剩多少天、小时和分钟。", "Enter a target date-time and see the remaining days, hours, and minutes.", ["活动倒计时计算器"], ["countdown timer calculator"]),
    quick: { zh: ["适合活动和考试倒计时", "支持日期时间输入", "结果直观"], en: ["Useful for events and exams", "Supports date-time input", "Clear output"] },
    features: [{ id: "target", type: "datetime-local", label: { zh: "目标时间", en: "Target DateTime" }, default: () => "" }],
    compute(values) {
      const target = values.target ? new Date(values.target) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      const diffMs = Math.max(target.getTime() - Date.now(), 0);
      const days = Math.floor(diffMs / (24 * 60 * 60 * 1000));
      const hours = Math.floor(diffMs / (60 * 60 * 1000));
      const minutes = Math.floor(diffMs / (60 * 1000));
      return financeResult(this, { years: 6 }, {
        kpis: [[tPair("剩余天数", "Days Left"), `${days}`], [tPair("剩余小时", "Hours Left"), `${hours}`], [tPair("剩余分钟", "Minutes Left"), `${minutes}`], [tPair("目标时间", "Target Time"), target.toLocaleString()]],
        note: tPair("倒计时页适合活动、考试、项目节点和发售提醒。", "A countdown page is useful for events, exams, project milestones, and launches."),
        charts: [createChart(createSeries(days, 6), createSeries(hours, 6), { titleZh: "天数与小时数", titleEn: "Days and hours", descZh: "把主要剩余时间单位放在一起看。", descEn: "Compare the main remaining time units together.", legendAZh: "天数", legendAEn: "Days", legendBZh: "小时", legendBEn: "Hours", valueType: "number" })],
        insights: simpleInsights("适合活动运营、学习计划和个人提醒。", "Useful for event planning, study schedules, and personal reminders.", "倒计时工具很适合高频搜索和分享。", "Countdown tools suit frequent search and sharing."),
        table: { title: tPair("剩余时间拆解", "Remaining time breakdown"), desc: tPair("用不同时间单位看同一件事。", "View the same countdown in different units."), headers: [tPair("单位", "Unit"), tPair("数值", "Value"), tPair("说明", "Meaning")], rows: [[tPair("天", "Days"), `${days}`, "-"], [tPair("小时", "Hours"), `${hours}`, "-"], [tPair("分钟", "Minutes"), `${minutes}`, "-"]] },
        article: createSimpleInfoSection("为什么倒计时页适合独立收录", "Why a countdown page is good for indexing", "这类页面有明确场景，用户搜索意图强，也容易反复回来查看最新剩余时间。", "This kind of page has clear intent, strong search demand, and encourages users to revisit for updated remaining time.", ["先选目标时间。", "再看剩余天和小时。", "最后把结果用于安排计划。"], ["Choose the target date-time.", "Check days and hours left.", "Then use the result for planning."], "时间为什么会变化？", "Why does the number change over time?", "因为它是实时倒计时工具。", "Because it is a live countdown tool."),
      });
    },
  };

  additions["retirement-date"] = {
    ...createSeoConfig("退休日期计算器", "Retirement Date Calculator", "时间 / 日期", "Time / Date", "根据出生日期和计划退休年龄推算退休日期。", "Estimate retirement date from birth date and target retirement age.", ["退休时间计算器"], ["retirement date estimator"]),
    quick: { zh: ["适合职业规划", "输入出生日期即可", "结果简单直观"], en: ["Useful for career planning", "Works from birth date", "Simple and clear result"] },
    features: [
      { id: "birth", type: "date", label: { zh: "出生日期", en: "Birth Date" }, default: () => "1990-01-01" },
      { id: "retire-age", type: "number", label: { zh: "计划退休年龄", en: "Retirement Age" }, default: () => 60 },
    ],
    compute(values) {
      const birth = new Date(values.birth);
      const retirement = new Date(birth);
      retirement.setFullYear(birth.getFullYear() + Math.floor(values["retire-age"]));
      const yearsLeft = Math.max((retirement.getTime() - Date.now()) / (365.25 * 24 * 60 * 60 * 1000), 0);
      return financeResult(this, { years: 6 }, {
        kpis: [[tPair("退休日期", "Retirement Date"), retirement.toLocaleDateString()], [tPair("距离退休", "Years Left"), `${num(yearsLeft)} ${tPair("年", "years")}`], [tPair("出生日期", "Birth Date"), birth.toLocaleDateString()], [tPair("退休年龄", "Retirement Age"), `${values["retire-age"]}`]],
        note: tPair("退休日期页适合做职业与养老规划的第一步。", "A retirement-date page works well as the first step in career and retirement planning."),
        charts: [createChart(createSeries(yearsLeft, 6), createSeries(values["retire-age"], 6), { titleZh: "退休年龄与剩余年限", titleEn: "Retirement age and years left", descZh: "先看离退休还有多久。", descEn: "See how long remains until retirement.", legendAZh: "剩余年限", legendAEn: "Years left", legendBZh: "退休年龄", legendBEn: "Retirement age", valueType: "number" })],
        insights: simpleInsights("适合退休规划、职业安排和养老金准备。", "Useful for retirement planning, career timing, and pension preparation.", "日期类页面适合高频回访和分享。", "Date-related pages fit repeat visits and sharing."),
        table: { title: tPair("日期信息", "Date information"), desc: tPair("把出生日期、退休年龄和退休日统一展示。", "Show birth date, retirement age, and retirement date together."), headers: [tPair("项目", "Item"), tPair("结果", "Result"), tPair("说明", "Meaning")], rows: [[tPair("出生日期", "Birth Date"), birth.toLocaleDateString(), "-"], [tPair("退休年龄", "Retirement Age"), `${values["retire-age"]}`, "-"], [tPair("退休日期", "Retirement Date"), retirement.toLocaleDateString(), tPair("预计结果", "Projected result")]] },
        article: createSimpleInfoSection("为什么退休日期页也要做", "Why a retirement-date page is worth having", "很多用户先想知道自己大概什么时候退休，再继续做养老金和提前退休测算。", "Many users first want to know roughly when they might retire before moving on to pension or early-retirement planning.", ["先填出生日期。", "再设定退休年龄。", "最后看退休日期。"], ["Enter birth date.", "Set retirement age.", "Then inspect the retirement date."], "这个结果是官方退休年龄吗？", "Is this an official retirement age result?", "不是，它只是按你输入的年龄做时间推算。", "No. It simply projects the date from the age you entered."),
      });
    },
  };

  additions["work-hours"] = {
    ...createSeoConfig("工作时间计算器", "Work Hours Calculator", "时间 / 日期", "Time / Date", "输入上班、下班和休息时间，快速算出工作时长。", "Calculate working hours from start time, end time, and break duration.", ["工时计算器"], ["working hours calculator"]),
    quick: { zh: ["适合排班和考勤", "输入时间就出结果", "适合兼职与项目工时"], en: ["Useful for shifts and attendance", "Instant result from times", "Useful for freelance and project hours"] },
    features: [
      { id: "start", type: "time", label: { zh: "开始时间", en: "Start Time" }, default: () => "09:00" },
      { id: "end", type: "time", label: { zh: "结束时间", en: "End Time" }, default: () => "18:00" },
      { id: "break", type: "number", label: { zh: "休息时长 (分钟)", en: "Break (Minutes)" }, default: () => 60 },
    ],
    compute(values) {
      const [sh, sm] = String(values.start || "09:00").split(":").map((item) => parseInt(item, 10));
      const [eh, em] = String(values.end || "18:00").split(":").map((item) => parseInt(item, 10));
      let minutes = (eh * 60 + em) - (sh * 60 + sm) - values.break;
      if (minutes < 0) minutes += 24 * 60;
      return financeResult(this, { years: 6 }, {
        kpis: [[tPair("工作时长", "Work Hours"), `${num(minutes / 60)} h`], [tPair("总分钟", "Total Minutes"), `${num(minutes)}`], [tPair("休息时间", "Break"), `${num(values.break)} min`], [tPair("班次跨度", "Shift Span"), `${num(((eh * 60 + em) - (sh * 60 + sm) + 24 * 60) % (24 * 60) / 60)} h`]],
        note: tPair("工时页适合排班、考勤和自由职业时间统计。", "A work-hours page is useful for shifts, attendance, and freelance time tracking."),
        charts: [createChart(createSeries(minutes / 60, 6), createSeries(values.break / 60, 6), { titleZh: "工作与休息时长", titleEn: "Work and break hours", descZh: "把净工作时长和休息时间放一起看。", descEn: "Compare net work time with break time.", legendAZh: "工作时长", legendAEn: "Work hours", legendBZh: "休息时长", legendBEn: "Break hours", valueType: "number" })],
        insights: simpleInsights("适合工时核对、兼职结算和考勤复盘。", "Useful for work-hour checks, part-time settlement, and attendance review.", "时间类小工具很适合用户重复打开使用。", "Time-based utility tools are great for repeat use."),
        table: { title: tPair("工时拆解", "Work-hour breakdown"), desc: tPair("把开始、结束和净时长放到一张表里。", "Show start, end, and net hours in one table."), headers: [tPair("项目", "Item"), tPair("结果", "Result"), tPair("说明", "Meaning")], rows: [[tPair("开始", "Start"), values.start, "-"], [tPair("结束", "End"), values.end, "-"], [tPair("净工时", "Net Hours"), `${num(minutes / 60)} h`, tPair("扣除休息后", "After deducting break")]] },
        article: createSimpleInfoSection("为什么工作时间页适合被收录", "Why a work-hours page fits indexing", "工时计算是明确、刚需、可重复的使用场景，很适合做成搜索引擎容易理解的工具页。", "Work-hour calculation is a clear, repeatable need that fits well as an indexable utility page.", ["先填开始和结束时间。", "再填休息分钟。", "最后看净工时。"], ["Enter start and end times.", "Then break minutes.", "Finally inspect net work hours."], "跨夜班次能算吗？", "Can it handle overnight shifts?", "可以，结束时间早于开始时间时会自动按跨夜处理。", "Yes. If the end time is earlier than the start time, it is treated as an overnight shift."),
      });
    },
  };

  additions["delayed-retirement"] = {
    ...createSeoConfig("延迟退休计算器", "Delayed Retirement Calculator", "时间 / 日期", "Time / Date", "比较原定退休年龄和延迟退休后的时间差、额外收入期与财务缓冲。", "Compare an original retirement age with a delayed retirement plan and estimate the added earning window.", ["退休延后计算器", "延后退休测算"], ["delayed retirement planner", "retirement postponement calculator"]),
    quick: {
      zh: ["适合比较延迟退休方案", "看额外工作年数和收入窗口", "适合退休与养老规划"],
      en: ["Compare delayed-retirement scenarios", "See the extra earning window", "Useful for retirement planning"],
    },
    features: [
      { id: "current-age", type: "number", label: { zh: "当前年龄", en: "Current Age" }, default: () => 38 },
      { id: "retirement-age", type: "number", label: { zh: "原计划退休年龄", en: "Planned Retirement Age" }, default: () => 60 },
      { id: "delay-years", type: "number", label: { zh: "延迟退休年数", en: "Delay (Years)" }, default: () => 3 },
      { id: "monthly-savings", type: "number", label: { zh: "每月额外可储蓄", en: "Extra Monthly Savings" }, default: () => region().currency === "CNY" ? 3500 : 600 },
    ],
    compute(values) {
      const originalYearsLeft = Math.max(values["retirement-age"] - values["current-age"], 0);
      const delayedAge = values["retirement-age"] + values["delay-years"];
      const delayedYearsLeft = Math.max(delayedAge - values["current-age"], 0);
      const extraMonths = values["delay-years"] * 12;
      const extraSavings = values["monthly-savings"] * extraMonths;
      return financeResult(this, values, {
        kpis: [
          [tPair("原退休年龄", "Original Retirement Age"), `${num(values["retirement-age"], 0)}`],
          [tPair("延后退休年龄", "Delayed Retirement Age"), `${num(delayedAge, 0)}`],
          [tPair("增加工作月数", "Extra Working Months"), `${num(extraMonths, 0)}`],
          [tPair("新增储蓄空间", "Added Savings Capacity"), money(extraSavings)],
        ],
        note: tPair("延迟退休的关键不是只多工作几年，而是它是否能换来更稳的现金流和更小的养老缺口。", "The point of delaying retirement is not just extra years at work, but whether it meaningfully improves cash flow and narrows the retirement gap."),
        chartA: delayedYearsLeft,
        chartB: originalYearsLeft,
        insights: simpleInsights("适合先评估延迟退休能多争取多少收入和准备时间。", "Useful for checking how much extra time and income a delayed retirement can buy.", "用户通常会在不同退休年龄之间反复比较，是很典型的决策型工具。", "People often compare several retirement ages, which makes it a strong decision-support tool."),
        table: {
          title: tPair("退休时间对比", "Retirement timing comparison"),
          desc: tPair("把原计划和延迟后的退休节奏放在一起看。", "Compare the original plan and the delayed-retirement path side by side."),
          headers: [tPair("方案", "Scenario"), tPair("距离退休", "Years Left"), tPair("额外储蓄空间", "Added Savings Capacity")],
          rows: [
            [tPair("原计划", "Original"), pluralize(originalYearsLeft, "年", "year", "years"), money(0)],
            [tPair("延迟退休", "Delayed"), pluralize(delayedYearsLeft, "年", "year", "years"), money(extraSavings)],
          ],
        },
        article: createSimpleInfoSection("为什么延迟退休要单独算", "Why delayed retirement deserves its own page", "很多人只知道延迟退休会“多工作几年”，但真正有价值的是把它和新增储蓄、准备时间、未来支出缓冲一起算清楚。", "Many people know delayed retirement means working longer, but the real value comes from calculating how it affects savings capacity, preparation time, and future spending resilience.", ["先看还能多准备多少年。", "再看能增加多少储蓄。", "最后再判断延迟退休值不值得。"], ["Check how many extra years you gain first.", "Then measure the added savings window.", "Finally judge whether delaying retirement is worth it."], "延迟退休一定更好吗？", "Is delaying retirement always better?", "不一定，要看健康状态、职业选择和延迟几年后带来的实际改善。", "Not always. It depends on health, career options, and whether the extra years actually improve your financial position."),
      });
    },
  };

  additions["401k"] = {
    ...createSeoConfig("401(k) 退休账户计算器", "401(k) Calculator", "投资理财", "Investing", "估算 401(k) 供款、雇主匹配和长期复利增长，适合美国职场退休规划。", "Estimate 401(k) contributions, employer match, and long-term compounding for retirement planning.", ["401k 供款计算器", "美国退休账户计算器"], ["401k retirement calculator", "employer match calculator"]),
    quick: {
      zh: ["适合美国退休储蓄规划", "支持雇主匹配", "看长期复利和总投入"],
      en: ["Built for US retirement savings", "Includes employer match", "Shows long-term growth and contributions"],
    },
    features: [
      { id: "monthly-contribution", type: "number", label: { zh: "每月个人供款", en: "Monthly Employee Contribution" }, default: () => 600 },
      { id: "employer-match", type: "number", step: "0.1", label: { zh: "雇主匹配率 (%)", en: "Employer Match (%)" }, default: () => 50 },
      { id: "annual-rate", type: "number", step: "0.01", label: { zh: "预期年化收益率 (%)", en: "Expected Annual Return (%)" }, default: () => 7 },
      { id: "years", type: "number", label: { zh: "投资年限", en: "Years" }, default: () => 25 },
      { id: "starting-balance", type: "number", label: { zh: "已有余额", en: "Current Balance" }, default: () => 0 },
    ],
    compute(values) {
      const employee = values["monthly-contribution"];
      const employer = employee * values["employer-match"] / 100;
      const totalMonthly = employee + employer;
      const fv = periodicFutureValue(values["starting-balance"], totalMonthly, values["annual-rate"], values.years, 12);
      const totalEmployee = employee * values.years * 12 + values["starting-balance"];
      const totalEmployer = employer * values.years * 12;
      const totalContrib = totalEmployee + totalEmployer;
      return financeResult(this, values, {
        kpis: [
          [tPair("预计终值", "Projected Value"), money(fv)],
          [tPair("个人供款", "Employee Contributions"), money(totalEmployee)],
          [tPair("雇主匹配", "Employer Match"), money(totalEmployer)],
          [tPair("投资收益", "Investment Gain"), money(fv - totalContrib)],
        ],
        note: tPair("401(k) 最容易被忽略的价值，往往不是收益率本身，而是雇主匹配带来的额外复利起点。", "The most overlooked part of a 401(k) is often not the return itself, but the extra compounding base created by employer matching."),
        chartA: fv,
        chartB: totalContrib,
        insights: simpleInsights("适合美国职场用户比较个人供款和雇主匹配的长期效果。", "Useful for US employees comparing personal contributions with employer matching.", "退休账户工具通常有很强的长期搜索需求和回访价值。", "Retirement-account tools tend to have strong long-term search demand and repeat usage."),
        table: {
          title: tPair("供款与终值对比", "Contribution and value comparison"),
          desc: tPair("看个人供款、雇主匹配和最终资产之间的关系。", "Compare personal contributions, employer matching, and final value."),
          headers: [tPair("项目", "Item"), tPair("金额", "Amount"), tPair("说明", "Meaning")],
          rows: [
            [tPair("个人供款", "Employee"), money(totalEmployee), tPair("含已有余额", "Includes current balance")],
            [tPair("雇主匹配", "Employer"), money(totalEmployer), tPair("额外增加的供款", "Additional contribution from the employer")],
            [tPair("终值", "Projected value"), money(fv), tPair("长期复利后的结果", "End result after long-term compounding")],
          ],
        },
        article: createSimpleInfoSection("为什么 401(k) 页很重要", "Why a 401(k) page matters", "对于美国用户来说，401(k) 往往是退休储蓄的核心入口。把雇主匹配、供款节奏和长期复利放在一个页面里，能更快帮助用户做出实际决策。", "For US users, a 401(k) is often the core retirement-savings vehicle. Bringing employer matching, contribution pace, and long-term compounding into one page helps users make practical decisions faster.", ["先填个人供款。", "再加上雇主匹配。", "最后看长期终值。"], ["Enter the employee contribution first.", "Then add employer matching.", "Finally inspect the long-term projected value."], "雇主匹配真的差别很大吗？", "Does employer matching really matter that much?", "通常会，因为它直接提高了起始投入规模，而复利对起点非常敏感。", "Usually yes, because it lifts the contribution base directly and compounding is very sensitive to the starting contribution size."),
      });
    },
  };

  additions["roth-ira"] = {
    ...createSeoConfig("Roth IRA 计算器", "Roth IRA Calculator", "投资理财", "Investing", "估算 Roth IRA 长期供款和税后复利增长，适合英语国家用户做个人退休储蓄规划。", "Estimate Roth IRA contributions and tax-free long-term growth for retirement planning.", ["Roth IRA 投资计算器"], ["roth ira growth calculator"]),
    quick: {
      zh: ["适合个人退休账户规划", "看长期税后复利效果", "适合和 401(k) 对比"],
      en: ["Useful for personal retirement accounts", "See long-term tax-free growth", "Easy to compare with a 401(k)"],
    },
    features: [
      { id: "annual-contribution", type: "number", label: { zh: "每年供款", en: "Annual Contribution" }, default: () => 7000 },
      { id: "annual-rate", type: "number", step: "0.01", label: { zh: "预期年化收益率 (%)", en: "Expected Annual Return (%)" }, default: () => 7 },
      { id: "years", type: "number", label: { zh: "投资年限", en: "Years" }, default: () => 25 },
      { id: "starting-balance", type: "number", label: { zh: "已有余额", en: "Current Balance" }, default: () => 0 },
    ],
    compute(values) {
      const annual = values["annual-contribution"];
      const fv = periodicFutureValue(values["starting-balance"], annual, values["annual-rate"], values.years, 1);
      const totalContrib = annual * values.years + values["starting-balance"];
      return financeResult(this, values, {
        kpis: [
          [tPair("预计终值", "Projected Value"), money(fv)],
          [tPair("累计投入", "Total Contributions"), money(totalContrib)],
          [tPair("税后增长", "Tax-Free Gain"), money(fv - totalContrib)],
          [tPair("投资年限", "Investment Horizon"), pluralize(values.years, "年", "year", "years")],
        ],
        note: tPair("Roth IRA 的吸引力在于长期税后增长空间，尤其适合尽早开始并持续投入。", "The appeal of a Roth IRA comes from long-term tax-free growth, especially when started early and funded consistently."),
        chartA: fv,
        chartB: totalContrib,
        insights: simpleInsights("适合和 401(k)、普通账户做长期比较。", "Useful when comparing a Roth IRA with a 401(k) or a taxable account.", "这类页面很适合英语国家用户搜索退休储蓄关键词。", "This kind of page maps well to retirement-savings search intent in English-speaking markets."),
        table: {
          title: tPair("投入与增长", "Contribution and growth"),
          desc: tPair("先看投入，再看长期复利带来的增长。", "See contributions first, then the long-term growth created by compounding."),
          headers: [tPair("项目", "Item"), tPair("结果", "Result"), tPair("说明", "Meaning")],
          rows: [
            [tPair("累计投入", "Contributions"), money(totalContrib), tPair("你实际放进去的钱", "The money you actually contributed")],
            [tPair("增长部分", "Growth"), money(fv - totalContrib), tPair("长期税后增长空间", "Long-term tax-free appreciation")],
            [tPair("预计终值", "Projected value"), money(fv), tPair("账户可能达到的规模", "The potential account size")],
          ],
        },
        article: createSimpleInfoSection("为什么 Roth IRA 适合独立做", "Why a Roth IRA page deserves its own space", "Roth IRA 不是单纯的收益率问题，它本质上是在讨论长期投入、账户性质和未来可用资金之间的关系。", "A Roth IRA is not only about returns. It is really about the interaction between long-term contributions, account structure, and future spendable wealth.", ["先看每年投入多少。", "再看长期终值。", "最后和其他退休账户比较。"], ["Start with the annual contribution.", "Then inspect the long-term value.", "Finally compare it with other retirement accounts."], "Roth IRA 和 401(k) 谁更适合？", "Which is better, a Roth IRA or a 401(k)?", "通常要结合收入、税率预期和雇主匹配一起判断。", "It usually depends on income, expected tax rate, and whether employer matching is available."),
      });
    },
  };

  additions["sales-tax"] = {
    ...createSeoConfig("销售税计算器", "Sales Tax Calculator", "税务", "Tax", "输入税前金额和税率，快速算出销售税和税后总价。", "Enter a pre-tax amount and tax rate to calculate sales tax and the final total.", ["美国销售税计算器"], ["sales tax estimator", "after tax total calculator"]),
    quick: {
      zh: ["适合美国和英语国家消费场景", "快速看税后总价", "适合购物和报价比较"],
      en: ["Built for US and English-market purchases", "See the after-tax total instantly", "Useful for shopping and price comparisons"],
    },
    features: [
      { id: "amount", type: "number", label: { zh: "税前金额", en: "Pre-Tax Amount" }, default: () => 100 },
      { id: "tax-rate", type: "number", step: "0.01", label: { zh: "销售税率 (%)", en: "Sales Tax Rate (%)" }, default: () => 8.25 },
    ],
    compute(values) {
      const tax = values.amount * values["tax-rate"] / 100;
      const total = values.amount + tax;
      return financeResult(this, values, {
        kpis: [
          [tPair("税前金额", "Pre-Tax Amount"), money(values.amount)],
          [tPair("销售税", "Sales Tax"), money(tax)],
          [tPair("税后总价", "After-Tax Total"), money(total)],
          [tPair("税率", "Tax Rate"), pct(values["tax-rate"])],
        ],
        note: tPair("英语国家消费里，很多商品展示的是税前价格，所以税后总价才是更接近真实支付的数字。", "In many English-speaking markets, listed prices are often pre-tax, so the after-tax total is closer to what you actually pay."),
        chartA: total,
        chartB: tax,
        insights: simpleInsights("适合购物、报价、合同和服务费用前做快速判断。", "Useful before shopping, comparing quotes, or paying for services.", "这种工具搜索意图明确，适合做英语市场的高频入口页。", "This tool matches clear search intent and works well as a high-frequency entry page for English-speaking markets."),
        table: {
          title: tPair("价格拆解", "Price breakdown"),
          desc: tPair("把税前价格、税额和总价拆开更容易做预算。", "Breaking out the pre-tax amount, tax, and total makes budgeting easier."),
          headers: [tPair("项目", "Item"), tPair("金额", "Amount"), tPair("说明", "Meaning")],
          rows: [
            [tPair("税前金额", "Pre-tax"), money(values.amount), "-"],
            [tPair("税额", "Tax"), money(tax), tPair("按税率计算", "Calculated from the entered rate")],
            [tPair("总价", "Total"), money(total), tPair("最终支付参考", "Final payment estimate")],
          ],
        },
        article: createSimpleInfoSection("为什么销售税页很有价值", "Why a sales-tax page is valuable", "对很多英语国家用户来说，商品价格是否含税会直接影响购物决策、预算和报价比较。", "For many users in English-speaking markets, whether a price is tax-inclusive directly affects shopping decisions, budgeting, and quote comparisons.", ["先看税前金额。", "再看税额。", "最后确认税后总价。"], ["Start with the pre-tax amount.", "Then inspect the tax amount.", "Finally confirm the after-tax total."], "销售税一定是统一税率吗？", "Is sales tax always a single flat rate?", "不一定，不同州、城市和产品类别可能有差异。", "Not always. States, cities, and product categories can differ."),
      });
    },
  };

  additions.tip = {
    ...createSeoConfig("小费计算器", "Tip Calculator", "生活 / 消费", "Consumer", "快速计算小费金额、人均分摊金额和最终支付总额，适合餐饮与服务消费。", "Quickly calculate tip amount, split cost per person, and final total for dining and services.", ["餐厅小费计算器"], ["tip amount calculator", "bill split calculator"]),
    quick: {
      zh: ["适合英语国家餐饮消费", "支持多人平摊", "快速看总价和人均金额"],
      en: ["Built for restaurant and service tipping", "Supports splitting by people", "See total and per-person cost quickly"],
    },
    features: [
      { id: "bill", type: "number", label: { zh: "账单金额", en: "Bill Amount" }, default: () => 86 },
      { id: "tip-rate", type: "number", step: "0.1", label: { zh: "小费比例 (%)", en: "Tip Rate (%)" }, default: () => 18 },
      { id: "people", type: "number", label: { zh: "分摊人数", en: "Number of People" }, default: () => 2 },
    ],
    compute(values) {
      const tipAmount = values.bill * values["tip-rate"] / 100;
      const total = values.bill + tipAmount;
      const perPerson = total / Math.max(values.people, 1);
      return financeResult(this, values, {
        kpis: [
          [tPair("小费金额", "Tip Amount"), money(tipAmount)],
          [tPair("总支付", "Total with Tip"), money(total)],
          [tPair("人均金额", "Per Person"), money(perPerson)],
          [tPair("小费比例", "Tip Rate"), pct(values["tip-rate"])],
        ],
        note: tPair("小费页的价值，在于把“礼貌消费”和“实际支出”放在同一个结果里一次看清。", "A tip page helps people see etiquette and actual spending in one place."),
        chartA: total,
        chartB: tipAmount,
        insights: simpleInsights("适合在餐厅、打车、酒店和服务消费里快速使用。", "Useful for restaurants, rides, hotels, and service spending.", "英语国家用户在结账前经常会快速搜一下小费金额。", "Users in English-speaking markets often make a quick tip search before paying."),
        table: {
          title: tPair("结账拆分", "Bill split"),
          desc: tPair("把账单、小费和分摊结果放一起更容易决定。", "Seeing the bill, tip, and split together makes the payment easier to decide."),
          headers: [tPair("项目", "Item"), tPair("金额", "Amount"), tPair("说明", "Meaning")],
          rows: [
            [tPair("原账单", "Base bill"), money(values.bill), "-"],
            [tPair("小费", "Tip"), money(tipAmount), tPair("按输入比例计算", "Calculated from the entered rate")],
            [tPair("人均", "Per person"), money(perPerson), tPair("总额 ÷ 人数", "Total divided by people")],
          ],
        },
        article: createSimpleInfoSection("为什么小费页值得做", "Why a tip page is worth having", "在很多英语国家，账单上的数字并不是最终支付数，小费才是消费者真正关心的最后一步。", "In many English-speaking countries, the number on the bill is not the final payment. The tip is the last part consumers actually care about.", ["先填账单。", "再填小费比例。", "最后看总价和人均金额。"], ["Enter the bill amount first.", "Then enter the tip rate.", "Finally inspect the total and per-person share."], "常见小费比例是多少？", "What is a common tip rate?", "通常会在 15% 到 20% 之间，但具体仍要看服务场景和当地习惯。", "A common range is 15% to 20%, but the exact norm depends on the service and local custom."),
      });
    },
  };

  additions.paycheck = {
    ...createSeoConfig("工资到手计算器", "Paycheck Calculator", "税务", "Tax", "根据时薪、每周工时和扣税比例快速估算工资到手金额。", "Estimate net paycheck from hourly pay, weekly hours, and withholding assumptions.", ["美国工资计算器", "时薪到手计算器"], ["hourly paycheck calculator", "take-home pay calculator"]),
    quick: {
      zh: ["适合英语国家时薪工作者", "快速看税前和到手差异", "适合谈薪和排班比较"],
      en: ["Useful for hourly workers", "Compare gross pay and take-home pay fast", "Helpful for scheduling and pay comparisons"],
    },
    features: [
      { id: "hourly-rate", type: "number", label: { zh: "时薪", en: "Hourly Rate" }, default: () => 24 },
      { id: "hours-per-week", type: "number", label: { zh: "每周工时", en: "Hours per Week" }, default: () => 40 },
      { id: "tax-rate", type: "number", step: "0.1", label: { zh: "预估扣税比例 (%)", en: "Estimated Tax / Withholding (%)" }, default: () => 20 },
      { id: "weeks-per-month", type: "number", step: "0.1", label: { zh: "每月换算周数", en: "Weeks per Month" }, default: () => 4.33 },
    ],
    compute(values) {
      const gross = values["hourly-rate"] * values["hours-per-week"] * values["weeks-per-month"];
      const tax = gross * values["tax-rate"] / 100;
      const net = gross - tax;
      return financeResult(this, values, {
        kpis: [
          [tPair("月税前工资", "Monthly Gross Pay"), money(gross)],
          [tPair("预估扣税", "Estimated Withholding"), money(tax)],
          [tPair("月到手工资", "Monthly Net Pay"), money(net)],
          [tPair("周税前工资", "Weekly Gross Pay"), money(values["hourly-rate"] * values["hours-per-week"])],
        ],
        note: tPair("对于英语国家的时薪工作者，真正重要的不是时薪本身，而是排班后一个月大概能到手多少。", "For hourly workers in English-speaking markets, the key number is not the hourly rate itself but what the month will likely feel like after withholding."),
        chartA: gross,
        chartB: net,
        insights: simpleInsights("适合比较班次、时薪调整和兼职方案。", "Useful for comparing schedules, pay raises, and side jobs.", "工资到手类页面搜索需求明确，也适合做留存和反复试算。", "Take-home-pay pages have clear search intent and encourage repeated recalculation."),
        table: {
          title: tPair("工资拆解", "Paycheck breakdown"),
          desc: tPair("看税前、扣税和税后更容易判断排班值不值得。", "Gross, withholding, and net values help judge whether a schedule is worth it."),
          headers: [tPair("项目", "Item"), tPair("金额", "Amount"), tPair("说明", "Meaning")],
          rows: [
            [tPair("周税前", "Weekly gross"), money(values["hourly-rate"] * values["hours-per-week"]), "-"],
            [tPair("月税前", "Monthly gross"), money(gross), tPair("按平均月周数换算", "Converted from average weeks per month")],
            [tPair("月到手", "Monthly net"), money(net), tPair("扣除预估税费后", "After estimated withholding")],
          ],
        },
        article: createSimpleInfoSection("为什么工资到手页值得有", "Why a paycheck page is useful", "很多英语国家用户按时薪工作，真正做决定时关心的是排班之后能拿到多少，而不是时薪数字本身。", "Many users in English-speaking countries work hourly and care more about what they take home after scheduling than the hourly rate itself.", ["先填时薪。", "再填每周工时。", "最后看税后到手。"], ["Enter the hourly rate first.", "Then weekly hours.", "Finally inspect the net paycheck."], "结果是精确工资单吗？", "Is this an exact payslip?", "不是，它更适合作为快速估算和比较。", "No. It is best used as a quick estimate and comparison tool."),
      });
    },
  };

  additions["mortgage-affordability"] = {
    ...createSeoConfig("购房承受力计算器", "Mortgage Affordability Calculator", "贷款 / 房产", "Loans / Housing", "根据收入、现有债务、利率和首付估算大致可承受的房屋价格。", "Estimate an affordable home price from income, debt, rate, and down payment.", ["房贷承受力计算器"], ["mortgage affordability calculator", "how much house can I afford"]),
    quick: {
      zh: ["适合买房预算初筛", "先看能承受多少，再看要不要买", "适合英语国家房贷场景"],
      en: ["Great for a first home-budget screen", "Check affordability before commitment", "Built for mortgage planning in English-speaking markets"],
    },
    features: [
      { id: "monthly-income", type: "number", label: { zh: "月收入", en: "Monthly Income" }, default: () => 8000 },
      { id: "other-debt", type: "number", label: { zh: "其他月债务", en: "Other Monthly Debt" }, default: () => 500 },
      { id: "dti-limit", type: "number", step: "0.1", label: { zh: "目标债务收入比 (%)", en: "Target DTI (%)" }, default: () => 36 },
      { id: "annual-rate", type: "number", step: "0.01", label: { zh: "房贷利率 (%)", en: "Mortgage Rate (%)" }, default: () => 6.5 },
      { id: "years", type: "number", label: { zh: "贷款年限", en: "Mortgage Term (Years)" }, default: () => 30 },
      { id: "down-payment", type: "number", label: { zh: "首付金额", en: "Down Payment" }, default: () => 50000 },
    ],
    compute(values) {
      const maxDebt = values["monthly-income"] * values["dti-limit"] / 100;
      const maxMortgagePayment = Math.max(maxDebt - values["other-debt"], 0);
      const r = values["annual-rate"] / 100 / 12;
      const n = values.years * 12;
      const principal = r === 0 ? maxMortgagePayment * n : maxMortgagePayment * (((1 + r) ** n - 1) / (r * (1 + r) ** n));
      const homePrice = principal + values["down-payment"];
      return financeResult(this, values, {
        kpis: [
          [tPair("可承受月供", "Affordable Monthly Payment"), money(maxMortgagePayment)],
          [tPair("估算贷款额", "Estimated Loan Amount"), money(principal)],
          [tPair("估算房价", "Estimated Home Price"), money(homePrice)],
          [tPair("目标 DTI", "Target DTI"), pct(values["dti-limit"])],
        ],
        note: tPair("购房承受力页的关键，不是告诉你银行会批多少，而是让你先看到“对你来说舒服的月供”对应什么房价。", "An affordability page is less about what a bank might approve and more about what monthly payment feels realistic for you."),
        chartA: homePrice,
        chartB: principal,
        insights: simpleInsights("适合买房前先做预算边界判断。", "Useful for setting a realistic home-buying budget before house hunting.", "英语国家用户搜索“我能买多贵的房子”非常高频。", "Search intent around 'how much house can I afford' is very strong in English-speaking markets."),
        table: {
          title: tPair("承受力拆解", "Affordability breakdown"),
          desc: tPair("收入、债务、贷款额和房价放一起更容易判断。", "Income, debt, loan amount, and home price are easier to judge side by side."),
          headers: [tPair("项目", "Item"), tPair("结果", "Result"), tPair("说明", "Meaning")],
          rows: [
            [tPair("最大月债务", "Max monthly debt"), money(maxDebt), tPair("按目标 DTI 计算", "Based on target DTI")],
            [tPair("可承受房贷月供", "Affordable mortgage payment"), money(maxMortgagePayment), tPair("扣除其他债务后", "After other debt payments")],
            [tPair("估算房价", "Estimated home price"), money(homePrice), tPair("含首付后推算", "Estimated after adding down payment")],
          ],
        },
        article: createSimpleInfoSection("为什么购房承受力页很重要", "Why an affordability page matters", "很多买房决定的问题，不是首付够不够，而是未来几年月供会不会持续压住生活质量。", "Many home-buying decisions are not really about the down payment alone, but whether the mortgage payment will compress quality of life for years.", ["先看收入和其他债务。", "再看可承受月供。", "最后估算对应房价。"], ["Check income and other debt first.", "Then see the affordable mortgage payment.", "Finally estimate the home price that matches it."], "银行审批额度就是我应该买的房价吗？", "Is the bank approval amount the home price I should target?", "不一定，审批额度和舒适承受力往往不是一回事。", "Not necessarily. Approval capacity and comfortable affordability are often very different."),
      });
    },
  };


  Object.assign(configs, additions);
  if (typeof window !== "undefined") {
    window.calculatorConfigs = configs;
    window.CATALOG_GROUPS = groups;
  }

  appendToGroup("贷款 / 房产", "买房、房贷和住房决策", "Mortgage and housing decisions", "从首付、月供到组合贷款比较，把最贵的长期决策先算明白。", "From down payment and mortgage payment to blended-loan comparison, calculate the big housing decisions first.", ["combination-loan", "mortgage-affordability"]);
  appendToGroup("投资理财", "复利、收益率和长期资产增长", "Compounding, returns, and long-term asset growth", "把定投、收益率、目标金额和分红收入放在一个分类里做对比。", "Compare recurring investing, return metrics, target values, and dividend income in one section.", ["etf-sip", "investment-goal", "dividend-growth", "dividend-yield", "401k", "roth-ira"]);
  appendToGroup("税务", "税后、税费和交易成本", "Taxes, after-tax outcomes, and transaction costs", "工资税后、社保和交易费用，都适合在动作前先算一遍。", "Estimate net salary, social-security, and transaction costs before committing.", ["social-security", "sales-tax", "paycheck"]);
  appendToGroup("储蓄 / 现金流", "先把现金流和安全垫打稳", "Stabilize cash flow and your financial buffer first", "预算、储蓄、净资产和生活成本，适合做家庭和个人的底层财务管理。", "Budgeting, savings, net worth, and living-cost tools for stronger financial foundations.", ["cost-of-living"]);
  appendToGroup("经营 / 成本", "利润、毛利和经营判断", "Margins, profitability, and business judgement", "先把单笔利润、毛利率和成本结构算清楚，再决定怎么报价或投放。", "Model profit, gross margin, and cost structure before pricing or investing more in distribution.", ["profit-margin", "gross-margin"]);
  appendToGroup("健康 / 营养", "热量消耗和营养目标", "Calorie burn and nutrition targets", "步行、跑步、游泳和三大营养素摄入，适合做长期跟踪与日常复查。", "Walking, running, swimming, and macro-intake tools fit both long-term tracking and daily checks.", ["walking-calories", "running-calories", "swimming-calories", "protein-intake", "carb-intake", "fat-intake"]);
  appendToGroup("代数 / 函数", "公式、方程和常用函数", "Equations, formulas, and core functions", "把分数、对数、平方根、方程、矩阵和向量放进一个高频学习工具区。", "Bring fractions, logarithms, roots, equations, matrices, and vectors into one high-frequency learning section.", ["fraction", "exponent", "logarithm", "scientific-calculator", "square-root", "cube-root", "equation-solver", "quadratic-equation", "linear-equation", "matrix", "trigonometry", "vector"]);
  appendToGroup("统计 / 概率", "概率、统计和数据摘要", "Probability, statistics, and data summaries", "标准差、均值、中位数、方差和排列组合，适合做题目验证和数据速查。", "Standard deviation, mean, median, variance, and combinatorics work well for exercises and quick data review.", ["probability", "permutation-combination", "standard-deviation", "mean", "median", "variance", "data-distribution"]);
  appendToGroup("数列 / 高等数学", "数列、极限、导数和积分", "Sequences, limits, derivatives, and integrals", "把通用数列、等差等比、极限、导数和积分放在一起，适合中学到大学的连续学习。", "Group sequences, arithmetic and geometric progression, limits, derivatives, and integrals for continuous learning from school to college.", ["sequence", "arithmetic-sequence", "geometric-sequence", "limit", "derivative", "integral"]);
  appendToGroup("时间 / 日期", "倒计时、退休日和工时管理", "Countdowns, retirement dates, and working hours", "把倒计时、退休日期、延迟退休和工作时长放进同一类目，方便做日程与人生节点规划。", "Bring countdowns, retirement dates, delayed retirement, and working hours into one section for schedule and life-stage planning.", ["countdown", "retirement-date", "delayed-retirement", "work-hours"]);
  appendToGroup("数学 / 工具", "高频实用的小工具", "Practical high-frequency utility tools", "面积、体积、单位与基础换算，适合做打开就能用的独立页。", "Area, volume, unit, and conversion tools work best as ready-to-use independent pages.", ["volume"]);
})();
