
import type { CardServicioProps } from "../types/servicios";

const CardsServicios = ({ servicio, showMore }: CardServicioProps) => {

  return (
    <div onClick={showMore} className="flex flex-row items-center justify-start gap-14 mr-8 p-4 pl-6 w-90 rounded-2xl bg-antiFlashWhite">
      <img
        src={servicio.imagen}
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