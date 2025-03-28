import { NavLink } from "react-router-dom";

const DesktopLinks = () => {
  return (
    <div className="hidden md:flex space-x-12 text-base lg:text-[1.2rem] font-medium text-charcoal-gray">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-soft-violet" : "hover:text-soft-violet"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-soft-violet" : "hover:text-soft-violet"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-soft-violet" : "hover:text-soft-violet"
        }
      >
        Contact
      </NavLink>
    </div>
  );
};

export default DesktopLinks;
