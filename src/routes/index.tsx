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


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {

  return (
    <>
      <Navbar />
      <HeroSection/>
      <MisionVision />
      <Servicios />
      <SolicitarResidencia />
      <CasosExito/>
      <Donar/>
      <Historia />
      <Unete />
      <PreviewGaleria/>
      <Footer />
    </>
  )
}