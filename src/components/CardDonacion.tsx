import { useContext } from "react";
import IdiomaContext from "../context/language/idiomaContext";
import type { PublicacionProps } from "../types/publicaciones/publicaciones";
import { ArrowRight } from "lucide-react";
import { transformCloudinaryUrl } from "../lib/cloudinary";

const CardDonacion = ({ publicacion }: PublicacionProps) => {
  const { contentJson } = useContext(IdiomaContext);

  return (
    <div
      className="bg-basicWhite p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg
      transition-shadow duration-300
      w-full max-w-lg sm:w-60 h-auto lg:w-80 md:w-60
      flex flex-col items-center justify-between gap-2
    "
    >

      <div className="flex flex-col gap-2 w-full">
        <img
          className="rounded-md h-32 sm:h-40 object-cover w-full"
          src={transformCloudinaryUrl(publicacion.imagenUrl, 400, 200)}
          srcSet={`
            ${transformCloudinaryUrl(publicacion.imagenUrl, 200, 100)} 200w,
            ${transformCloudinaryUrl(publicacion.imagenUrl, 400, 200)} 400w,
            ${transformCloudinaryUrl(publicacion.imagenUrl, 800, 400)} 800w
          `}
          sizes="(max-width: 640px) 100vw, 320px"
          loading="lazy"
          width={320}
          height={200}
          alt={publicacion.Titulo}
        />
        <div className="flex items-start">
          <p className="text-xs sm:text-sm truncate">{publicacion.fecha}</p>
        </div>
      </div>

      <div className="w-full px-1">
        <h2 className="mb-2 text-left font-poppins font-bold text-sm sm:text-lg line-clamp-3">{publicacion.Titulo}</h2>
        <p className="text-left text-xs sm:text-sm line-clamp-3">{publicacion.Descripcion}</p>
      </div>

      <a href="/formularios/donacion#formularioDonacion"
        className="text-amaranthPink transition-colors duration-300 px-1">
        <span className="font-bold text-xs sm:text-base flex items-center gap-2">
          {contentJson.donaciones.botones.botonDonar}
          <ArrowRight size={16} className="sm:size-5" />
        </span>
      </a>
    </div>
  );
};

export default CardDonacion;