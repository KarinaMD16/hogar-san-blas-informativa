import CardsMisionVision from "./CardsMisionVision";
import type { misionVisionItem } from "../../models/misionVision";
import { getEntidad } from "../../data";

const MisionVision = () => {
    const misionVisionjson = getEntidad("misionVision");
    // Convertir el objeto a array de items
  const items: misionVisionItem[] = Object.values(misionVisionjson);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 place-items-center px-4 py-8">
      {items.map((item, index) => (
        <CardsMisionVision key={index} item={item} />
      ))}
    </section>
  );
};

export default MisionVision;