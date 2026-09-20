import { Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="card relative flex h-full flex-col p-6 sm:p-8">
      <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-100 dark:text-slate-800" aria-hidden="true" />
      <blockquote className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${testimonial.gradient}`}
          aria-hidden="true"
        >
          {testimonial.initials}
        </span>
        <div>
          <div className="text-sm font-bold text-slate-900 dark:text-white">{testimonial.name}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {testimonial.role} · {testimonial.company}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}