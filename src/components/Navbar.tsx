import { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const links = [
    { href: "#home", label: t("navbar.home") },
    { href: "#about", label: t("navbar.aboutMe") },
    { href: "#expertise", label: t("navbar.myExpertise") },
    { href: "#portfolio", label: t("navbar.portfolio") },
    { href: "#testimonials", label: t("navbar.testimonials") },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Logo />
        {/* Marca personal */}

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
          {/* Contact Button */}
          <button className="border-purple-600 bg-transparent text-white px-4 py-2 rounded-md shadow hover:border-blue-800 bg-transparent hover:text-blue-800 transition">
            <a className="text-purple-600 hover:text-blue-800" href="#contact">
              {t("navbar.contactMe")}
            </a>
          </button>
          {/* Language Switcher */}
          <div className="flex space-x-2">
            <button
              onClick={() => changeLanguage("en")}
              className="text-gray-700 hover:text-blue-600 transition"
              aria-label="Change language to English"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("es")}
              className="text-gray-700 hover:text-blue-600 transition"
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
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-700 flex justify-center hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col space-y-2 mt-4">
            {/* Language Switcher in Mobile */}
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
          {/* Contact Button Mobile */}
          <button className="border-purple-600 bg-transparent text-white w-full py-2 rounded-lg shadow mt-4 hover:bg-blue-800 transition">
            <a className="text-purple-600" href="#contact">
              {t("navbar.contactMe")}
            </a>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
