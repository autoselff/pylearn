(function () {
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap";
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

    html, body {
      margin: 0;
      padding: 0;
      min-height: 100%;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      display: flex;
      justify-content: center;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    .marquee {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: saturate(180%) blur(20px);
      color: var(--text);
      white-space: nowrap;
      overflow: hidden;
      z-index: 9999;
      font-size: 12px;
      font-weight: 500;
      border-bottom: 0.5px solid var(--border);
      padding: 8px 0;
    }

    .marquee-text {
      display: inline-block;
      padding-left: 100%;
      animation: scroll-left 30s linear infinite;
    }

    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }

    .container {
      width: 90vw;
      max-width: 980px;
      background: var(--card);
      margin: 80px 20px;
      border-radius: 28px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 24px rgba(0,0,0,0.04);
      overflow: hidden;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .header, .footer {
      padding: 60px 40px;
      text-align: center;
    }

    .logo {
      font-size: 40px;
      font-weight: 600;
      letter-spacing: -0.5px;
      margin-bottom: 10px;
    }

    .nav a, .footer a {
      color: var(--accent);
      text-decoration: none;
      margin: 0 15px;
      font-weight: 400;
      transition: opacity 0.2s ease;
      font-size: 14px;
    }

    .nav a:hover, .footer a:hover {
      opacity: 0.7;
    }

    .section {
      padding: 40px;
      border-top: 0.5px solid var(--border);
    }

    .post {
      padding: 30px;
      border-radius: 20px;
      background: #fafafa;
      margin-bottom: 20px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border: 0.5px solid transparent;
    }

    .post:hover {
      background: #ffffff;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      border-color: var(--border);
      transform: scale(1.01);
    }

    .post-date {
      color: var(--text-dim);
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .post-content {
      font-size: 17px;
      font-weight: 400;
      color: var(--text);
    }

    .post-image {
      width: 100%;
      height: auto;
      border-radius: 14px;
      margin: 20px 0;
    }

    .download-button, .posts-button {
      background: var(--text);
      color: #fff;
      border: none;
      border-radius: 980px;
      padding: 12px 24px;
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .download-button:hover, .posts-button:hover {
      background: #424245;
      transform: scale(1.05);
    }

    .game-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .game-buttons img {
      border-radius: 20px;
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .game-buttons img:hover {
      transform: scale(1.04);
    }

    .iframe-container {
      border-radius: 20px;
      overflow: hidden;
      background: #000;
    }

    .post-tag {
      font-size: 11px;
      padding: 4px 10px;
      background: #e8e8ed;
      color: var(--text-dim);
      border-radius: 4px;
      margin-right: 6px;
    }

    @media (max-width: 768px) {
      .container { margin: 60px 10px; border-radius: 0; width: 100vw; }
      .header, .section { padding: 30px 20px; }
      .logo { font-size: 28px; }
    }
  `;
  document.head.appendChild(style);
})();
