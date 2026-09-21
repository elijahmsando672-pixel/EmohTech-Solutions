import { MonitorX, Timer, Unplug } from "lucide-react";
import Button from "../Button.jsx";
import SectionHeading from "../SectionHeading.jsx";
import Reveal from "../Reveal.jsx";

const problems = [
  {
    icon: MonitorX,
    title: "Outdated websites",
    text: "Older sites load slowly, look dated on phones and fail to convert visitors into customers.",
  },
  {
    icon: Timer,
    title: "Manual processes",
    text: "Hours lost to spreadsheets, paper forms and copy-paste work that software could handle automatically.",
  },
  {
    icon: Unplug,
    title: "Disconnected systems",
    text: "Your website, payments and records work in silos — data that should drive decisions is trapped in tools.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section" aria-labelledby="why-it-matters-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why it matters"
          title="Your business deserves more than a basic website."
          description="Most businesses don't need more traffic. They need a website and software that actually move work forward — reliable, fast and built around how the business runs."
          className="[&_h2]:text-balance"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={(i + 1) * 90}>
              <div className="card group h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-glow-cyan">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-rose-400/20 bg-rose-500/10">
                  <p.icon className="h-6 w-6 text-rose-400" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <Button to="/contact" variant="secondary" withArrow trackStart>
              Let&apos;s solve it
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}