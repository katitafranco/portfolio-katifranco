//
// src/components/Navbar.tsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

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

  return (
    <nav className="w-full bg-white ">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
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
              activeClass="text-purple-600 font-bold"
              className="text-gray-700 hover:text-blue-600 transition cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botón Contact Me y Language Switcher a la derecha */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-sm hover:bg-purple-600 hover:text-white transition">
            <a className="text-purple-600 hover:text-blue-800" href="#contact">
              {t("navbar.contactMe")}
            </a>
          </button>

          {/* Language Switcher */}
          <div className="hidden lg:flex space-x-2 ">
            <button
              onClick={() => changeLanguage("en")}
              className="text-gray-700 text-sm hover:text-blue-600 transition"
              aria-label="Change language to English"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("es")}
              className="text-gray-700 text-sm hover:text-blue-600 transition"
              aria-label="Cambiar idioma a Español"
            >
              ES
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-50 p-4">
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
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col space-y-2 mt-4">
            {/* Language Switcher in Mobile */}
            <button
              onClick={() => changeLanguage("en")}
              className="text-gray-700 text-sm hover:text-blue-600 transition"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("es")}
              className="text-gray-700 text-sm hover:text-blue-600 transition"
            >
              ES
            </button>
          </div>

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
