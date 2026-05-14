import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import HeroCentenarios from '../../sections/casosExito/HeroCentenarios'
import ZonaAzul from '../../sections/casosExito/ZonaAzul'
import Centenarios from '../../sections/casosExito/Centenarios'
import { useFadeIn } from "../../components/useFadeIn";
import Seo from '../../components/Seo'

export const Route = createFileRoute('/casosdeexito/')({
  component: RouteComponent,
})

function RouteComponent() {
  useFadeIn();

  return (
    <div>
      <Seo
        title="Casos de Éxito del Hogar San Blas | Centenarios de Nicoya"
        description="Conoce historias de longevidad y bienestar en el Hogar San Blas de Nicoya, una comunidad comprometida con el cuidado integral de adultos mayores."
        path="/casosdeexito"
      />
      <Navbar />
      <main>
        <div className="fade-in-on-scroll">
          <HeroCentenarios />
        </div>
        <div className="fade-in-on-scroll">
          <ZonaAzul />
        </div>
        <div className="fade-in-on-scroll">
          <Centenarios />
        </div>
      </main>
      <div className="fade-in-on-scroll">
        <Footer />
      </div>
    </div>
  )
}

