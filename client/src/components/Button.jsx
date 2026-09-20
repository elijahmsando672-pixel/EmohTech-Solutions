import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-brand-600 shadow-md shadow-brand-600/20",
  accent:
    "bg-gradient-to-r from-brand-600 to-accent-500 text-white hover:from-brand-700 hover:to-accent-600 shadow-md shadow-brand-600/25",
  secondary:
    "border border-slate-300 bg-white text-slate-800 hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-accent-400 dark:hover:text-accent-400",
  ghost:
    "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
  whatsapp:
    "bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-600/20",
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
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`} {...props}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={`group ${classes}`} {...props} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer noopener" : undefined}>
        {content}
      </a>
    );
  }
  return (
    <button type={props.type || "button"} className={`group ${classes}`} {...props}>
      {content}
    </button>
  );
}