import { useContext, useState } from "react";
import type { NavItem, Opcion } from "../../models/header/navbar";
import CambiarIdioma from "../CambiarIdioma";
import DropdownItem from "./DropdownItem";
import { HiOutlineMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import IdiomaContext from "../../context/language/idiomaContext";
import { Link } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { contentJson } = useContext(IdiomaContext);
  const navItems = (Object.values(contentJson.header) as NavItem[]).map(
    (item: NavItem) => ({
      label: item.titulo,
      links: item.opciones.map((op: Opcion) => ({
        texto: op.texto,
        ruta: op.ruta,
      })),
    })
  );
  if (!contentJson?.header) {
    return (
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center items-center w-full px-6 bg-transparent">
        <span className="text-white">Cargando menú...</span>
      </header>
    );
  }
  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-between items-center w-full px-6 bg-transparent">
      <Link to="/" className="flex-shrink-0">
        <img
          src="/logo_hogar_san_blas.png"
          alt="Logo"
          className="w-16 h-16 lg:ml-8"
        />
      </Link>
      <div className="flex-1 flex justify-end">
        <div className="bg-white text-black md:w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-full shadow-lg px-4 py-4 md:py-2.5 font-poppins font-semibold">
          <nav className="flex justify-evenly items-center">
            {/* Desktop Menu */}
            <ul className="hidden md:flex md:gap-6 lg:gap-10 xl:gap-15">
              {navItems.map((item, idx) => (
                <DropdownItem
                  key={idx}
                  item={item}
                  idx={idx}
                  isOpen={openDropdown === idx}
                  setOpen={setOpenDropdown}
                />
              ))}
              <CambiarIdioma />
            </ul>

            <HiOutlineMenu
              className="md:hidden text-3xl cursor-pointer"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Abrir menú móvil"
              aria-expanded={mobileMenuOpen}
            />
          </nav>
          <AnimatePresence>
            {mobileMenuOpen && (
              <MobileMenu
                navItems={navItems}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
export default Navbar;