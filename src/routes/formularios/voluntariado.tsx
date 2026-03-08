import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import RequisitosVoluntario from '../../sections/requisitos/RequisitosVoluntario'
import SectionFormVoluntario from '../../sections/formularios/SectionFormVoluntario'
import { useFadeIn } from '../../components/useFadeIn'

// formulario de voluntariado
export const Route = createFileRoute('/formularios/voluntariado')({
  component: RouteComponent,
})

function RouteComponent() {
  useFadeIn()

  return <div>
    <Navbar />
    <div className="fade-in-on-scroll">
      <RequisitosVoluntario />
    </div>
    <div className="fade-in-on-scroll">
      <SectionFormVoluntario />
    </div>
    <div className="fade-in-on-scroll">
      <Footer />
    </div>
  </div>
}
