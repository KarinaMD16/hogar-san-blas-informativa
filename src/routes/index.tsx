import { createFileRoute } from '@tanstack/react-router'
import Servicios from '../sections/servicios/Servicios'
import Unete from '../sections/unirse/Unete'
import MisionVision from '../sections/misionVision/MisionVision'
import Historia from '../sections/historia/Historia'
import SolicitarResidencia from '../sections/residencia/SolicitarResidencia'
import Donar from '../sections/prevDonaciones/Donar'
import CasosExito from '../sections/casosExito/CasosExito'
import PreviewGaleria from '../sections/previewGaleria/PreviewGaleria'
import Footer from '../components/footer/Footer'
import HeroSection from '../sections/hero/HeroSection'
import Navbar from '../components/header/Navbar'
import { useFadeIn } from '../components/useFadeIn'


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  useFadeIn();
  return (
    <>
      <Navbar />
      <HeroSection className="fade-in-on-scroll" />
      <MisionVision className="fade-in-on-scroll" />
      <Servicios className="fade-in-on-scroll" />
      <SolicitarResidencia className="fade-in-on-scroll" />
      <CasosExito className="fade-in-on-scroll" />
      <Donar className="fade-in-on-scroll" />
      <Historia className="fade-in-on-scroll" />
      <Unete className="fade-in-on-scroll" />
      <PreviewGaleria className="fade-in-on-scroll" />
      <Footer className="fade-in-on-scroll" />
    </>
  )
}