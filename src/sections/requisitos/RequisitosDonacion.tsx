import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";
import SectionRequisitos from "./SectionRequisitos";

const RequisitosDonacion = () => {
    const { contentJson } = useContext(IdiomaContext);

    return (
        <section className="w-full h-full bg-white">
            <div className="mx-0 sm:mx-8 md:mx-16 lg:mx-30 xl:mx-40 mt-16 sm:mt-20 md:mt-24 flex flex-col gap-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins text-amaranthPink font-semibold text-left">
                    {contentJson.paginaRequisitosResidencia.titulo}
                </h1>
                <SectionRequisitos
                    subtituloPrincipal={contentJson.paginaRequisitosResidencia.subtitulo[0]}
                    subtituloSecundario={contentJson.paginaRequisitosResidencia.subtitulo[1]}
                    requisitos={contentJson.paginaRequisitosResidencia.requisitos}
                />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins text-amaranthPink font-semibold text-left">
                    Formulario de Donacion
                </h1>
            </div>
        </section>
    );
}
export default RequisitosDonacion;