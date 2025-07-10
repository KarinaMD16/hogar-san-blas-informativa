import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/Navbar'

// requisitos de residencia
export const Route = createFileRoute('/requisitos/residencia')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
      <Navbar />
      Hello "/requisitos/residencia"!
  </>
}
