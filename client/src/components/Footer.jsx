import { MapPin, Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import site from "../config/site.js";
import Logo from "./Logo.jsx";
import { trackWhatsApp, trackEmail } from "../lib/analytics.js";

const companyLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Our Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Website Development",
  "E-commerce",
  "Custom Web Applications",
  "Business Systems",
  "Backend & APIs",
  "Automation",
];

function WhatsAppLink({ className = "" }) {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      onClick={trackWhatsApp}
      className={className}
    >
      <MessageCircle className="h-4 w-4 text-brand-400" aria-hidden="true" />
      WhatsApp
      <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-400/10 bg-night-900 pb-24 lg:pb-0">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-slate-400">
            Digital products built for real businesses. Websites, e-commerce and
            custom software for growing teams in Kenya and beyond.
          </p>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer - company links">
          <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
            Company
          </h3>
          <ul className="space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-slate-400 transition-colors hover:text-brand-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="text-sm text-slate-400 transition-colors hover:text-brand-300"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-brand-300">
                <Phone className="h-4 w-4 text-brand-400" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                onClick={trackEmail}
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-300"
              >
                <Mail className="h-4 w-4 text-brand-400" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-400" aria-hidden="true" />
              {site.location}
            </li>
            <li className="pt-1">
              <WhatsAppLink className="inline-flex items-center gap-2 transition-colors hover:text-brand-300" />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-400/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-500 sm:flex-row">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>
            Built by{" "}
            <span className="font-semibold text-brand-400">{site.founder.name}</span>
            {" "}· Based in {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}