import { ArrowRight, Check } from "lucide-react";
import Button from "../Button.jsx";
import Reveal from "../Reveal.jsx";
import site from "../../config/site.js";

const points = [
  "You talk to the developer — not a sales team",
  "Fixed quotes before any code is written",
  "Regular updates while the work is in progress",
  "Support after launch, not goodbye at handover",
];

export default function AboutSection() {
  return (
    <section className="section bg-night-900/50" aria-labelledby="about-heading">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="eyebrow">About</p>
            <h2 id="about-heading" className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Meet EmohTech
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              EmohTech is a software development studio based in Nairobi, Kenya. We build digital
              products — websites, e-commerce platforms and custom systems — for businesses that are
              done with manual work and outdated tools.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              The studio is led by <span className="font-semibold text-white">{site.founder.name}</span>,
              a software developer who has spent years turning spreadsheets and paperwork into systems
              that run themselves. When you work with us, you work directly with the team building your
              product.
            </p>
            <div className="mt-8">
              <Button to="/about" variant="secondary" withArrow>
                More About EmohTech
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="card relative overflow-hidden p-8 shadow-card-lg">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-500/15 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-14 w-14 overflow-hidden rounded-2xl border border-slate-400/15 bg-night-900">
                  <img src="/logo.png" alt={`${site.name} logo`} className="h-full w-full object-cover" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-white">{site.name}</p>
                  <p className="text-sm text-slate-400">Digital products for real businesses</p>
                </div>
              </div>
              <ul className="mt-7 space-y-3.5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/15">
                      <Check className="h-3.5 w-3.5 text-brand-400" aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-between border-t border-slate-400/10 pt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Founded {site.founded}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400">
                  Nairobi, Kenya <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}