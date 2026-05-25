window.SLIDE_DECK = {
  title: "HTML 取代 Markdown？",
  subtitle: "结论先行：Markdown 不会消失，但 HTML 正在接管最终体验",
  author: "你的名字",
  theme: "carbon",
  visuals: {
    default: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    markdown: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    html: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    collaboration: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    data: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
  },
  slides: [
    {
      type: "impact",
      visual: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
      title: "HTML 取代 Markdown？",
      subtitle: "不是“谁杀死谁”，而是内容生产链正在分层：Markdown 负责写作速度，HTML 负责最终体验。",
      stat: "写作用 Markdown，交付用 HTML",
      kicker: "The Real Shift"
    },
    {
      type: "verdict",
      visualKey: "data",
      title: "一句话判断",
      verdict: "Markdown 是内容草稿层；HTML 是产品交付层。",
      points: [
        "如果目标是快速写、快速改、多人审：Markdown 更强。",
        "如果目标是展示、互动、品牌、发布：HTML 更强。",
        "未来不是替代，而是 Markdown → HTML 的流水线。"
      ]
    },
    {
      type: "evidence",
      visualKey: "markdown",
      title: "Markdown 的权威定位",
      kicker: "CommonMark / GitHub",
      claims: [
        {
          source: "CommonMark",
          headline: "Markdown 是 plain text",
          text: "CommonMark 将 Markdown 定义为用于撰写结构化文档的纯文本格式。它的核心优势不是视觉控制，而是“容易写、容易读”。"
        },
        {
          source: "GitHub Docs",
          headline: "Markdown 是协作写作语言",
          text: "GitHub 把 GFM 用在 README、Issue、PR 评论等场景，并加入 @mentions、任务列表、引用等协作能力。"
        },
        {
          source: "GFM Spec",
          headline: "Markdown 最终仍会渲染成 HTML",
          text: "GFM 是基于 CommonMark 的方言；GitHub 会在转换成 HTML 后做额外处理和安全清洗。"
        }
      ]
    },
    {
      type: "evidence",
      visualKey: "html",
      title: "HTML 的权威定位",
      kicker: "WHATWG / MDN",
      claims: [
        {
          source: "WHATWG",
          headline: "HTML 是 Web 的核心标记语言",
          text: "HTML 不只是文本格式；它描述文档，也支撑从静态页面到动态应用的语义和脚本 API。"
        },
        {
          source: "MDN",
          headline: "HTML 文档由元素和属性组成",
          text: "元素负责结构，属性调整行为；再叠加 CSS 与 JavaScript，页面就拥有完整的呈现和交互能力。"
        },
        {
          source: "W3C",
          headline: "当前 HTML 是持续演进的标准",
          text: "W3C 指向 WHATWG HTML Living Standard，说明 HTML 是开放 Web 平台的活标准，而不是某个静态格式。"
        }
      ]
    },
    {
      type: "battle",
      visualKey: "data",
      title: "真正的差异：不是语法，是能力边界",
      left: {
        label: "Markdown",
        headline: "写作体验",
        bullets: ["低摩擦", "纯文本", "适合 Git diff", "适合知识库和文档草稿"]
      },
      right: {
        label: "HTML",
        headline: "用户体验",
        bullets: ["精确布局", "响应式", "交互组件", "可直接发布为网页应用"]
      }
    },
    {
      type: "matrix",
      visualKey: "collaboration",
      title: "选择标准",
      rows: [
        ["个人笔记", "Markdown", "速度优先，结构简单"],
        ["团队文档", "Markdown → HTML", "源文件协作，网页发布"],
        ["课程讲义", "Markdown → HTML", "先写内容，再做演示体验"],
        ["商业简报", "HTML", "视觉、互动、控制感更重要"],
        ["产品手册", "HTML", "搜索、导航、版本、嵌入组件"]
      ]
    },
    {
      type: "poll",
      visualKey: "collaboration",
      title: "你最希望升级哪类 Markdown？",
      question: "选一个最值得变成 HTML 体验的内容",
      options: ["课程讲义", "技术文档", "商业简报", "知识库"]
    },
    {
      type: "wordcloud",
      visualKey: "html",
      title: "你使用 HTML 取代 Markdown 的理由為何？",
      prompt: "請輸入你的理由，送出後會即時彙整成文字雲。",
      inputLabel: "輸入理由",
      placeholder: "例如：可以互動、畫面更漂亮、方便部署",
      examples: ["互動", "部署", "品牌感", "版面控制", "視覺化"],
      firebase: true
    },
    {
      type: "workflow",
      visualKey: "data",
      title: "推荐生产线",
      steps: [
        { label: "Markdown", text: "写初稿、做结构、收集反馈" },
        { label: "Schema", text: "把内容拆成标题、论点、案例、互动" },
        { label: "HTML", text: "套主题、做版式、加交互和图表" },
        { label: "Publish", text: "浏览器演示、PDF 导出、静态站发布" }
      ]
    },
    {
      type: "slider",
      visualKey: "markdown",
      title: "同一份内容，不同交付强度",
      leftLabel: "Markdown：写给编辑者",
      rightLabel: "HTML：写给使用者",
      points: [
        "Markdown 降低作者成本",
        "HTML 降低观众理解成本",
        "AI 时代最优路径是自动把前者升级成后者"
      ]
    },
    {
      type: "quote",
      visualKey: "html",
      title: "最终结论",
      quote: "HTML 不会取代 Markdown 的写作价值，但会取代 Markdown 的很多最终展示场景。",
      byline: "把 Markdown 留在后台，把 HTML 推到前台。"
    },
    {
      type: "evidence",
      visualKey: "data",
      title: "资料来源",
      kicker: "Authoritative References",
      claims: [
        {
          source: "CommonMark",
          headline: "Markdown 规范",
          text: "用于确认 Markdown 的纯文本、结构化文档定位。"
        },
        {
          source: "GitHub",
          headline: "GFM 与协作场景",
          text: "用于确认 GitHub Flavored Markdown 在 README、Issue、PR 等协作场景中的角色。"
        },
        {
          source: "WHATWG / MDN",
          headline: "HTML 标准与开发文档",
          text: "用于确认 HTML 作为 Web 标记语言、语义结构和交互承载层的定位。"
        }
      ]
    },
    {
      type: "closing",
      visualKey: "collaboration",
      title: "可执行建议",
      subtitle: "继续用 Markdown 写；把重要内容做成 HTML。尤其是课程、简报、产品手册和对外发布页面。"
    }
  ]
};
