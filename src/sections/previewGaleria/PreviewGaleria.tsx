import { useNavigate } from "@tanstack/react-router";
import { useGetTodasGaleria } from "../../hooks/galeria/galeria"


const PreviewGaleria = () => {
  const { imagenes } = useGetTodasGaleria(1, 8);

  function cambiarImagen(): void {
    throw new Error("Function not implemented.")
  }
  const navigate = useNavigate();

  const goToGallery = () => {
    navigate({ to: '/galeria' });
  };

  return (
    <section className="flex flex-col gap-6 items-center">
      <div className=" w-full">
        <h1 onClick={goToGallery} className="lg:pl-25 text-4xl text-justify font-poppins font-bold text-amaranthPink
      hover:cursor-pointer">
        Galeria
      </h1> 
      </div>

      <div className="w-65 sm:w-full lg:w-7xl">
        <div className="flex flex-row gap-3 overflow-x-auto justify-around
            [&::-webkit-scrollbar]:h-2.5
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-ecruYellow 
              [&::-webkit-scrollbar-thumb]:rounded-full pb-2 
              [&::-webkit-scrollbar-thumb]:cursor-grab">
          {imagenes?.map((imagen, index) => (
            <img
              onClick={() => cambiarImagen()}
              key={index} 
              src={imagen.imagenUrl}  
              alt=""
              className="hover:cursor-pointer object-cover mb-2 w-60 h-40 sm:w-70 sm:h-45 rounded-lg flex-shrink-0 "
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PreviewGaleria
