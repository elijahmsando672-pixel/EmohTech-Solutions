import Hero from "../components/home/Hero.jsx";
import ServiceStrip from "../components/home/ServiceStrip.jsx";
import ProblemSection from "../components/home/ProblemSection.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import ProcessSection from "../components/home/ProcessSection.jsx";
import WhyEmohTech from "../components/home/WhyEmohTech.jsx";
import AboutSection from "../components/home/AboutSection.jsx";
import FAQSection from "../components/home/FAQSection.jsx";
import FinalCTA from "../components/home/FinalCTA.jsx";
import ProjectForm from "../components/home/ProjectForm.jsx";
import MobileCTA from "../components/home/MobileCTA.jsx";
import Reveal from "../components/Reveal.jsx";
import usePageMeta from "../hooks/usePageMeta.js";

export default function HomePage() {
  usePageMeta(
    "EmohTech | Web Development & Software Solutions",
    "EmohTech builds professional websites, e-commerce platforms and custom web applications for businesses and organizations in Kenya."
  );

  return (
    <>
      <Hero />
      <ServiceStrip />

      <ProblemSection />

      <ServicesSection />

      <ProcessSection />

      <WhyEmohTech />

      <AboutSection />

      <FAQSection />

      <FinalCTA />

      <section id="project-form" className="section bg-night-900/50" aria-labelledby="project-form-heading">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <p className="eyebrow">Start a project</p>
              <h2 id="project-form-heading" className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Let&apos;s build something.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
                Tell us what you&apos;re trying to do — a website, an online store, a system that
                replaces your paperwork. We&apos;ll get back to you within 24 hours with next steps
                and an honest quote.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
                  Free consultation — no cost, no obligation
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
                  Fixed quote before a single line of code
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
                  Reply within 24 hours, usually faster
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ProjectForm />
          </Reveal>
        </div>
      </section>

      <MobileCTA />
    </>
  );
}