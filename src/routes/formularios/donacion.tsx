import { createFileRoute } from '@tanstack/react-router'

// formulario para hacer una donacion
export const Route = createFileRoute('/formularios/donacion')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/formularios/donacion"!</div>
}
