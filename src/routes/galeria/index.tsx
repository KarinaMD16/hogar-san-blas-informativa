import { createFileRoute } from '@tanstack/react-router'
import Divider from '../../components/Divider'

// Galería de imágenes

export const Route = createFileRoute('/galeria/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex gap-2 flex-col'>
    <h1 className='text-4xl font-poppins font-bold text-amaranthPink'>Nuestra galeria</h1>
    <Divider/>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
      lg:gap-y-6 md:gap-y-6 sm:gap-6 gap-6
      justify-items-center-safe'>
        <img className='object-cover w-md h-md' src="https://i.ibb.co/rKZHgRzt/Imagen-de-Whats-App-2025-07-02-a-las-14-30-21-c313da8a.jpg" alt="" />
        
    </div>
  </div>
}
