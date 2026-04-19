import { useContext, useEffect, useRef, useState } from "react";
import Boton from "../../components/Boton";
import CardDonacion from "../../components/CardDonacion";
import Divider from "../../components/Divider";
import IdiomaContext from "../../context/language/idiomaContext";
import { useGetDonaciones } from "../../hooks/publicaciones/publicaciones";
import type { Publicacion } from "../../models/publicaciones/publicaciones";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type DonarProps = {
  className?: string;
};

const Donar: React.FC<DonarProps> = ({ className }) => {
  const { contentJson } = useContext(IdiomaContext);
  const { donaciones } = useGetDonaciones(1, 5);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const item = scrollRef.current;
    if (item) {
      // Batch all geometry reads to avoid forced reflows
      const scrollLeft = item.scrollLeft;
      const clientWidth = item.clientWidth;
      const scrollWidth = item.scrollWidth;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    let frameId = 0;
    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(checkScroll);
    };

    el.addEventListener("scroll", scheduleUpdate, { passive: true });

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(el);

    return () => {
      window.cancelAnimationFrame(frameId);
      el.removeEventListener("scroll", scheduleUpdate);
      resizeObserver.disconnect();
    };
  }, [donaciones]);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`
        flex justify-evenly items-center flex-wrap gap-5
        ${className ?? ""}
      `}
    >
      <div className="w-md flex flex-col gap-3">
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

      <div className="relative lg:w-2xl w-65">
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll("left")}
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
          className="flex flex-row gap-5 overflow-x-auto scroll-smooth scrollbar-none px-2 pb-3"
        >
          {donaciones?.map((publicacion: Publicacion) => (
            <CardDonacion key={publicacion.id} publicacion={publicacion} />
          ))}
        </div>

        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll("right")}
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