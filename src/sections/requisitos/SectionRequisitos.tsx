import { AiFillCheckCircle } from "react-icons/ai";
import Requisitos from "./Requisitos";
import type { SectionRequisitosProps } from "../../types/requisitos/requisitos";

const SectionRequisitos = ({ subtituloPrincipal, subtituloSecundario, requisitos }: SectionRequisitosProps) => {
   return (
        <div className="text-left flex flex-col gap-6 sm:ml-5 lg:ml-20">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins text-black font-semibold flex items-center gap-2 2xl:ml-10 flex-wrap">
                        <span>
                        <AiFillCheckCircle key="check" className="inline-block size-12 mr-3 text-ecruYellow text-lg" />
                        {subtituloPrincipal}
                        </span>
                    </h2>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppins text-black font-semibold ml-4 sm:ml-10 2xl:ml-20">
                        {subtituloSecundario}
                    </h3>
                    <Requisitos items={requisitos} />
                </div>
    )
}
export default SectionRequisitos;