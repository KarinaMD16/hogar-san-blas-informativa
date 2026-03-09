import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import { Eventos } from '../../sections/publicaciones/Eventos'
import Footer from '../../components/footer/Footer'
import { useFadeIn } from '../../components/useFadeIn'

export const Route = createFileRoute('/publicaciones/eventos')({
  component: RouteComponent,
})

function RouteComponent() {
  useFadeIn()

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col items-center justify-center fade-in-on-scroll">
        <Navbar />
        <Eventos />
      </div>
      <div className="fade-in-on-scroll">
        <Footer />
      </div>
    </div>
  )
}
