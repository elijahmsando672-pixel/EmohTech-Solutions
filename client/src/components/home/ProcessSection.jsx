import { Search, Map, Hammer, Rocket } from "lucide-react";
import SectionHeading from "../SectionHeading.jsx";
import Reveal from "../Reveal.jsx";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    text: "We start with a call to understand your business, your customers and what \"working\" means for you. We ask a lot of questions — and listen.",
  },
  {
    icon: Map,
    step: "02",
    title: "Plan",
    text: "A clear roadmap: what we'll build, what it costs, how long it takes. You approve the plan before any code is written.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Build",
    text: "We design and build in short cycles, keeping you updated as the product takes shape. No surprises late in the game.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    text: "We deploy, test with real users, then hand over with training and support so the system keeps running.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section bg-night-900/50" aria-labelledby="process-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our process"
          title="A clear path from idea to launch."
          description="You'll always know what's happening, what it costs and when things are done. The process is simple because the work is straightforward."
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-brand-500/60 via-brand-400/30 to-accent-500/60 md:block"
            aria-hidden="true"
          />
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={(i + 1) * 100} as="li">
              <div className="relative text-center md:px-2">
                <span className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full border border-brand-400/30 bg-night-900 shadow-glow-cyan">
                  <s.icon className="h-5 w-5 text-brand-400" aria-hidden="true" />
                </span>
                <p className="mt-4 font-display text-xs font-extrabold uppercase tracking-[0.25em] text-accent-300">
                  Step {s.step}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}