import Button from "../Button.jsx";
import HomeVisual from "./HomeVisual.jsx";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="EmohTech introduction">
      {/* Background: subtle grid + radial glows */}
      <div className="absolute inset-0 bg-grid-dark bg-[size:44px_44px]" aria-hidden="true" />
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-14 py-20 sm:py-24 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="eyebrow">Web &bull; Software &bull; Digital Solutions</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            Build a <span className="text-gradient">digital product</span> that works for your business.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            From professional websites to custom web applications, e-commerce platforms and
            business automation — EmohTech designs, builds and launches software that fits how
            you actually work.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/contact" size="lg" variant="accent" withArrow trackStart>
              Start a Project
            </Button>
            <Button to="/projects" size="lg" variant="secondary">
              View Our Work
            </Button>
          </div>

          <p className="mt-7 text-sm text-slate-500">
            Based in Nairobi, Kenya &mdash; working with clients locally and across the world.
          </p>
        </div>

        <div className="relative">
          <HomeVisual />
        </div>
      </div>
    </section>
  );
}