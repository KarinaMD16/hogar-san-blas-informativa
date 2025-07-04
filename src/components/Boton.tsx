import { Link } from "@tanstack/react-router"
import type { BotonProps } from "../types/boton"



const Boton = ({ children, where }: BotonProps) => {
  return (
    <>
    <Link to={where} > 
      <button
        className=" font-poppins font-medium
          bg-amaranthPink text-white 
          py-2 px-4 sm:py-2 sm:px-5 md:py-3 md:px-6 lg:py-3 lg:px-7 rounded-4xl shadow-md
          hover:bg-amaranthPinkDark 
          transition-colors duration-300 
          hover:cursor-pointer
          max-w-[250px] w-full whitespace-nowrap truncate 
          text-center text-sm sm:text-base md:text-lg"
      >
        {children}
      </button>
      </Link>
    </>
  )
}

export default Boton
