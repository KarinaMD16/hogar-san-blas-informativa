import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";

const ReseñaServicio = () => {
  const {contentJson } = useContext(IdiomaContext);
  const reseña = contentJson.paginaReseñaHistorica[1];

  return (
    <section className="px-4 md:px-10 py-4 sm:py-10 bg-white">
      <div className="block sm:hidden mb-8">
        <p className="font-opensans text-black text-left font-semibold text-sm w-full">
          {contentJson.paginaReseñaHistorica[0].descripcion[1]}
        </p>
      </div>
      <div className="flex flex-col gap-10 ">
        <h1 className="font-poppins text-left text-amaranthPink text-2xl sm:text-3xl md:text-6xl font-bold leading-tight tracking-normal">
          {reseña.titulo}
        </h1>

        <div className="flex flex-col md:flex-row gap-10 md:justify-between xl:mx-18">
          <p className="font-opensans text-left text-black font-semibold text-sm sm:text-xl md:text-lg md:w-1/2 xl:mt-18 xl:ml-18">
            {reseña.descripcion[0]}
          </p>
          <figure className="md:w-1/2 xl:w-180 xl:mr-18 flex justify-center">
            <img
              src={reseña.imagen}
              alt="Adulta mayor con collar de flores sonriendo"
              className="rounded-4xl border-4 border-ecruYellow object-cover md:h-84 md:w-120 xl:h-64 xl:w-180"
            />
          </figure>
        </div>

        <p className="font-opensans text-left text-black font-semibold text-sm sm:text-xl md:text-lg w-full">
            {reseña.descripcion[1]}
        </p>
      </div>
      <div>
        
      </div>
    </section>
  );
}
export default ReseñaServicio;