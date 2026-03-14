import { createFileRoute } from '@tanstack/react-router'
import SectionFormDonacion from '../../sections/formularios/SectionFormDonacion'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import RequisitosDonacion from '../../sections/requisitos/RequisitosDonacion'
import { useFadeIn } from '../../components/useFadeIn'
import Seo from '../../components/Seo'

export const Route = createFileRoute('/formularios/donacion')({
  component: RouteComponent,
})

function RouteComponent() {
  useFadeIn()

  return <div>
    <Seo
      title="Donaciones para Hogar San Blas | Apoya a nuestros adultos mayores"
      description="Realiza tu donación al Hogar San Blas de Nicoya y contribuye al bienestar, alimentación y atención de personas adultas mayores."
      path="/formularios/donacion"
    />
    <Navbar />
    <div className="fade-in-on-scroll">
      <RequisitosDonacion />
    </div>
    <div className="fade-in-on-scroll">
      <SectionFormDonacion />
    </div>
    <div className="fade-in-on-scroll">
      <Footer />
    </div>
  </div>
}