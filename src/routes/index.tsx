import { createFileRoute } from '@tanstack/react-router'
import Servicios from '../sections/servicios/Servicios'
import Unete from '../sections/unirse/Unete'
import MisionVision from '../sections/misionVision/misionVision'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
    {/* Hero */}
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