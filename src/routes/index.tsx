import { createFileRoute } from '@tanstack/react-router'
import Servicios from '../sections/servicios/Servicios'
import Unete from '../sections/unirse/Unete'
import Hero from '../sections/hero/Hero'

import MisionVision from '../sections/misionVision/MisionVision'
import Historia from '../sections/historia/Historia'
import SolicitarResidencia from '../sections/residencia/SolicitarResidencia'
import Donar from '../sections/prevDonaciones/Donar'
import CasosExito from '../sections/casosExito/CasosExito'


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Hero/>
      <MisionVision />
      <Servicios />
      <SolicitarResidencia />
      <CasosExito/>
      <Donar/>
      <Historia />
      <Unete />
      {/* Galeria */}
      {/* Footer */}
    </>
  )
}