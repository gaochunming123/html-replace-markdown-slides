(function () {
  const deck = window.SLIDE_DECK;
  const container = document.getElementById("slides");

  if (!deck || !Array.isArray(deck.slides)) {
    container.innerHTML = '<section class="slide"><h2>没有找到 content/slides.js</h2></section>';
    return;
  }

  document.title = deck.title || "Enhanced HTML Slides";

  const escapeHtml = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const visualFor = (slide) => {
    if (slide.visual) return slide.visual;
    if (slide.visualKey && deck.visuals?.[slide.visualKey]) return deck.visuals[slide.visualKey];
    return deck.visuals?.default || "";
  };

  const visualBadge = (slide, label = "") => {
    const src = visualFor(slide);
    if (!src) return `<div class="visual-badge visual-fallback">${escapeHtml(label || "HTML")}</div>`;
    return `
      <div class="visual-badge">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(label || slide.title || "slide visual")}" loading="lazy" />
      </div>
    `;
  };

  const topLine = (slide) => `
    <div class="topline">
      ${visualBadge(slide)}
      <div>
        ${slide.kicker ? `<div class="kicker">${escapeHtml(slide.kicker)}</div>` : ""}
        <h2>${escapeHtml(slide.title || "")}</h2>
      </div>
    </div>
  `;

  const renderers = {
    hero(slide) {
      return `
        <section class="slide hero">
          <div class="topline">
            ${visualBadge(slide)}
            <div class="kicker">${escapeHtml(slide.kicker || deck.author || "")}</div>
          </div>
          <h1>${escapeHtml(slide.title || deck.title)}</h1>
          <p class="subtitle">${escapeHtml(slide.subtitle || deck.subtitle || "")}</p>
        </section>
      `;
    },
    impact(slide) {
      return `
        <section class="slide impact-slide">
          <div class="impact-grid">
            <div>
              <div class="topline">
                ${visualBadge(slide)}
                <div class="kicker">${escapeHtml(slide.kicker || "")}</div>
              </div>
              <h1>${escapeHtml(slide.title || deck.title)}</h1>
              <p class="subtitle">${escapeHtml(slide.subtitle || deck.subtitle || "")}</p>
            </div>
            <div class="impact-orbit" aria-hidden="true">
              <div class="orbit-card markdown-card">MD</div>
              <div class="orbit-card html-card">HTML</div>
              <div class="orbit-line"></div>
              <strong>${escapeHtml(slide.stat || "")}</strong>
            </div>
          </div>
        </section>
      `;
    },
    verdict(slide) {
      return `
        <section class="slide verdict-slide">
          ${topLine(slide)}
          <div class="verdict-banner">${escapeHtml(slide.verdict || "")}</div>
          <div class="verdict-points">
            ${(slide.points || []).map((point, index) => `<p><span>0${index + 1}</span>${escapeHtml(point)}</p>`).join("")}
          </div>
        </section>
      `;
    },
    evidence(slide) {
      return `
        <section class="slide evidence-slide">
          ${topLine(slide)}
          <div class="evidence-kicker">${escapeHtml(slide.kicker || "")}</div>
          <div class="evidence-grid">
            ${(slide.claims || [])
              .map(
                (claim) => `
                  <article class="evidence-card">
                    <div class="source-pill">${escapeHtml(claim.source)}</div>
                    <h3>${escapeHtml(claim.headline)}</h3>
                    <p>${escapeHtml(claim.text)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    },
    battle(slide) {
      const side = (data, className) => `
        <article class="battle-side ${className}">
          <div class="battle-label">${escapeHtml(data.label)}</div>
          <h3>${escapeHtml(data.headline)}</h3>
          <ul>
            ${(data.bullets || []).map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
          </ul>
        </article>
      `;
      return `
        <section class="slide battle-slide">
          ${topLine(slide)}
          <div class="battle-grid">
            ${side(slide.left || {}, "battle-left")}
            <div class="versus">VS</div>
            ${side(slide.right || {}, "battle-right")}
          </div>
        </section>
      `;
    },
    matrix(slide) {
      return `
        <section class="slide matrix-slide">
          ${topLine(slide)}
          <div class="decision-table">
            ${(slide.rows || [])
              .map(
                (row) => `
                  <div class="decision-row">
                    <strong>${escapeHtml(row[0])}</strong>
                    <span>${escapeHtml(row[1])}</span>
                    <em>${escapeHtml(row[2])}</em>
                  </div>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    },
    workflow(slide) {
      return `
        <section class="slide workflow-slide">
          ${topLine(slide)}
          <div class="workflow-track">
            ${(slide.steps || [])
              .map(
                (step, index) => `
                  <article class="workflow-step">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <h3>${escapeHtml(step.label)}</h3>
                    <p>${escapeHtml(step.text)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    },
    agenda(slide) {
      return `
        <section class="slide">
          ${topLine(slide)}
          <ul class="agenda-list">
            ${(slide.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </section>
      `;
    },
    cards(slide) {
      return `
        <section class="slide">
          ${topLine(slide)}
          <div class="card-grid">
            ${(slide.cards || [])
              .map(
                (card) => `
                  <article class="info-card">
                    <div class="card-icon">${escapeHtml(card.icon || "•")}</div>
                    <h3>${escapeHtml(card.title)}</h3>
                    <p>${escapeHtml(card.text)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    },
    quote(slide) {
      return `
        <section class="slide">
          ${topLine(slide)}
          <div class="quote-box">
            <blockquote>${escapeHtml(slide.quote)}</blockquote>
            ${slide.byline ? `<p>${escapeHtml(slide.byline)}</p>` : ""}
          </div>
        </section>
      `;
    },
    poll(slide, index) {
      return `
        <section class="slide" data-poll="${index}">
          ${topLine(slide)}
          <p class="body-text">${escapeHtml(slide.question || "")}</p>
          <div class="poll-options">
            ${(slide.options || [])
              .map(
                (option, optionIndex) => `
                  <button class="poll-button" type="button" data-option="${optionIndex}">
                    <span>${escapeHtml(option)}</span>
                    <span class="poll-bar"><span class="poll-fill"></span></span>
                    <strong class="poll-count">0</strong>
                  </button>
                `
              )
              .join("")}
          </div>
          <button class="reset-button" type="button" data-reset-poll>重置</button>
        </section>
      `;
    },
    wordcloud(slide, index) {
      return `
        <section class="slide" data-wordcloud="${index}" data-firebase="${slide.firebase ? "true" : "false"}">
          ${topLine(slide)}
          <p class="body-text">${escapeHtml(slide.prompt || "")}</p>
          <form class="wordcloud-form">
            <input aria-label="${escapeHtml(slide.inputLabel || "文字雲輸入")}" name="word" autocomplete="off" placeholder="${escapeHtml(slide.placeholder || "請輸入理由")}" maxlength="32" />
            <button type="submit">送出</button>
          </form>
          <div class="wordcloud-status" role="status">正在連線文字雲資料...</div>
          <div class="wordcloud">
            ${(slide.examples || []).map((word) => `<span class="word">${escapeHtml(word)}</span>`).join("")}
          </div>
        </section>
      `;
    },
    slider(slide, index) {
      return `
        <section class="slide" data-slider="${index}">
          ${topLine(slide)}
          <div class="slider-control">
            <div class="slider-labels">
              <span>${escapeHtml(slide.leftLabel || "Before")}</span>
              <span>${escapeHtml(slide.rightLabel || "After")}</span>
            </div>
            <input class="compare-range" type="range" min="0" max="100" value="50" />
            <div class="compare-stage">
              <div class="compare-copy">
                <div>${escapeHtml(slide.leftLabel || "")}</div>
                <div>${escapeHtml(slide.rightLabel || "")}</div>
              </div>
            </div>
          </div>
          <ul class="point-list">
            ${(slide.points || []).map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
          </ul>
        </section>
      `;
    },
    image(slide) {
      const image = slide.image
        ? `<img src="${escapeHtml(slide.image)}" alt="${escapeHtml(slide.title || "slide image")}" />`
        : `<p>${escapeHtml(slide.fallback || "这里可以放本地图片或远程图片。")}</p>`;
      return `
        <section class="slide">
          ${topLine(slide)}
          <p class="body-text">${escapeHtml(slide.body || "")}</p>
          <div class="image-frame">${image}</div>
        </section>
      `;
    },
    closing(slide) {
      return `
        <section class="slide closing">
          <div class="topline">
            ${visualBadge(slide)}
            <div class="kicker">${escapeHtml(deck.author || "")}</div>
          </div>
          <h1>${escapeHtml(slide.title || "谢谢")}</h1>
          <p class="subtitle">${escapeHtml(slide.subtitle || "")}</p>
        </section>
      `;
    }
  };

  container.innerHTML = deck.slides
    .map((slide, index) => (renderers[slide.type] || renderers.cards)(slide, index))
    .join("");

  function initPolls() {
    document.querySelectorAll("[data-poll]").forEach((section) => {
      const pollId = `poll-${section.dataset.poll}`;
      const buttons = [...section.querySelectorAll(".poll-button")];
      const read = () => JSON.parse(localStorage.getItem(pollId) || "[]");
      const write = (votes) => localStorage.setItem(pollId, JSON.stringify(votes));
      const update = () => {
        const votes = read();
        const total = votes.reduce((sum, value) => sum + value, 0) || 1;
        buttons.forEach((button, index) => {
          const count = votes[index] || 0;
          button.querySelector(".poll-count").textContent = String(count);
          button.querySelector(".poll-fill").style.width = `${(count / total) * 100}%`;
        });
      };

      buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
          const votes = read();
          votes[index] = (votes[index] || 0) + 1;
          write(votes);
          update();
        });
      });

      section.querySelector("[data-reset-poll]")?.addEventListener("click", () => {
        localStorage.removeItem(pollId);
        update();
      });

      update();
    });
  }

  function initWordclouds() {
    document.querySelectorAll("[data-wordcloud]").forEach((section) => {
      const cloud = section.querySelector(".wordcloud");
      const form = section.querySelector(".wordcloud-form");
      const status = section.querySelector(".wordcloud-status");
      const slideIndex = section.dataset.wordcloud;
      const useFirebase = section.dataset.firebase === "true";
      const localKey = `wordcloud-${slideIndex}`;
      let saveWord = null;

      const normalize = (value) => value.replace(/\s+/g, " ").trim().slice(0, 32);
      const buildCounts = (words) =>
        words.reduce((counts, word) => {
          const normalized = normalize(word);
          if (!normalized) return counts;
          counts[normalized] = (counts[normalized] || 0) + 1;
          return counts;
        }, {});
      const renderWords = (words) => {
        const counts = buildCounts(words);
        const entries = Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-Hant"));
        cloud.innerHTML = entries
          .map(([word, count], index) => {
            const size = Math.min(64, 24 + count * 9 + (index % 4) * 3);
            const tone = index % 4;
            return `<span class="word tone-${tone}" style="font-size:${size}px" title="${escapeHtml(`${count} 票`)}">${escapeHtml(word)}</span>`;
          })
          .join("");
      };
      const readLocal = () => JSON.parse(localStorage.getItem(localKey) || "[]");
      const writeLocal = (words) => localStorage.setItem(localKey, JSON.stringify(words));
      const setStatus = (text) => {
        if (status) status.textContent = text;
      };

      const startLocal = (reason) => {
        const initial = [...cloud.querySelectorAll(".word")].map((word) => word.textContent);
        if (!localStorage.getItem(localKey)) writeLocal(initial);
        renderWords(readLocal());
        saveWord = async (value) => {
          const words = readLocal();
          words.push(value);
          writeLocal(words);
          renderWords(words);
        };
        setStatus(reason || "目前使用本機預覽資料；填入 Firebase config 後會自動改用 Firestore。");
      };

      const startFirebase = () => {
        const config = window.FIREBASE_CONFIG || {};
        const hasConfig = Boolean(config.apiKey && config.projectId && window.firebase?.firestore);
        if (!useFirebase || !hasConfig) {
          startLocal("目前尚未填入 Firebase config，先使用本機預覽資料。");
          return;
        }

        try {
          const app = window.firebase.apps.length ? window.firebase.app() : window.firebase.initializeApp(config);
          const db = window.firebase.firestore(app);
          const collectionName = window.WORDCLOUD_COLLECTION || "html-markdown-wordcloud";
          const collection = db.collection(collectionName);

          collection.orderBy("createdAt", "desc").limit(200).onSnapshot(
            (snapshot) => {
              const words = snapshot.docs.map((doc) => doc.data().text).filter(Boolean);
              renderWords(words);
              setStatus(`已連線 Firebase：${collectionName}，目前 ${words.length} 筆。`);
            },
            () => startLocal("Firebase 讀取失敗，已切換成本機預覽資料。")
          );

          saveWord = async (value) => {
            await collection.add({
              text: value,
              createdAt: window.firebase.firestore.FieldValue.serverTimestamp(),
              source: "github-pages-slide"
            });
          };
        } catch (error) {
          startLocal("Firebase 初始化失敗，已切換成本機預覽資料。");
        }
      };

      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const input = form.elements.word;
        const value = normalize(input.value);
        if (!value || !saveWord) return;
        input.value = "";
        await saveWord(value);
      });

      startFirebase();
    });
  }

  function initSliders() {
    document.querySelectorAll("[data-slider]").forEach((section) => {
      const range = section.querySelector(".compare-range");
      const stage = section.querySelector(".compare-stage");
      const update = () => stage.style.setProperty("--split", `${range.value}%`);
      range.addEventListener("input", update);
      update();
    });
  }

  Reveal.initialize({
    hash: true,
    controls: true,
    progress: true,
    center: false,
    slideNumber: "c/t",
    transition: "slide",
    plugins: [RevealNotes, RevealMarkdown]
  });

  initPolls();
  initWordclouds();
  initSliders();
})();
