import { Link } from "@tanstack/react-router";
import type { BotonProps } from "../types/boton";

const Boton = ({ children, where, type = "button", onClick }: BotonProps) => {
  const classes = `
    font-poppins font-medium
    bg-amaranthPink text-white 
    py-1 px-4 sm:py-2 sm:px-4 md:py-1.5 md:px-5 lg:py-2 lg:px-4
    rounded-4xl shadow-md
    hover:bg-amaranthPinkDark 
    transition-colors duration-300 
    hover:cursor-pointer
    max-w-[250px] whitespace-nowrap truncate 
    text-center text-sm sm:text-base md:text-md lg:text-md
  `;

  if (where) {
    return (
      <Link to={where}>
        <button type="button" className={classes}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Boton;

