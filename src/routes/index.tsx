import { createFileRoute } from '@tanstack/react-router'
import Servicios from '../sections/servicios/Servicios'
import Unete from '../sections/unirse/Unete'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
    {/* Hero */}
    {/* Mision Vision */}
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