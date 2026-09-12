import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("reveal-ready");

    let observer: IntersectionObserver | undefined;
    const frame = window.requestAnimationFrame(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

      if (reduceMotion || !("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
      );

      elements.forEach((element) => observer?.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default ScrollReveal;
