import { createFileRoute } from '@tanstack/react-router'
import Servicios from '../sections/servicios/Servicios'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Servicios />
    </>
  )
}