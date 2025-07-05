import CardDonacion from "../../components/CardDonacion";
import { getEntidad } from "../../data";
import { useGetDonaciones } from "../../hooks/publicaciones/publicaciones";
import type { Publicacion } from "../../models/publicaciones/publicaciones";

const Donar = () => {
  const donacionesJson = getEntidad("donaciones");

  const { Donaciones } = useGetDonaciones();
  return (
    <section className="flex justify-center items-center flex-wrap">
      <div className="w-md flex flex-col gap-3">
        <h1 className=" text-4xl font-poppins font-bold text-amaranthPink border-b-4 border-ecruYellow">
        {donacionesJson.titulo}
        </h1>
        <p>{donacionesJson.descripcion}</p>
      </div>

      <div className="flex flex-row gap-5 overflow-x-auto justify-around
            [&::-webkit-scrollbar]:h-2.5
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-ecruYellow 
            [&::-webkit-scrollbar-thumb]:rounded-full pb-2
            w-4xl">
        {Donaciones?.map((publicacion: Publicacion) => (
            <CardDonacion
              key={publicacion.id}
              publicacion={publicacion}
            />
        ))}
      </div>
    </section>
  )
}

export default Donar
