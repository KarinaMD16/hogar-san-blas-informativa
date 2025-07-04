import { createFileRoute } from '@tanstack/react-router'
import Servicios from '../sections/servicios/Servicios'
import Unete from '../sections/unirse/Unete'
import Historia from '../sections/historia/Historia'
import Hero from '../sections/hero/Hero'
import MisionVision from '../sections/misionVision/misionVision'

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
    {/* Req residencia */}
    {/* Casos exito */}
    {/* Donar */}
    <Historia />
    <Unete />
    {/* Galeria */}
    {/* Footer */}
    </>
  )
}