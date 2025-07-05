import type { DescripcionServicioProps } from "../../types/servicios";
import { useState, useEffect } from "react";

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
          src={imagenes[imagenIndex]} 
          alt={servicio.titulo} 
        />
        <div className="text-center sm:text-left">
          <h2 className="font-bold text-2xl sm:text-3xl font-poppins mb-2">{servicio.titulo}</h2>
          <p className="font-opensans text-md text-justify">{servicio.descripcion}</p>
        </div>
      </div> 

      <div className="bg-antiFlashWhite p-4 rounded-lg mt-4 w-full">
        <div className="flex flex-row gap-3 overflow-x-auto justify-around
            [&::-webkit-scrollbar]:h-2.5
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-ecruYellow 
            [&::-webkit-scrollbar-thumb]:rounded-full pb-2">
          {imagenes.map((imagen, index) => (
            <img
              onClick={() => cambiarImagen(index)}
              key={index} 
              src={imagen} 
              alt={`Imagen de ${servicio.titulo}`} 
              className={`hover:cursor-pointer object-cover w-24 h-24 sm:w-30 sm:h-30 rounded-lg flex-shrink-0 
              ${index === imagenIndex ? 'shadow-sm shadow-night/20 border-3 rounded-xl border-basicWhite ' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicioDescripcion;
