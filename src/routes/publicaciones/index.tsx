import { createFileRoute } from '@tanstack/react-router'
import Proyectos from '../../sections/publicaciones/Proyectos'
import Donaciones from '../../sections/publicaciones/Donaciones'
import { Eventos } from '../../sections/publicaciones/Eventos'
import Navbar from '../../components/header/Navbar'

export const Route = createFileRoute('/publicaciones/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-col items-center justify-center mt-15'>
    <Navbar />
    <Donaciones />
    <Eventos />
    <Proyectos />
  </div>
}