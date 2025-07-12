import { useNavigate } from "@tanstack/react-router";
import { useGetTodasGaleria } from "../../hooks/galeria/galeria"
import { useContext } from "react";
import IdiomaContext from "../../context/language/idiomaContext";


const PreviewGaleria = () => {
  const {contentJson} = useContext(IdiomaContext)
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
        {contentJson.titulosSecciones.Galeria.titulo}
      </h1> 
      </div>

      <div className="w-65 sm:w-full lg:w-full">
        <div className="flex flex-row gap-3 overflow-x-auto justify-around
            
          scrollbar-thin scrollbar-thumb-ecruYellow scrollbar-track-transparent pb-2 
            ">
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
