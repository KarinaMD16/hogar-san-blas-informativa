import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import { Eventos } from '../../sections/publicaciones/Eventos'
import Footer from '../../components/footer/Footer'
import { useFadeIn } from '../../components/useFadeIn'
import Seo from '../../components/Seo'

export const Route = createFileRoute('/publicaciones/eventos')({
  component: RouteComponent,
})

function RouteComponent() {
  useFadeIn()

  return (
    <div className="flex flex-col justify-between h-screen">
      <Seo
        title="Eventos del Hogar San Blas | Actividades y comunidad"
        description="Descubre los eventos y actividades del Hogar San Blas de Nicoya para apoyar y compartir con nuestras personas adultas mayores."
        path="/publicaciones/eventos"
      />
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
