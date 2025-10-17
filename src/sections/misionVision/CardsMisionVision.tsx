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
  "Valores": <BiSolidHeart  className="w-16 h-16 text-amaranthPink" />,
  "Mission": <GiBullseye className="w-16 h-16 text-amaranthPink" />,
  "Vision": <PiBinocularsFill className="w-16 h-16 text-amaranthPink" />,
  "Goals": <SiSearxng className="w-16 h-16 text-amaranthPink" />,
  "Values": <BiSolidHeart  className="w-16 h-16 text-amaranthPink" />
};

const CardsMisionVision = ({ item }: CardMisionVisionProps) => {

  return (
   <div className="flex flex-col border-4 border-amaranthPink rounded-3xl p-6 w-full lg:max-w-[600px] min-h-[230px] bg-white shadow-md">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-4">
          {iconMap[item.titulo] ?? <GiBullseye className="w-12 h-12 text-amaranthPink" />}
        </div>
        <h2 className="font-bold text-xl sm:text-2xl font-poppins pt-1">
          <span className="inline-block border-b-4 border-ecruYellow pb-1">
            {item.titulo}
          </span>
        </h2>
      </div>
      <p className="font-opensans text-md text-justify mt-2">{item.descripcion}</p>
    </div>
  );
}
export default CardsMisionVision;