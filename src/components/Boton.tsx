import { Link } from "@tanstack/react-router";
import type { BotonProps } from "../types/boton";

const Boton = ({ children, where, type = "button", onClick, variant = "filled" }: BotonProps) => {
  const baseClasses = `
    font-poppins font-medium
    py-1 px-4 sm:py-2 sm:px-4 md:py-1.5 md:px-5 lg:py-2 lg:px-4
    rounded-4xl shadow-md
    transition-colors duration-300 
    hover:cursor-pointer
    max-w-[250px] whitespace-nowrap truncate 
    text-center text-sm sm:text-base md:text-md lg:text-md
  `;

  const variantClasses =
    variant === "filled"
      ? "bg-amaranthPink text-white hover:bg-amaranthPinkDark"
      : "bg-transparent border border-amaranthPink text-amaranthPink hover:bg-amaranthPink hover:text-white";

  const classes = `${baseClasses} ${variantClasses}`;

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
