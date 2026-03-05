import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import RequisitosResidencia from '../../sections/requisitos/RequisitosResidencia'
import { useFadeIn } from '../../components/useFadeIn'

// requisitos de residencia
export const Route = createFileRoute('/requisitos/residencia')({
  component: RouteComponent,
})

function RouteComponent() {
  useFadeIn()

  return <>
    <Navbar />
    <div className="fade-in-on-scroll">
      <RequisitosResidencia />
    </div>
  </>
}
