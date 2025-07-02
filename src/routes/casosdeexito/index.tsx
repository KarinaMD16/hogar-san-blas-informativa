import { createFileRoute } from '@tanstack/react-router'

// casos de éxito

export const Route = createFileRoute('/casosdeexito/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/exito/"!</div>
}
