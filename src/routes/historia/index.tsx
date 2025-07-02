import { createFileRoute } from '@tanstack/react-router'

// pagina de reseña historica
export const Route = createFileRoute('/historia/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/historia/"!</div>
}
