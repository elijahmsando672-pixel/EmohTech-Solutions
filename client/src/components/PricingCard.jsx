import { Check } from "lucide-react";
import Button from "./Button.jsx";

export default function PricingCard({ tier, index = 0 }) {
  const Icon = tier.icon;
  return (
    <article
      className={`card relative flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
        tier.featured
          ? "border-brand-500 shadow-card-lg ring-1 ring-brand-500/30 dark:border-brand-500"
          : "hover:shadow-card-lg"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
          Most Popular
        </span>
      )}

      <div className="mb-2 flex items-center gap-3">
        <span
          className={`grid h-11 w-11 place-items-center rounded-xl text-white shadow-md ${
            tier.featured ? "bg-gradient-to-br from-brand-600 to-accent-500" : "bg-slate-800 dark:bg-slate-700"
          }`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold">{tier.name}</h3>
      </div>

      <p className="mb-5 text-sm text-slate-500 dark:text-slate-400">{tier.description}</p>

      <div className="mb-6">
        <div className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {tier.price}
        </div>
        <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{tier.priceNote}</div>
      </div>

      <ul className="mb-8 space-y-3 text-sm" aria-label={`${tier.name} features`}>
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
              <Check className="h-3 w-3" aria-hidden="true" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button
          to="/contact"
          variant={tier.featured ? "accent" : "secondary"}
          size="lg"
          className="w-full"
        >
          {tier.cta}
        </Button>
      </div>
    </article>
  );
}