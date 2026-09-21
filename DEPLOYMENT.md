# Deployment Guide

Deployment is fully automated once the steps below are done once:

| Piece            | Where it runs            | Deploys automatically            |
| ---------------- | ------------------------ | -------------------------------- |
| Frontend (SPA)   | Netlify                  | On every push to `main`          |
| Backend (API)    | Render (or Railway/VPS)  | On every push touching `server/` (GitHub Actions) |

---

## 1. Backend environment variables

Set these on the host (never commit `.env`). See `server/.env.example`.

| Variable               | Example value                          | Notes                                   |
| ---------------------- | -------------------------------------- | --------------------------------------- |
| `PORT`                 | `5000`                                 | Host usually provides this              |
| `CLIENT_ORIGIN`        | `https://emohtech.netlify.app`         | Exact site origin — CORS whitelist (no trailing slash) |
| `ADMIN_USERNAME`       | `<your-admin-user>`                    | Login for `POST /api/auth/login`        |
| `ADMIN_PASSWORD`       | `<strong-password>`                    | —                                       |
| `JWT_SECRET`           | `<long-random-string>`                 | e.g. `openssl rand -hex 32`             |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | —     | SMTP relay (Gmail app password, Brevo, Mailgun, …). Leave blank to disable email |
| `SMTP_FROM`            | `EmohTech <no-reply@yourdomain.com>`   | Sender address                          |
| `NOTIFY_TO`            | `elijahmsando672@gmail.com`            | Where submission emails go              |

### Database (recommended for production)

Without settings the API uses **in-memory storage — data resets on every restart**. For persistence:

1. Provision **Azure SQL Database** (or SQL Server on a VPS).
2. Set `ENABLE_MSSQL=true` and the `MSSQL_*` variables.
3. Tables auto-create on startup (`database/schema.sql` is the source of truth). Existing tables get the `status` column added automatically.

---

## 2. Deploy the backend to Render

1. Push the repo to GitHub.
2. On [render.com](https://render.com): **New → Web Service** → connect the `EmohTech-Solutions` repo.
3. Configure:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Add the environment variables from section 1.
5. Deploy — you'll get a URL like `https://emohtech-api.onrender.com`.

**Alternatives:**
- **Railway** — new project, service root `server`, start `npm start`. Set the same env vars.
- **VPS** — Node 20+, `cd server && npm install && npm start` under PM2/systemd.

---

## 3. Point the Netlify frontend at the API

Netlify reads `VITE_API_URL` at **build time**:

- **Netlify → Site settings → Environment variables** → add:
  ```
  VITE_API_URL=https://emohtech-api.onrender.com
  ```
- Rebuild/republish the site.

`client/src/utils/api.js` uses `VITE_API_URL` and falls back to same-origin `/api` when empty — no code changes.

---

## 4. Verify

```bash
# Health
curl https://emohtech-api.onrender.com/api/health

# Submit an inquiry → expect 201 + a notification email
curl -X POST https://emohtech-api.onrender.com/api/inquiries \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"you@test.com","phone":"+254700000000","service":"Website","budget":"KSh 100,000+","details":"Test"}'

# Login → copy TOKEN
curl -X POST https://emohtech-api.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"<admin>","password":"<password>"}'

# List inquiries
curl https://emohtech-api.onrender.com/api/inquiries -H "Authorization: Bearer TOKEN"

# Update an inquiry status (new → contacted → archived)
curl -X PUT https://emohtech-api.onrender.com/api/inquiries/1/status \
  -H "Authorization: Bearer TOKEN" -H "Content-Type: application/json" \
  -d '{"status":"contacted"}'
```

Also submit a real form on `https://emohtech.netlify.app/` and check the Network tab:
request hits the Render URL, returns `201`, no CORS errors. If CORS fails, the `CLIENT_ORIGIN` value doesn't exactly match the site origin.

---

## 5. Continuous integration & auto-deploy

GitHub Actions workflows live in `.github/workflows/`:

- **`ci.yml`** — runs server tests + client build/lint on every push and PR. No setup needed.
- **`deploy-api.yml`** — triggers a Render deploy whenever `server/` changes on `main`. To enable:
  1. In Render: **Account Settings → API Keys** → create a key.
  2. In GitHub repo: **Settings → Secrets and variables → Actions** → add `RENDER_API_KEY` (the API key) and `RENDER_SERVICE_ID` (find it via the Render API key endpoint, or the service ID in your Render dashboard URL).

Once those secrets exist, `git push` deploys the API automatically.

---

## Troubleshooting

| Symptom                        | Fix                                              |
| ------------------------------ | ------------------------------------------------ |
| Forms fail with CORS errors    | Set `CLIENT_ORIGIN` to the exact site origin (no trailing slash) and redeploy |
| API works, no emails received  | Add `SMTP_*` + `NOTIFY_TO`, verify the relay allows the "from" address |
| Data disappears after restart  | Configure a real database (`ENABLE_MSSQL=true` + `MSSQL_*`) |
| `401 Invalid credentials`      | Wrong `ADMIN_USERNAME`/`ADMIN_PASSWORD` on the host |
| API deploy never triggers      | Add `RENDER_API_KEY` + `RENDER_SERVICE_ID` secrets |