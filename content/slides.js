window.SLIDE_DECK = {
  title: "HTML 取代 Markdown？",
  subtitle: "AI 輸出格式的新革命：從線性文字，到可互動的瀏覽器介面",
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
      subtitle: "AI Agent 不只是產生文字，它正在產生可閱讀、可操作、可分享的介面。",
      stat: "AI 輸出從文件變成介面",
      kicker: "2026 · Agent Output Shift"
    },
    {
      type: "event",
      visualKey: "collaboration",
      title: "事件起源",
      date: "2026 年 5 月",
      headline: "Anthropic / Claude Code 工程社群開始重新討論：AI 的最終輸出，是否應該是 HTML？",
      points: [
        "討論核心不是語法偏好，而是人是否真的會讀 AI 產出的長文件。",
        "HTML 被重新看見，因為它能把長內容變成可視化、可互動、可導航的成果物。",
        "Markdown 仍然適合草稿、版本控制與資料管線，但不一定適合最終呈現。"
      ],
      numbers: [
        ["AI 產出", "越來越長"],
        ["人工注意力", "越來越稀缺"],
        ["交付格式", "走向介面化"]
      ]
    },
    {
      type: "verdict",
      visualKey: "data",
      title: "一句话判断",
      verdict: "Markdown 是內容草稿層；HTML 是體驗交付層。",
      points: [
        "要快速寫、快速改、多人審：Markdown 更強。",
        "要展示、互動、品牌、發布：HTML 更強。",
        "最佳路徑不是替代，而是 Markdown → HTML 的生產線。"
      ]
    },
    {
      type: "timeline",
      visualKey: "data",
      title: "為什麼以前大家用 Markdown？",
      subtitle: "早期模型 context window 小，token 很貴；Markdown 的簡潔是硬需求。",
      milestones: [
        { label: "早期 LLM", value: "幾 K", text: "必須節省每個 token" },
        { label: "GPT-4 早期", value: "8K / 32K", text: "Markdown 仍是務實選擇" },
        { label: "Claude 2 / 3", value: "100K+", text: "長文和規格開始膨脹" },
        { label: "大 context 時代", value: "百萬級", text: "HTML 的 token 成本不再是唯一瓶頸" }
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
      type: "advantages",
      visualKey: "html",
      title: "HTML 的四大優勢",
      cards: [
        { title: "資訊密度", text: "表格、區塊、錨點、圖表可以同頁組織，觀眾不用在長文字裡搜尋重點。" },
        { title: "視覺豐富度", text: "CSS、圖片、SVG、層級和留白能把內容變成可掃讀的畫面。" },
        { title: "互動能力", text: "按鈕、篩選、滑桿、文字雲、即時資料都能放進同一份交付物。" },
        { title: "分享便利性", text: "單一網址或 HTML 檔即可打開，不依賴特定 Markdown 閱讀器。" }
      ]
    },
    {
      type: "conversion",
      visualKey: "html",
      title: "親眼看見：Markdown → HTML",
      markdown: [
        "# AI 輸出格式",
        "- Markdown：易寫、易改、易 diff",
        "- HTML：可視化、可互動、可發布",
        "| 場景 | 建議 |",
        "| 簡報 / 報告 | HTML |"
      ],
      rendered: [
        ["視覺", "HTML 勝"],
        ["互動", "HTML 勝"],
        ["版本控制", "Markdown 勝"],
        ["資料管線", "Markdown 勝"]
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
      title: "HTML vs Markdown：全面對比",
      rows: [
        ["視覺設計", "HTML", "CSS、圖片、SVG、排版控制"],
        ["互動能力", "HTML", "按鈕、滑桿、即時資料、表單"],
        ["分享展示", "HTML", "瀏覽器即開，適合非技術觀眾"],
        ["版本控制", "Markdown", "純文字 diff 清楚"],
        ["資料處理", "Markdown", "適合解析、切片、索引與 RAG"]
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
      type: "quote",
      visualKey: "html",
      title: "核心主張",
      quote: "問題不是 Markdown 寫得不好，而是 AI 產出的內容越來越長，線性文字越來越難被真正消化。",
      byline: "HTML 的價值，是把 AI 輸出變成可掃讀、可操作、可決策的介面。"
    },
    {
      type: "splitDecision",
      visualKey: "data",
      title: "RAG 場景的例外",
      left: {
        label: "展示端輸出",
        winner: "HTML 明顯勝出",
        text: "適合報告、簡報、儀表板、研究摘要、決策頁。"
      },
      right: {
        label: "資料處理管線",
        winner: "Markdown 仍有優勢",
        text: "適合切片、索引、embedding、版本審查和批次轉換。"
      },
      conclusion: "HTML 與 Markdown 不是零和競爭；它們處在不同階段。"
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
      quote: "Markdown 適合寫給系統和作者；HTML 適合交給觀眾和決策者。",
      byline: "把 Markdown 留在後台，把 HTML 推到前台。"
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
      title: "大 Context 時代",
      subtitle: "AI Agent 的最佳輸出，不只是答案，而是一個可以被人快速理解、操作和分享的 HTML 介面。"
    }
  ]
};
