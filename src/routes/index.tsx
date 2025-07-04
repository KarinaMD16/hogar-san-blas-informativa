import { createFileRoute } from '@tanstack/react-router'
import Servicios from '../sections/servicios/Servicios'
import Unete from '../sections/unirse/Unete'
<<<<<<< HEAD
import Historia from '../sections/historia/Historia'
=======
import Hero from '../sections/hero/Hero'
>>>>>>> a07758e9a0b57032a004acf47b9f092080b23717

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
    {/* Hero */}
      <Hero/>
    {/* Mision Vision */}
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