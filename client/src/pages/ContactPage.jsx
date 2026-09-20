import { Mail, Phone, MapPin, Clock, MessageCircle, CalendarCheck } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta.js";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import ContactForm from "../components/forms/ContactForm.jsx";
import InquiryForm from "../components/forms/InquiryForm.jsx";
import site from "../config/site.js";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [site.phone],
    href: site.phoneHref,
    action: "Call now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["Fastest response", "Also weekends"],
    href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`,
    action: "Start chat",
  },
  {
    icon: Mail,
    title: "Email",
    lines: [site.email],
    href: `mailto:${site.email}`,
    action: "Send email",
  },
  {
    icon: MapPin,
    title: "Location",
    lines: [site.location, "Serving clients worldwide"],
    action: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [site.hours, "24/7 for chatbot support"],
    action: null,
  },
];

export default function ContactPage() {
  usePageMeta(
    "Contact Us | EmohTech Solutions",
    "Get in touch with EmohTech Solutions for a free consultation on websites, chatbots, automation, M-Pesa payments and custom software.",
  );

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800" aria-label="Contact EmohTech">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" aria-hidden="true" />
        <div className="container-x relative py-16 text-center sm:py-20">
          <Reveal>
            <p className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 dark:bg-brand-500/10 dark:text-accent-400">
              Contact Us
            </p>
            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold sm:text-5xl">
              Let's talk about your <span className="text-gradient">project</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              Tell us what you need and we'll get back to you within 24 hours with honest advice and a
              clear quote. Prefer to chat? Reach us on WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact channels */}
      <section className="section pb-0" aria-label="Contact channels">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map((c, i) => {
              const Icon = c.icon;
              const content = (
                <div className="card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-md">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-bold">{c.title}</h3>
                  </div>
                  <div className="space-y-1 text-sm text-slate-500 dark:text-slate-400">
                    {c.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  {c.action && (
                    <p className="mt-auto pt-4 text-sm font-semibold text-brand-600 dark:text-accent-400">
                      {c.action} →
                    </p>
                  )}
                </div>
              );

              if (c.href) {
                return (
                  <Reveal key={c.title} delay={i * 60} className="h-full">
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="block h-full"
                    >
                      {content}
                    </a>
                  </Reveal>
                );
              }
              return (
                <Reveal key={c.title} delay={i * 60} className="h-full">
                  {content}
                </Reveal>
              );
            })}

            {/* Consultation card to fill the 6th grid slot */}
            <Reveal delay={300} className="h-full">
              <div className="card flex h-full flex-col justify-center bg-gradient-to-br from-brand-600 to-accent-500 p-6 text-white">
                <CalendarCheck className="mb-4 h-9 w-9" aria-hidden="true" />
                <h3 className="text-lg font-bold">Free consultation</h3>
                <p className="mt-2 text-sm text-white/85">
                  Not sure what you need? Book a free 20-minute consultation and we'll point you in the
                  right direction — no obligation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="section" aria-label="Message forms">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Send a Message"
              title="General enquiry"
              description="Have a question, want a quote, or ready to start? Send us a message."
              align="left"
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Project Detail"
              title="Service & quote enquiry"
              description="Give us the basics about your project and we'll prepare a tailored proposal."
              align="left"
            />
            <div className="mt-8">
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map / location */}
      <section className="pb-20" aria-label="Location">
        <div className="container-x">
          <Reveal>
            <div className="card relative overflow-hidden border-slate-200 dark:border-slate-800">
              <div
                className="absolute inset-0 bg-grid-light dark:bg-grid-dark"
                aria-hidden="true"
              />
              <div className="relative flex min-h-[220px] flex-col items-center justify-center gap-3 p-10 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-lg">
                  <MapPin className="h-7 w-7" aria-hidden="true" />
                </span>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {site.location}
                </p>
                <p className="max-w-md text-sm text-slate-500 dark:text-slate-400">
                  We work with clients across Kenya and internationally — most projects are delivered
                  remotely, with regular updates and video calls.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}