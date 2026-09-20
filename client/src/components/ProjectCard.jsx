import { TrendingUp } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <article
      className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-grid-light opacity-20" aria-hidden="true" />
        <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-slate-950/30 px-3 py-1 text-xs font-semibold text-white">
          {project.year}
        </span>
        <div className="h-16 w-16 rounded-2xl border border-white/30 bg-white/10 shadow-lg backdrop-blur-md" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{project.summary}</p>

        <ul className="mb-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-brand-600 dark:border-slate-800 dark:text-accent-400">
          <TrendingUp className="h-4 w-4" aria-hidden="true" />
          {project.result}
        </div>
      </div>
    </article>
  );
}