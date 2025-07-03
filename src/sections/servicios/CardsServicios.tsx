import type { CardServicioProps } from "../../types/servicios";

const CardsServicios = ({ servicio, showMore, isSelected }: CardServicioProps) => {

  return (
      <div
      onClick={showMore}
      className={`
        transition delay-100 duration-300 ease-in-out rounded-2xl cursor-pointer
        flex flex-col md:flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-evenly
        gap-3 lg:gap-6 p-4 mt-1 min-w-[280px] max-w-xs lg:min-w-0 lg:w-[360px] 
        border-4
         ${isSelected 
          ? "border-white bg-antiFlashWhite  hover:bg-ecruYellow300" 
          : "border-antiFlashWhite hover:bg-ecruYellow300 hover:border-white"
        }
        lg:mr-4
      `}
    >
  <img
    src={servicio.imagenPrincipal}
    alt={servicio.titulo}
    className="shadow-md shadow-night/20 border-2 rounded-xl border-basicWhite object-cover w-28 h-28"
  />
  
  <div className="text-center lg:text-left">
    <strong className="font-opensans text-base block">{servicio.titulo}</strong>
  </div>
</div>

  );
};

export default CardsServicios;


