import { FaChevronDown } from "react-icons/fa";
import type { DropdownItemProps } from "../../types/header/navbar";
import { Link } from "@tanstack/react-router";

const DropdownItem = ({ item, idx, isOpen, setOpen, onLinkClick }: DropdownItemProps) => (
  <li
    className="relative"
    onMouseEnter={() => setOpen(idx)}
    onMouseLeave={() => setOpen(null)}
  >
    <button className="flex items-center gap-1 hover:text-amaranthPink transition">
      {item.label} <FaChevronDown className="text-xs mt-0.5 ml-3" />
    </button>
    {isOpen && (
      <ul className="absolute top-full left-1/2 -translate-x-1/2 bg-white text-night py-2 shadow-lg rounded w-36 lg:w-38 xl:w-48 z-50">
        {item.links.map((link, i) => (
          <li key={i}>
            <Link
              to={link.ruta}
              target={link.ruta.includes("wa.me") ? "_blank" : undefined}
              rel={link.ruta.includes("wa.me") ? "noopener noreferrer" : undefined}
              className="block px-4 py-2 hover:bg-antiFlashWhite hover:text-night transition"
              onClick={(event) => {
                onLinkClick(event, link.ruta);
                setOpen(null);
              }}
            >
              {link.texto}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
);

export default DropdownItem;