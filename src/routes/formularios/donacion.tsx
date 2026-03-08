import { createFileRoute } from '@tanstack/react-router'
import SectionFormDonacion from '../../sections/formularios/SectionFormDonacion'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import RequisitosDonacion from '../../sections/requisitos/RequisitosDonacion'
import { useFadeIn } from '../../components/useFadeIn'

export const Route = createFileRoute('/formularios/donacion')({
  component: RouteComponent,
})

function RouteComponent() {
  useFadeIn()

  return <div>
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