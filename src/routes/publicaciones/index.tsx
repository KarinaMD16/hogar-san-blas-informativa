import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/publicaciones/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/publicaciones/"!</div>
}
