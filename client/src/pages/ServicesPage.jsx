import { CheckCircle2, Phone } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta.js";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import HowWeWork from "../components/HowWeWork.jsx";
import CTA from "../components/CTA.jsx";
import site from "../config/site.js";
import { services } from "../data/services.js";

export default function ServicesPage() {
  usePageMeta(
    "Services | EmohTech Solutions",
    "Website development, WhatsApp AI chatbots, business automation, M-Pesa payment integration and custom software from EmohTech Solutions in Kenya.",
  );

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800" aria-label="Our services">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" aria-hidden="true" />
        <div className="container-x relative py-16 text-center sm:py-20">
          <Reveal>
            <p className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 dark:bg-brand-500/10 dark:text-accent-400">
              Our Services
            </p>
            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold sm:text-5xl">
              Everything your business needs to <span className="text-gradient">go digital</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              Websites, chatbots, automation, payments and custom software — scoped to your goals and
              delivered with support, not abandoned.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={`tel:${site.phone}`} size="lg">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phone}
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Get a Free Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services detail */}
      <div className="container-x section space-y-16">
        {services.map((s, i) => {
          const Icon = s.icon;
          const isEven = i % 2 === 0;
          return (
            <article
              key={s.slug}
              id={s.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}
              aria-labelledby={`${s.slug}-title`}
            >
              <Reveal>
                <div className="relative">
                  <div className={`absolute -left-6 -top-6 h-32 w-32 rounded-3xl bg-gradient-to-br opacity-15 blur-2xl ${s.accent}`} aria-hidden="true" />
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br p-10 text-white shadow-card-lg">
                    <div className="absolute inset-0 bg-grid-light opacity-20" aria-hidden="true" />
                    <div className="relative">
                      <span className="mb-6 inline-grid h-16 w-16 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm">
                        <Icon className="h-8 w-8" aria-hidden="true" />
                      </span>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/70">{s.category}</p>
                      <h2 id={`${s.slug}-title`} className="mt-2 text-3xl font-bold">
                        {s.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-white/85">{s.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-accent-400">
                    What you get
                  </p>
                  <ul className="mt-5 space-y-3.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                        <span className="text-sm sm:text-base">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button to="/contact" withArrow>
                      Request This Service
                    </Button>
                    <Button href={`https://wa.me/${site.whatsapp}`} variant="whatsapp">
                      Ask Us on WhatsApp
                    </Button>
                  </div>
                </div>
              </Reveal>
            </article>
          );
        })}
      </div>

      {/* Process */}
      <section className="section bg-slate-50 dark:bg-slate-900/40" aria-labelledby="process-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="The Process"
              title="How we deliver your project"
              description="Whether it's a landing page or a full business system, the path is the same — simple and transparent."
            />
          </Reveal>
          <div className="mt-14">
            <HowWeWork />
          </div>
        </div>
      </section>

      <CTA
        title="Not sure which service you need?"
        text="Tell us what you're trying to achieve. We'll point you to the right solution — honestly, even if it means a smaller project."
      />
    </>
  );
}