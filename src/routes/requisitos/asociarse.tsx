import { createFileRoute } from '@tanstack/react-router'

// requisitos para asociarse

export const Route = createFileRoute('/requisitos/asociarse')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/requisitos/asociarse"!</div>
}
