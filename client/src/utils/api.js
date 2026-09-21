/**
 * Resolves API URLs against the backend origin.
 *
 * Resolution order:
 *  1. VITE_API_URL (explicit override, e.g. for a separately hosted API)
 *  2. The hosted production API — used automatically for production builds so
 *     the live site works even if VITE_API_URL is missing at build time
 *  3. Same-origin "" — used in local dev, where Vite proxies /api to the server
 *
 * The production fallback (like VITE_API_URL) is public, not a secret, and is
 * only baked into `npm run build` output; development builds stay same-origin.
 */
const CONFIGURED_API_URL = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const PRODUCTION_API_URL = "https://emohtech-api.onrender.com";

export const API_BASE =
  CONFIGURED_API_URL || (import.meta.env.PROD ? PRODUCTION_API_URL : "");

export function apiUrl(path) {
  return `${API_BASE}${path}`;
}
