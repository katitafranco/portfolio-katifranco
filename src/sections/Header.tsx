// src/sections/Header.tsx
import Navbar from "../components/Navbar";

const Header = () => (
  <header className="bg-gray-900 text-white">
    <div className="container mx-auto flex justify-between items-center py-4">
      {/* Aquí puedes incluir otros elementos si es necesario, como una breve descripción */}
      <Navbar />
    </div>
  </header>
);

export default Header;
