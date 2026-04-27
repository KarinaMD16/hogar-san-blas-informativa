import { useLayoutEffect } from "react";
import gsap from "gsap";

export const useFadeIn = (rerunKey?: string) => {
  useLayoutEffect(() => {
    const observedElements = new Set<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          gsap.killTweensOf(entry.target);

          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              overwrite: "auto",
            });
          } else {
            // Reset animation when element leaves viewport
            gsap.set(entry.target, {
              opacity: 0,
              y: 40,
              overwrite: "auto",
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px" }
    );

    const observeElement = (el: HTMLElement) => {
      if (observedElements.has(el)) {
        return;
      }

      // Add CSS class to set initial state (avoids forced reflow)
      el.classList.add("fade-in-initial");
      observedElements.add(el);
      observer.observe(el);
    };

    const observeExistingElements = () => {
      document
        .querySelectorAll<HTMLElement>(".fade-in-on-scroll")
        .forEach(observeElement);
    };

    observeExistingElements();

    const domObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (node.classList.contains("fade-in-on-scroll")) {
            observeElement(node);
          }

          node
            .querySelectorAll<HTMLElement>(".fade-in-on-scroll")
            .forEach(observeElement);
        });
      });
    });

    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      domObserver.disconnect();
      observer.disconnect();
    };
  }, [rerunKey]);
};

