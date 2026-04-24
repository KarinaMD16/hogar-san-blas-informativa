import { useNavigate } from "@tanstack/react-router";
import { useGetTodasGaleria } from "../../hooks/galeria/galeria";
import { useContext, useEffect, useRef, useState } from "react";
import IdiomaContext from "../../context/language/idiomaContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { cn } from "../../lib/utils";
import { buildResponsiveSrcSet, transformCloudinaryUrl } from "../../lib/cloudinary";

type PreviewGaleriaProps = {
  className?: string;
};

const PreviewGaleria: React.FC<PreviewGaleriaProps> = ({ className }) => {
  const { contentJson } = useContext(IdiomaContext);
  const { imagenes } = useGetTodasGaleria(1, 8);

  const navigate = useNavigate();

  const goToGallery = () => {
    navigate({ to: "/galeria", search: { img: undefined } });
  };
  const goToImage = (id: number) => {
    navigate({ to: "/galeria", search: { img: id.toString() } });
  };

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

  useEffect(() => {
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
  }, [imagenes]);

  const scroll = (dir: "left" | "right") => {
    const track = scrollRef.current;
    if (!track) return;

    const firstImage = track.firstElementChild as HTMLElement | null;
    if (!firstImage) return;

    const gap = parseFloat(window.getComputedStyle(track).columnGap || "0");
    const amount = firstImage.getBoundingClientRect().width + gap;

    track.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={cn("flex flex-col gap-6 items-center", className)}>
      <div className="w-full">
        <h1
          onClick={goToGallery}
          className="lg:pl-25 text-4xl text-justify font-poppins font-bold text-amaranthPink hover:cursor-pointer"
        >
          {contentJson.titulosSecciones.Galeria.titulo}
        </h1>
      </div>

      <div className="w-65 sm:w-full lg:w-full relative px-10">
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Desplazarse a la izquierda en la galería"
            title="Desplazarse a la izquierda en la galería"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-ecruYellow rounded-full p-2 shadow"
          >
            <FaChevronLeft aria-hidden="true" />
            <span className="sr-only">Desplazarse a la izquierda en la galería</span>
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex flex-row gap-3 overflow-x-auto scroll-smooth scrollbar-none pb-2 snap-x snap-mandatory"
        >
          {imagenes?.map((imagen, index) => (
            <img
              onClick={() => goToImage(imagen.id)}
              key={index}
              loading="lazy"
              src={transformCloudinaryUrl(imagen.imagenUrl, 560, 320)}
              srcSet={buildResponsiveSrcSet(imagen.imagenUrl, [
                { width: 280, height: 160 },
                { width: 560, height: 320 },
                { width: 840, height: 480 },
              ])}
              sizes="(max-width: 640px) 240px, 280px"
              alt=""
              width={240}
              height={160}
              className="hover:cursor-pointer object-cover mb-2 w-60 h-40 sm:w-70 sm:h-45 rounded-lg shrink-0 snap-start"
            />
          ))}
        </div>

        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Desplazarse a la derecha en la galería"
            title="Desplazarse a la derecha en la galería"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-ecruYellow rounded-full p-2 shadow"
          >
            <FaChevronRight aria-hidden="true" />
            <span className="sr-only">Desplazarse a la derecha en la galería</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default PreviewGaleria;
