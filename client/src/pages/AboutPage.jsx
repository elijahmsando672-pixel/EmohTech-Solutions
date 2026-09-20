import { Target, Heart, Gauge, Handshake, ArrowRight } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta.js";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";
import site from "../config/site.js";
import { techStack } from "../data/services.js";

const values = [
  {
    title: "Results First",
    icon: Target,
    text: "We build for your business goals — more customers, less manual work, better decisions.",
  },
  {
    title: "Honest & Transparent",
    icon: Heart,
    text: "Clear quotes, realistic timelines and straight advice — even when it means a smaller project.",
  },
  {
    title: "Reliable Delivery",
    icon: Gauge,
    text: "We test what we build and we show up after launch. Support is part of the package.",
  },
  {
    title: "Partnership Mindset",
    icon: Handshake,
    text: "We learn your business, then we grow with it — improving your systems as you scale.",
  },
];

const milestones = [
  {
    year: "2021",
    title: "The beginning",
    text: "Elijah starts EmohTech Solutions as a one-developer operation building websites for local businesses in Nairobi.",
  },
  {
    year: "2022",
    title: "First automations",
    text: "We ship our first order-management and booking systems, and businesses start asking for M-Pesa integrations.",
  },
  {
    year: "2023",
    title: "Chatbots & payments",
    text: "M-Pesa integrations and WhatsApp chatbots become core services, helping clients confirm payments and answer customers automatically.",
  },
  {
    year: "Today",
    title: "A trusted software partner",
    text: "Schools, startups and SMEs across Kenya rely on us for custom software — and we're just getting started.",
  },
];

export default function AboutPage() {
  usePageMeta(
    "About Us | EmohTech Solutions",
    "Learn about EmohTech Solutions, a Kenyan software development company founded by Elijah Musando — building websites, chatbots and automation for growing businesses.",
  );

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800" aria-label="About EmohTech">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" aria-hidden="true" />
        <div className="container-x relative py-16 text-center sm:py-20">
          <Reveal>
            <p className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 dark:bg-brand-500/10 dark:text-accent-400">
              About EmohTech Solutions
            </p>
            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold sm:text-5xl">
              A Kenyan software company built on <span className="text-gradient">results</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              {site.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story + founder */}
      <section className="section" aria-label="Our story">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-accent-400">
              Our Story
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">From local websites to complete digital systems</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed">
              <p>
                EmohTech Solutions started with a simple observation: many Kenyan businesses had great
                products but outdated or missing online presence — and almost none of it paid for
                itself. We set out to change that by building software that does real work: taking
                orders, answering customers, confirming payments and saving hours every single day.
              </p>
              <p>
                Today we serve small and medium-sized businesses, schools, startups and organizations.
                Whatever you need — a website, a WhatsApp chatbot, M-Pesa integration or a full custom
                system — we bring the same care, craftsmanship and business focus to every project.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card relative overflow-hidden p-8">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-500/10 blur-2xl" aria-hidden="true" />
              <div className="flex items-center gap-4">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 font-display text-2xl font-extrabold text-white shadow-lg">
                  EM
                </span>
                <div>
                  <h3 className="text-xl font-bold">{site.founder.name}</h3>
                  <p className="text-sm font-medium text-brand-600 dark:text-accent-400">{site.founder.role}</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{site.founder.bio}</p>
              <div className="mt-6 grid gap-3">
                {["Design & UI engineering", "Business systems & automation", "M-Pesa & payment integrations", "Client communication in plain language"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
                    <ArrowRight className="h-4 w-4 text-brand-600 dark:text-accent-400" aria-hidden="true" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 dark:bg-slate-900/40" aria-label="Company highlights">
        <div className="container-x grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {site.stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <div className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">{s.value}</div>
              <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section" aria-labelledby="values-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Our Values"
              title="What we stand for"
              description="These principles guide every project, quote and conversation we have."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 80} className="h-full">
                  <div className="card h-full p-6 text-center">
                    <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-md">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mb-2 text-lg font-bold">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section bg-slate-50 dark:bg-slate-900/40" aria-labelledby="journey-heading">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="Growing with our clients"
              description="A few milestones along the way."
            />
          </Reveal>
          <ol className="relative mx-auto mt-14 max-w-3xl space-y-10 border-l-2 border-brand-100 pl-8 dark:border-slate-800">
            {milestones.map((m) => (
              <li key={m.year}>
                <Reveal>
                  <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-4 border-brand-600 bg-white dark:bg-slate-950" aria-hidden="true" />
                  <p className="font-display text-sm font-extrabold uppercase tracking-wider text-brand-600 dark:text-accent-400">{m.year}</p>
                  <h3 className="mt-1 text-lg font-bold">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{m.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section" aria-label="Our technology">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Our Toolbox"
              title="Modern technology, dependable engineering"
              description="We choose battle-tested tools that keep your systems fast, secure and easy to maintain and extend."
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <li key={tech} className="chip bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="mt-12 text-center">
            <Button to="/services" variant="secondary" size="lg" withArrow>
              See Our Services
            </Button>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Want to build something together?"
        text="Let's talk about your project — we'd love to learn how we can help."
      />
    </>
  );
}