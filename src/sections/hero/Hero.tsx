import Boton from "../../components/Boton";
import { getEntidad } from "../../data";
import type { Hero } from "../../models/sections/hero";

const HeroSection = () => {
  const hero: Hero = getEntidad("hero");

  const rutas = ["/historia/", "/contactanos"];

  return (
    <section  style={{ backgroundImage: `url(${hero.imagen})` }}
    className="bg-cover bg-center min-h-[650px] flex flex-col justify-end items-start bg-night text-basicWhite px-10 sm:px-8 md:px-25 ">
      <div className="flex flex-col gap-y-8">
        <h2 className="text-shadow-md text-4xl sm:text-5xl md:text-6xl font-poppins font-bold">{hero.titulo}</h2>
        <p className="text-shadow-md font-poppins text-md sm:text-base md:text-lg">{hero.descripcion}</p>
        <div className="mt-4 flex justify-center gap-4 sm:gap-1 lg:gap-10">
          {hero.botones.map((texto, idx) => (
            <Boton key={idx} where={rutas[idx]}>
              {texto}
            </Boton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
