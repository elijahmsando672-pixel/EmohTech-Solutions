import { Server, Database, Globe } from "lucide-react";

const bars = [38, 62, 45, 78, 55, 88, 66, 92];

export default function HomeVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none" aria-hidden="true">
      {/* Connection lines */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-70"
        viewBox="0 0 560 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M150 150 C 230 210, 300 90, 330 230" stroke="rgba(0,229,255,0.4)" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M330 230 C 270 250, 320 330, 430 320" stroke="rgba(124,58,237,0.4)" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="330" cy="230" r="4" fill="#00e5ff">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Main dashboard card */}
      <div className="absolute left-1/2 top-6 z-10 w-[80%] -translate-x-1/2 animate-float-slow rounded-2xl border border-slate-400/15 bg-night-800/90 p-4 shadow-card-lg backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-slate-400/10 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="rounded-full bg-slate-400/10 px-3 py-1 text-[10px] font-semibold text-slate-300">emohtech.app</span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <p className="font-display text-sm font-bold text-white">Sales Dashboard</p>
          <span className="chip bg-emerald-500/15 text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { label: "Sales", value: "KSh 2.4M", color: "text-brand-400" },
            { label: "Orders", value: "1,284", color: "text-white" },
            { label: "Returns", value: "1.2%", color: "text-accent-300" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-slate-400/10 bg-night-900 p-2.5">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">{s.label}</p>
              <p className={`mt-1 font-display text-sm font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-slate-400/10 bg-night-900 p-3">
          <div className="flex items-end justify-between gap-1.5" style={{ height: "56px" }}>
            {bars.map((h, i) => (
              <div
                key={i}
                className="w-full rounded-sm bg-gradient-to-t from-brand-600 to-brand-400"
                style={{ height: `${h}%`, opacity: 0.55 + (i / bars.length) * 0.45 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* API node */}
      <div className="absolute -left-1 top-[38%] z-20 animate-float rounded-xl border border-brand-400/25 bg-night-800/95 p-3 shadow-card">
        <Server className="h-5 w-5 text-brand-400" />
        <p className="mt-1.5 text-[11px] font-bold text-white">API</p>
        <p className="text-[10px] text-slate-400">REST</p>
      </div>

      {/* Database node */}
      <div className="absolute -right-2 top-[14%] z-20 animate-float-slow rounded-xl border border-accent-400/25 bg-night-800/95 p-3 shadow-card">
        <Database className="h-5 w-5 text-accent-300" />
        <p className="mt-1.5 text-[11px] font-bold text-white">PostgreSQL</p>
        <p className="text-[10px] text-slate-400">secure</p>
      </div>

      {/* Website chip */}
      <div className="absolute bottom-4 right-2 z-20 animate-float rounded-xl border border-slate-400/20 bg-night-800/95 p-3 shadow-card">
        <Globe className="h-5 w-5 text-brand-400" />
        <p className="mt-1.5 text-[11px] font-bold text-white">Website</p>
        <p className="text-[10px] text-slate-400">fast &amp; SEO-ready</p>
      </div>
    </div>
  );
}