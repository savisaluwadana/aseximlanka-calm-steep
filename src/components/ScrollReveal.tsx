import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = window.requestAnimationFrame(() => {
      const explicitRevealElements = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const structuralRevealElements =
        location.pathname === "/"
          ? []
          : gsap.utils.toArray<HTMLElement>(
              "main section > .container, main section > div[class*='max-w'], main section > div[class*='mx-auto']",
            );
      const revealElements = Array.from(
        new Set([...explicitRevealElements, ...structuralRevealElements]),
      );
      const heroElements = gsap.utils.toArray<HTMLElement>("[data-hero]");
      const heroImages = gsap.utils.toArray<HTMLElement>("[data-hero-image]");
      const parallaxElements = gsap.utils.toArray<HTMLElement>("[data-parallax]");

      if (reduceMotion) {
        gsap.set([...revealElements, ...heroElements, ...heroImages, ...parallaxElements], {
          clearProps: "transform,opacity,clipPath",
          opacity: 1,
        });
        return;
      }

      const context = gsap.context(() => {
        const heroTimeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          delay: 0.08,
        });

        heroImages.forEach((image) => {
          heroTimeline.fromTo(
            image,
            { scale: 1.1, opacity: 0.72 },
            { scale: 1.015, opacity: 1, duration: 2.1, ease: "power2.out" },
            0,
          );
        });

        if (heroElements.length) {
          heroTimeline.fromTo(
            heroElements,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.05,
              stagger: 0.085,
              ease: "power3.out",
            },
            0.18,
          );
        }

        revealElements.forEach((element, index) => {
          const isStructural = !element.hasAttribute("data-reveal");
          const variant = element.dataset.reveal || "up";
          const delay = Number(element.dataset.revealDelay || 0) + (index % 3) * 0.025;

          const from: gsap.TweenVars = {
            opacity: 0,
            y: isStructural ? 22 : 34,
          };

          if (variant === "left") {
            from.x = -38;
            from.y = 0;
          } else if (variant === "right") {
            from.x = 38;
            from.y = 0;
          } else if (variant === "scale") {
            from.scale = 0.965;
            from.y = 16;
          } else if (variant === "clip") {
            from.y = 18;
            from.clipPath = "inset(0 0 100% 0)";
          }

          const to: gsap.TweenVars = {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: isStructural ? 0.82 : variant === "clip" ? 1.15 : 0.95,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          };

          gsap.fromTo(element, from, to);
        });

        parallaxElements.forEach((element) => {
          gsap.fromTo(
            element,
            { yPercent: -3 },
            {
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: element.parentElement || element,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            },
          );
        });
      });

      ScrollTrigger.refresh();

      (window as Window & { __asEximMotionCleanup?: () => void }).__asEximMotionCleanup = () => {
        context.revert();
      };
    });

    return () => {
      window.cancelAnimationFrame(frame);
      const windowWithCleanup = window as Window & { __asEximMotionCleanup?: () => void };
      windowWithCleanup.__asEximMotionCleanup?.();
      delete windowWithCleanup.__asEximMotionCleanup;
    };
  }, [location.pathname]);

  return null;
};

export default ScrollReveal;
