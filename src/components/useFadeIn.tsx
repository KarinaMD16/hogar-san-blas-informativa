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

      const isInViewport = () => {
        try {
          const r = el.getBoundingClientRect();
          return r.top < window.innerHeight && r.bottom > 0;
        } catch {
          return false;
        }
      };

      if (intersectionObserver) {
        intersectionObserver.observe(el);
      } else {
        // Defer the in-viewport check to the next frame so layout can settle.
        requestAnimationFrame(() => {
          if (intersectionObserver) {
            intersectionObserver.observe(el);
            return;
          }

          if (isInViewport()) {
            el.classList.add("fade-in-visible");
          }
        });
      }
    };

    const observeExistingElements = () => {
      document
        .querySelectorAll<HTMLElement>(".fade-in-on-scroll")
        .forEach(observeElement);
    };

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

    void import("gsap")
      .then(({ default: gsap }) => {
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

     if (isCancelled) {
        intersectionObserver.disconnect();
        return;
      }

      // Initialize observed elements: if some were already marked visible
      // before GSAP loaded, set their GSAP state so GSAP won't hide them.
      observedElements.forEach((el) => {
        if (el.classList.contains("fade-in-visible")) {
          gsap.set(el, { opacity: 1, y: 0, overwrite: "auto" });
        } else {
          intersectionObserver!.observe(el);
        }
      });
      })
      .catch((err) => {
        // If GSAP fails to load (network/chunk error), reveal content
        // so users aren't left looking at invisible elements.
        try {
          observedElements.forEach((el) => {
            el.classList.remove("fade-in-initial");
            el.classList.add("fade-in-visible");
          });
        } catch {
          // ignore DOM errors
        }
        console.warn("Failed to load GSAP for fade-in animations:", err);
      });

    return () => {
      isCancelled = true;
      domObserver?.disconnect();
      intersectionObserver?.disconnect();
    };
  }, [rerunKey]);
};

