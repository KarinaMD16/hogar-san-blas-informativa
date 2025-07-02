import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3 className="text-2xl font-poppins font-bold text-amaranthPink">Welcome Home!</h3>
      <h3 className="text-2xl font-poppins font-bold text-ecruYellow">Titulos amarillos</h3>

    </div>
  )
}