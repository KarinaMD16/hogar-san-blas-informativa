import type { CardServicioProps } from "../../types/servicios";
import { buildResponsiveSrcSet, transformCloudinaryUrl } from "../../lib/cloudinary";

const CardsServicios = ({
  servicio,
  showMore,
  isSelected,
}: CardServicioProps) => {
  return (
    <div
      onClick={showMore}
      className={`
        group cursor-pointer rounded-2xl
        transition-all duration-300 ease-out hover:-translate-y-1

        flex flex-col md:flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-evenly
        gap-3 lg:gap-6 pt-4 pb-4 mt-2 px-4
        min-w-[180px] max-w-xs lg:min-w-0 lg:w-[360px]

        border
        ${isSelected
          ? "bg-basicWhite border-amaranthPink/30 shadow-md shadow-amaranthPink/10"
          : "bg-transparent border-night/10 hover:border-ecruYellow/60 hover:shadow-md hover:shadow-night/10"
        }

        lg:mr-4
      `}
    >
      <img
        src={transformCloudinaryUrl(servicio.imagenPrincipal, 224, 224)}
        srcSet={buildResponsiveSrcSet(servicio.imagenPrincipal, [
          { width: 112, height: 112 },
          { width: 224, height: 224 },
          { width: 336, height: 336 },
        ])}
        sizes="112px"
        alt={servicio.titulo}
        className="
          rounded-xl object-cover w-28 h-28
          border border-night/10
          shadow-sm shadow-night/10
          group-hover:shadow-md group-hover:shadow-night/15 transition
        "
      />

      <div className="text-center lg:text-left">
        <strong
          className={`
            font-opensans text-base block transition
            ${isSelected ? "text-amaranthPink" : "text-night"}
          `}
        >
          {servicio.titulo}
        </strong>
      </div>
    </div>
  );
};

export default CardsServicios;