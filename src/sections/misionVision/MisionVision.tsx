import CardsMisionVision from "./CardsMisionVision";
import type { misionVisionItem } from "../../models/misionVision";
import { getEntidad } from "../../data";

const MisionVision = () => {
    const misionVisionjson = getEntidad("misionVision");
    // Convertir el objeto a array de items
  const items: misionVisionItem[] = Object.values(misionVisionjson);

  return (
    <section className="hidden lg:grid lg:grid-cols-2 lg:gap-6 lg:place-items-center">
      {items.map((item, index) => (
        <CardsMisionVision key={index} item={item} />
      ))}
    </section>
  );
};

export default MisionVision;