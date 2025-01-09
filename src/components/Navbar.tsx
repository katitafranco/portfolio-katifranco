import { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo"; // Importamos el componente Logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const links = [
    { href: "#home", label: t("navbar.home") },
    { href: "#about", label: t("navbar.about") },
    { href: "#expertise", label: t("navbar.myExpertise") },
    { href: "#portfolio", label: t("navbar.portfolio") },
    { href: "#testimonials", label: t("navbar.testimonials") },
    { href: "#contact", label: t("navbar.contactMe") },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Logo />
        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
          {/*  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition">
            {t("navbar.contact")}
          </button> */}
        </div>
        {/* Language Switch */}
        <div className="hidden lg:flex space-x-2">
          <button
            onClick={() => changeLanguage("en")}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            ES
          </button>
        </div>
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-50 p-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
          {/* <button className="bg-blue-600 text-white w-full py-2 rounded-lg shadow mt-2 hover:bg-blue-500 transition">
            {t("navbar.contact")}
          </button> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
