import { Target, MessageSquareText, Code2, TrendingUp } from "lucide-react";
import SectionHeading from "../SectionHeading.jsx";
import Reveal from "../Reveal.jsx";

const reasons = [
  {
    icon: Target,
    title: "Business-focused",
    text: "Every decision is tied to your goals — sales, efficiency or better service. We build to move your business forward, not just to look good.",
  },
  {
    icon: MessageSquareText,
    title: "Direct communication",
    text: "You work directly with the person building your product. No account managers, no phone tag, no delays from layers of middlemen.",
  },
  {
    icon: Code2,
    title: "Modern development",
    text: "Modern, maintainable code. Mobile-first, fast and secure by default — so your product stays dependable as your business grows.",
  },
  {
    icon: TrendingUp,
    title: "Built to evolve",
    text: "We structure things so adding features later doesn't mean a rebuild. Your system grows with you.",
  },
];

export default function WhyEmohTech() {
  return (
    <section className="section" aria-labelledby="why-emohtech-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why EmohTech"
          title="A development partner, not just a vendor."
          description="There are plenty of people who can build you a website. The difference is who you can reach when things change, and how the final product fits your business."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 90}>
              <div className="card group flex h-full gap-5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-card">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent-400/20 bg-accent-500/10">
                  <r.icon className="h-6 w-6 text-accent-300" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}