import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import { Eventos } from '../../sections/publicaciones/Eventos'
import Footer from '../../components/footer/Footer'

export const Route = createFileRoute('/publicaciones/eventos')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col items-center justify-center mt-15">
        <Navbar />
        <Eventos />
      </div>
      <Footer />
    </div>
  )
}
