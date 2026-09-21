import { useEffect, useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import site from "../../config/site.js";
import { trackWhatsApp, trackStartProject } from "../../lib/analytics.js";

export default function MobileCTA() {
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById("project-form");
    if (!form) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFormVisible(entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px" }
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  const handleStart = () => {
    trackStartProject();
    const form = document.getElementById("project-form");
    if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (formVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-400/10 bg-night-950/90 p-3 backdrop-blur-xl lg:hidden" role="complementary" aria-label="Quick actions">
      <div className="mx-auto flex max-w-md gap-2.5">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer noopener"
          onClick={trackWhatsApp}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 font-display text-sm font-bold text-night-950 transition-colors hover:bg-emerald-400"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={handleStart}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-3 font-display text-sm font-bold text-night-950 transition-opacity hover:opacity-90"
        >
          Start a Project
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}