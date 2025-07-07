import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import type { CardGaleriaProps } from "../types/galeria/galeria"

const CardImagenGaleria = ({imagenes}: CardGaleriaProps) => {
    const [isFullScreen, setisFullScreen] = useState(false);
    
  return (
    <>
      <div onClick={() => setisFullScreen(true)} className="cursor-pointer">
        <img
          className="rounded-2xl object-cover w-30 h-30 sm:w-30 md:h-50 md:w-50 lg:w-60 lg:h-60"
          src={imagenes.imagenUrl}
          alt="Galeria Hogar San Blas"
        />
      </div>

      {isFullScreen && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setisFullScreen(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={imagenes.imagenUrl}
              alt="Galeria Hogar San Blas"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-lg"
            />
            <button
              onClick={() => setisFullScreen(false)}
              className="hover:cursor-pointer absolute top-2 right-2 bg-white text-black p-2 rounded-full hover:bg-gray-200"
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CardImagenGaleria