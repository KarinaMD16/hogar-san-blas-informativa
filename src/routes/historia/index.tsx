import { createFileRoute } from '@tanstack/react-router'
import ReseñaFundados from '../../sections/reseñaHistorica/ReseñaFundados'
import ReseñaServicio from '../../sections/reseñaHistorica/ReseñaServicio'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer/Footer'

// pagina de reseña historica
export const Route = createFileRoute('/historia/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Navbar />
    <ReseñaFundados />
    <ReseñaServicio />
    <Footer />
    </div>
}
