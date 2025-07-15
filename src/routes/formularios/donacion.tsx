import { createFileRoute } from '@tanstack/react-router'
import SectionFormDonar from '../../sections/formularios/SectionFormDonar'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import RequisitosDonacion from '../../sections/requisitos/RequisitosDonacion'

// formulario para hacer una donacion
export const Route = createFileRoute('/formularios/donacion')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <Navbar />
      <RequisitosDonacion />
      <SectionFormDonar/>
      <Footer />
  </div>
}