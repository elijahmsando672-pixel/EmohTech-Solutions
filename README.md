# EmohTech Solutions

**Software. Automation. Digital Solutions.**

EmohTech Solutions is a Kenyan software development company (Nairobi, Kenya) building websites, WhatsApp AI chatbots, automation systems, payment integrations, and custom business software for small businesses, schools, and startups.

## Tech Stack

- **Client** – React 18, Vite, Tailwind CSS, react-router, lucide-react
- **Server** – Node.js, Express, JWT auth, bcryptjs
- **Database** – Microsoft SQL Server (`mssql`) with an in-memory fallback when the DB is unreachable

## Project Structure

```
├── client/   # React + Vite frontend (src/config/site.js holds all editable site content)
├── server/   # Express API (contact messages, inquiries, admin auth)
│   └── database/schema.sql  # SQL Server schema
└── package.json  # Root scripts for setup / dev / build
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- (Optional) Microsoft SQL Server — the server falls back to in-memory storage without it

### 1. Install dependencies

```bash
npm run setup
```

### 2. Configure the server

```bash
cd server
cp .env.example .env   # then edit with your real values
```

The site works out of the box with the in-memory fallback. To enable SQL Server:

1. Run `server/database/schema.sql` against your instance (or let the API create tables on startup).
2. Set `ENABLE_MSSQL=true` and your connection details in `.env`.

### 3. Run in development

```bash
npm run dev
```

- Client (Vite): http://localhost:5173
- API: http://localhost:5000 (Vite proxies `/api` to the server)

### 4. Production build (single-server deployment)

```bash
npm run build   # builds the client into client/dist
npm start       # server serves the built client + API
```

## Scripts

| Command          | Description                                |
| ---------------- | ------------------------------------------ |
| `npm run setup`  | Install deps for client and server         |
| `npm run dev`    | Run client and server concurrently         |
| `npm run dev:client` | Run Vite dev server only               |
| `npm run dev:server` | Run API only (watch mode)              |
| `npm run build`  | Build the client                           |
| `npm start`      | Start the API (serves built client too)    |
| `npm test`       | Run server tests                           |
| `npm run lint`   | Lint client code                           |

## Configuration

All company content (name, contact details, services, socials, stats) is editable in one file: [client/src/config/site.js](client/src/config/site.js).

## Deployment

The frontend is a static SPA and can be hosted anywhere. Config files are included for:

- **Netlify** – `netlify.toml` (base `client`, publish `dist`, SPA redirect) plus `client/public/_redirects` as a portable fallback.
- **Vercel** – `vercel.json` (framework Vite, root `client`).

Build settings, if configuring manually:

| Setting         | Value            |
| --------------- | ---------------- |
| Base / Root dir | `client`         |
| Build command   | `npm run build`  |
| Publish / Output| `dist`           |

The SPA needs a rewrite of all routes to `/index.html` (already configured above).

### API hosting

The Express API in `server/` runs anywhere Node runs (Render, Railway, Fly.io, a VPS). Set the client's `VITE_API_URL` environment variable to the API origin so the contact and inquiry forms reach it, e.g. `VITE_API_URL=https://api.emohtech.co.ke`. Leave it empty when the API serves the built client itself.

## License

Private project.