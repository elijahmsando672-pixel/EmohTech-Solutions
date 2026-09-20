import { useState } from "react";
import { Plus, Info } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta.js";
import PricingCard from "../components/PricingCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import CTA from "../components/CTA.jsx";
import { pricingTiers, addOns, pricingFaq } from "../data/pricing.js";

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-slate-900 dark:text-white">{faq.q}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-300 text-slate-500 transition-transform dark:border-slate-700 dark:text-slate-300 ${
            open ? "rotate-45 border-brand-500 text-brand-600 dark:border-accent-400 dark:text-accent-400" : ""
          }`}
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  usePageMeta(
    "Pricing | EmohTech Solutions",
    "Transparent pricing for websites, chatbots, automation and custom software from EmohTech Solutions — clear quotes, no hidden fees.",
  );

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800" aria-label="Pricing">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" aria-hidden="true" />
        <div className="container-x relative py-16 text-center sm:py-20">
          <Reveal>
            <p className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 dark:bg-brand-500/10 dark:text-accent-400">
              Pricing
            </p>
            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold sm:text-5xl">
              Honest pricing, <span className="text-gradient">no surprises</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              Every project is quoted clearly before we start. Pick a starting point below or talk to us —
              we'll recommend what you actually need (sometimes that's less than you expected).
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tiers */}
      <section className="section" aria-label="Pricing plans">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 100} className="h-full">
                <PricingCard tier={tier} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-10">
            <div className="flex items-start gap-3 rounded-2xl border border-accent-300/50 bg-accent-400/5 p-5 text-sm text-slate-600 dark:border-accent-400/30 dark:text-slate-300">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
              <p>
                Prices are <strong>starting points</strong> in Kenyan Shillings and include design,
                development and testing. Hosting, domain and optional maintenance are quoted separately.
                Every project gets a fixed, written quote before any work begins.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section bg-slate-50 py-16 dark:bg-slate-900/40 sm:py-20" aria-labelledby="addons-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Add-Ons"
              title="Popular extras, priced upfront"
              description="Mix and match to build exactly what your business needs."
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <ul className="divide-y divide-slate-100 dark:divide-slate-800">
              {addOns.map((a) => (
                <li key={a.name} className="flex items-center justify-between gap-4 px-6 py-4">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{a.name}</span>
                  <span className="shrink-0 text-sm font-bold text-brand-600 dark:text-accent-400">
                    {a.price} <span className="font-normal text-slate-400">/ {a.unit}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container-x max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions we hear often"
              description="If yours isn't here, just ask — we're quick to reply."
            />
          </Reveal>
          <div className="mt-12 space-y-4">
            {pricingFaq.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60}>
                <FaqItem faq={faq} index={i} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button to="/contact" variant="secondary" size="lg" withArrow>
              Ask a Question
            </Button>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Get a fixed quote for your project"
        text="Request a free consultation — we'll scope your project and send a clear, written quote within 24 hours."
      />
    </>
  );
}