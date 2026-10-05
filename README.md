# EmohTech Solutions

**Software. Automation. Digital Solutions.**

Single-page marketing site for EmohTech Solutions, a Kenyan software development company (Nairobi, Kenya) building websites, WhatsApp AI chatbots, automation systems, payment integrations and custom business software for small businesses, schools and startups.

## Tech Stack

- **Runtime** – React 19, React DOM 19, TypeScript 5.9
- **Build** – Vite 8 with `@vitejs/plugin-react`
- **Styling** – hand-written CSS in `src/index.css` on Tailwind CSS v4 (`@tailwindcss/vite`), DM Sans + Manrope
- **Tooling** – pnpm, oxfmt, Git LFS for images

## Project Structure

```
├── src/
│   ├── App.tsx        # Whole page: header, hero, sections, footer + all site content as data arrays
│   ├── index.css      # Design tokens and every component style
│   └── main.tsx       # React entrypoint
├── public/            # Static assets: logo.png, favicons, robots.txt, sitemap.xml
├── .figma/make/       # Figma Make config: site title/description, dev-server scripts
├── index.html         # HTML shell that mounts src/main.tsx
└── vite.config.ts     # Vite + React + Tailwind + Figma Make plugins
```

## Getting Started

### Prerequisites

- Node.js 22 (see `.mise.toml`)
- pnpm 10

### Install and run

```bash
pnpm install
pnpm dev
```

The dev server runs on `$PORT` (default **8443**) — http://localhost:8443

### Production build

```bash
pnpm build     # outputs to dist/
pnpm preview   # serves dist/ locally
```

## Scripts

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `pnpm dev`        | Start the Vite dev server                      |
| `pnpm build`      | Production build into `dist/`                  |
| `pnpm preview`    | Serve the production build locally            |
| `pnpm typecheck`  | Type-check with `tsc --noEmit`                 |
| `pnpm format`     | Format the repo with oxfmt                     |

## Editing The Site

All copy and data live at the top of `src/App.tsx` as typed arrays — edit these and the UI updates:

| Constant         | Contents                                             |
| ---------------- | ---------------------------------------------------- |
| `navLinks`       | Header navigation                                    |
| `stats`          | Headline numbers (projects, clients, hours, support) |
| `services`       | The six services with copy and feature tags          |
| `whyUs`          | "Why EmohTech" points                                |
| `techStack`      | Technology chips                                     |
| `processSteps`   | Four-step process                                    |
| `projects`       | Portfolio projects with results                      |
| `testimonials`   | Client quotes                                        |
| `faqs`           | FAQ entries (accordion)                              |
| `capabilities`   | Capability checklist                                 |
| `contact`        | Email, phones, WhatsApp link, location, hours        |
| `founder`        | Founder name, role and bio                           |

Page `<title>` and meta description come from `.figma/make/site.json`.

### Project Screenshots

Each Selected Work card shows a hand-built SVG interface mockup (`ProjectVisual` and the
`Mock*` components in `src/App.tsx`) that matches what that project actually does. To
replace a mockup with a real screenshot, save the image as `public/work/<slug>.png` using
the project's `slug` field:

| Project                     | Drop-in path                          |
| --------------------------- | ------------------------------------- |
| Savannah Fresh              | `public/work/savannah-fresh-foods.png` |
| EduManager                  | `public/work/edu-manager.png`         |
| FikaShops                   | `public/work/fika-ai-support.png`     |
| Twende Tours                | `public/work/twende-tours.png`        |
| Zawadi Creatives            | `public/work/zawadi-creatives.png`    |
| KilimoTrack                 | `public/work/kilimo-track.png`        |

The card picks the PNG up automatically and falls back to the SVG mockup when the file is
missing, so cards can be filled in one at a time. Screenshots are cropped to 2:1 with the
top edge preserved, so use wide captures (around 1600×800). Images are tracked with Git LFS,
so run `git lfs install` once before committing new ones.

## Design System

Tokens are CSS custom properties at the top of `src/index.css`:

| Token         | Value     | Usage                                  |
| ------------- | --------- | -------------------------------------- |
| `--ink`       | `#0b1933` | Dark surfaces: hero, footer, stat band |
| `--ink-soft`  | `#172642` | Secondary dark surfaces                |
| `--lime`      | `#c9fa63` | Primary accent: buttons, icons, marks  |
| `--cream`     | `#f7f7f2` | Page background                        |
| `--muted`     | `#667085` | Body copy on light surfaces            |
| `--line`      | ink @ 13% | Hairline borders                       |

Brand mark: `public/logo.png` (Git LFS), rendered by `.brand-logo` in the header and footer.

Components use plain class names styled in `src/index.css` — no Tailwind utility classes in JSX. Icons are inline SVG paths in the `Icon` component at the top of `src/App.tsx`; add a name to `IconName` and the `paths` record to introduce a new one.

## Contact Handling

The site is fully static — there is no backend and no form service. Enquiries are collected by
the project brief form at the bottom of the contact section (`ProjectBrief` in `src/App.tsx`).
Visitors fill in a name plus optional contact details, service, budget and notes, then choose
how to send it:

- **Copy brief** — writes the composed message to the clipboard and confirms it. If the browser blocks clipboard access, the message is revealed in a read-only field so it can still be copied by hand.
- **Send on WhatsApp** — opens `https://wa.me/254717732274` with the brief prefilled.
- **Open in mail app** — a `mailto:` link with subject and body prefilled. Least reliable of the three, because sandboxed previews and machines with no mail client silently ignore `mailto:`.

The send options stay disabled until a name is entered. Because nothing is stored or transmitted by the site itself, no email service or API key is needed. Direct channels remain as cards in the same section: email (click to copy), phone (`tel:`) and WhatsApp.

The "Start a project" and "Start a conversation" calls to action scroll to the brief and focus its first field, so they always produce visible on-page behaviour instead of depending on an external protocol handler.

## Deployment

The site builds to plain static files in `dist/` and can be hosted anywhere. See [DEPLOYMENT.md](DEPLOYMENT.md) for Netlify, Vercel and generic static hosts, custom domains, and troubleshooting.

| Setting          | Value         |
| ---------------- | ------------- |
| Build command    | `pnpm build`  |
| Publish / Output | `dist`        |

CI (`.github/workflows/ci.yml`) runs `pnpm typecheck` and `pnpm build` on every push and pull request.

## License

Private project.