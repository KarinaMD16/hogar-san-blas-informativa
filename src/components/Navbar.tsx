import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getEntidad } from "../data";
import type { Header, HeaderItem, Opcion } from "../models/header/header";
import CambiarIdioma from "./CambiarIdioma";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerJson = getEntidad("header") as Header;
  const navItems = Object.values(headerJson).map((item: HeaderItem) => ({
    label: item.titulo,
    links: item.opciones.map((op: Opcion) => ({
      text: op.texto,
      href: op.ruta,
    })),
  }));

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-6 flex justify-between items-center w-full bg-transparent">
      <a href="/">
        <img src="/public/logo_hogar_san_blas.png" alt="Logo" className="size-16 ml-5" />
      </a>
      <div className="flex-1 flex justify-end">
        <div className="bg-white text-black max-w-7 md:max-w-4xl rounded-full shadow-lg px-8 py-2.5 font-poppins font-semibold">
          <nav className="flex justify-center items-center">
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-10">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 hover:text-amaranthPink transition">
                    {item.label} <FaChevronDown className="text-xs mt-0.5 ml-3" />
                  </button>
                  {openDropdown === idx && (
                    <ul className="absolute top-full left-0 bg-white text-night py-2 shadow-lg rounded w-40 z-50">
                      {item.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <a
                            href={link.href}
                            className="block px-4 py-2 hover:bg-ecruYellow300 hover:text-night transition"
                          >
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <CambiarIdioma />
            </ul>

            <button
              className="md:hidden text-3xl"
              aria-label="Abrir menú móvil"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              ☰
            </button>
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex md:hidden">
          <div className="bg-white w-64 h-full shadow-lg p-6 flex flex-col gap-4 relative">
            <button
              className="absolute top-4 right-4 text-2xl"
              aria-label="Cerrar menú móvil"
              onClick={() => setMobileMenuOpen(false)}
            >
              ×
            </button>
            <ul className="flex flex-col gap-4 mt-8">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <details>
                    <summary className="flex items-center gap-1 cursor-pointer hover:text-amaranthPink transition">
                      {item.label} <FaChevronDown className="text-xs mt-0.5 ml-3" />
                    </summary>
                    <ul className="pl-4 mt-2">
                      {item.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <a
                            href={link.href}
                            className="block px-2 py-1 hover:bg-ecruYellow300 hover:text-night transition rounded"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.text}
                          </a>
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
          </div>

          <div
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Cerrar menú móvil"
          />
        </div>
      )}
    </header>
  );
}
export default Navbar;