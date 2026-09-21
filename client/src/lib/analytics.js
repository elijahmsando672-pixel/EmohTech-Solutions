/**
 * Analytics integration point.
 *
 * `track()` is intentionally provider-agnostic. To wire a real analytics
 * service, define a global `window.emohtechTrack(event, data)` handler
 * (e.g. set from gtag/Plausible on page load). Until then, events are
 * only logged to the browser console in development.
 *
 * Events used across the site:
 *   - start_project_click   CTA that leads to a project inquiry
 *   - whatsapp_click        WhatsApp links
 *   - email_click           mailto links
 *   - contact_form_start    First interaction with the project form
 *   - contact_form_submit   Successful project form submission
 */
export function track(event, data = {}) {
  const payload = { event, ...data };

  if (typeof window !== "undefined" && typeof window.emohtechTrack === "function") {
    try {
      window.emohtechTrack(payload);
    } catch (error) {
      if (import.meta.env.DEV) console.warn("[analytics] handler failed", error);
    }
  }

  if (import.meta.env.DEV) {
    console.info(`[analytics] ${event}`, data);
  }
}

export function trackWhatsApp() {
  track("whatsapp_click");
}

export function trackEmail() {
  track("email_click");
}

export function trackStartProject() {
  track("start_project_click");
}