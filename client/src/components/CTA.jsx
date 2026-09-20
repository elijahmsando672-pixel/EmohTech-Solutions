import { MessageCircle, ArrowRight } from "lucide-react";
import Button from "./Button.jsx";
import Reveal from "./Reveal.jsx";
import site from "../config/site.js";

export default function CTA({
  title = "Ready to build something that grows your business?",
  text = "Tell us what you need and get a free consultation plus a clear, honest quote — usually within 24 hours.",
  primaryLabel = "Get a Free Consultation",
  secondaryLabel = "Chat on WhatsApp",
}) {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
  return (
    <section className="section" aria-label="Call to action">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 px-6 py-14 text-center shadow-card-lg sm:px-12">
            <div className="absolute inset-0 bg-grid-light opacity-[0.15]" aria-hidden="true" />
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" aria-hidden="true" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-50/90">{text}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  to="/contact"
                  size="lg"
                  className="w-full bg-white text-brand-700 shadow-lg hover:bg-brand-50 hover:text-brand-800 sm:w-auto"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  href={whatsappHref}
                  variant="whatsapp"
                  size="lg"
                  className="w-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}