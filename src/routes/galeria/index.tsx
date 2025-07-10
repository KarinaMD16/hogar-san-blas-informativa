import { createFileRoute } from '@tanstack/react-router'
import Divider from '../../components/Divider'
import { useGetCategorias, useGetImagenesPorCategoria, useGetTodasGaleria } from '../../hooks/galeria/galeria'
import BotonGaleria from '../../components/BotonGaleria'
import { useState } from 'react'
import CardImagenGaleria from '../../components/CardImagenGaleria'
import { MdOutlineLastPage, MdOutlineFirstPage } from "react-icons/md";
import Navbar from '../../components/Navbar'

export const Route = createFileRoute('/galeria/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [selectedBtn, setSelectedBtn] = useState<number | null>(null);
  const { Categorias } = useGetCategorias();
  const [page, setPage] = useState(1);
  const limit = 8;

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

  if (loadingImagenes) return <div>
    Cargrandi
  </div>

  if (isFetching) return <div>
    Cargand
  </div>

  return <div className='flex flex-col justify-center items-center'>
      <Navbar />
      <div className='mt-30 flex flex-col lg:w-5xl md:w-4xl sm:w-3xl gap-3 justify-center items-center'>
      <h1 className='text-4xl font-poppins font-bold text-amaranthPink '>Nuestra galeria</h1>
      <Divider/>
      <div className="flex flex-wrap justify-center gap-2">
          <BotonGaleria
            children="Ver todas"
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
             <CardImagenGaleria imagenes={imagenes} />
        ))}
      </div>

      <div className='flex justify-center items-center gap-4'>
            <button onClick={lastPage} disabled={page === 1} className='hover:cursor-pointer  disabled:cursor-not-allowed'>
              <MdOutlineFirstPage />
            </button>
            <button>
              Página {page}
            </button>
            <button onClick={nextPage} disabled={noHayMasPaginas || isPlaceholderData} 
            className='hover:cursor-pointer disabled:cursor-not-allowed'>
              <MdOutlineLastPage />
            </button>
      </div>
    </div>
  </div>
}
