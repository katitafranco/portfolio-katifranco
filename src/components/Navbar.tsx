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
    { href: "expertise", label: t("navbar.myExpertise") },
    { href: "about", label: t("navbar.aboutMe") },
    { href: "portfolio", label: t("navbar.portfolio") },
    { href: "testimonials", label: t("navbar.testimonials") },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="w-full bg-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-2 ">
        {/* Desktop Menu (centered) */}
        <div className="hidden lg:flex flex-grow justify-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80} // Adjust if you have a fixed header
              activeClass="text-purple font-bold"
              className="text-gray-700 hover:text-darkBlue transition cursor-pointer"
              onClick={handleLinkClick} // Close the menu when a link is clicked
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Me Button and Language Switcher on the right */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="border border-purple text-purple px-4 py-2 rounded-sm hover:bg-darkBlue hover:text-white transition">
            <a className="text-purple hover:text-white" href="#contact">
              {t("navbar.contactMe")}
            </a>
          </button>

          {/* Language Switcher */}
          <div className="hidden lg:flex space-x-2">
            <button
              onClick={() => changeLanguage("en")}
              className={`text-gray-800 text-sm font-bold hover:text-darkBlue transition ${
                i18n.language === "en" ? "text-purple underline" : ""
              }`}
              aria-label="Change language to English"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("es")}
              className={`text-gray-800 text-sm font-bold hover:text-darkBlue transition ${
                i18n.language === "es" ? "text-purple underline" : ""
              }`}
              aria-label="Cambiar idioma a Español"
            >
              ES
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex justify-between items-center mx-4 lg:hidden">
        {/* Mobile Menu Toggle */}
        <Logo />
        <div className="flex items-center">
          <button
            className="lg:hidden text-gray-700 text-2xl mx-4"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            ☰
          </button>

          {/* Language Switcher in Mobile */}
          <button
            onClick={() => changeLanguage("en")}
            className={`text-gray-800 text-sm font-bold mx-1 hover:text-darkBlue transition ${
              i18n.language === "en" ? "text-purple underline" : ""
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className={`text-gray-800 text-sm font-bold hover:text-darkBlue transition ${
              i18n.language === "es" ? "text-purple underline" : ""
            }`}
          >
            ES
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col justify-center items-center lg:hidden bg-lightGray p-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80} // Adjust if you have a fixed header
              activeClass="text-purple font-bold"
              className="block py-2 text-gray-700 hover:text-darkBlue transition"
              onClick={handleLinkClick} // Close the menu when a link is clicked
            >
              {link.label}
            </Link>
          ))}

          {/* Contact Button Mobile */}
          <button className="border-purple bg-transparent text-white w-full py-2 rounded-lg shadow mt-4 hover:bg-darkBlue transition">
            <a className="text-purple" href="#contact">
              {t("navbar.contactMe")}
            </a>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
