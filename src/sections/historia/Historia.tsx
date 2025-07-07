import Boton from "../../components/Boton";
import Divider from "../../components/Divider";
import { getEntidad } from "../../data";

const Historia = () => {
    const historiaJson = getEntidad("historia");
    
  return (
    <section style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${historiaJson.imagen})` }} 
    className="bg-cover bg-center bg-no-repeat h-[600px] flex flex-col flex-wrap
    lg:gap-6 items-center justify-center max-w-full p-0 ">
        <h1 className="uppercase text-white text-4xl font-bold text-shadow-md mb-0 leading-tight tracking-tight ">
            {historiaJson.titulo}
        </h1>
        <Divider />
        <h2 className="uppercase text-white text-4xl font-bold text-shadow-md mb-0 leading-tight tracking-tight">
            {historiaJson.subtitulo}
        </h2>
        <div>
            <Boton where="/historia">
                <span className="font-medium text-base sm:text-sm md:text-base lg:text-lg">{historiaJson.botonVerMas}</span>
            </Boton>
        </div>
    </section>
  )
}

export default Historia
