import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import RequisitosResidencia from '../../sections/requisitos/RequisitosResidencia'
import { useFadeIn } from '../../components/useFadeIn'
import Seo from '../../components/Seo'

// requisitos de residencia
export const Route = createFileRoute('/requisitos/residencia')({
  component: RouteComponent,
})

function RouteComponent() {
  useFadeIn()

  return <>
    <Seo
      title="Requisitos de Residencia | Hogar San Blas de Nicoya"
      description="Consulta los requisitos para solicitar residencia en el Hogar San Blas y conoce el proceso de admisión para personas adultas mayores."
      path="/requisitos/residencia"
    />
    <Navbar />
    <div className="fade-in-on-scroll">
      <RequisitosResidencia />
    </div>
  </>
}
