import { useContext } from "react";
import Boton from "../../components/Boton";
import IdiomaContext from "../../context/language/idiomaContext";
import {
  buildResponsiveSrcSet,
  handleImageProxyError,
  transformCloudinaryUrl,
} from "../../lib/cloudinary";

type HeroSectionProps = {
  className?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const { contentJson } = useContext(IdiomaContext);

  return (
    <section
      className={`
        relative overflow-hidden
        min-h-180 lg:min-h-160 
        flex flex-col justify-end items-start 
        bg-night text-basicWhite 
        sm:px-8 md:px-25
        ${className ?? ""}
      `}
    >
      <img
        data-fallback-src={contentJson.hero.imagen}
        src={transformCloudinaryUrl(contentJson.hero.imagen, 1600, 900)}
        srcSet={buildResponsiveSrcSet(contentJson.hero.imagen, [
          { width: 640, height: 360 },
          { width: 960, height: 540 },
          { width: 1280, height: 720 },
          { width: 1600, height: 900 },
          { width: 1920, height: 1080 },
        ])}
        sizes="100vw"
        onError={handleImageProxyError}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 z-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 flex flex-col gap-y-8 items-start">
        <h2 className="text-shadow-md text-4xl sm:text-5xl md:text-6xl font-poppins font-bold">
          {contentJson.hero.titulo}
        </h2>
        <p className="font-opensans text-justify text-md sm:text-base md:text-lg text-shadow-md mx-auto max-w-3xl mb-6 px-4 lg:leading-7 leading-5">
          {contentJson.hero.descripcion}
        </p>
        <div className="mb-10 flex justify-center gap-4 sm:gap-1 lg:gap-10">
          {contentJson.hero.botones.map(
            (boton: { texto: string; ruta: string; ariaLabel?: string }, idx: number
            ) => (
              <Boton key={idx} where={boton.ruta} ariaLabel={boton.ariaLabel}>
                <p className="lg:px-2 lg:py-1 text-lg">{boton.texto}</p>
              </Boton>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
