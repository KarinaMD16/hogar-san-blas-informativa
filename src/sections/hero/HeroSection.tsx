import { useContext } from "react";
import Boton from "../../components/Boton";
import IdiomaContext from "../../context/language/idiomaContext";

const HeroSection = () => {
  const {contentJson } = useContext(IdiomaContext)

  const rutas = ["/historia/", "/contactanos"];

  return (
    <section
      style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${contentJson.hero.imagen})`
      }}
      className="bg-cover bg-center min-h-[650px] flex flex-col justify-end items-start bg-night text-basicWhite px-10 sm:px-8 md:px-25 "
    >
      <div className="flex flex-col gap-y-8 items-start">
        <h2 className="text-shadow-md text-4xl sm:text-5xl md:text-6xl font-poppins font-bold">{contentJson.hero.titulo}</h2>
        <p className="font-opensans text-justify text-md sm:text-base md:text-lg text-shadow-md">{contentJson.hero.descripcion}</p>
        <div className="mt-4 flex justify-center gap-4 sm:gap-1 lg:gap-10">
          {contentJson.hero.botones.map((texto, idx) => (
          <Boton key={idx} where={rutas[idx]}>
            {texto.texto}
          </Boton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
