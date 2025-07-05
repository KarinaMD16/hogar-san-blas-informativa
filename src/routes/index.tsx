import { createFileRoute } from '@tanstack/react-router'
import Servicios from '../sections/servicios/Servicios'
import Unete from '../sections/unirse/Unete'
import Hero from '../sections/hero/Hero'

import MisionVision from '../sections/misionVision/MisionVision'
import Historia from '../sections/historia/Historia'
import SolicitarResidencia from '../sections/residencia/SolicitarResidencia'
import Historia from '../sections/historia/Historia'
import Donar from '../sections/prevDonaciones/Donar'


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
    {/* Hero */}
      <Hero/>
      <MisionVision />
      <Servicios />
      <SolicitarResidencia />
    {/* Casos exito */}
    <Donar/>
    <Historia />
    <Unete />
    {/* Galeria */}
    {/* Footer */}
    </>
  )
}