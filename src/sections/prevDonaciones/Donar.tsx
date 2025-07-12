import { useContext } from "react";
import Boton from "../../components/Boton";
import CardDonacion from "../../components/CardDonacion";
import Divider from "../../components/Divider";
import IdiomaContext from "../../context/language/idiomaContext";
import { useGetDonaciones } from "../../hooks/publicaciones/publicaciones";
import type { Publicacion } from "../../models/publicaciones/publicaciones";

const Donar = () => {
  const {contentJson } = useContext(IdiomaContext);

  const { donaciones } = useGetDonaciones(1, 5);
  return (
    <section className="flex justify-center items-center flex-wrap gap-5">
      <div className="w-md flex flex-col gap-3">
        <h1 className="font-poppins font-bold text-amaranthPink text-2xl sm:text-3xl md:text-4xl text-shadow-md mb-2">
          {contentJson.donaciones.titulo}
        </h1>
        <Divider />
        <p className="text-black font-opensans text-md py-3">{contentJson.donaciones.descripcion}</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Boton children={contentJson.donaciones.botones.botonRequisitos} where={"/formularios/donacion"}/>
          <Boton children={contentJson.donaciones.botones.botonVerOtras} where={"/publicaciones#solicitudes-donaciones"}/>
        </div>
      </div>

      <div className="flex flex-row gap-5 overflow-x-auto justify-around
          scrollbar-thin scrollbar-thumb-ecruYellow scrollbar-track-transparent
          w-2xl pb-3">
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
