import { getEntidad } from "../data"
import Boton from "./Boton"

const CardDonacion = () => {
    const donacionJson = getEntidad("donaciones");
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 bg-antiFlashWhite">
      <h3>Titulo</h3>
        <Boton where={"/formularios/donacion"}>
                <span className="font-medium text-base sm:text-sm md:text-base lg:text-lg">
                    {donacionJson.botones}
                </span>
        </Boton>
    </div>
  )
}

export default CardDonacion
