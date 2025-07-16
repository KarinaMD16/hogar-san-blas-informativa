import { FaChevronDown } from "react-icons/fa";
import type { DropdownItemProps } from "../../types/header/navbar";
import { Link } from "@tanstack/react-router";

const DropdownItem = ({ item, idx, isOpen, setOpen }: DropdownItemProps) => (
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
              className="block px-4 py-2 hover:bg-gray-300 hover:text-night transition"
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