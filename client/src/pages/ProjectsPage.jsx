import { useMemo, useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import CTA from "../components/CTA.jsx";
import { projects, portfolioStats } from "../data/projects.js";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsPage() {
  usePageMeta(
    "Projects & Portfolio | EmohTech Solutions",
    "Explore websites, WhatsApp chatbots, automation systems and custom software built by EmohTech Solutions for businesses across Kenya.",
  );

  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800" aria-label="Portfolio">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" aria-hidden="true" />
        <div className="container-x relative py-16 text-center sm:py-20">
          <Reveal>
            <p className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 dark:bg-brand-500/10 dark:text-accent-400">
              Projects & Portfolio
            </p>
            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold sm:text-5xl">
              Work that speaks <span className="text-gradient">for itself</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              A selection of websites, chatbots, automation systems and custom software we've shipped
              for businesses, schools and startups.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white/70 py-6 backdrop-blur dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900/70">
              {portfolioStats.map((s) => (
                <div key={s.label} className="px-2 sm:px-6">
                  <dd className="font-display text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                    {s.value}
                  </dd>
                  <dt className="mt-1 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="section" aria-label="Project list">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active === c
                    ? "bg-gradient-to-r from-brand-600 to-accent-500 text-white shadow-md shadow-brand-600/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-brand-400 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <Reveal className="py-16 text-center text-slate-500 dark:text-slate-400">
              No projects in this category yet — check back soon.
            </Reveal>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 80} className="h-full">
                  <ProjectCard project={p} index={i} />
                </Reveal>
              ))}
            </div>
          )}

          <Reveal className="mt-12">
            <div className="card bg-gradient-to-br from-brand-50 to-accent-50 p-8 text-center dark:from-slate-900 dark:to-slate-900">
              <h2 className="text-2xl font-bold">Have a project like these?</h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
                The projects above are illustrative examples. Whatever you're planning to build, we'll
                approach it with the same care. Let's talk about yours.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button to="/contact" size="lg">
                  Start Your Project
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Let's build your success story"
        text="Tell us about your project and get a free consultation plus a clear, honest quote."
      />
    </>
  );
}