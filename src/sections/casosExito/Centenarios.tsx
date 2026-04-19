import { useContext, useEffect, useRef, useState } from "react";
import IdiomaContext from "../../context/language/idiomaContext";
import CardCentenario from "../../components/CardCentenario";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const SCROLL_STEP_PX = 320;

const Centenarios = () => {
  const { contentJson } = useContext(IdiomaContext);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollStateRef = useRef({ left: false, right: false });

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const clientWidth = el.clientWidth;
    const scrollWidth = el.scrollWidth;

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
    const el = scrollRef.current;

    if (!el) return;

    let frameId = 0;
    let ticking = false;

    const scheduleUpdate = () => {
      if (!ticking) {
        ticking = true;
        frameId = window.requestAnimationFrame(() => {
          updateScrollButtons();
          ticking = false;
        });
      }
    };

    updateScrollButtons();

    el.addEventListener("scroll", scheduleUpdate, { passive: true });

    return () => {
      window.cancelAnimationFrame(frameId);
      el.removeEventListener("scroll", scheduleUpdate);
    };
  }, [contentJson]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -SCROLL_STEP_PX : SCROLL_STEP_PX,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-4 pt-120 md:pt-16 xl:pt-8 px-4 xl:px-25">
        <div className="w-full h-1 bg-ecruYellow rounded" />
      </div>

      <section className="flex flex-col pt-12 lg:pt-20 px-4 xl:px-25">
        <div className="flex flex-col gap-7">
          <h1 className="font-poppins text-amaranthPink text-2xl sm:text-3xl md:text-6xl font-bold text-left">
            {contentJson.paginaCentenarios.centenarios.residentes.titulo}
          </h1>

          <p className="text-lg font-semibold mb-14 text-left">
            {contentJson.paginaCentenarios.centenarios.residentes.subtitulo}
          </p>
        </div>

        <div className="flex justify-center mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {contentJson.paginaCentenarios.centenarios.residentes.lista.map(
              (centenario, index) => (
                <CardCentenario key={index} centenario={centenario} />
              )
            )}
          </div>
        </div>
      </section>

      <section className="flex flex-col pt-10 px-4 xl:px-25 pb-20">
        <div className="flex flex-col gap-7">
          <h1 className="font-poppins text-amaranthPink text-2xl sm:text-3xl md:text-6xl font-bold text-left">
            {contentJson.paginaCentenarios.centenarios.pasados.titulo}
          </h1>

          <p className="text-lg font-semibold mb-14 text-left">
            {contentJson.paginaCentenarios.centenarios.pasados.subtitulo}
          </p>
        </div>

        <div className="relative max-w-full mx-auto px-10">

          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              aria-label="Desplazarse a la izquierda en centenarios"
              className="absolute left-0 lg:left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-ecruYellow rounded-full p-2 shadow"
            >
              <FaChevronLeft />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex lg:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-4"
          >
            {contentJson.paginaCentenarios.centenarios.pasados.lista.map(
              (centenario, index) => (
                <div
                  key={index}
                  data-card
                  className="snap-start flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 flex justify-center"
                >
                  <CardCentenario centenario={centenario} />
                </div>
              )
            )}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              aria-label="Desplazarse a la derecha en centenarios"
              className="absolute right-0 lg:right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-ecruYellow rounded-full p-2 shadow"
            >
              <FaChevronRight />
            </button>
          )}

        </div>
      </section>
    </div>
  );
};

export default Centenarios;