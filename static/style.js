(function () {
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap";
  document.head.appendChild(fontLink);

  const style = document.createElement("style");
  style.textContent = `
    :root {
      --bg: #f5f5f7;
      --card: #ffffff;
      --text: #1d1d1f;
      --text-dim: #86868b;
      --accent: #0066cc;
      --border: rgba(0, 0, 0, 0.1);
    }

    body {
      margin: 0; padding: 0; min-height: 100vh;
      font-family: 'Inter', sans-serif;
      background-color: var(--bg); color: var(--text);
      display: flex; align-items: center; justify-content: center;
    }

    .container {
      width: 90vw; max-width: 800px; background: var(--card);
      border-radius: 28px; box-shadow: 0 4px 24px rgba(0,0,0,0.04);
      overflow: hidden; padding-bottom: 20px;
    }

    .header { padding: 40px; text-align: center; }
    .logo { font-size: 32px; font-weight: 600; margin-bottom: 5px; }

    .word-row {
      display: flex; gap: 15px; margin-bottom: 12px; justify-content: center;
    }

    .input-vocab {
      padding: 12px 18px; width: 40%; border-radius: 12px;
      border: 1px solid var(--border); background: #fafafa;
      font-family: inherit; font-size: 15px; transition: all 0.2s;
    }

    .input-vocab:focus {
      outline: none; border-color: var(--accent); background: #fff;
    }

    /* Flashcard Style */
    .flashcard {
      width: 300px; height: 200px; position: relative;
      transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .flashcard.flipped { transform: rotateY(180deg); }

    .flashcard-front, .flashcard-back {
      position: absolute; width: 100%; height: 100%;
      backface-visibility: hidden; display: flex; align-items: center;
      justify-content: center; font-size: 24px; font-weight: 500;
      border-radius: 24px; border: 1px solid var(--border);
      box-shadow: 0 10px 20px rgba(0,0,0,0.05); background: white;
      padding: 20px; text-align: center;
    }

    .flashcard-back { transform: rotateY(180deg); background: var(--accent); color: white; }

    .posts-button, .download-button {
      border-radius: 980px; padding: 12px 25px; cursor: pointer;
      font-weight: 500; border: none; transition: 0.3s; text-decoration: none;
    }

    .posts-button { background: #e8e8ed; color: var(--text); }
    .download-button { background: var(--text); color: white; }
    .download-button:hover { transform: scale(1.02); }
  `;
  document.head.appendChild(style);
})();
