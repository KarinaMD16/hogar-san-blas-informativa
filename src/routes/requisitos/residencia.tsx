import { createFileRoute } from '@tanstack/react-router'

// requisitos de residencia
export const Route = createFileRoute('/requisitos/residencia')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/requisitos/residencia"!</div>
}
