import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-400/10 bg-night-950/85 backdrop-blur-2xl"
          : "border-transparent bg-night-950/40 backdrop-blur-sm"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4 lg:h-[72px]" aria-label="Main navigation">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-400"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden lg:block">
            <Button to="/contact" size="sm" withArrow trackStart>
              Start a Project
            </Button>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-200 hover:bg-slate-800 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 top-16 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 h-full w-full bg-night-950/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            tabIndex={-1}
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="relative flex h-[calc(100vh-4rem)] flex-col border-t border-slate-400/10 bg-night-950"
          >
            <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">
              {links.map((link, i) => (
                <li key={link.to} style={{ transitionDelay: `${i * 40}ms` }}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-brand-500/10 text-brand-400"
                          : "text-slate-200 hover:bg-slate-900 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-400/10 p-6">
              <Button to="/contact" size="lg" className="w-full" withArrow trackStart onClick={() => setOpen(false)}>
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}