import { useContext } from "react";
import Contactos from "../../components/contactos/Contactos";
import IdiomaContext from "../../context/language/idiomaContext";
import { AiFillCheckCircle } from "react-icons/ai";
import Requisitos from "./Requisitos";

const RequisitosResidencia = () => {
    const { contentJson } = useContext(IdiomaContext);

    return (
        <section className="w-full h-full bg-white">
            <div className="mx-0 sm:mx-8 md:mx-16 lg:mx-30 xl:mx-40 mt-16 sm:mt-20 md:mt-24 flex flex-col gap-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins text-amaranthPink font-semibold text-left">
                    {contentJson.paginaRequisitosResidencia.titulo}
                </h1>
                <div className="text-left flex flex-col gap-6 sm:ml-5 lg:ml-20">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins text-black font-semibold flex items-center gap-2 2xl:ml-10 flex-wrap">
                        <span>
                        <AiFillCheckCircle key="check" className="inline-block size-12 mr-3 text-ecruYellow text-lg" />
                        {contentJson.paginaRequisitosResidencia.subtitulo[0]}
                        </span>
                    </h2>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppins text-black font-semibold ml-4 sm:ml-10 2xl:ml-20">
                        {contentJson.paginaRequisitosResidencia.subtitulo[1]}
                    </h3>
                    <Requisitos
                        items={contentJson.paginaRequisitosResidencia.requisitos}               
                    />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins text-amaranthPink font-semibold text-left">
                    {contentJson.paginaRequisitosResidencia.mensaje}
                </h1>
                <Contactos className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 mt-8"/>
            </div>
        </section>
    );
}
export default RequisitosResidencia;