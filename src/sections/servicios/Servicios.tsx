import { getEntidad } from "../../data";
import { useState } from "react";
import type { Servicio } from "../../models/servicios";
import CardsServicios from "./CardsServicios";
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
    <section className="min-h-[700px] flex flex-col">
      <h2 className="text-3xl text-justify font-poppins font-bold text-amaranthPink">Nuestros Servicios</h2>

      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center mt-4 gap-10">
      <div className="
      flex flex-row lg:flex-col 
      items-center lg:items-start 
      gap-4 p-4
      overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto 
      w-full lg:w-auto max-w-full 
      pb-2 pr-4 lg:pr-0 lg:max-h-96 
      [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:lg:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-ecruYellow
    ">

    {serviciosJson.map((servicio) => (
      <CardsServicios
        key={servicio.id}
        servicio={servicio}
        showMore={() => showMore(servicio.id)}
        isSelected={selectedServicio.id === servicio.id}
      />
    ))}
  </div>

  <div className="w-full lg:w-auto">
    {selectedServicio && <ServicioDescripcion servicio={selectedServicio} />}
  </div>
</div>

    </section>
  )
}

export default Servicios

