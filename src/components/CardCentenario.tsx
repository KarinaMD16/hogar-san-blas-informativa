import type { CentenarioProps } from "../types/casosdeexito/centenarios";

const CardCentenario = ({ centenario }: CentenarioProps) => {
  return (
    <div
      className="
      bg-basicWhite rounded-3xl shadow-lg overflow-hidden
      w-72 md:w-80 lg:w-88
      h-96 md:h-100 lg:h-80
      flex flex-col
      "
    >
      <img
        className="
        w-full h-36 object-cover
        "
        src={centenario.imagen}
        alt={centenario.nombre}
      />

      <div className="flex flex-col items-center text-center p-6 gap-3">
        <h3 className="font-poppins font-semibold text-2xl">
          {centenario.nombre}
        </h3>

        <p className="text-3xl font-bold">
          {centenario.edad} años
        </p>

        <p className="text-lg text-gray-700 mt-3">
          {centenario.fecha}
        </p>
      </div>
    </div>
  );
};

export default CardCentenario;