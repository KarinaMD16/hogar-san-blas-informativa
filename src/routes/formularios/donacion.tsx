import { createFileRoute } from '@tanstack/react-router'
import SectionFormDonar from '../../sections/formularios/SectionFormDonar'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'

// formulario para hacer una donacion
export const Route = createFileRoute('/formularios/donacion')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <Navbar />
    Hello "/formularios/donacion"!

    <SectionFormDonar/>
    <Footer />
  </div>
}