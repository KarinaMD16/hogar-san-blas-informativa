import { IoMdClose } from "react-icons/io";
import type { ModalImagenGaleriaProps } from "../types/galeria/galeria";

const ModalImagenGaleria = ({
  imagen,
  open,
  onClose,
}: ModalImagenGaleriaProps) => {
  if (!open || !imagen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img
          src={imagen.imagenUrl}
          alt={imagen.descripcion ?? "Imagen galería"}
          className="max-w-full max-h-[90vh] rounded-2xl shadow-lg"
        />
        <button
          onClick={onClose}
          className="hover:cursor-pointer absolute top-2 right-2 bg-white text-black p-2 rounded-full hover:bg-gray-200"
        >
          <IoMdClose />
        </button>
        {imagen.descripcion && (
          <p className="text-white text-center mt-2">{imagen.descripcion}</p>
        )}
      </div>
    </div>
  );
};
export default ModalImagenGaleria;
