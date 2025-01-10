//
//sections/Header.tsx

import Navbar from "../components/Navbar";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-lg fixed top-0 left-0 right-0 z-50 border-b-5 border-purple-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-0">
        {/* Logo */}
        <div className="hidden lg:flex ">
          <Logo />
        </div>

        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
