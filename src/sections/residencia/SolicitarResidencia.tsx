import { useContext } from "react";
import Boton from "../../components/Boton";
import Divider from "../../components/Divider";
import IdiomaContext from "../../context/language/idiomaContext";

type SolicitarResidenciaProps = {
  className?: string;
};

const SolicitarResidencia: React.FC<SolicitarResidenciaProps> = ({ className }) => {
  const { contentJson } = useContext(IdiomaContext);

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${contentJson.solicitudResidencia.imagen})`,
      }}
      className={`
        relative bg-cover bg-center bg-no-repeat 
        min-h-[400px] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] 
        flex flex-col items-center justify-center
        ${className ?? ""}
      `}
    >
      <div className="relative flex flex-col items-center justify-center z-10 gap-6 sm:gap-8 px-2 sm:px-4 md:px-8 text-center w-full max-w-3xl">
        <h1 className="text-amaranthPink text-xl sm:text-2xl md:text-4xl font-bold text-shadow-md mb-2 leading-tight tracking-tight">
          {contentJson.solicitudResidencia.titulo}
        </h1>
        <Divider />
        <p className="font-opensans text-white text-sm sm:text-base md:text-lg max-w-xl">
          {contentJson.solicitudResidencia.descripcion}
        </p>
        <div>
          <Boton where={"/requisitos/residencia"}>
            {contentJson.solicitudResidencia.botonRequisitos}
          </Boton>
        </div>
      </div>
    </section>
  );
};

export default SolicitarResidencia;