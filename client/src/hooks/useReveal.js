import { useCallback, useEffect, useRef } from "react";

/**
 * Adds a "revealed" class to the element when it enters the viewport,
 * powering the scroll-reveal animation. Honors prefers-reduced-motion.
 */
export default function useReveal(options = { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }) {
  const ref = useRef(null);

  const apply = useCallback((el) => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("revealed");
      return;
    }
    el.classList.add("reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, options);
    observer.observe(el);
  }, [options]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Re-run for children that have the render-delay variant.
    const targets = el.classList.contains("reveal-slot") ? el.querySelectorAll(".reveal-slot") : [el];
    targets.forEach(apply);
    return undefined;
  }, [apply]);

  return ref;
}