// src/sections/Header.tsx
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";

const Header = () => (
  <header className="bg-gray-900 text-white">
    <div className="container mx-auto flex justify-between items-center py-4">
      {/* Logo */}
      <Logo />
      {/* Aquí puedes incluir otros elementos si es necesario, como una breve descripción */}
      <Navbar />
    </div>
  </header>
);

export default Header;
