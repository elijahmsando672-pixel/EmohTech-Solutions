# Deployment Guide

The site is a static single-page app: `pnpm build` emits plain files into `dist/`, and any static host can serve it. There is no backend — inquiries arrive by email, phone or WhatsApp.

| Piece          | Where it runs      | Deploys automatically      |
| -------------- | ------------------ | -------------------------- |
| Frontend (SPA) | Netlify / Vercel / any static host | On every push to `main` |
| CI             | GitHub Actions     | Type-check + build on every push and PR |

---

## 1. Build requirements

| Requirement | Version                          |
| ----------- | -------------------------------- |
| Node.js     | 22 (see `.mise.toml`)            |
| pnpm        | 10                               |

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm build      # -> dist/
```

| Setting          | Value        |
| ---------------- | ------------ |
| Build command    | `pnpm build` |
| Publish / Output | `dist`       |
| Node version     | `22`         |

Hosting platforms detect pnpm automatically from `pnpm-lock.yaml`; if yours does not, set the install command to `pnpm install --frozen-lockfile`.

---

## 2. Netlify

`netlify.toml` is already configured:

```toml
[build]
  base = "."
  command = "pnpm build"
  publish = "dist"
```

1. Push the repo to GitHub.
2. On [netlify.com](https://netlify.com): **Add new site → Import an existing project** → connect `EmohTech-Solutions`.
3. Leave the build fields as detected (or set them from the table above).
4. Deploy — you get a URL like `https://emohtech.netlify.app`.

The SPA redirect in `netlify.toml` and the equivalent `public/_redirects` file both rewrite unknown paths to `/index.html`.

---

## 3. Vercel

`vercel.json` is already configured:

```json
{
  "framework": "vite",
  "buildCommand": "pnpm build",
  "outputDirectory": "dist"
}
```

1. On [vercel.com](https://vercel.com): **New Project** → import the repo.
2. Framework preset: Vite. Leave the build/output fields as detected.
3. Deploy.

---

## 4. Any other static host

Build locally and upload the contents of `dist/`:

```bash
pnpm build
# then upload dist/ to your host
```

Make sure the host serves `dist/index.html` for unknown paths.

### Environment variables

Only needed when hosting behind a sub-path or a custom runtime:

| Variable                 | Purpose                                                        |
| ------------------------ | -------------------------------------------------------------- |
| `FIGMA_PUBLIC_URL`       | Sub-path to host under, e.g. `/emohtech` — becomes the Vite `base` |
| `PORT`                   | Dev/preview server port (default `8443`)                        |
| `FIGMA_DEV_SERVER_HOST`  | Dev server bind address (default `0.0.0.0`)                     |

None of these are required for a root-domain static deploy.

---

## 5. Git LFS

Images are tracked with Git LFS (`.gitattributes`). Install it before cloning or committing:

```bash
git lfs install
git lfs pull
```

LFS objects needed by the site: `public/logo.png`, `public/apple-touch-icon.png`, `public/favicon-*.png`. A clone without LFS will contain pointer files and the images will not render.

---

## 6. Custom domain

1. Point your domain's DNS at the host (CNAME for Netlify/Vercel, or the host's nameservers).
2. Add the domain in the host dashboard and let it issue TLS.
3. Update the canonical URLs in `public/sitemap.xml` and `public/robots.txt` to the live domain.
4. Set the page title/description in `.figma/make/site.json`.

---

## 7. Continuous integration

`.github/workflows/ci.yml` runs on every push and pull request:

1. `pnpm install --frozen-lockfile`
2. `pnpm typecheck`
3. `pnpm build`

Netlify and Vercel build from the same repository, so a green CI run means the deploy will succeed. No secrets are required.

---

## Troubleshooting

| Symptom                              | Fix                                                                 |
| ------------------------------------ | ------------------------------------------------------------------- |
| Images missing after a fresh clone  | Install Git LFS and run `git lfs pull`                               |
| 404 on refresh of a deep link       | Add the SPA rewrite to `/index.html` (`netlify.toml`, `_redirects`) |
| Build fails with a Node version error| Set the host's Node version to 22                                    |
| Old copy still live                  | `pnpm build` locally, confirm the section text, then force-push/rebuild |
| Contact links do nothing            | Confirm the `mailto:`/`tel:`/`wa.me` values in `src/App.tsx` `contact` |
| Deploy did not run                   | Check the host dashboard for a failed build and its log             |