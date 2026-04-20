import { useLayoutEffect } from "react";
import gsap from "gsap";

export const useFadeIn = (rerunKey?: string) => {
  useLayoutEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".fade-in-on-scroll");

    // Add CSS class to set initial state (avoids forced reflow)
    elements.forEach((el) => {
      el.classList.add("fade-in-initial");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            });
          } else {
            // Reset animation when element leaves viewport
            gsap.set(entry.target, {
              opacity: 0,
              y: 40,
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "20% 0px" }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [rerunKey]);
};

