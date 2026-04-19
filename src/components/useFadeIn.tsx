import { useLayoutEffect } from "react";
import gsap from "gsap";

export const useFadeIn = (rerunKey?: string) => {
  useLayoutEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".fade-in-on-scroll");

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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "20% 0px" }
    );

    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [rerunKey]);
};

