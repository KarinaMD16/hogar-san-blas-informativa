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
          <Boton where={"/formularios/donacion"}>
            {contentJson.donaciones.botones.botonRequisitos}
          </Boton>
          <Boton where={"/publicaciones/solicitudes-donaciones"}>
            {contentJson.donaciones.botones.botonVerOtras}
          </Boton>
        </div>
      </div>

      <div className="relative lg:w-2xl w-65">
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
          className="flex flex-row gap-5 overflow-x-auto scroll-smooth scrollbar-none px-2 pb-3"
        >
          {donaciones?.map((publicacion: Publicacion) => (
            <CardDonacion key={publicacion.id} publicacion={publicacion} />
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

export default Donar;