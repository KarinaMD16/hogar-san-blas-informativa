import { useContext, useState } from "react";
import CardPublicacion from "../../components/CardPublicacion";
import { useGetEventos } from "../../hooks/publicaciones/publicaciones";
import type { Publicacion } from "../../models/publicaciones/publicaciones";
import { MdOutlineFirstPage, MdOutlineLastPage } from "react-icons/md";
import IdiomaContext from "../../context/language/idiomaContext";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const Eventos = () => {
  const { contentJson, idioma } = useContext(IdiomaContext);
  const [page, setPage] = useState(1);
  const limit = 6;
  const { eventos, total, isPlaceholderData, loadingEventos, fetchingEventos } =
    useGetEventos(page, limit);

  const totalPages = Math.ceil(total / limit);
  const isLastPage = page >= totalPages;
  const noHayContenido = eventos.length === 0;
  const mensajeSinContenido =
    idioma === "es"
      ? "En este momento no hay contenido disponible. Regresa pronto para ver novedades."
      : "There is no content available right now. Please check back soon.";
  const paginaTexto =
    idioma === "es" ? `Pagina ${page} de ${totalPages}` : `Page ${page} of ${totalPages}`;

  const prevPage = () => setPage((p) => Math.max(p - 1, 1));

  const nextPage = () => {
    if (!isPlaceholderData && !isLastPage) {
      setPage((p) => p + 1);
    }
  };

  if (loadingEventos || fetchingEventos)
    return (
      <div className="w-screen h-screen fade-in-on-scroll">
        <div className="mt-40"><LoadingSpinner /></div>
      </div>
    );

  return (
    <section
      id="eventos"
      className="fade-in-on-scroll lg:w-6xl md:w-4xl sm:w-3xl flex items-center justify-center flex-col gap-6 mt-15"
    >
      <h1 className=" text-4xl text-justify font-poppins font-bold text-amaranthPink">
        {contentJson.titulosSecciones.publicaciones.eventos}
      </h1>
      {noHayContenido ? (
        <p className="max-w-xl text-center text-base italic text-night/60 sm:text-lg">
          {mensajeSinContenido}
        </p>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 
      lg:gap-y-6 md:gap-y-6 sm:gap-6 gap-6
      justify-items-center-safe"
        >
          {eventos?.map((publicacion: Publicacion) => (
            <CardPublicacion key={publicacion.id} publicacion={publicacion} />
          ))}
        </div>
      )}
      {!isPlaceholderData && eventos.length > 0 && (
        <div className="mt-2 inline-flex items-center justify-center gap-3 rounded-full border border-ecruYellow300 bg-basicWhite px-3 py-2 shadow-md">
          <button
            onClick={prevPage}
            disabled={page === 1}
            aria-label={idioma === "es" ? "Pagina anterior" : "Previous page"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-amaranthPink text-white transition hover:cursor-pointer hover:bg-amaranthPinkDark disabled:cursor-not-allowed disabled:bg-ecruYellow300 disabled:text-night/55"
          >
            <MdOutlineFirstPage size={20} />
          </button>
          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-night shadow-inner">
            {paginaTexto}
          </span>
          <button
            onClick={nextPage}
            disabled={isLastPage}
            aria-label={idioma === "es" ? "Pagina siguiente" : "Next page"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-amaranthPink text-white transition hover:cursor-pointer hover:bg-amaranthPinkDark disabled:cursor-not-allowed disabled:bg-ecruYellow300 disabled:text-night/55"
          >
            <MdOutlineLastPage size={20} />
          </button>
        </div>
      )}
    </section>
  );
};
