# GameTech Experience

GameTech Peshawar website with **GameTech AI** PC consultant.

## What it does

- Landing page with reviews and contact
- GameTech OS-style dashboard
- Guided consultation → AI PC recommendation
- WhatsApp handoff for final market quotation

## Setup (local)

1. Copy the example env and add your OpenRouter key:

```bash
cp .env.example .env
```

Edit `.env`:

```
OPENROUTER_API_KEY=sk-or-v1-your_real_key_here
OPENROUTER_MODEL=nvidia/nemotron-3.5-lightning:free
PORT=3000
```

2. Install and run:

```bash
npm install
npm start
```

3. Open:

- http://127.0.0.1:3000/
- http://127.0.0.1:3000/pages/gt-ai.html
- http://127.0.0.1:3000/pages/dashboard.html

The same Node process serves the website **and** the AI API.

## Remote AI (GitHub Pages / public visitors)

1. On the machine running `npm start`, create a tunnel:

```bash
cloudflared tunnel --url http://127.0.0.1:3000
```

2. Copy the `https://….trycloudflare.com` URL.

3. Paste it into `pages/gt-ai.html`:

```js
window.GAME_TECH_API = "https://your-tunnel.trycloudflare.com";
```

4. When the host is offline, leave it empty (`""`). The UI will show an offline message + WhatsApp fallback.

## API

- `GET /api/health` — status
- `POST /recommend` — body: `{ "consultation": { ... } }`
- `POST /chat` — body: `{ "messages": [ ... ] }`

## Notes

- Recommendations use OpenRouter. Free models can take 15–45+ seconds and are not fully deterministic.
- Temperature is set to `0` for more stable builds.
- Live store price search is intentionally not included; GameTech confirms final prices on WhatsApp.
- **Never commit your real `.env` file.**
- Rotate any key that was previously exposed.

## Security checklist

- [ ] Real `OPENROUTER_API_KEY` only in local `.env` (gitignored)
- [ ] No real keys in HTML/JS
- [ ] Tunnel URL updated only when the host is online
