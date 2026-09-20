import { CheckCircle2, Sparkles } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta.js";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import HowWeWork from "../components/HowWeWork.jsx";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";
import site from "../config/site.js";
import { services, whyUs } from "../data/services.js";
import { projects } from "../data/projects.js";
import { testimonials } from "../data/testimonials.js";

const heroHighlights = [
  "Websites that win customers",
  "WhatsApp AI chatbots",
  "M-Pesa payments",
  "Business automation",
];

export default function HomePage() {
  usePageMeta(
    "EmohTech Solutions | Software. Automation. Digital Solutions.",
    "EmohTech Solutions builds websites, WhatsApp AI chatbots, business automation, M-Pesa payment integration and custom software for businesses in Kenya.",
  );

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden" aria-label="Intro">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent dark:via-slate-700" aria-hidden="true" />

        <div className="container-x relative grid items-center gap-12 pb-16 pt-16 sm:pt-20 lg:grid-cols-2 lg:pb-24 lg:pt-24">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-xs font-semibold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-accent-400">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Software Development Company · {site.location}
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Websites, WhatsApp bots and M-Pesa systems that help your business sell more
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              {site.name} helps small businesses, schools and startups in Kenya sell more and work
              smarter — with websites, WhatsApp AI chatbots, M-Pesa payments, automation and custom
              software. {site.tagline}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="What we do">
              {heroHighlights.map((h) => (
                <li key={h} className="chip bg-white text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" size="lg" withArrow>
                Get a Free Consultation
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 dark:border-slate-800">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                    {s.value}
                  </dd>
                  <dd className="mt-1 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-lg animate-fade-up lg:max-w-none" style={{ animationDelay: "120ms" }}>
            <div className="card relative overflow-hidden p-5 shadow-card-lg sm:p-8">
              <img
                src="/logo.png"
                alt="EmohTech logo"
                className="mx-auto w-full max-w-xs rounded-2xl ring-1 ring-slate-100 dark:ring-slate-800"
              />
              <p className="mt-5 text-center font-display text-xl font-bold text-slate-900 dark:text-white">
                {site.name}
              </p>
              <p className="mt-1 text-center text-sm text-slate-500 dark:text-slate-400">{site.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES OVERVIEW ============ */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Complete software services for growing businesses"
              description="From your first website to fully automated business systems — one team, one point of contact, real results."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80} className="h-full">
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button to="/services" variant="secondary" size="lg" withArrow>
              Explore All Services
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY CHOOSE EMOHTECH ============ */}
      <section className="section bg-slate-50 dark:bg-slate-900/40" aria-labelledby="why-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose EmohTech"
              title="A development partner, not just a vendor"
              description="We care about your business results as much as the code. Here's what working with us is like."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 80} className="h-full">
                  <div className="card h-full p-6">
                    <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mb-2 text-base font-bold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="section" aria-labelledby="projects-heading">
        <div className="container-x">
          <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Featured Work"
              title="Real projects, real results"
              description="A look at some of the websites, bots and systems we've shipped."
              align="left"
            />
            <Button to="/projects" variant="secondary" withArrow>
              View All Projects
            </Button>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className="h-full">
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW WE WORK ============ */}
      <section className="section bg-slate-50 dark:bg-slate-900/40" aria-labelledby="process-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="A simple, transparent process"
              description="You always know what's happening, what it costs and when it'll be ready."
            />
          </Reveal>
          <div className="mt-14">
            <HowWeWork />
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Client Testimonials"
              title="What our clients say"
              description="We measure success by the results our clients see — here's what they tell us."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80} className="h-full">
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <CTA
        title="Let's build what your business needs next"
        text="Book a free consultation. We'll listen, plan and give you an honest quote with no obligation."
      />

      {/* ============ CONTACT STRIP ============ */}
      <section className="pb-16" aria-label="Direct contact options">
        <div className="container-x">
          <div className="card flex flex-col items-center justify-between gap-6 p-8 sm:flex-row">
            <div>
              <h2 className="text-xl font-bold">Prefer to talk directly?</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Reach us on WhatsApp or email — {site.email}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={`https://wa.me/${site.whatsapp}`} variant="whatsapp">
                WhatsApp Us
              </Button>
              <Button href={`mailto:${site.email}`} variant="secondary">
                Send an Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}