import Boton from "../../components/Boton";
import { getEntidad } from "../../data";
import type { Hero } from "../../models/sections/hero";

const HeroSection = () => {
  const hero: Hero = getEntidad("hero");

  return (
    <section
      style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${hero.imagen})`
      }}
      className="bg-cover bg-center min-h-[650px] flex flex-col justify-end items-start bg-night text-basicWhite px-10 sm:px-8 md:px-25 "
    >
      <div className="flex flex-col gap-y-8">
      <h2 className="text-shadow-md text-4xl sm:text-5xl md:text-6xl font-poppins font-bold">{hero.titulo}</h2>
      <p className="font-opensans text-md sm:text-base md:text-lg text-shadow-md">{hero.descripcion}</p>
      <div className="mt-4 flex justify-center gap-4 sm:gap-1 lg:gap-10">
        {hero.botones.map(({ texto, ruta }, index) => (
        <Boton key={index} where={ruta}>
          <span className="font-medium text-base sm:text-sm md:text-base lg:text-lg">{texto}</span>
        </Boton>
        ))}
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
