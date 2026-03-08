import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";
import CardCentenario from "../../components/CardCentenario";

const Centenarios = () => {
  const { contentJson } = useContext(IdiomaContext);
  return (
    <div>
        <section className="flex flex-col pt-6 px-25">
          <div className="flex flex-col gap-7">
            <h1 className="font-poppins text-amaranthPink text-3xl sm:text-4xl md:text-5xl font-bold text-left">
              {contentJson.paginaCentenarios.centenarios.residentes.titulo}
            </h1>
            <p className="text-lg text-left font-semibold mb-14">
              {contentJson.paginaCentenarios.centenarios.residentes.subtitulo}
            </p>
          </div>
          <div className="flex justify-center mx-auto">
            <div className="grid grid-cols-2 gap-24">
              {contentJson.paginaCentenarios.centenarios.residentes.lista.map((centenario, index) => (
                <CardCentenario key={index} centenario={centenario} />
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col pt-10 px-25 pb-20">
          <div className="flex flex-col gap-7">
            <h1 className="font-poppins text-amaranthPink text-3xl sm:text-4xl md:text-5xl font-bold text-left">
              {contentJson.paginaCentenarios.centenarios.pasados.titulo}
            </h1>
            <p className="text-lg text-left font-semibold mb-14">
              {contentJson.paginaCentenarios.centenarios.pasados.subtitulo}
            </p>
          </div>
          <div className="flex justify-center mx-auto">
            <div className="grid grid-cols-3 gap-24">
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
