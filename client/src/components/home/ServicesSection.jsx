import { Globe, ShoppingBag, AppWindow, ClipboardList, Server, Workflow, Check } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading.jsx";
import Reveal from "../Reveal.jsx";
import { track } from "../../lib/analytics.js";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    text: "Professional, fast-loading websites for businesses, organizations and events — designed to represent your brand and turn visitors into clients.",
    features: ["Custom design", "Contact & booking forms", "SEO-ready & mobile-first", "Fast hosting setup"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    text: "Online stores that make it easy for your customers to browse, pay and reorder — with inventory and order tracking built in.",
    features: ["Catalogue & product pages", "MPESA & card payments", "Order management", "Delivery coordination"],
  },
  {
    icon: AppWindow,
    title: "Custom Web Applications",
    text: "Web apps tailored to your workflow. From student portals to booking systems — built around your specific process, not a generic template.",
    features: ["Dashboards & reporting", "Role-based access", "User accounts", "Team workflows"],
  },
  {
    icon: ClipboardList,
    title: "Business Systems",
    text: "Digital tools that replace manual record-keeping for schools, clinics, SACCOs and small teams—data you can trust and act on.",
    features: ["Student & member records", "Fees & payment tracking", "Attendance management", "Automatic reports"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    text: "Reliable servers, databases and API endpoints that power your website, app or third-party integrations — built securely and to scale.",
    features: ["REST API design", "Database design & setup", "Third-party integrations", "Secure authentication"],
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "Remove repetitive work by connecting the tools you already use. Automate messaging, data entry and reporting so your team focuses on real work.",
    features: ["Workflow automation", "Chatbot & WhatsApp flows", "Notification systems", "Form-to-database pipelines"],
  },
];

export default function ServicesSection() {
  return (
    <section className="section bg-night-900/50" aria-labelledby="services-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we build"
          title="Services that cover the full stack."
          description="One team for strategy, design, development and launch — so your website, app and database work together instead of living in separate projects."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <div className="card group h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-card">
                <span className="flex items-center gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 border border-brand-400/20">
                    <s.icon className="h-6 w-6 text-brand-400" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                </span>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{s.text}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-12 text-center text-sm text-slate-400">
            Not sure which one you need?{" "}
            <Link to="/contact" className="font-semibold text-brand-400 underline-offset-4 hover:underline" onClick={() => track("start_project_click")}>
              Tell us what you&apos;re trying to do →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}