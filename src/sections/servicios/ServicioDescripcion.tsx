import type { DescripcionServicioProps } from "../../types/servicios";
import { useState, useEffect } from "react";
import { buildResponsiveSrcSet, transformCloudinaryUrl } from "../../lib/cloudinary";

const ServicioDescripcion = ({ servicio }: DescripcionServicioProps) => {
  const imagenes = servicio.imagenes;
  const [imagenIndex, setImagenIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const cambiarImagen = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setImagenIndex(index);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      cambiarImagen((imagenIndex + 1) % imagenes.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, [imagenIndex, imagenes.length]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full max-w-2xl">
        <img
          className={`transition-opacity duration-500 ease-in-out
            ${fade ? "opacity-100" : "opacity-0"} 
            shadow-sm shadow-night/20 border-2 rounded-xl border-basicWhite object-cover w-60 h-60`}
          src={transformCloudinaryUrl(imagenes[imagenIndex], 480, 480)}
          srcSet={buildResponsiveSrcSet(imagenes[imagenIndex], [
            { width: 240, height: 240 },
            { width: 480, height: 480 },
            { width: 720, height: 720 },
          ])}
          sizes="240px"
          alt={servicio.titulo}
        />
        <div className="text-center sm:text-left">
          <h2 className="font-bold text-2xl sm:text-3xl font-poppins mb-4">
            {servicio.titulo}
          </h2>
          <p className="font-opensans text-md text-justify">
            {servicio.descripcion}
          </p>
        </div>
      </div>

      <div className="bg-basicWhite/70 border border-ecruYellow/30 p-4 rounded-2xl w-full max-w-2xl shadow-sm shadow-night/5">
        <div
          className="
            flex flex-row gap-3 overflow-x-auto justify-around
            [&::-webkit-scrollbar]:h-2.5
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-ecruYellow
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:cursor-grab pb-2
          "
        >
          {imagenes.map((imagen, index) => (
            <img
              onClick={() => cambiarImagen(index)}
              key={index}
              src={transformCloudinaryUrl(imagen, 240, 240)}
              srcSet={buildResponsiveSrcSet(imagen, [
                { width: 120, height: 120 },
                { width: 240, height: 240 },
              ])}
              sizes="(max-width: 640px) 96px, 120px"
              alt={`Imagen de ${servicio.titulo}`}
              className={`object-cover mt-1 mb-1 w-24 h-24 sm:w-30 sm:h-30 rounded-xl flex-shrink-0
                transition hover:scale-105 hover:cursor-pointer 
              ${index === imagenIndex
                  ? "ring-4 ring-ecruYellow shadow-md shadow-night/10"
                  : "opacity-85 hover:opacity-100"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicioDescripcion;