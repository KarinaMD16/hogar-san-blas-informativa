import type {  DescripcionServicioProps } from "../types/servicios"


const ServicioDescripcion = ({ servicio }: DescripcionServicioProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 ">
      <div className="flex flex-row items-center gap-4 w-128">
        <img className="shadow-sm shadow-night/20 border-2 rounded-xl border-basicWhite object-cover w-55 h-55" src={servicio.imagenPrincipal} alt="" />
        <div>
            <h2 className="font-bold text-2xl font-poppins">{servicio.titulo}</h2>
            
            <p className="font-opensans text-sm text-justify ">
                {servicio.descripcion}
            </p>
        </div>
      </div> 
        <div className="bg-antiFlashWhite p-4 rounded-lg mt-4">
            <div className="flex flex-row w-lg gap-4.5
                overflow-x-auto
                [&::-webkit-scrollbar]:h-2.5
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:bg-ecruYellow 
                [&::-webkit-scrollbar-thumb]:rounded-full">
                    {servicio.imagenes.map((imagen, index) => (
                    <img key={index} src={imagen} alt={`Imagen de ${servicio.titulo}`} className="object-cover w-30 h-30 rounded-lg mb-4" />
                    ))}
            </div>
        </div>
      
    </div>
  )
}

export default ServicioDescripcion
