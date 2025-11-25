import { useContext } from "react";
import Boton from "../../components/Boton";
import IdiomaContext from "../../context/language/idiomaContext";

import { cn } from "../../lib/utils";

type UneteProps = {
  className?: string;
};

const Unete: React.FC<UneteProps> = ({ className }) => {
  const { contentJson } = useContext(IdiomaContext);

  return (
    <section className="flex justify-center">
      <section className={cn("border-4 border-ecruYellow rounded-3xl p-4 m-4 w-screen h-full", className)}>
        <h1 className="text-3xl font-bold text-amaranthPink py-1">
          {contentJson.uneteNosotros.titulo}
        </h1>
        <p className="text-lg text-night py-5">
          {contentJson.uneteNosotros.descripcion}
        </p>
        <div className="flex flex-row gap-4 mt-4 justify-center flex-wrap">
          {contentJson.uneteNosotros.botones.map(({ texto, ruta }, index) => (
            <Boton key={index} where={ruta}>
              <span className="font-medium text-base sm:text-sm md:text-base lg:text-lg">
                {texto}
              </span>
            </Boton>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Unete;
