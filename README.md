# Enhanced Slide Kit

这是一个纯静态 HTML 简报模板，适合把教材、讲义、课程大纲快速变成 Reveal.js 简报。它不依赖 OpenAI 生图 key，默认使用 emoji 图标、CSS 背景和本地互动组件。

## 怎么用

1. 打开 `content/slides.js`。
2. 修改 `title`、`subtitle`、`author` 和 `slides`。
3. 双击 `index.html` 预览。
4. 演示时用方向键翻页。
5. 导出 PDF 时，在地址后加 `?print-pdf`，然后用浏览器打印为 PDF。

## 支持的页面类型

- `hero`: 封面页
- `agenda`: 目录页
- `cards`: 三栏卡片页
- `quote`: 金句页
- `poll`: 本地投票页
- `wordcloud`: 本地词云页
- `slider`: 滑杆对比页
- `image`: 图片页
- `closing`: 结尾页

## 图标方案

本版已经改成免费照片缩略图，不再依赖 emoji。图片来源通过 `content/slides.js` 的 `visuals` 设置：

```js
visuals: {
  default: "https://images.unsplash.com/...",
  markdown: "https://images.unsplash.com/...",
  html: "https://images.unsplash.com/..."
}
```

每页可用：

```js
visualKey: "html"
```

或直接指定：

```js
visual: "assets/images/my-slide-image.jpg"
```

## 免费图片和生图方案

不把任何第三方服务写死进模板，建议生成或下载图片后放到 `assets/images/`，再在 `image` 字段填写路径，例如：

```js
image: "assets/images/chapter-01-cover.png"
```

可选工具：

- [Microsoft Designer Image Creator](https://create.microsoft.com/en-us/features/ai-image-creator): 官方页面标注为 free，需要 Microsoft 账号。
- [Canva AI Image Generator](https://www.canva.com/ai-image-generator/): 有免费入口，额度和功能会随账号策略变化。
- [Adobe Firefly](https://www.adobe.com/products/firefly.html): 可免费开始使用，生成额度和高级功能规则会变化。
- Unsplash / Pexels: 适合找真实照片，不是生图工具。

正式商用或公开发布前，请检查每个平台当时的授权条款。

## Firebase 文字雲

文字雲頁題目是：

```text
你使用 HTML 取代 Markdown 的理由為何？
```

功能：

- 觀眾在輸入框填入理由。
- 送出後寫入 Firestore。
- 頁面即時監聽 Firestore，並用詞頻大小呈現文字雲。
- 若尚未填入 Firebase config，會自動改用本機預覽資料。

請在 `content/firebase-config.js` 填入你的 Firebase Web App config：

```js
window.FIREBASE_CONFIG = {
  apiKey: "你的 apiKey",
  authDomain: "你的 authDomain",
  projectId: "你的 projectId",
  storageBucket: "你的 storageBucket",
  messagingSenderId: "你的 messagingSenderId",
  appId: "你的 appId"
};

window.WORDCLOUD_COLLECTION = "html-markdown-wordcloud";
```

Firestore collection 預設為 `html-markdown-wordcloud`。Web config 本身不是密碼，但 Firestore Rules 才是安全關鍵；公開展示時請限制可寫欄位與資料格式。

## 推荐提示词

用于课程封面背景：

```text
16:9 presentation background, modern classroom workshop, clean composition, dark neutral background, teal and amber accents, no text, no logos, high contrast, professional training material
```

用于概念页插图：

```text
16:9 editorial illustration for a teaching slide, abstract learning system, structured knowledge blocks, clean modern style, no text, no logos
```

用于技术课：

```text
16:9 presentation visual, software architecture diagram feeling, glowing nodes and pathways, realistic depth, dark neutral background, no readable text, no logos
```

## 后续可以继续增强

- 加 `markdown` 到 HTML 的自动生成脚本
- 加课程主题色预设
- 加 GitHub Pages 发布脚本
- 加 Firebase 或 Supabase 实时投票
- 加一键截图和 PDF 导出流程

## 本版主题资料来源

- [CommonMark Spec](https://spec.commonmark.org/): 用于确认 Markdown / CommonMark 的纯文本结构化文档定位。
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/): 用于确认 GFM 基于 CommonMark，并扩展了 GitHub 使用场景。
- [GitHub Docs: Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting): 用于确认 GitHub 中 Markdown 的协作写作场景。
- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/): 用于确认 HTML 是开放 Web 平台的活标准。
- [MDN: HTML basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content): 用于确认 HTML 元素、属性和网页结构的基础定义。
