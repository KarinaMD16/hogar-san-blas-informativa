import type { CardMisionVisionProps } from "../../types/misionVision";
import { PiBinocularsFill } from "react-icons/pi";
import { BiSolidHeart } from "react-icons/bi";
import { GiBullseye } from "react-icons/gi";
import { SiSearxng } from "react-icons/si";
import type { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  "Misión": <GiBullseye className="w-16 h-16 text-amaranthPink" />,
  "Visión": <PiBinocularsFill className="w-16 h-16 text-amaranthPink" />,
  "Objetivos": <SiSearxng className="w-16 h-16 text-amaranthPink" />,
  "Valores": <BiSolidHeart  className="w-16 h-16 text-amaranthPink" />
};

const CardsMisionVision = ({ item }: CardMisionVisionProps) => {

  return (
    <div className="
      flex items-center
      border-4 border-amaranthPink
      rounded-xl p-6 w-full max-w-[500px] min-h-[230px]
      bg-white shadow-md"
    >
      <div className="flex-shrink-0 mr-6">
        {iconMap[item.titulo] ??<GiBullseye className="w-16 h-16 text-amaranthPink" />}
      </div>
      <div className="flex flex-col text-left">
          <h2 className="font-bold text-xl sm:text-2xl font-poppins mb-4">
            <span className="inline-block border-b-4 border-ecruYellow pb-1">
              {item.titulo}
            </span>
          </h2>
          <p className="font-opensans text-md text-justify">{item.descripcion}</p>
        </div>
    </div>
  );
}
export default CardsMisionVision;