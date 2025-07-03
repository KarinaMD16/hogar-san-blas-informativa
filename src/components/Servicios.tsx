import CardsServicios from "./CardsServicios"
import { getEntidad } from "../data";
import { useState } from "react";
import type { Servicio } from "../models/servicios";
import ServicioDescripcion from "./ServicioDescripcion";

const Servicios = () => {
  const serviciosJson = getEntidad("servicios");
    const [selectedServicio, setSelectedServicio] =  useState<Servicio>(serviciosJson[0]); 

  const showMore = (id: number) => {
  setSelectedServicio(
    serviciosJson.find((s) => s.id === id) ?? serviciosJson[0]
  );
};

    if (!selectedServicio) {
      setSelectedServicio(serviciosJson[0]); 
    }
  
  return (
    <section>
      <h2 className="text-3xl text-justify font-poppins font-bold text-amaranthPink">Nuestros Servicios</h2>

      <div className="flex flex-row flex-wrap items-center justify-evenly mt-4">
        <div className="flex flex-col items-center justify-start gap-y-2 h-96 overflow-y-auto
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-ecruYellow">
            {serviciosJson.map((servicio) => (
              <CardsServicios
                key={servicio.id}
                servicio={servicio}
                showMore={() => showMore(servicio.id)}
              />
            ))}
        </div>
        <div>
          {selectedServicio && <ServicioDescripcion servicio={selectedServicio} />}
        </div>
      </div>
    </section>
  )
}

export default Servicios
