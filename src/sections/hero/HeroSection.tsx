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

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);

  if (!section) {
    return false;
  }

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });

  return true;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const { contentJson } = useContext(IdiomaContext);

  const DEFAULT_HERO_WIDTH = 960;
  const DEFAULT_HERO_HEIGHT = 540;

  const HERO_SRCSET_VARIANTS = [
    { width: 480, height: 270 },
    { width: 640, height: 360 },
    { width: DEFAULT_HERO_WIDTH, height: DEFAULT_HERO_HEIGHT },
    { width: 1280, height: 720 },
    { width: 1600, height: 900 },
  ];

  const scrollToSectionWhenReady = (sectionId: string) => {
    let attempts = 0;
    const maxAttempts = 30;
    let probeScroll = 0;

    const tryScroll = () => {
      attempts += 1;
      const scrolled = scrollToSection(sectionId);

      if (scrolled) {
        return;
      }

      if (attempts >= maxAttempts) {
        return;
      }

      // Section likely wrapped in a lazy/deferred container that only mounts
      // when its IntersectionObserver intersects the viewport. Probe-scroll
      // down the page in viewport-sized steps to force those sections to mount,
      // then retry until the target appears in the DOM.
      probeScroll += window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight;
      window.scrollTo({
        top: probeScroll > maxScroll ? maxScroll : probeScroll,
        behavior: "auto",
      });

      window.setTimeout(tryScroll, 100);
    };

    tryScroll();
  };

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
        src={transformCloudinaryUrl(contentJson.hero.imagen, DEFAULT_HERO_WIDTH, DEFAULT_HERO_HEIGHT)}
        width={DEFAULT_HERO_WIDTH}
        height={DEFAULT_HERO_HEIGHT}
        srcSet={buildResponsiveSrcSet(contentJson.hero.imagen, HERO_SRCSET_VARIANTS)}
        sizes="(min-width: 1600px) 1600px, 100vw"
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
            ) => {
              const isAnchor = boton.ruta.startsWith('#')

              return (
                <Boton
                  key={idx}
                  where={isAnchor ? undefined : boton.ruta}
                  onClick={isAnchor ? () => scrollToSectionWhenReady(boton.ruta.slice(1)) : undefined}
                  ariaLabel={boton.ariaLabel}
                >
                  <p className="lg:px-2 lg:py-1 text-lg">{boton.texto}</p>
                </Boton>
              )
            })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
