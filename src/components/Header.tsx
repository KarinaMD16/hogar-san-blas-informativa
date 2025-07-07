import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getEntidad } from "../data";
import type { Header, HeaderItem, Opcion } from "../models/header/header";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const headerJson = getEntidad("header") as Header;
  const navItems = Object.values(headerJson).map((item: HeaderItem) => ({
    label: item.titulo,
    links: item.opciones.map((op: Opcion) => ({
      text: op.texto,
      href: op.ruta,
    })),
  }));

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black font-poppins z-50 shadow-md">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6 relative">
        <div className="text-2xl font-bold font-poppins">
          <a rel="icon" type="image/svg+xml" href="/public/logo_hogar_san_blas.png" />
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium relative">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => setOpenDropdown(idx)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-amaranthPink transition">
                {item.label} <FaChevronDown className="text-xs mt-0.5" />
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
        </ul>

        <button className="md:hidden text-3xl" aria-label="Abrir menú móvil">
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Navbar;