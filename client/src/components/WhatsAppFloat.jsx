import { MessageCircle } from "lucide-react";
import site from "../config/site.js";
import { trackWhatsApp } from "../lib/analytics.js";

export default function WhatsAppFloat() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      onClick={trackWhatsApp}
      aria-label="Chat with EmohTech on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-full bg-emerald-500 py-3 pl-3 pr-4 text-night-950 shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-400 hover:shadow-xl lg:inline-flex"
    >
      <span className="relative grid h-7 w-7 place-items-center">
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-emerald-400/60" aria-hidden="true" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}