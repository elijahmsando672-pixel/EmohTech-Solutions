# figma-make-app

React + Vite + Tailwind CSS project running inside Figma Make. It serves the EmohTech Solutions single-page site.

## Development Server

A Vite development server is **already running** on `$PORT` (default 8443). You don't need to start it manually.

- Preview URL: The user can access the running app through the preview panel
- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - The entire page: `Icon` component, all site content as typed data arrays, and the section markup
- `src/index.css` - Design tokens plus every component style, and the Tailwind CSS v4 import
- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the dev, build, preview, typecheck and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and Figma Make plugins plus the `@` alias for `src`
- `.mise.toml` - Toolchain versions for Node.js and pnpm
- `.figma/make/site.json` - Page title and meta description
- `public/logo.png` - Brand logo (Git LFS), rendered by `.brand-logo`

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.9, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

Tailwind CSS v4 is available through `@tailwindcss/vite` and imported in `src/index.css`, but **components use plain class names defined in that file** — not Tailwind utilities in JSX. Keep it that way: add a class to the markup, then style it in `src/index.css`.

- Design tokens are CSS custom properties on `:root` (`--ink`, `--ink-soft`, `--lime`, `--cream`, `--muted`, `--line`); reuse them instead of hardcoding colors.
- Section classes follow a flat naming scheme (`.hero`, `.services`, `.service-card`, `.contact-grid`); BEM-ish suffixes (`.service-card`, `.faq-item`, `.stack-chip`) are used for element variants.
- Responsive rules live in the `@media` blocks at the bottom of `src/index.css`; keep new rules out of inline styles.
- Font wiring (Google Fonts `@import`) stays at the very top of the file, before `@import "tailwindcss"`.

## Editing Content

Copy and data are typed arrays at the top of `src/App.tsx` (`services`, `projects`, `testimonials`, `faqs`, `processSteps`, `stats`, `contact`, `founder`, …). Change the data, not the markup, for copy updates. Page title and description live in `.figma/make/site.json`.

Icons are inline SVG: to add one, extend the `IconName` union and add its paths to the `paths` record in the `Icon` component.

## Code quality

- Run `pnpm typecheck` and `pnpm build` before calling work done; CI does the same.
- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.
- Do not add code comments.
- Images belong in `public/` and are tracked with Git LFS.