import { useLayoutEffect } from "react";

export const useFadeIn = (rerunKey?: string) => {
  useLayoutEffect(() => {
    const observedElements = new Set<HTMLElement>();
    let isCancelled = false;
    let domObserver: MutationObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;

    const observeElement = (el: HTMLElement) => {
      if (observedElements.has(el)) {
        return;
      }

      el.classList.add("fade-in-initial");
      observedElements.add(el);
      intersectionObserver?.observe(el);
    };

    const observeExistingElements = () => {
      document
        .querySelectorAll<HTMLElement>(".fade-in-on-scroll")
        .forEach(observeElement);
    };

    void import("gsap").then(({ default: gsap }) => {
      if (isCancelled) {
        return;
      }

      intersectionObserver = new IntersectionObserver(
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

      observeExistingElements();

      domObserver = new MutationObserver((mutations) => {
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
    });

    return () => {
      isCancelled = true;
      domObserver?.disconnect();
      intersectionObserver?.disconnect();
    };
  }, [rerunKey]);
};

