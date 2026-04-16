import { useContext, useState, type MouseEvent } from "react";
import type { NavItem, Opcion } from "../../models/header/navbar";
import CambiarIdioma from "../CambiarIdioma";
import DropdownItem from "./DropdownItem";
import { HiOutlineMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import IdiomaContext from "../../context/language/idiomaContext";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";

type SectionLinkTarget = {
  sectionId: string;
  requiresHomeRoute: boolean;
};

function getSectionTarget(ruta: string): SectionLinkTarget | null {
  if (ruta.startsWith("/#")) {
    const sectionId = ruta.slice(2).trim();
    return sectionId ? { sectionId, requiresHomeRoute: true } : null;
  }

  if (ruta.startsWith("#")) {
    const sectionId = ruta.slice(1).trim();
    return sectionId ? { sectionId, requiresHomeRoute: false } : null;
  }

  return null;
}

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);

  if (!section) {
    return false;
  }

  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });

  return true;
}

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const scrollToSectionWhenReady = (sectionId: string) => {
    let attempts = 0;

    const tryScroll = () => {
      attempts += 1;
      const scrolled = scrollToSection(sectionId);

      if (!scrolled && attempts < 40) {
        window.requestAnimationFrame(tryScroll);
      }
    };

    window.requestAnimationFrame(tryScroll);
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavLinkClick = async (
    event: MouseEvent<HTMLAnchorElement>,
    ruta: string
  ) => {
    const target = getSectionTarget(ruta);

    if (!target) {
      return;
    }

    event.preventDefault();

    if (target.requiresHomeRoute && location.pathname !== "/") {
      await navigate({ to: "/" });
    }

    scrollToSectionWhenReady(target.sectionId);
  };

  if (!contentJson?.header) {
    return (
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center items-center w-full px-6 bg-transparent">
        <span className="text-white">Cargando menú...</span>
      </header>
    );
  }
  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-between items-center w-full px-6 bg-transparent">
      <Link to="/" className="flex-shrink-0" onClick={handleLogoClick}>
        <img
          src="/logo_hogar_san_blas.webp"
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
                  onLinkClick={handleNavLinkClick}
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
                onLinkClick={handleNavLinkClick}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
export default Navbar;