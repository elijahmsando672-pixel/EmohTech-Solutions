import { MessageCircle } from "lucide-react";
import Button from "../Button.jsx";
import Reveal from "../Reveal.jsx";
import site from "../../config/site.js";
import { trackWhatsApp } from "../../lib/analytics.js";

export default function FinalCTA() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
  return (
    <section className="section" aria-label="Call to action">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-400/20 px-6 py-16 text-center shadow-card-lg sm:px-12">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-night-900 to-accent-600/20" aria-hidden="true" />
            <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-400/70 to-transparent" aria-hidden="true" />
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" aria-hidden="true" />

            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow">Let&apos;s talk</p>
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Have an idea worth building?</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Tell us what you&apos;re trying to do and we&apos;ll get back to you within 24 hours with
                a clear plan and an honest quote.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button to="/contact" size="lg" variant="accent" withArrow trackStart>
                  Start Your Project
                </Button>
                <Button href={whatsappHref} variant="whatsapp" size="lg" onClick={trackWhatsApp}>
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Chat on WhatsApp
                </Button>
              </div>
              <p className="mt-6 text-sm text-slate-500">
                Or call us directly at {site.phone}. We reply fast.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}