import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/Navbar'

// casos de éxito

export const Route = createFileRoute('/casosdeexito/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <Navbar />
      Hello "/exito/"!</div>
}
