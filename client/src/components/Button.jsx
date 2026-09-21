import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { trackStartProject } from "../lib/analytics.js";

const variants = {
  primary:
    "bg-brand-500 text-night-950 hover:bg-brand-400 focus-visible:outline-brand-500 shadow-md shadow-brand-500/25",
  accent:
    "bg-gradient-to-r from-brand-500 to-accent-500 text-night-950 hover:from-brand-400 hover:to-accent-400 shadow-md shadow-brand-500/25",
  secondary:
    "border border-slate-400/25 bg-white/[0.03] text-white hover:border-brand-400 hover:text-brand-300",
  ghost:
    "text-slate-300 hover:bg-slate-800 hover:text-white",
  whatsapp:
    "bg-emerald-500 text-night-950 hover:bg-emerald-400 shadow-md shadow-emerald-500/25",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  trackStart = false,
  className = "",
  ...props
}) {
  const handleClick = (event) => {
    if (trackStart) trackStartProject();
    props.onClick?.(event);
  };

  const classes = `inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`} {...props} onClick={handleClick}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={`group ${classes}`}
        {...props}
        onClick={handleClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      >
        {content}
      </a>
    );
  }
  return (
    <button type={props.type || "button"} className={`group ${classes}`} {...props} onClick={handleClick}>
      {content}
    </button>
  );
}