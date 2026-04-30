import { useContext } from "react";
import IdiomaContext from "../context/language/idiomaContext";
import type { PublicacionProps } from "../types/publicaciones/publicaciones";
import { ArrowRight } from "lucide-react";
import { transformCloudinaryUrl } from "../lib/cloudinary";
import { crearResumen } from "../lib/text.ts";
import { Dialog, DialogTrigger } from "./Dialog";
import PublicacionDetalleDialog from "./PublicacionDetalleDialog";

const CardDonacion = ({ publicacion }: PublicacionProps) => {
  const { contentJson } = useContext(IdiomaContext);
  const resumenDescripcion = crearResumen(publicacion.Descripcion, 90);
  const botonLeerMas = contentJson.titulosSecciones.publicaciones.botonLeerMas;
  const botonDonar = contentJson.donaciones.botones.botonDonar;

  return (
    <Dialog>
      <div
        className="bg-basicWhite p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg
      transition-shadow duration-300
      w-[76vw] max-w-80 sm:w-60 h-auto lg:w-80 md:w-60
      flex-none snap-start
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
            <p className="text-xs sm:text-sm wrap-break-word">{publicacion.fecha}</p>
          </div>
        </div>

        <div className="w-full px-1">
          <h2 className="mb-2 text-left font-poppins font-bold text-sm sm:text-lg line-clamp-2 sm:line-clamp-3 wrap-break-word">{publicacion.Titulo}</h2>
          <p className="text-left text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 wrap-break-word text-night/80">{resumenDescripcion}</p>
        </div>

        <div className="flex w-full flex-col gap-2 px-1">
          <DialogTrigger asChild>
            <button
              type="button"
              className="mb-2 inline-flex items-center gap-1 self-start px-0 py-0 text-xs font-semibold text-amaranthPinkDark underline decoration-amaranthPink/70 decoration-2 underline-offset-4 transition-colors duration-300 hover:cursor-pointer hover:text-amaranthPink sm:text-sm"
              aria-label={botonLeerMas}
              title={botonLeerMas}
            >
              {botonLeerMas}
            </button>
          </DialogTrigger>

          <a
            href="/formularios/donacion#formularioDonacion"
            className="inline-flex items-center justify-center rounded-full bg-amaranthPink px-4 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:cursor-pointer hover:bg-amaranthPinkDark sm:text-sm"
          >
            <span className="flex items-center gap-2 font-bold text-xs sm:text-base">
              {botonDonar}
              <ArrowRight size={16} className="sm:size-5" />
            </span>
          </a>
        </div>
      </div>

      <PublicacionDetalleDialog publicacion={publicacion} />
    </Dialog>
  );
};

export default CardDonacion;