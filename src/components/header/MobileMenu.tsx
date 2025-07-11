import { FaChevronDown } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import CambiarIdioma from "../CambiarIdioma";
import type { MobileMenuProps } from "../../types/header/navbar";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const MobileMenu = ({ navItems, setMobileMenuOpen }: MobileMenuProps) => {
  const handleClose = () => {
    // Espera a que termine la animación antes de desmontar
    setTimeout(() => setMobileMenuOpen(false), 300); // coincide con duración de animación
  };

  return (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex md:hidden"
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white w-64 h-full shadow-lg p-6 flex flex-col gap-4 relative"
      >
        <HiOutlineX
          className="absolute top-4 right-4 text-2xl cursor-pointer"
          onClick={handleClose}
        />
        <ul className="flex flex-col gap-4 mt-8">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <details>
                <summary className="flex items-center gap-1 cursor-pointer hover:text-amaranthPink transition">
                  {item.label} <FaChevronDown className="text-xs mt-0.5 ml-3" />
                </summary>
                <ul className="pl-2 mt-2 text-left">
                  {item.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.ruta}
                        className="block px-2 py-1 hover:bg-ecruYellow300 hover:text-night transition rounded"
                        onClick={handleClose}
                      >
                        {link.texto}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
          <li>
            <CambiarIdioma />
          </li>
        </ul>
      </motion.div>

      <div
        className="flex-1"
        onClick={handleClose}
        aria-label="Cerrar menú móvil"
      />
    </motion.div>
  );
};

export default MobileMenu;
