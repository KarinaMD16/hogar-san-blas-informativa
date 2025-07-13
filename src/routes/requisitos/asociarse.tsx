import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'

// requisitos para asociarse

export const Route = createFileRoute('/requisitos/asociarse')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
      <Navbar />
      Hello "/requisitos/asociarse"!
      <Footer />
  </>
}
