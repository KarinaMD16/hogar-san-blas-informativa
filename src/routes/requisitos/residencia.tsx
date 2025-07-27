import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import RequisitosResidencia from '../../sections/requisitos/RequisitosResidencia'

// requisitos de residencia
export const Route = createFileRoute('/requisitos/residencia')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
      <Navbar />
      <RequisitosResidencia />
  </>
}
