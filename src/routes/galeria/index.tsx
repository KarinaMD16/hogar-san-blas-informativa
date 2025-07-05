import { createFileRoute } from '@tanstack/react-router'
import Divider from '../../components/Divider'

// Galería de imágenes

export const Route = createFileRoute('/galeria/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-col justify-center items-center'>
      <div className=' flex flex-col lg:w-5xl md:w-4xl sm:w-3xl gap-3 justify-center items-center'>
      <h1 className='text-4xl font-poppins font-bold text-amaranthPink '>Nuestra galeria</h1>
      <Divider/>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
        lg:gap-6 md:gap-4 sm:gap-4 gap-4
        justify-items-center-safe'>
          <img className='rounded-2xl object-cover w-30 h-30 sm:w-30 md:h-50 md:w-50 lg:w-60 lg:h-60' 
          src="https://i.ibb.co/rKZHgRzt/Imagen-de-Whats-App-2025-07-02-a-las-14-30-21-c313da8a.jpg" alt="" />
      </div>
    </div>
  </div>
}
