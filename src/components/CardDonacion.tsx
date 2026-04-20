import { useContext } from "react";
import IdiomaContext from "../context/language/idiomaContext";
import type { PublicacionProps } from "../types/publicaciones/publicaciones";
import { ArrowRight } from "lucide-react";
import { transformCloudinaryUrl } from "../lib/cloudinary";

const CardDonacion = ({ publicacion }: PublicacionProps) => {
  const { contentJson } = useContext(IdiomaContext);

  return (
    <div
      className="bg-basicWhite p-4 rounded-lg shadow-md hover:shadow-lg 
      transition-shadow duration-300
      w-60 h-90 lg:w-80 lg:h-100 md:w-60 md:h-90 sm:w-50 sm:h-90
      flex flex-col items-center justify-between gap-2
    "
    >

      <div className="flex flex-col gap-2">
        <img
          className="rounded-md h-40 object-cover"
          src={transformCloudinaryUrl(publicacion.imagenUrl, 400, 160)}
          srcSet={`
            ${transformCloudinaryUrl(publicacion.imagenUrl, 200, 160)} 200w,
            ${transformCloudinaryUrl(publicacion.imagenUrl, 400, 160)} 400w,
            ${transformCloudinaryUrl(publicacion.imagenUrl, 800, 320)} 800w
          `}
          sizes="(max-width: 640px) 200px, 320px"
          loading="lazy"
          width={320}
          height={160}
          alt={publicacion.Titulo}
        />
        <div className="flex items-start w-50 sm:w-40 md:w-50 lg:w-3xs">
          <p className="text-sm">{publicacion.fecha}</p>
        </div>
      </div>

      <div>
        <h3 className="mb-2 w-full text-left font-poppins font-bold text-lg">{publicacion.Titulo}</h3>
        <p className="w-full text-left">{publicacion.Descripcion}</p>
      </div>

      <a href="/formularios/donacion#formularioDonacion"
        className=" text-amaranthPink transition-colors duration-300">
        <span className="font-bold text-base sm:text-sm md:text-base lg:text-lg flex items-center gap-2">
          {contentJson.donaciones.botones.botonDonar}
          <ArrowRight />
        </span>
      </a>
    </div>
  );
};

export default CardDonacion;