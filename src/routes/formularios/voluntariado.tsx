import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import RequisitosVoluntario from '../../sections/requisitos/RequisitosVoluntario'
import FormularioVoluntariado from '../../components/forms/FormularioVoluntariado'

// formulario de voluntariado
export const Route = createFileRoute('/formularios/voluntariado')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <Navbar />
      <RequisitosVoluntario />
      <FormularioVoluntariado />
      <Footer />
    </div>
}
