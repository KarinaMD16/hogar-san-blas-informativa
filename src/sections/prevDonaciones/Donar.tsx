import Boton from "../../components/Boton";
import CardDonacion from "../../components/CardDonacion";
import Divider from "../../components/Divider";
import { getEntidad } from "../../data";
import { useGetDonaciones } from "../../hooks/publicaciones/publicaciones";
import type { Publicacion } from "../../models/publicaciones/publicaciones";

const Donar = () => {
  const donacionesJson = getEntidad("donaciones");

  const { donaciones } = useGetDonaciones(1, 5);
  return (
    <section className="flex justify-center items-center flex-wrap gap-5">
      <div className="w-md flex flex-col gap-3">
        <h1 className="font-poppins font-bold text-amaranthPink text-2xl sm:text-3xl md:text-4xl text-shadow-md mb-2">
          {donacionesJson.titulo}
        </h1>
        <Divider />
        <p className="text-black font-opensans text-md py-3">{donacionesJson.descripcion}</p>
        <div>
          <Boton children={donacionesJson.botones.botonRequisitos} where={"/formularios/donacion"}/>
        </div>
      </div>

      <div className="flex flex-row gap-5 overflow-x-auto justify-around
            [&::-webkit-scrollbar]:h-2.5
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-ecruYellow 
            [&::-webkit-scrollbar-thumb]:rounded-full pb-3
            [&::-webkit-scrollbar-thumb]:cursor-grab
            w-2xl">
        {donaciones?.map((publicacion: Publicacion) => (
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
