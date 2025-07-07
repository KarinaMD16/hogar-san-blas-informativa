import { useState } from "react";
import CardPublicacion from "../../components/CardPublicacion";
import { useGetEventos } from "../../hooks/publicaciones/publicaciones";
import type { Publicacion } from "../../models/publicaciones/publicaciones";
import { MdOutlineFirstPage,MdOutlineLastPage } from "react-icons/md";

export const Eventos = () => {
  const [page, setPage] = useState(1);
  const limit = 6;
  const { Eventos, isPlaceholderData } = useGetEventos(page, limit);

  const noHayMasPaginas = (Eventos?.length ?? 0) < limit;

  const lastPage = () => {
    setPage((old) => Math.max(old - 1, 1));
  };

  const nextPage = () => {
    if (!isPlaceholderData && !noHayMasPaginas) {
      setPage((old) => old + 1);
    }
  };
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
      {Eventos && Eventos.length > 0 && (
        <div className='flex justify-center items-center gap-4'>
          <button
            onClick={lastPage}
            disabled={page === 1}
            className='hover:cursor-pointer disabled:cursor-not-allowed'
          >
            <MdOutlineFirstPage />
          </button>

          <button>
            Página {page}
          </button>

          <button
            onClick={nextPage}
            disabled={noHayMasPaginas || isPlaceholderData}
            className='hover:cursor-pointer disabled:cursor-not-allowed'
          >
            <MdOutlineLastPage />
          </button>
        </div>
      )}
    </section>
  )
}
