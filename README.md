# EmohTech Solutions

**Software. Automation. Digital Solutions.**

EmohTech Solutions is a Kenyan software development company (Nairobi, Kenya) building websites, WhatsApp AI chatbots, automation systems, payment integrations, and custom business software for small businesses, schools, and startups.

## Tech Stack

- **Client** – React 18, Vite, Tailwind CSS, react-router, lucide-react
- **Design system** – Dark-first studio brand (Manrope + Inter, cyan `#00E5FF` / purple `#7C3AED`), Tailwind class-based dark mode
- **Server** – Node.js, Express, JWT auth, bcryptjs, rate limiting (`express-rate-limit`), email notifications (`nodemailer`)
- **Database** – Microsoft SQL Server (`mssql`) with an in-memory fallback when the DB is unreachable

## Project Structure

```
├── client/   # React + Vite frontend (src/config/site.js holds all editable site content)
├── server/   # Express API (contact messages, inquiries, admin auth)
│   └── database/schema.sql  # SQL Server schema
├── .github/workflows/  # CI + Render auto-deploy workflows
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

## Analytics

The client ships with a provider-agnostic tracking hook in `client/src/lib/analytics.js`. To wire a real analytics service, define `window.emohtechTrack(payload)` before React mounts, e.g.:

```js
window.emohtechTrack = ({ event, ...data }) => gtag("event", event, data);
```

Events tracked by the site:

| Event                 | When                                          |
| --------------------- | --------------------------------------------- |
| `start_project_click` | "Start a Project" CTAs                        |
| `whatsapp_click`      | WhatsApp links                                |
| `email_click`         | `mailto:` links                               |
| `contact_form_start`  | First interaction with the project form       |
| `contact_form_submit` | Successful project form submission            |

## Deployment

Production architecture (see [DEPLOYMENT.md](DEPLOYMENT.md) for the full walkthrough, verification steps, and troubleshooting):

- **Frontend** – static SPA on **Netlify** → `https://emohtech.netlify.app`
- **API** – Express server on **Render** → `https://emohtech-api.onrender.com`
- **CI/CD** – GitHub Actions runs tests + lint on every push (`ci.yml`), and `deploy-api.yml` auto-redeploys the API on Render whenever `server/**` changes

### GitHub secrets (for the API auto-deploy workflow)

| Secret              | Where to get it                              |
| ------------------- | -------------------------------------------- |
| `RENDER_API_KEY`    | Render dashboard → Account → API keys        |
| `RENDER_SERVICE_ID` | Render Service ID from the service URL (`srv-...`) |

### API environment variables (production)

Set these on the Render service (Dashboard → service → **Environment**):

| Variable                              | Purpose                                       |
| ------------------------------------- | --------------------------------------------- |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD`   | Admin login credentials                       |
| `JWT_SECRET`                          | Secret for signing admin tokens               |
| `SMTP_HOST/PORT/USER/PASS/FROM`       | SMTP server for submission notification email |
| `NOTIFY_TO`                           | Email address that receives submissions       |
| `CLIENT_ORIGIN`                       | CORS origin, e.g. `https://emohtech.netlify.app` |

### Wiring the frontend to the API

Production builds **default to the hosted API automatically** (`client/src/utils/api.js`), so no frontend environment variable is required. To point the frontend at a different API origin, set `VITE_API_URL` at build time on Netlify, e.g. `VITE_API_URL=https://api.emohtech.co.ke`.

The API rate-limits public form submissions (10/15 min) and login (5/15 min) per IP, and can email you on every new submission via SMTP. Inquiries support a status workflow (`new` / `contacted` / `archived`) via `PUT /api/inquiries/:id/status` (admin JWT).

### Manual static hosting

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

## License

Private project.