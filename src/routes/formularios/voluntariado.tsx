import { createFileRoute } from '@tanstack/react-router'

// formulario de voluntariado
export const Route = createFileRoute('/formularios/voluntariado')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/formularios/voluntariado"!</div>
}
