import { createFileRoute } from '@tanstack/react-router'
import Servicios from '../sections/servicios/Servicios'
import Unete from '../sections/unirse/Unete'
import Hero from '../sections/hero/Hero'
import MisionVision from '../sections/misionVision/MisionVision'

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
    {/* Reseña historica */}
    <Unete />
    {/* Galeria */}
    {/* Footer */}
    </>
  )
}