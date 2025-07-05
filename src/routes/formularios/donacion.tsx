import { createFileRoute } from '@tanstack/react-router'
import SectionFormDonar from '../../sections/formularios/SectionFormDonar'

// formulario para hacer una donacion
export const Route = createFileRoute('/formularios/donacion')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    Hello "/formularios/donacion"!

    <SectionFormDonar/>
  </div>
}