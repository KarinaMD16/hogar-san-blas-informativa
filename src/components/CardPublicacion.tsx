import type { PublicacionProps } from "../types/publicaciones/publicaciones";

const CardPublicacion = ({ publicacion }: PublicacionProps) => {
  return (
    <div
      className="bg-basicWhite p-4 rounded-lg shadow-md hover:shadow-lg 
    transition-shadow duration-300
      w-60 h-90 lg:w-80 lg:h-100 md:w-60 md:h-90 sm:w-50 sm:h-90
      flex flex-col items-center justify-start gap-4
    "
    >
      <div className="flex flex-col gap-2">
        <img
          className="
        rounded-md h-40 object-cover
        "
          src={publicacion.imagenUrl}
          alt={publicacion.Titulo}
          width={320}
          height={160}
        />
        <div className="flex items-start w-50 sm:w-40 md:w-50 lg:w-3xs">
          <p className="text-sm">{publicacion.fecha}</p>
        </div>
      </div>

      <div className="text-left ">
        <h2 className="mb-2 font-poppins font-bold text-lg">{publicacion.Titulo}</h2>
        <p>{publicacion.Descripcion}</p>
      </div>
    </div>
  );
};

export default CardPublicacion;
