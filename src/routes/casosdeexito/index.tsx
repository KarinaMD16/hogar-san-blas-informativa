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
      <div className="fade-in-on-scroll">
        <HeroCentenarios />
      </div>
      <div className="fade-in-on-scroll">
        <ZonaAzul />
      </div>
      {/*<div className="px-4 mt-142 sm:mt-170 md:mt-75 lg:mt-28 sm:mt-0 xl:px-25 xl:py-12 fade-in-on-scroll">
       <div className="w-full h-1 bg-ecruYellow rounded"/>
      </div>*/}
      <div className="fade-in-on-scroll">
        <Centenarios />
      </div>
      <div className="fade-in-on-scroll">
        <Footer />
      </div>
    </div>
  )
}
