import { createFileRoute } from '@tanstack/react-router'
import Centenarios from '../../sections/casosExito/Centenarios'

export const Route = createFileRoute('/casosdeexito/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Casos de Éxito</h1>
      <p className="text-lg mb-6">Descubre historias inspiradoras de residentes del Hogar San Blas.</p>
      <Centenarios />
    </div>
  )
}
