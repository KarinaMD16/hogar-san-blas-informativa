import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import RequisitosVoluntario from '../../sections/requisitos/RequisitosVoluntario'
import SectionFormVoluntario from '../../sections/formularios/SectionFormVoluntario'
import { useFadeIn } from '../../components/useFadeIn'
import Seo from '../../components/Seo'

// formulario de voluntariado
export const Route = createFileRoute('/formularios/voluntariado')({
  component: RouteComponent,
})

function RouteComponent() {
  useFadeIn()

  return <div>
    <Seo
      title="Voluntariado en Hogar San Blas | Súmate a nuestra misión"
      description="Completa el formulario de voluntariado del Hogar San Blas de Nicoya y participa activamente en el cuidado de adultos mayores."
      path="/formularios/voluntariado"
    />
    <Navbar />
    <main>
      <div className="fade-in-on-scroll">
        <RequisitosVoluntario />
      </div>
      <div className="fade-in-on-scroll">
        <SectionFormVoluntario />
      </div>
    </main>
    <div className="fade-in-on-scroll">
      <Footer />
    </div>
  </div>
}
