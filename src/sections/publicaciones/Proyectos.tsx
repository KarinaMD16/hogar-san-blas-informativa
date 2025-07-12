import { MdOutlineFirstPage, MdOutlineLastPage } from "react-icons/md";
import CardPublicacion from "../../components/CardPublicacion";
import { useGetProyectos } from "../../hooks/publicaciones/publicaciones";
import type { Publicacion } from "../../models/publicaciones/publicaciones";
import { useContext, useState } from "react";
import IdiomaContext from "../../context/language/idiomaContext";

const Proyectos = () => {
  const {contentJson} = useContext(IdiomaContext)
  const [page, setPage] = useState(1);
  const limit = 6;

  const { proyectos, total, isPlaceholderData, loadingProyectos, fetchingProyectos } = useGetProyectos(page, limit);

  const totalPages = Math.ceil(total / limit);
  const isLastPage = page >= totalPages;

  const prevPage = () => setPage((p) => Math.max(p - 1, 1));

  const nextPage = () => {
    if (!isPlaceholderData && !isLastPage) {
      setPage((p) => p + 1);
    }
  };

  if (loadingProyectos || fetchingProyectos) return <div className="mt-10 w-screen h-screen">
    <h1 className=" text-4xl text-justify font-poppins font-bold text-amaranthPink">
        {contentJson.titulosSecciones.publicaciones.donaciones}
      </h1>
    <span className="loading loading-spinner text-accent mt-4"></span>
  </div>

  return (
    <section id="proyectos" className="lg:w-6xl md:w-4xl sm:w-3xl flex items-center justify-center flex-col gap-6">
      <h1 className=" text-4xl text-justify font-poppins font-bold text-amaranthPink">
        {contentJson.titulosSecciones.publicaciones.proyectos}
      </h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 
      lg:gap-y-6 md:gap-y-6 sm:gap-6 gap-6
      justify-items-center-safe"
      >
        {proyectos?.map((publicacion: Publicacion) => (
          <CardPublicacion key={publicacion.id} publicacion={publicacion} />
        ))}
      </div>

      {!isPlaceholderData && proyectos.length > 0 && (
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="hover:cursor-pointer disabled:cursor-not-allowed"
          >
            <MdOutlineFirstPage />
          </button>
          <button>Página {page} de {totalPages}</button>
          <button
            onClick={nextPage}
            disabled={isLastPage}
            className="hover:cursor-pointer disabled:cursor-not-allowed"
          >
            <MdOutlineLastPage />
          </button>
        </div>
    )}
    </section>
  );
};

export default Proyectos;
