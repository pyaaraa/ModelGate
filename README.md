# ModelGate

A unified AI gateway for accessing and routing requests across multiple LLM providers.

## Prerequisites

- Node.js 22 or newer
- npm 10 or newer
- MongoDB is optional during initial setup; the API starts without it when `MONGODB_URI` is unset.

## Setup

```bash
npm install
cp client/.env.example client/.env
cp server/.env.example server/.env
npm run dev
```

The Vite client runs at `http://localhost:5173` and the API defaults to
`http://localhost:5000`. Check the API with `GET /api/health`.

## Commands

- `npm run dev` — start client and API together
- `npm run dev:client` — start the Vite client
- `npm run dev:server` — start the Express API
- `npm run build` — produce production builds
- `npm run lint` — run ESLint for both workspaces
- `npm run format:check` — verify Prettier formatting
