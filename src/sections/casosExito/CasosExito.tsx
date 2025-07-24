import { useContext } from "react";
import Boton from "../../components/Boton";
import Divider from "../../components/Divider";
import IdiomaContext from "../../context/language/idiomaContext";

const CasosExito = () => {
  const { contentJson } = useContext(IdiomaContext);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-evenly max-w-full min-h-[600px] gap-8 p-4 text-center">
      <div className="flex flex-col items-center justify-center z-10 gap-6 max-w-xl">
        <h1 className="font-poppins font-bold text-amaranthPink text-2xl sm:text-3xl md:text-4xl text-shadow-md mb-2">
          {contentJson.casosExito.titulo}
        </h1>
        <Divider />
        <h2 className="font-bold text-2xl sm:text-3xl font-poppins">
          {contentJson.casosExito.subtitulo}
        </h2>
        <p className="text-black font-opensans text-md max-w-xl">
          {contentJson.casosExito.descripcion}
        </p>
        <div>
          <Boton where="/casosdeexito">
            {contentJson.casosExito.botonVerMas}
          </Boton>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img
          src={contentJson.casosExito.imagen}
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
  );
};
export default CasosExito;