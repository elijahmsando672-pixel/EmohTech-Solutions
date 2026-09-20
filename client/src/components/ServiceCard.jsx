import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, index = 0, compact = false }) {
  const Icon = service.icon;
  return (
    <Link
      to="/contact"
      className="card group relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg sm:p-7"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div
        className={`mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br text-white shadow-md ${service.accent} transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {compact ? service.short : service.description}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700 dark:text-accent-400 dark:group-hover:text-accent-300">
        Start a project
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}