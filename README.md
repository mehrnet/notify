# Mehr Notify (`notify.mehrnet.com`)

The official web portal and documentation for **Mehr Notify** — a real-time, multi-channel notification relay network for the Mehrnet ecosystem.

- **Live URL**: [https://notify.mehrnet.com](https://notify.mehrnet.com)
- **Telegram Bot**: [@MehrNotifyBot](https://t.me/MehrNotifyBot)
- **Email Ingestion**: `notify@mehrnet.com`
- **Backend API**: `https://notify-api.mehrnet.com`

---

## ✨ Features

- **Gateway-Style Header**: 3-column responsive layout with adaptive navigation links and a mobile bottom navigation bar (`.bottom-nav`).
- **3 Yellow-Based Themes**:
  - `dark` (Default): `#0c0f12` background with `#FFC107` accent.
  - `black`: `#000000` pure OLED background with `#FFD54F` bright yellow accent.
  - `light`: `#fdfbf7` clean warm background with `#d97706` amber accent.
- **Bilingual & RTL**: Seamless toggle between English (LTR) and Persian (RTL with Vazirmatn typography).
- **Bot Documentation & Live Previews**: Interactive guides for both Telegram and Email bots with practical examples and copyable command snippets.
- **Unified Command System**: Consistent `/sub`, `/unsub`, and `/subscriptions` syntax across all channels.
- **Zero Framework Overhead**: Ultra-fast, lightweight vanilla HTML5, CSS3, and JavaScript hosted on Cloudflare Workers static assets.

---

## 🚀 Deployment

Deployed automatically to Cloudflare Workers via Wrangler:

```bash
# Preview locally
bunx wrangler dev

# Deploy to notify.mehrnet.com
bunx wrangler deploy
```

---

## 📄 License

Proprietary © [Mehrnet](https://mehrnet.com). All rights reserved.
