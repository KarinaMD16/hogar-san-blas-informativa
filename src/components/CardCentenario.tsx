import type { CentenarioProps } from "../types/casosdeexito/centenarios";

const CardCentenario = ({ centenario }: CentenarioProps) => {
  return (
    <div
      className="
      relative
      w-62 md:w-80
      h-96
      rounded-3xl
      overflow-hidden
      shadow-lg
      "
    >
      <img
        src={centenario.imagen}
        alt={centenario.nombre}
        className="w-full h-full object-cover"
      />

      <div
        className="
        absolute bottom-4 left-4 right-4
        bg-white/95
        backdrop-blur-sm
        rounded-2xl
        p-3
        flex flex-col items-center justify-between gap-4 text-center
        "
      >
        <h2 className="font-poppins font-bold text-sm md:text-lg">
          {centenario.nombre}
        </h2>
        <div className="flex items-center justify-evenly w-full">
          <p className="font-semibold text-md md:text-xl">
              {centenario.edad}
          </p>

          <p className="text-gray-600 font-medium text-xs sm:text-sm max-w-1/3">
            {centenario.fecha}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCentenario;