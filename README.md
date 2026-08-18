# GameTech Experience

GameTech Peshawar website with **GameTech AI** PC consultant.

## What it does

- Landing page with reviews and contact
- GameTech OS-style dashboard
- Guided consultation → AI PC recommendation
- WhatsApp handoff for final market quotation

## Setup

1. Copy env file and add your key:

```bash
cp .env.example .env
```

Edit `.env`:

```
OPENROUTER_API_KEY=your_real_key
OPENROUTER_MODEL=nvidia/nemotron-3-ultra-550b-a55b:free
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

## API

- `GET /api/health` — status
- `POST /recommend` — body: `{ "consultation": { ... } }`
- `POST /chat` — body: `{ "messages": [ ... ] }`

## Notes

- Recommendations use OpenRouter. Free models can take 15–45+ seconds and are not fully deterministic.
- Temperature is set to `0` for more stable builds.
- Live store price search is intentionally not included; GameTech confirms final prices on WhatsApp.
- Never commit your real `.env` file.
