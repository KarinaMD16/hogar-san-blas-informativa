
import type { CardServicioProps } from "../types/servicios";

const CardsServicios = ({ servicio, showMore }: CardServicioProps) => {

  return (
    <div onClick={showMore} className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100  flex flex-row items-center justify-start gap-14 mr-8 p-4 pl-6 w-90 mt-1 rounded-2xl bg-antiFlashWhite hover:bg-ecruYellow300 hover:cursor-pointer">
      <img
        src={servicio.imagenPrincipal}
        alt={servicio.titulo}
        className="shadow-md shadow-night/20 border-2 rounded-xl border-basicWhite object-cover w-32 h-32"
      />

      <div>
        <strong className="font-opensans block mb-1">{servicio.titulo}</strong>
      </div>
    </div>
  );
};

export default CardsServicios;