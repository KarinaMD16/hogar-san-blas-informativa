import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";

const ZonaAzul = () => {
    const { contentJson } = useContext(IdiomaContext);
  return (
    <section className="bg-white mb-20 md:mb-55 lg:mb-20 xl:mb-8 py-10 lg:py-12 flex flex-col px-4 xl:px-25">
        <h1 className="font-poppins text-amaranthPink text-2xl sm:text-3xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-left mb-10 lg:mb-16">
            {contentJson.paginaCentenarios.zonaAzul.titulo}
        </h1>
        <div className="flex max-h-100 flex-col md:flex-row justify-left gap-8 lg:gap-12">
            <figure className="w-4/5 mx-auto md:w-1/2 xl:w-120 xl:mr-18 flex justify-center">
                <img
                src={contentJson.paginaCentenarios.zonaAzul.imagen}
                alt="Camisa con frase somos zona azul"
                className="rounded-4xl border-4 border-ecruYellow object-cover w-full aspect-square"
                />
            </figure>
            <div className="flex flex-col justify-between md:w-1/2 xl:w-180 gap-8 text-left">
                <p className="text-lg">
                    {contentJson.paginaCentenarios.zonaAzul.descripcion[0]}
                </p>
                <p className="text-lg">
                    {contentJson.paginaCentenarios.zonaAzul.descripcion[1]}
                </p>
            </div>
        </div>
    </section>
  );
};

export default ZonaAzul;