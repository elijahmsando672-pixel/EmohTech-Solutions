import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "../SectionHeading.jsx";
import Reveal from "../Reveal.jsx";

const faqs = [
  {
    q: "How much does a website or web app cost?",
    a: "It depends on the project — but there are no hidden surprises. After a short discovery call, we give you a fixed, itemised quote before any code is written. Nothing is charged up front for the consultation.",
  },
  {
    q: "How long does it take to build something?",
    a: "A typical business website takes one to three weeks. Custom web applications and larger platforms take longer, and we agree a realistic timeline up front — then hit it.",
  },
  {
    q: "Do you work with clients outside Kenya?",
    a: "Yes. We work with clients across Kenya and internationally, communicating over WhatsApp, email and calls. Time zones are not a problem for our workflow.",
  },
  {
    q: "Do you build websites for schools?",
    a: "Yes — schools are a big part of what we do. Fee tracking, report cards, parent communication and admissions are common projects we build and support.",
  },
  {
    q: "Will I be able to update the content myself?",
    a: "Yes. We build with easy content management in mind and train you on how to make updates — so you're not dependent on us for every small change.",
  },
  {
    q: "What if I need help after the project launches?",
    a: "We provide support after launch and can handle ongoing maintenance, updates and new features as your business evolves.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" aria-labelledby="faq-heading">
      <div className="container-x mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered honestly."
          description="The things people usually ask before starting a project — and the straight answers."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div className={`card overflow-hidden transition-colors ${isOpen ? "border-brand-400/40" : ""}`}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-bold text-white transition-colors hover:text-brand-300"
                    >
                      {item.q}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-brand-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}