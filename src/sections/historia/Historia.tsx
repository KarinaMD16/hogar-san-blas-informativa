import Boton from "../../components/Boton";
import { getEntidad } from "../../data";


const Historia = () => {
    const historiaJson = getEntidad("historia");
    
  return (
    <section style={{ backgroundImage: `url(${historiaJson.imagen})` }} 
        className="bg-cover bg-center bg-no-repeat h-[500px] flex flex-col flex-wrap
         lg:gap-6 items-center justify-center">
        <h1 className="uppercase text-white text-3xl font-bold text-shadow-md mb-0 leading-tight tracking-tight border-b-4 border-ecruYellow pb-1">
            {historiaJson.introduccion.split("\n")[0]}
        </h1>
        <h1 className="uppercase text-white text-3xl font-bold text-shadow-md mt-0 leading-tight tracking-tight">
            {historiaJson.introduccion.split("\n")[1]}
        </h1>
        <div>
            <Boton  where="/historia">
                <span className="font-medium text-base sm:text-sm md:text-base lg:text-lg">{historiaJson.botonVerMas}</span>
            </Boton>
        </div>
    </section>
  )
}

export default Historia
