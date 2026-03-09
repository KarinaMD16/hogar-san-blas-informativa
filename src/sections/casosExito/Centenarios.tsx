import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";
import CardCentenario from "../../components/CardCentenario";

const Centenarios = () => {
  const { contentJson } = useContext(IdiomaContext);
  return (
    <div>
      <div className="flex flex-col items-center gap-4 pt-120 md:pt-16 xl:pt-8 px-4 xl:px-25">
        <div className="w-full h-1 bg-ecruYellow rounded"/>
      </div>
        <section className="flex flex-col pt-12 lg:pt-20 xl:pt-20 px-4 xl:px-25">
          <div className="flex flex-col gap-7">
            <h1 className="font-poppins text-amaranthPink text-2xl sm:text-3xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-left">
              {contentJson.paginaCentenarios.centenarios.residentes.titulo}
            </h1>
            <p className="text-lg text-left font-semibold mb-14">
              {contentJson.paginaCentenarios.centenarios.residentes.subtitulo}
            </p>
          </div>
          <div className="flex justify-center mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {contentJson.paginaCentenarios.centenarios.residentes.lista.map((centenario, index) => (
                <CardCentenario key={index} centenario={centenario} />
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col pt-10 px-4 xl:px-25 pb-20">
          <div className="flex flex-col gap-7">
            <h1 className="font-poppins text-amaranthPink text-2xl sm:text-3xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-left">
              {contentJson.paginaCentenarios.centenarios.pasados.titulo}
            </h1>
            <p className="text-lg text-left font-semibold mb-14">
              {contentJson.paginaCentenarios.centenarios.pasados.subtitulo}
            </p>
          </div>
          <div className="flex justify-center mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24">
              {contentJson.paginaCentenarios.centenarios.pasados.lista.map((centenario, index) => (
                <CardCentenario key={index} centenario={centenario} />
              ))}
            </div>
          </div>
        </section>
    </div>
  );
};
export default Centenarios;
