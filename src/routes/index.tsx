import { createFileRoute } from '@tanstack/react-router'
import Servicios from '../sections/servicios/Servicios'
import Unete from '../sections/unirse/Unete'
import Hero from '../sections/hero/Hero'
import MisionVision from '../sections/misionVision/MisionVision'
import Historia from '../sections/historia/Historia'
import SolicitarResidencia from '../sections/residencia/SolicitarResidencia'
import Donar from '../sections/prevDonaciones/Donar'
import CasosExito from '../sections/casosExito/CasosExito'
import PreviewGaleria from '../sections/previewGaleria/PreviewGaleria'
import Footer from '../components/footer/Footer'
import Header from '../components/Header'


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Header />
      <Hero/>
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