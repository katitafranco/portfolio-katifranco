//
// src/components/Navbar.tsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import Logo from "./Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const links = [
    { href: "home", label: t("navbar.home") },
    { href: "about", label: t("navbar.aboutMe") },
    { href: "expertise", label: t("navbar.myExpertise") },
    { href: "portfolio", label: t("navbar.portfolio") },
    { href: "testimonials", label: t("navbar.testimonials") },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <nav className="w-full bg-white ">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-2">
        {/* Menu para desktop (centrado) */}
        <div className="hidden lg:flex flex-grow justify-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80} // Ajusta si tienes un header fijo
              activeClass="text-purple font-bold"
              className="text-gray-700 hover:text-blue-600 transition cursor-pointer"
              onClick={handleLinkClick} // para cerrar el menu cuando ya seleccione una opcion
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botón Contact Me y Language Switcher a la derecha */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-sm hover:bg-blue-500 hover:text-white transition">
            <a className="text-purple-600 hover:text-white" href="#contact">
              {t("navbar.contactMe")}
            </a>
          </button>

          {/* Language Switcher */}
          <div className="hidden lg:flex space-x-2 ">
            <button
              onClick={() => changeLanguage("en")}
              className={`text-gray-800 text-sm font-bold hover:text-blue-600 transition ${
                i18n.language === "en" ? "text-purple-600 underline" : ""
              }`}
              aria-label="Change language to English"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("es")}
              className={`text-gray-800 text-sm font-bold hover:text-blue-600 transition ${
                i18n.language === "es" ? "text-purple-600 underline" : ""
              }`}
              aria-label="Cambiar idioma a Español"
            >
              ES
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className=" flex justify-between items-center mx-4 lg:hidden ">
        {/* Mobile Menu Toggle */}
        <Logo />
        <div className="flex items-center ">
          <button
            className="lg:hidden text-gray-700 text-2xl  mx-4"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            ☰
          </button>

          {/* Language Switcher in Mobile */}
          <button
            onClick={() => changeLanguage("en")}
            className={`text-gray-800 text-sm font-bold  mx-1 hover:text-blue-600 transition ${
              i18n.language === "en" ? "text-purple-600 underline" : ""
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className={`text-gray-800 text-sm font-bold hover:text-blue-600 transition ${
              i18n.language === "es" ? "text-purple-600 underline" : ""
            }`}
          >
            ES
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col justify-center items-center lg:hidden bg-gray-50 p-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80} // Ajusta si tienes un header fijo
              activeClass="text-purple-600 font-bold"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={handleLinkClick} // Cierra el menú al hacer clic en un enlace
            >
              {link.label}
            </Link>
          ))}

          {/* Contact Button Mobile */}
          <button className="border-purple-600 bg-transparent text-white w-full py-2 rounded-lg shadow mt-4 hover:bg-blue-800 transition">
            <a className="text-purple-600" href="#contact">
              {t("navbar.contactMe")}
            </a>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
