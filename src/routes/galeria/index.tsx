import { createFileRoute } from '@tanstack/react-router'

// Galería de imágenes

export const Route = createFileRoute('/galeria/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/galeria/"!</div>
}
