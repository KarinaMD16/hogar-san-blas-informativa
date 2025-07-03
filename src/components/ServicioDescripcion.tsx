import type {  DescripcionServicioProps } from "../types/servicios"


const ServicioDescripcion = ({ servicio }: DescripcionServicioProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 ">
      <div className="flex flex-row items-center gap-4 w-128">
        <img className="shadow-sm shadow-night/20 border-2 rounded-xl border-basicWhite object-cover w-55 h-55" src={servicio.imagen} alt="" />
        <div>
            <h2 className="font-bold text-lg font-poppins">{servicio.titulo}</h2>
            
            <p className="font-opensans text-sm text-justify">
                {servicio.descripcion}
            </p>
        </div>
      </div>

      <div className="bg-antiFlashWhite p-4 rounded-lg w-50 shadow-md mt-4">
       <img src={servicio.imagen} alt={`Imagen de ${servicio.titulo}`} className="object-cover w-32 h-32 rounded-lg" />
      </div>
    </div>
  )
}

export default ServicioDescripcion
