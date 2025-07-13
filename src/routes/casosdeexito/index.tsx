import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'

// casos de éxito

export const Route = createFileRoute('/casosdeexito/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <Navbar />
      Hello "/exito/"!
      <Footer />
      {/* You can add more content or components related to success stories here */}
    </div>
}
