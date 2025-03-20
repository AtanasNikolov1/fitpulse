import { House, Info, Mail } from "lucide-react";
import { Link } from "react-router-dom";

type MobileMenuProps = {
  isOpen: boolean;
};

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    isOpen && (
      <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 pt-2 pb-6 space-y-6 text-center">
        <div className="flex justify-center gap-2">
          <House className="w-5 h-5" />
          <Link to="/" className="block text-gray-700">
            Home
          </Link>
        </div>

        <div className="flex justify-center gap-3">
          <Info className="w-5 h-5" />
          <Link to="/about" className="block text-gray-700">
            About
          </Link>
        </div>
        <div className="flex justify-center gap-2">
          <Mail className="w-5 h-5" />
          <Link to="/contact" className="block text-gray-700 ">
            Contact
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center gap-6 px-3">
          <Link
            to="/login"
            className="block px-4 py-2 w-40 ml-1 font-medium text-soft-violet border-2 border-soft-violet rounded-lg transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block px-4 py-2  w-40 mr-1 font-medium text-white bg-soft-violet rounded-lg border-soft-violet border-2 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    )
  );
};

export default MobileMenu;
