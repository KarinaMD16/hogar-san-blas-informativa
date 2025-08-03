import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";
import SectionRequisitos from "./SectionRequisitos";
import { BiSolidDonateHeart } from "react-icons/bi";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { HiMiniBanknotes } from "react-icons/hi2";
import Boton from "../../components/Boton";
import { PiPaintBrushFill } from "react-icons/pi";

const RequisitosDonacion = () => {
    const { contentJson } = useContext(IdiomaContext);

    return (
        <section className="w-full h-full bg-white">
            <div className="mx-0 sm:mx-8 md:mx-16 lg:mx-30 xl:mx-40 mt-16 sm:mt-20 md:mt-24 flex flex-col gap-16">
                <h1 className="text-3xl lg:text-4xl font-poppins text-amaranthPink font-bold text-left">
                    {contentJson.paginaRequisitosDonacion.donacionArticulos.titulo}
                </h1>
                <SectionRequisitos
                    subtituloPrincipal={contentJson.paginaRequisitosDonacion.donacionArticulos.subtitulo[0]}
                    subtituloSecundario={contentJson.paginaRequisitosDonacion.donacionArticulos.subtitulo[1]}
                    requisitos={contentJson.paginaRequisitosDonacion.donacionArticulos.requisitos}
                />
                <div className="text-left flex flex-col gap-6 sm:ml-5 lg:ml-20">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-poppins text-black font-semibold flex items-center gap-2 2xl:ml-10 flex-wrap">
                        <span>
                        <BiSolidDonateHeart key="check" className="inline-block size-12 mr-3 text-ecruYellow text-lg" />
                        {contentJson.paginaRequisitosDonacion.donacionMonetaria.subtitulo[0]}
                        </span>
                    </h2>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppins text-black font-semibold ml-4 sm:ml-10 2xl:ml-20">
                        {contentJson.paginaRequisitosDonacion.donacionMonetaria.subtitulo[1]}
                    </h3>
                    <div className="flex flex-col gap-6 font-opensans text-black text-left text-md sm:ml-8 2xl:ml-28 w-80 sm:w-full">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <BsTelephoneInboundFill className="text-amaranthPink size-8 sm:size-11 text-lg mt-0.5 shrink-0" />
                            <p className="text-md sm:text-base md:text-lg whitespace-pre-line">{contentJson.paginaRequisitosDonacion.donacionMonetaria.medios[0]}</p>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <HiMiniBanknotes className="text-amaranthPink size-8 sm:size-11 text-lg mt-0.5 shrink-0" />
                            <p className="text-md sm:text-base md:text-lg whitespace-pre-line">{contentJson.paginaRequisitosDonacion.donacionMonetaria.medios[1]}</p>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <HiMiniBanknotes className="text-amaranthPink size-8 sm:size-11 text-lg mt-0.5 shrink-0" />
                            <p className="text-md sm:text-base md:text-lg whitespace-pre-line">{contentJson.paginaRequisitosDonacion.donacionMonetaria.medios[2]}</p>
                        </div>
                    </div>
                </div>
                <div className="text-left flex flex-col gap-6 sm:ml-5 lg:ml-20">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-poppins text-black font-semibold flex items-center gap-2 2xl:ml-10 flex-wrap">
                        <span>
                        <PiPaintBrushFill key="check" className="inline-block size-12 mr-3 text-ecruYellow text-lg" />
                        {contentJson.paginaRequisitosDonacion.donacionTiempo.subtitulo[0]}
                        </span>
                    </h2>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppins text-black font-semibold ml-4 sm:ml-10 2xl:ml-20">
                        {contentJson.paginaRequisitosDonacion.donacionTiempo.subtitulo[1]}
                    </h3>
                    <div className="flex align-center justify-center mt-6">
                        <Boton where={contentJson.paginaRequisitosDonacion.donacionTiempo.boton.ruta}>
                            {contentJson.paginaRequisitosDonacion.donacionTiempo.boton.nombre}
                        </Boton>
                    </div>
                </div>
                <h1 className="text-3xl lg:text-4xl font-poppins text-amaranthPink font-bold text-left">
                    {contentJson.paginaRequisitosDonacion.formulario}
                </h1>
            </div>
        </section>
    );
}
export default RequisitosDonacion;