/**
 * Resolves API URLs against an optional external API host.
 *
 * By default requests are relative ("/api/..."), which works in local dev
 * (Vite proxies to the server) and when the server also serves the built
 * client. When the backend is hosted separately from a static frontend
 * (Netlify, Vercel, Cloudflare Pages, etc.), set VITE_API_URL to the API
 * origin, e.g. VITE_API_URL=https://api.emohtech.co.ke
 */
const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

export function apiUrl(path) {
  return `${API_BASE}${path}`;
}
