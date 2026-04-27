import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import Proyectos from '../../sections/publicaciones/Proyectos'
import Footer from '../../components/footer/Footer'
import { useFadeIn } from '../../components/useFadeIn'
import Seo from '../../components/Seo'

export const Route = createFileRoute('/publicaciones/proyectos')({
  component: RouteComponent,
})

function RouteComponent() {
  useFadeIn()

  return (
    <div className="flex flex-col justify-between h-screen">
      <Seo
        title="Proyectos del Hogar San Blas | Iniciativas en Nicoya"
        description="Conoce los proyectos del Hogar San Blas enfocados en mejorar la calidad de vida de las personas adultas mayores de nuestra comunidad."
        path="/publicaciones/proyectos"
      />
      <main className="flex flex-col items-center justify-center">
        <Navbar />
        <Proyectos />
      </main>
      <div className="fade-in-on-scroll">
        <Footer />
      </div>
    </div>
  )
}
