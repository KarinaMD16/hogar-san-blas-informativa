import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Divider from '../../components/Divider'
import { useGetCategorias, useGetImagenesPorCategoria, useGetTodasGaleria } from '../../hooks/galeria/galeria'
import BotonGaleria from '../../components/BotonGaleria'
import { useContext, useEffect, useState } from 'react'
import CardImagenGaleria from '../../components/CardImagenGaleria'
import { MdOutlineLastPage, MdOutlineFirstPage } from "react-icons/md";
import Navbar from '../../components/header/Navbar'
import IdiomaContext from '../../context/language/idiomaContext'
import ModalImagenGaleria from '../../components/ModalGaleria'
import type { Galeria } from '../../models/galeria/galeria'

export const Route = createFileRoute('/galeria/')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      img: typeof search.img === 'string' ? search.img : undefined,
    };
  },
})

function RouteComponent() {
  const { img } = Route.useSearch();
  const {contentJson} = useContext(IdiomaContext)
  const [selectedBtn, setSelectedBtn] = useState<number | null>(null);
  const { Categorias } = useGetCategorias();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const limit = 8;

  const [modalOpen, setModalOpen] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState<Galeria | null>(null);

  const { imagenes : todas, loadingImagenes, isFetching, isPlaceholderData } = useGetTodasGaleria(page, limit);
  const { imagenesPorCategoria: filtradas } = useGetImagenesPorCategoria(selectedBtn ?? 0, page, limit)
 
  const Imagenes = selectedBtn === null ? todas : filtradas
  const noHayMasPaginas = (Imagenes?.length ?? 0) < limit;
 
  const lastPage = () => {
    setPage((old) => Math.max(old - 1, 1))
  }
  
  const nextPage = () => {
    if (!isPlaceholderData && !noHayMasPaginas){
      setPage((old) => old + 1);
    }
  }
  
  const setCategoria = (id: number | null) => {
    setSelectedBtn(id);
    setPage(1);
  }

  const verImagen = (imgId: string) => {
    const foundImage = todas?.find((img) => img.id.toString() === imgId);
    if (foundImage) {
      setImagenSeleccionada(foundImage);
      setModalOpen(true);
    }
  };

  useEffect(() => {
  if (img) {
    verImagen(img);
  }
}, [img]);

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

  if (loadingImagenes || isFetching) return <div>
    <span className="loading loading-spinner"></span>
  </div>

  return <div className='flex flex-col justify-center items-center'>
      <Navbar />
      <div className='mt-30 flex flex-col lg:w-5xl md:w-4xl sm:w-3xl gap-3 justify-center items-center'>
      <h1 className='text-4xl font-poppins font-bold text-amaranthPink '>
        {contentJson.titulosSecciones.Galeria.tituloExtend}
      </h1>
      <Divider/>
      <div className="flex flex-wrap justify-center gap-2">
          <BotonGaleria
            children={contentJson.titulosSecciones.Galeria.filtroTodas}
            isActive={selectedBtn === null}
            toggleCategoria={() => setCategoria(null)}
          />
         
          {Categorias?.map((categoria) => (
            <BotonGaleria
              key={categoria.id}
              children={categoria.nombre}
              isActive={selectedBtn === categoria.id}
              toggleCategoria={() => setCategoria(categoria.id)}
            />
          ))}
      </div>
      
      <p className=" text-night max-w-2xl">
        {selectedBtn === null
          ? "Aquí puedes explorar todas las imágenes de nuestra galería."
          : Categorias?.find(c => c.id === selectedBtn)?.descripcion}
      </p>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
        lg:gap-6 md:gap-4 sm:gap-4 gap-4
        justify-items-center-safe'>
        
        {Imagenes && Imagenes.map((imagenes) => (
            <CardImagenGaleria
              key={imagenes.id}
              imagenes={imagenes}
              toggleModal={handleImagenClick}
            />
          ))}
      </div>

      <div className='flex justify-center items-center gap-4'>
            <button onClick={lastPage} disabled={page === 1} className='hover:cursor-pointer  disabled:cursor-not-allowed'>
              <MdOutlineFirstPage size={20} />
            </button>
            <button>
              Página {page}
            </button>
            <button onClick={nextPage} disabled={noHayMasPaginas || isPlaceholderData} 
            className='hover:cursor-pointer disabled:cursor-not-allowed'>
              <MdOutlineLastPage size={20} />
            </button>
      </div>
    </div>

    <ModalImagenGaleria
        open={modalOpen}
        imagen={imagenSeleccionada}
        onClose={handleCloseModal}
      />
  </div>
}
