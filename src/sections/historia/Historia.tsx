import { useContext } from "react";
import Boton from "../../components/Boton";
import Divider from "../../components/Divider";
import IdiomaContext from "../../context/language/idiomaContext";

const Historia = () => {
  const {contentJson } = useContext(IdiomaContext);
    
  return (
    <section style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${contentJson.historia.imagen})` }} 
    className="bg-cover bg-center bg-no-repeat h-[600px] flex flex-col flex-wrap
    lg:gap-6 items-center justify-center max-w-full p-0 ">
        <h1 className="uppercase text-white text-4xl font-bold text-shadow-md mb-0 leading-tight tracking-tight ">
            {contentJson.historia.titulo}
        </h1>
        <Divider />
        <h2 className="uppercase text-white text-4xl font-bold text-shadow-md mb-0 leading-tight tracking-tight">
            {contentJson.historia.subtitulo}
        </h2>
        <div>
            <Boton where="/historia">
                <span className="font-medium text-base sm:text-sm md:text-base lg:text-lg">{contentJson.historia.botonVerMas}</span>
            </Boton>
        </div>
    </section>
  )
}

export default Historia
