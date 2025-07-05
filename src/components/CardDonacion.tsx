import { getEntidad } from "../data"
import type { PublicacionProps } from "../types/publicaciones/publicaciones";
import Boton from "./Boton"

const CardDonacion = ({ publicacion }: PublicacionProps) => {
    const donacionJson = getEntidad("donaciones");
  return (
     <div className="bg-basicWhite p-4 rounded-lg shadow-md hover:shadow-lg 
    transition-shadow duration-300
      w-60 h-90 lg:w-80 lg:h-100 md:w-60 md:h-90 sm:w-50 sm:h-90
      flex flex-col items-center justify-center gap-4
    ">
      <img className="
      rounded-md h-40 object-cover
      " 
      src="https://i0.wp.com/ellatinoonline.com/wp-content/uploads/2018/05/1-Administracion-del-hogar.jpg?fit=700%2C453&ssl=1" alt="" />
      <h3 className="font-poppins font-bold text-lg" >{publicacion.Titulo}</h3>
      <p>{publicacion.Descripcion}</p>
      <div className="flex items-start w-50 sm:w-40 md:w-50 lg:w-3xs">
        <p className="text-sm">{publicacion.fecha}</p>
      </div>
      <Boton where={"/formularios/donacion"}>
                <span className="font-medium text-base sm:text-sm md:text-base lg:text-lg">
                    {donacionJson.botones.botonDonar}
                </span>
        </Boton>
    </div>
  )
}

export default CardDonacion
