import CardsMisionVision from "./CardsMisionVision";
import type { misionVisionItem } from "../../models/sections/misionVision";
import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";

const MisionVision = () => {
    const {contentJson } = useContext(IdiomaContext);
    const items: misionVisionItem[] = Object.values(contentJson.misionVision);

  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-4 lg:gap-x-20">
      {items.map((item, index) => (
        <CardsMisionVision key={index} item={item} />
      ))}
    </section>
  );
};

export default MisionVision;