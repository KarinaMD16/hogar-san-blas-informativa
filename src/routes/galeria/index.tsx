import { createFileRoute } from '@tanstack/react-router'
import Divider from '../../components/Divider'
import { useGetCategorias, useGetImagenesPorCategoria, useGetTodasGaleria } from '../../hooks/galeria/galeria'
import BotonGaleria from '../../components/BotonGaleria'
import { useState } from 'react'

export const Route = createFileRoute('/galeria/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [selectedBtn, setSelectedBtn] = useState<number | null>(null)
  const { Categorias } = useGetCategorias()
  
  const { Imagenes: todas } = useGetTodasGaleria()
  const { imagenesPorCategoria: filtradas } = useGetImagenesPorCategoria(selectedBtn ?? 0)
  
  const Imagenes = selectedBtn === null ? todas : filtradas

  return <div className='flex flex-col justify-center items-center'>
      <div className=' flex flex-col lg:w-5xl md:w-4xl sm:w-3xl gap-3 justify-center items-center'>
      <h1 className='text-4xl font-poppins font-bold text-amaranthPink '>Nuestra galeria</h1>
      <Divider/>
      <div className="flex flex-wrap justify-center gap-2">
          <BotonGaleria
            children="Ver todas"
            isActive={selectedBtn === null}
            toggleCategoria={() => setSelectedBtn(null)}
          />

          {Categorias?.map((categoria) => (
            <BotonGaleria
              key={categoria.id}
              children={categoria.nombre}
              isActive={selectedBtn === categoria.id}
              toggleCategoria={() => setSelectedBtn(categoria.id)}
            />
          ))}
        </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
        lg:gap-6 md:gap-4 sm:gap-4 gap-4
        justify-items-center-safe'>
         
      {Imagenes && Imagenes.map((imagenes) => (              
             <img className='rounded-2xl object-cover w-30 h-30 sm:w-30 md:h-50 md:w-50 lg:w-60 lg:h-60' 
          src={imagenes.imagenUrl} alt="" />
          ))}
      </div>
    </div>
  </div>
}
