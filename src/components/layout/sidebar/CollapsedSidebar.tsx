import { NavLink } from "react-router-dom";
import { LogOut, Menu } from "lucide-react";
import { menuItems } from "./sidebarMenuData";

type CollapsedSidebarProps = {
  toggleSidebar: () => void;
};

const CollapsedSidebar = ({ toggleSidebar }: CollapsedSidebarProps) => {
  const baseLinkClasses =
    "py-3 px-3 font-semibold text-pure-white rounded-xl transition-colors cursor-pointer";
  const hoverClasses = "hover:bg-soft-violet hover:text-pure-white";
  const activeClasses =
    "bg-soft-violet text-white shadow-md shadow-deep-violet";

  return (
    <nav className="hidden md:flex flex-col justify-between items-center sticky top-0 left-0 z-50 w-24 h-screen py-3 bg-sidebar">
      {/* Sidebar wrapper for the header and the navigation links */}
      <div className="flex flex-col gap-14 w-full">
        {/* Sidebar Header */}
        <div className="min-h-16 flex justify-center items-center mb-1">
          <div
            className={`${baseLinkClasses} ${hoverClasses}`}
            onClick={toggleSidebar}
          >
            <Menu size={28} />
          </div>
        </div>
        {/* Navigation links */}
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeClasses : hoverClasses}`
              }
            >
              <item.icon size={28} />
            </NavLink>
          ))}
        </div>
      </div>

      {/* Logout button */}
      <div className="flex justify-center items-center w-full px-4 mb-6">
        <button className={`${baseLinkClasses} bg-[#454545] ${hoverClasses}`}>
          <LogOut size={28} className="text-white cursor-pointer" />
        </button>
      </div>
    </nav>
  );
};

export default CollapsedSidebar;
