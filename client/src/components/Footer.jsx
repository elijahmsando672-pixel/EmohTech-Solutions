import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import site from "../config/site.js";
import Logo from "./Logo.jsx";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Website Development",
  "AI & Chatbot Development",
  "Business Automation",
  "Payment Integration",
  "Database & Backend",
  "Custom Software",
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            We build websites, chatbots, automation and payment systems that help Kenyan businesses and
            schools work smarter.
          </p>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-accent-400">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer - quick links">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Company
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-accent-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Services
          </h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-accent-400"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-brand-600 dark:hover:text-accent-400">
                <Phone className="h-4 w-4 text-brand-600 dark:text-accent-400" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-brand-600 dark:hover:text-accent-400">
                <Mail className="h-4 w-4 text-brand-600 dark:text-accent-400" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-600 dark:text-accent-400" aria-hidden="true" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Built by <span className="font-semibold text-brand-600 dark:text-accent-400">{site.founder.name}</span>{" "}
            · Based in {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}