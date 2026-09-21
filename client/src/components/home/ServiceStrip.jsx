import { Globe, ShoppingCart, AppWindow, Server } from "lucide-react";

const items = [
  { icon: Globe, label: "Web Development" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: AppWindow, label: "Custom Software" },
  { icon: Server, label: "Backend & APIs" },
];

export default function ServiceStrip() {
  return (
    <div className="border-y border-slate-400/10 bg-night-900/60" aria-label="Core services">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-6 py-7 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-brand-400/20 bg-brand-500/10">
              <item.icon className="h-5 w-5 text-brand-400" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-bold text-white sm:text-base">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}