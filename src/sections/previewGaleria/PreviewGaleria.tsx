import { useNavigate } from "@tanstack/react-router";
import { useGetTodasGaleria } from "../../hooks/galeria/galeria";
import { useContext, useEffect, useRef, useState } from "react";
import IdiomaContext from "../../context/language/idiomaContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { cn } from "../../lib/utils";

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

  const checkScroll = () => {
    const item = scrollRef.current;
    if (item) {
      setCanScrollLeft(item.scrollLeft > 0);
      setCanScrollRight(item.scrollLeft + item.clientWidth < item.scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [imagenes]);

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
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-ecruYellow rounded-full p-2 shadow"
          >
            <FaChevronLeft />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex flex-row gap-3 overflow-x-auto scroll-smooth scrollbar-none pb-2"
        >
          {imagenes?.map((imagen, index) => (
            <img
              onClick={() => goToImage(imagen.id)}
              key={index}
              src={imagen.imagenUrl}
              alt=""
              className="hover:cursor-pointer object-cover mb-2 w-60 h-40 sm:w-70 sm:h-45 rounded-lg flex-shrink-0"
            />
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-ecruYellow rounded-full p-2 shadow"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </section>
  );
};

export default PreviewGaleria;
