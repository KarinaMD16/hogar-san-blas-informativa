import { createFileRoute, useNavigate } from "@tanstack/react-router";
import Divider from "../../components/Divider";
import {
  useGetCategorias,
  useGetImagenesPorCategoria,
  useGetTodasGaleria,
} from "../../hooks/galeria/galeria";
import BotonGaleria from "../../components/BotonGaleria";
import { useContext, useEffect, useState } from "react";
import CardImagenGaleria from "../../components/CardImagenGaleria";
import { MdOutlineLastPage, MdOutlineFirstPage } from "react-icons/md";
import Navbar from "../../components/header/Navbar";
import IdiomaContext from "../../context/language/idiomaContext";
import ModalImagenGaleria from "../../components/ModalGaleria";
import type { Galeria } from "../../models/galeria/galeria";
import { useFadeIn } from "../../components/useFadeIn";
import Seo from "../../components/Seo";

export const Route = createFileRoute("/galeria/")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      img: typeof search.img === "string" ? search.img : undefined,
    };
  },
});

function RouteComponent() {
  const { img } = Route.useSearch();
  const { contentJson, idioma } = useContext(IdiomaContext);
  const [selectedBtn, setSelectedBtn] = useState<number | null>(null);
  const { Categorias } = useGetCategorias();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const limit = 8;

  const [modalOpen, setModalOpen] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState<Galeria | null>(
    null
  );

  const {
    imagenes: todas,
    loadingImagenes,
    isFetching,
    isPlaceholderData,
  } = useGetTodasGaleria(page, limit);
  const { imagenesPorCategoria: filtradas } = useGetImagenesPorCategoria(
    selectedBtn ?? 0,
    page,
    limit
  );

  useFadeIn(
    `${loadingImagenes}-${isFetching}-${page}-${selectedBtn ?? "all"}`
  );

  const Imagenes = selectedBtn === null ? todas : filtradas;
  const noHayContenido = (Imagenes?.length ?? 0) === 0;
  const noHayMasPaginas = (Imagenes?.length ?? 0) < limit;
  const mensajeSinContenido =
    idioma === "es"
      ? "En este momento no hay contenido disponible. Regresa pronto para ver novedades."
      : "There is no content available right now. Please check back soon.";
  const paginaTexto = idioma === "es" ? `Pagina ${page}` : `Page ${page}`;

  const lastPage = () => {
    setPage((old) => Math.max(old - 1, 1));
  };

  const nextPage = () => {
    if (!isPlaceholderData && !noHayMasPaginas) {
      setPage((old) => old + 1);
    }
  };

  const setCategoria = (id: number | null) => {
    setSelectedBtn(id);
    setPage(1);
  };

  useEffect(() => {
    if (!img || !todas) {
      return;
    }

    const foundImage = todas.find((item) => item.id.toString() === img);
    if (foundImage) {
      setImagenSeleccionada(foundImage);
      setModalOpen(true);
    }
  }, [img, todas]);

  const handleImagenClick = (imagen: Galeria) => {
    setImagenSeleccionada(imagen);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setImagenSeleccionada(null);
    navigate({
      replace: true,
    });
  };

  if (loadingImagenes || isFetching)
    return (
      <div className="w-screen h-screen">
        <Navbar />
        <main className="flex items-center justify-center w-full h-[calc(100vh-5rem)]">
          <span className="loading loading-spinner"></span>
        </main>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center">
      <Seo
        title="Galería del Hogar San Blas | Actividades y momentos"
        description="Explora la galería de imágenes del Hogar San Blas de Nicoya y conoce nuestras actividades, espacios y vida comunitaria."
        path="/galeria"
      />
      <Navbar />
      <main>
        <div className="mt-30 flex flex-col lg:w-5xl md:w-4xl sm:w-3xl gap-3 justify-center items-center fade-in-on-scroll">
          <h1 className="text-4xl font-poppins font-bold text-amaranthPink ">
            {contentJson.titulosSecciones.Galeria.tituloExtend}
          </h1>
          <Divider />
          <div className="flex flex-wrap justify-center gap-2">
            <BotonGaleria
              children={contentJson.titulosSecciones.Galeria.filtroTodas}
              isActive={selectedBtn === null}
              toggleCategoria={() => setCategoria(null)}
              ariaLabel="Ver todas las imágenes de la galería"
            />

            {Categorias?.map((categoria) => (
              <BotonGaleria
                key={categoria.id}
                children={categoria.nombre}
                isActive={selectedBtn === categoria.id}
                toggleCategoria={() => setCategoria(categoria.id)}
                ariaLabel={`Filtrar galería por categoría: ${categoria.nombre}`}
              />
            ))}
          </div>

          <p className=" text-night max-w-2xl">
            {selectedBtn === null
              ? "Aquí puedes explorar todas las imágenes de nuestra galería."
              : Categorias?.find((c) => c.id === selectedBtn)?.descripcion}
          </p>

          {noHayContenido ? (
            <p className="max-w-xl text-center text-base italic text-night/60 sm:text-lg">
              {mensajeSinContenido}
            </p>
          ) : (
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
        lg:gap-6 md:gap-4 sm:gap-4 gap-4
        justify-items-center-safe"
            >
              {Imagenes &&
                Imagenes.map((imagenes) => (
                  <CardImagenGaleria
                    key={imagenes.id}
                    imagenes={imagenes}
                    toggleModal={handleImagenClick}
                  />
                ))}
            </div>
          )}

          {Imagenes && Imagenes.length > 0 && (
            <div className="mt-2 inline-flex items-center justify-center gap-3 rounded-full border border-ecruYellow300 bg-basicWhite px-3 py-2 shadow-md">
              <button
                onClick={lastPage}
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
                disabled={noHayMasPaginas || isPlaceholderData}
                aria-label={idioma === "es" ? "Pagina siguiente" : "Next page"}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-amaranthPink text-white transition hover:cursor-pointer hover:bg-amaranthPinkDark disabled:cursor-not-allowed disabled:bg-ecruYellow300 disabled:text-night/55"
              >
                <MdOutlineLastPage size={20} />
              </button>
            </div>
          )}
        </div>
      </main>

      <ModalImagenGaleria
        open={modalOpen}
        imagen={imagenSeleccionada}
        onClose={handleCloseModal}
      />
    </div>
  );
}
