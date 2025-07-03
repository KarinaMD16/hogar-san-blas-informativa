import CardsServicios from "./CardsServicios"
import { getEntidad } from "../data";
import { useState, type Key } from "react";
import type { Servicio } from "../models/servicios";
import ServicioDescripcion from "./ServicioDescripcion";

const Servicios = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedServicio, setSelectedServicio] = useState<Servicio | null>(null);

  const showMore = (id: number) => {
    setIsOpen(!isOpen);
    setSelectedServicio(servicios.find(servicio => servicio.id === id) || null);
  };
  
  const servicios = getEntidad("servicios");
  
  return (
    <section>
      <h2 className="text-3xl text-justify font-poppins font-bold text-amaranthPink">Nuestros Servicios</h2>

      <div className="flex flex-row items-center justify-evenly mt-4">
        <div className="flex flex-col items-center justify-start gap-y-2 h-96 overflow-y-auto
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-ecruYellow">
            {servicios.map((servicio: Servicio, index: Key) => (
            <CardsServicios key={index} servicio={servicio} showMore={() => showMore(servicio.id)} />
          ))}
        </div>
        <div>
          {isOpen && selectedServicio && <ServicioDescripcion servicio={selectedServicio} />}
        </div>
      </div>
    </section>
  )
}

export default Servicios
