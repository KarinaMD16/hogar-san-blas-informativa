import { useContext, useEffect, useState } from "react";
import type { Servicio } from "../../models/sections/servicios";
import CardsServicios from "./CardsServicios";
import ServicioDescripcion from "./ServicioDescripcion";
import IdiomaContext from "../../context/language/idiomaContext";

type ServiciosProps = {
  className?: string;
};

const Servicios: React.FC<ServiciosProps> = ({ className }) => {
  const { contentJson } = useContext(IdiomaContext);

  const [selectedServicio, setSelectedServicio] = useState<Servicio>(
    contentJson.servicios[0]
  );

  const showMore = (id: number) => {
    setSelectedServicio(
      contentJson.servicios.find((s) => s.id === id) ?? contentJson.servicios[0]
    );
  };

  if (!selectedServicio) {
    setSelectedServicio(contentJson.servicios[0]);
  }

  useEffect(() => {
    const servicioActual = contentJson.servicios.find(
      (s) => s.id === selectedServicio?.id
    );

    setSelectedServicio(servicioActual ?? contentJson.servicios[0]);
  }, [contentJson, selectedServicio?.id]);

  return (
    <section
      id="seccion-servicios"
      className={`flex flex-col ${className ?? ""}`}
    >
      <h1 className="lg:pl-25 text-4xl text-justify font-poppins font-bold text-amaranthPink">
        {contentJson.titulosSecciones.Servicios}
      </h1>

      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center mt-4 gap-10">
        <div
          className="
            flex flex-row lg:flex-col items-center lg:items-start 
            gap-4 
            overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto 
            max-w-full 
            pb-3 lg:pl-3
            w-full lg:w-auto
            lg:max-h-[520px] 
            scrollbar-thin scrollbar-thumb-ecruYellow scrollbar-track-transparent
          "
        >
          {contentJson.servicios.map((servicio) => (
            <CardsServicios
              key={servicio.id}
              servicio={servicio}
              showMore={() => showMore(servicio.id)}
              isSelected={selectedServicio.id === servicio.id}
            />
          ))}
        </div>

        <div className="w-full lg:w-auto">
          {selectedServicio && (
            <ServicioDescripcion servicio={selectedServicio} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Servicios;