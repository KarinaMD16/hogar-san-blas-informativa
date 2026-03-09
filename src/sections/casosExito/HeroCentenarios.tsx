import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";

const HeroCentenarios = () => {
    const { contentJson } = useContext(IdiomaContext);
    
    return (
        <section
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${contentJson.paginaCentenarios.hero.imagen})`
        }}
        className="bg-cover bg-center bg-no-repeat  min-h-[720px] lg:min-h-160 
        flex flex-col justify-end items-start 
        bg-night text-basicWhite 
        px-0
        sm:px-8 md:px-25"
    >
        
        <div className="absolute flex flex-col items-baseline w-9/10 sm:w-4/5 text-left gap-5 sm:gap-14 lg:gap-6 xl:gap-10 2xl:gap-14 top-34 sm:top-34 left-4 sm:left-5 xl:px-25">
            <h1 className="font-poppins text-white text-2xl sm:text-3xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-shadow-md leading-tight tracking-normal">
                {contentJson.paginaCentenarios.hero.titulo}
            </h1>
            <p className="font-opensans text-white text-md sm:text-base md:text-lg w-full mt-6">
                {contentJson.paginaCentenarios.hero.texto}
            </p>
            <p className="font-opensans font-bold text-white text-md sm:text-base md:text-lg  sm:w-full mt-4">
                {contentJson.paginaCentenarios.hero.subtitulo}
            </p>
        </div>
    </section>
  );
}
export default HeroCentenarios;