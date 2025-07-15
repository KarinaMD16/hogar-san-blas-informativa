import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import Contactos from '../../components/contactos/Contactos'

// requisitos para asociarse

export const Route = createFileRoute('/requisitos/asociarse')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
      <Navbar />
      Hello "/requisitos/asociarse"!
      <Contactos className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 mt-100 mx-20"/>
  </>
}
