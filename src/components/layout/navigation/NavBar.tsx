import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import DesktopLinks from "./DesktopLinks";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="w-full bg-soft-white shadow-md fixed top-0 left-0 z-50">
        <div className=" mx-auto px-6 md:px-10 py-1 flex justify-between items-center">
          <Logo />
          <DesktopLinks />
          <AuthButtons />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-soft-violet"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <MobileMenu isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default NavBar;
