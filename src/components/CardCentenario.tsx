import type { CentenarioProps } from "../types/casosdeexito/centenarios";

const CardCentenario = ({ centenario }: CentenarioProps) => {
  return (
    <div
      className="
      relative
      w-72 md:w-80
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
        flex items-center justify-between gap-4
        "
      >
        <div className="flex flex-col gap-1 max-w-2/3">
          <h3 className="font-poppins font-semibold text-lg">
            {centenario.nombre}
          </h3>

          <p className="font-bold text-2xl">
            {centenario.edad} años
          </p>
        </div>

        <p className="text-gray-600 font-medium max-w-1/3">
          {centenario.fecha}
        </p>
      </div>
    </div>
  );
};

export default CardCentenario;