import { Link } from "react-router-dom";
import site from "../config/site.js";

export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label={`${site.name} - Home`}>
      <span className="grid h-9 w-9 overflow-hidden rounded-xl bg-white shadow-sm transition-transform group-hover:scale-105">
        <img
          src="/logo.png"
          alt={`${site.name} logo`}
          className="h-full w-full object-cover"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          EmohTech
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-600 dark:text-accent-400">
          Solutions
        </span>
      </span>
    </Link>
  );
}