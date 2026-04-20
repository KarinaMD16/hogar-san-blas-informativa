import { useContext, useEffect, useRef, useState } from "react";
import Boton from "../../components/Boton";
import CardDonacion from "../../components/CardDonacion";
import Divider from "../../components/Divider";
import IdiomaContext from "../../context/language/idiomaContext";
import { useGetDonaciones } from "../../hooks/publicaciones/publicaciones";
import type { Publicacion } from "../../models/publicaciones/publicaciones";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { gsap } from "gsap";

type DonarProps = {
  className?: string;
};

const Donar: React.FC<DonarProps> = ({ className }) => {
  const { contentJson } = useContext(IdiomaContext);
  const { donaciones } = useGetDonaciones(1, 5);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollStateRef = useRef({ left: false, right: false });
  const dimensionsRef = useRef({ clientWidth: 0, scrollWidth: 0 });

  const checkScroll = () => {
    const item = scrollRef.current;
    if (!item) return;

    const scrollLeft = item.scrollLeft;
    // Use cached dimensions instead of reading properties
    const { clientWidth, scrollWidth } = dimensionsRef.current;

    const newCanScrollLeft = scrollLeft > 0;
    const newCanScrollRight = scrollLeft + clientWidth < scrollWidth;

    // Only update state if values changed
    if (
      scrollStateRef.current.left !== newCanScrollLeft ||
      scrollStateRef.current.right !== newCanScrollRight
    ) {
      scrollStateRef.current = {
        left: newCanScrollLeft,
        right: newCanScrollRight,
      };
      setCanScrollLeft(newCanScrollLeft);
      setCanScrollRight(newCanScrollRight);
    }
  };

  useEffect(() => {
    const updateDimensions = () => {
      const item = scrollRef.current;
      if (!item) return;

      // Cache dimensions to avoid repeated layout reads
      dimensionsRef.current = {
        clientWidth: item.clientWidth,
        scrollWidth: item.scrollWidth,
      };
      checkScroll();
    };

    updateDimensions();
    const el = scrollRef.current;
    if (!el) return;

    let frameId = 0;
    let ticking = false;

    const scheduleUpdate = () => {
      if (!ticking) {
        ticking = true;
        frameId = window.requestAnimationFrame(() => {
          checkScroll();
          ticking = false;
        });
      }
    };

    el.addEventListener("scroll", scheduleUpdate, { passive: true });

    // Handle window resize to update cached dimensions
    const handleResize = () => {
      updateDimensions();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      el.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", handleResize);
    };
  }, [donaciones]);

  const animateArrowButton = (buttonEl?: HTMLButtonElement) => {
    if (!buttonEl) return;

    gsap.killTweensOf(buttonEl);
    gsap.fromTo(
      buttonEl,
      { scale: 1 },
      {
        scale: 0.86,
        duration: 0.12,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      },
    );
  };

  const animateTrackNudge = (dir: "left" | "right") => {
    const track = scrollRef.current;
    if (!track) return;

    gsap.killTweensOf(track);
    gsap.fromTo(
      track,
      { x: 0 },
      {
        x: dir === "left" ? 8 : -8,
        duration: 0.12,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      },
    );
  };

  const scroll = (dir: "left" | "right", buttonEl?: HTMLButtonElement) => {
    if (!scrollRef.current) return;

    const firstCard = scrollRef.current.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    animateArrowButton(buttonEl);
    animateTrackNudge(dir);

    const gap = parseFloat(window.getComputedStyle(scrollRef.current).columnGap || "0");
    const amount = firstCard.getBoundingClientRect().width + gap;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`
        flex justify-evenly items-center flex-wrap gap-5
        ${className ?? ""}
      `}
    >
      <div className="w-md flex flex-col gap-3 text-center">
        <h1 className="font-poppins font-bold text-amaranthPink text-2xl sm:text-3xl md:text-4xl text-shadow-md mb-2">
          {contentJson.donaciones.titulo}
        </h1>
        <Divider />
        <p className="text-black font-opensans text-md py-3">
          {contentJson.donaciones.descripcion}
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Boton where={"/formularios/donacion"} ariaLabel={contentJson.donaciones.botones.botonRequisitosAriaLabel}>
            {contentJson.donaciones.botones.botonRequisitos}
          </Boton>
          <Boton where={"/publicaciones/solicitudes-donaciones"} ariaLabel={contentJson.donaciones.botones.botonVerOtrasAriaLabel}>
            {contentJson.donaciones.botones.botonVerOtras}
          </Boton>
        </div>
      </div>

      <div className="relative w-full max-w-md md:max-w-2xl px-2 md:px-10 lg:px-12">
        {canScrollLeft && (
          <button
            type="button"
            onClick={(event) => scroll("left", event.currentTarget)}
            aria-label="Desplazarse a la izquierda en la galería de donaciones"
            title="Desplazarse a la izquierda en la galería de donaciones"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-ecruYellow rounded-full p-2 shadow"
          >
            <FaChevronLeft aria-hidden="true" />
            <span className="sr-only">Desplazarse a la izquierda en la galería de donaciones</span>
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex flex-row gap-4 overflow-x-auto scroll-smooth scrollbar-none pb-3"
        >
          {donaciones?.map((publicacion: Publicacion) => (
            <CardDonacion key={publicacion.id} publicacion={publicacion} />
          ))}
        </div>

        {canScrollRight && (
          <button
            type="button"
            onClick={(event) => scroll("right", event.currentTarget)}
            aria-label="Desplazarse a la derecha en la galería de donaciones"
            title="Desplazarse a la derecha en la galería de donaciones"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-ecruYellow rounded-full p-2 shadow"
          >
            <FaChevronRight aria-hidden="true" />
            <span className="sr-only">Desplazarse a la derecha en la galería de donaciones</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default Donar;