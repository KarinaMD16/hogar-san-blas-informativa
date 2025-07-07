import Boton from "../../components/Boton";
import Divider from "../../components/Divider";
import { getEntidad } from "../../data"

const CasosExito = () => {
    const casosExitoJson = getEntidad("casosExito");

    return (
        <section className="flex flex-col lg:flex-row items-center justify-evenly max-w-full min-h-[600px] gap-8 p-4 text-center">
            <div className="flex flex-col items-center justify-center z-10 gap-6 max-w-xl">
                <h1 className="uppercase font-poppins font-bold text-amaranthPink text-2xl sm:text-3xl md:text-4xl text-shadow-md mb-2">
                    {casosExitoJson.titulo}
                </h1>
                <Divider/>
                <h2 className="font-bold text-2xl sm:text-3xl font-poppins">
                    {casosExitoJson.subtitulo}
                </h2>
                <p className="text-black font-opensans text-md max-w-xl">
                    {casosExitoJson.descripcion}
                </p>
                <div>
                    <Boton where="/casosdeexito">
                        {casosExitoJson.botonVerMas}
                    </Boton>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img
                    src={casosExitoJson.imagen}
                    alt="Imagen de Casos de Éxito"
                    className="
                      w-[300px] sm:w-[350px] md:w-[400px] 
                      h-[450px] sm:h-[500px] md:h-[550px] 
                      rounded-[25px] 
                      object-cover 
                      shadow-lg
                    "
                />
            </div>
        </section>
    )
}
export default CasosExito;
