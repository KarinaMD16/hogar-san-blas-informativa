import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import HeroCentenarios from '../../sections/casosExito/HeroCentenarios'
import ZonaAzul from '../../sections/casosExito/ZonaAzul'
import Centenarios from '../../sections/casosExito/Centenarios'
import { useFadeIn } from "../../components/useFadeIn";

export const Route = createFileRoute('/casosdeexito/')({
  component: RouteComponent,
})

function RouteComponent() {
  useFadeIn();
  
  return (
    <div>
      <Navbar />
      <div className="fade-in-on-scroll">
        <HeroCentenarios />
      </div>
      <div className="fade-in-on-scroll">
        <ZonaAzul />
      </div>
      <div className="px-25 py-12 fade-in-on-scroll">
       <div className="w-full h-1 bg-ecruYellow rounded"/>
      </div>
      <div className="fade-in-on-scroll">
        <Centenarios />
      </div>
      <div className="fade-in-on-scroll">
        <Footer />
      </div>
    </div>
  )
}
