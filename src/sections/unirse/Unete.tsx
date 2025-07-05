import Boton from "../../components/Boton";
import { getEntidad } from "../../data";

const Unete = () => {
  const uneteJson = getEntidad("uneteNosotros");

  return (
    <section className="flex justify-center">
    <section className="border-4 border-ecruYellow rounded-3xl p-4 m-4 w-screen h-full">
      <h1 className="text-3xl font-bold text-amaranthPink">{uneteJson.titulo}</h1>
      <p className="text-lg text-night">{uneteJson.descripcion}</p>
      <div className="flex flex-row gap-4 mt-4 justify-center flex-wrap">
        {uneteJson.botones.map(({ texto, ruta }, index) => (
          <Boton key={index} where={ruta}>
            <span className="font-medium text-base sm:text-sm md:text-base lg:text-lg">{texto}</span>
          </Boton>
        ))}
      </div>
    </section>
    </section>
  )
}

export default Unete
