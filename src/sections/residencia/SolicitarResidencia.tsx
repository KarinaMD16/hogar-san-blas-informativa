import Boton from "../../components/Boton";
import { getEntidad } from "../../data"

const SolicitarResidencia = () => {
    const solicitarResidenciaJson = getEntidad("solicitudResidencia");

    return (
        <section style={{ backgroundImage: `url(${solicitarResidenciaJson.imagen})` }} 
        className="bg-cover bg-center bg-no-repeat
        h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]
        flex flex-col items-center justify-center gap-4
        px-4 text-center">
            <h1 className="uppercase text-amaranthPink text-2xl sm:text-3xl md:text-4xl font-bold text-shadow-md mb-2 leading-tight tracking-tight">
                {solicitarResidenciaJson.titulo}
            </h1>
            <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-1 bg-ecruYellow rounded mb-4 mx-auto"></div>
            <p className="font-opensans text-white text-xs sm:text-sm md:text-base max-w-xl mb-4">
                {solicitarResidenciaJson.descripcion}
            </p>
            <div>
                <Boton  where={"/requisitos/residencia"}>
                    <span className="font-medium text-base sm:text-sm md:text-base lg:text-lg">{solicitarResidenciaJson.boton}</span>
                </Boton>
            </div>
    </section>
    ) 
}
export default SolicitarResidencia;