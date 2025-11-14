import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";
import SectionRequisitos from "./SectionRequisitos";

const RequisitosVoluntario = () => {
    const { contentJson } = useContext(IdiomaContext);

    return (
        <section className="w-full h-full bg-white">
            <div className="mx-0 sm:mx-8 md:mx-16 lg:mx-30 xl:mx-40 mt-16 sm:mt-20 md:mt-24 flex flex-col gap-16">
                <h1 className="text-3xl lg:text-4xl font-poppins text-amaranthPink font-bold text-left">
                    {contentJson.paginaRequisitosVoluntariado.titulo}
                </h1>
                <SectionRequisitos
                    subtituloPrincipal={contentJson.paginaRequisitosVoluntariado.cumplimientoHoras.subtitulo[0]}
                    subtituloSecundario={contentJson.paginaRequisitosVoluntariado.cumplimientoHoras.subtitulo[1]}
                    requisitos={contentJson.paginaRequisitosVoluntariado.cumplimientoHoras.requisitos}
                />
                <h1 className="text-3xl lg:text-4xl font-poppins text-amaranthPink font-bold text-left">
                    {contentJson.paginaRequisitosVoluntariado.formulario}
                </h1>
            </div>
        </section>
    );
}
export default RequisitosVoluntario;