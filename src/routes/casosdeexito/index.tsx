import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import HeroCentenarios from '../../sections/casosExito/HeroCentenarios'
import ZonaAzul from '../../sections/casosExito/ZonaAzul'
import Centenarios from '../../sections/casosExito/Centenarios'
import Divider from '../../components/Divider'

export const Route = createFileRoute('/casosdeexito/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <HeroCentenarios />
      <ZonaAzul />
      <div className="px-25 py-12">
       <div className="w-full h-1 bg-ecruYellow rounded"/>
      </div>
      <Centenarios />
      <Footer />
    </div>
  )
}
