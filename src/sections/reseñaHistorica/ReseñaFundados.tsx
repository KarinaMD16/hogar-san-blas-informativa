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
        className="bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[700px] h-[35vh] sm:h-[40vh] md:h-[60vh] lg:h-[70vh] text-white"
    >
        
        <div className="absolute flex flex-col items-baseline w-9/10 sm:w-4/5 text-left gap-3 sm:gap-14 top-24 sm:top-40 left-4 sm:left-5 px-0">
            <h1 className="font-poppins text-white text-2xl sm:text-3xl md:text-6xl font-bold text-shadow-md leading-tight tracking-normal">
                {reseña.titulo}
            </h1>
            <p className="font-opensans text-white text-md sm:text-base md:text-lg w-full">
                {reseña.descripcion[0]}
            </p>
            <p className="hidden sm:block font-opensans text-white text-md sm:text-base md:text-lg  sm:w-full">
                {reseña.descripcion[1]}
            </p>
        </div>
    </section>
  );
}
export default ReseñaFundados;