import { processSteps } from "../data/process.js";
import Reveal from "./Reveal.jsx";

export default function HowWeWork({ id = "process" }) {
  return (
    <div id={id} className="relative">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.step} delay={i * 100}>
              <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/50">
                <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-slate-100 dark:text-slate-800">
                  {p.step}
                </span>
                <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-md">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{p.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}