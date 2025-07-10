import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/Navbar'

// formulario de voluntariado
export const Route = createFileRoute('/formularios/voluntariado')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <Navbar />
      Hello "/formularios/voluntariado"!</div>
}
