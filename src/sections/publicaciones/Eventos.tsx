import CardPublicacion from "../../components/CardPublicacion";
import { useGetEventos } from "../../hooks/publicaciones/publicaciones";
import type { Publicacion } from "../../models/publicaciones/publicaciones";


export const Eventos = () => {
  const { Eventos } = useGetEventos();
  return (
    <section className="lg:w-6xl md:w-4xl sm:w-3xl flex items-center justify-center flex-col gap-6">
      <h1 className=" text-4xl text-justify font-poppins font-bold text-amaranthPink">
        Nuestros eventos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 
      lg:gap-y-6 md:gap-y-6 sm:gap-6 gap-6
      justify-items-center-safe">
        {Eventos?.map((publicacion: Publicacion) => (
            <CardPublicacion
              key={publicacion.id}
              publicacion={publicacion}
            />
        ))}
      </div>
    </section>
  )
}
