import { createFileRoute } from '@tanstack/react-router'
import SectionFormDonacion from '../../sections/formularios/SectionFormDonacion'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import RequisitosDonacion from '../../sections/requisitos/RequisitosDonacion'

export const Route = createFileRoute('/formularios/donacion')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <Navbar />
      <RequisitosDonacion />
      <SectionFormDonacion/>
      <Footer />
  </div>
}