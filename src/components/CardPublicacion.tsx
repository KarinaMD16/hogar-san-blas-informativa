import { useContext } from "react";
import IdiomaContext from "../context/language/idiomaContext";
import { transformCloudinaryUrl } from "../lib/cloudinary";
import { crearResumen } from "../lib/text.ts";
import type { PublicacionProps } from "../types/publicaciones/publicaciones";
import { Dialog, DialogTrigger } from "./Dialog";
import PublicacionDetalleDialog from "./PublicacionDetalleDialog";

const CardPublicacion = ({ publicacion }: PublicacionProps) => {
  const { contentJson } = useContext(IdiomaContext);
  const botonLeerMas = contentJson.titulosSecciones.publicaciones.botonLeerMas;
  const resumenDescripcion = crearResumen(publicacion.Descripcion, 70);

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
            className="rounded-md h-40 w-full object-cover"
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
          <div className="flex items-start w-full">
            <p className="text-sm">{publicacion.fecha}</p>
          </div>
        </div>

        <div className="w-full px-1">
          <h2 className="text-left font-poppins font-bold sm:text-lg line-clamp-2 sm:line-clamp-3 wrap-break-word m-0">{publicacion.Titulo}</h2>
          <p className="text-left line-clamp-2 sm:line-clamp-3 wrap-break-word text-night/80">{resumenDescripcion}</p>
        </div>

        <div className="mt-auto flex w-full flex-col gap-3">
          <DialogTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-amaranthPink bg-white px-4 py-2 text-sm font-semibold text-amaranthPink transition-colors duration-300 hover:cursor-pointer hover:bg-amaranthPink hover:text-white"
              aria-label={botonLeerMas}
              title={botonLeerMas}
            >
              {botonLeerMas}
            </button>
          </DialogTrigger>
        </div>
      </div>

      <PublicacionDetalleDialog publicacion={publicacion} />
    </Dialog>
  );
};

export default CardPublicacion;
