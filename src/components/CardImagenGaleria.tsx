import type { CardGaleriaProps } from "../types/galeria/galeria"

const CardImagenGaleria = ({imagenes, toggleModal}: CardGaleriaProps) => {
    
  return (
    <>
      <div onClick={() => toggleModal(imagenes)} className="cursor-pointer">
      <img
        className="rounded-2xl object-cover w-30 h-30 sm:w-30 md:h-50 md:w-50 lg:w-60 lg:h-60"
        src={imagenes.imagenUrl}
        alt="Galeria Hogar San Blas"
      />
    </div>
    </>
  )
}

export default CardImagenGaleria