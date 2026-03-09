import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";

const ReseñaFundados = () => {
    const {contentJson } = useContext(IdiomaContext);
    const reseña = contentJson.paginaReseñaHistorica[0];

  return (
    <section
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${contentJson.paginaReseñaHistorica[0].imagen})`
        }}
        className="bg-cover bg-center bg-no-repeat  min-h-[720px] lg:min-h-160 
        flex flex-col justify-end items-start 
        bg-night text-basicWhite 
        px-0.5
        sm:px-0 md:px-25"
    >
        
        <div className="absolute flex flex-col items-baseline w-full sm:w-4/5 text-left gap-6 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 top-30 sm:top-24 md:top-28 lg:top-32 xl:top-36 left-2 sm:left-4 md:left-6 lg:left-8 xl:left-10 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-15">
            <h1 className="font-poppins text-white text-2xl sm:text-3xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-shadow-md leading-tight tracking-normal">
                {reseña.titulo}
            </h1>
            <p className="font-opensans text-white text-md sm:text-base md:text-lg w-full max-w-full">
                {reseña.descripcion[0]}
            </p>
            <p className="font-opensans text-white text-md sm:text-base md:text-lg sm:w-full max-w-full">
                {reseña.descripcion[1]}
            </p>
        </div>
    </section>
  );
}
export default ReseñaFundados;