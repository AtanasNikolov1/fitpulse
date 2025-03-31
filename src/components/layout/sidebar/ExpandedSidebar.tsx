import { NavLink, useNavigate } from "react-router-dom";
import { ChevronLeft, LogOut } from "lucide-react";
import { menuItems } from "./sidebarMenuData";
import { logOutUser } from "../../../services/authService";
import { toast } from "react-toastify";

type ExtendedSidebarProps = {
  toggleSidebar: () => void;
};

const ExpandedSidebar = ({ toggleSidebar }: ExtendedSidebarProps) => {
  const navigate = useNavigate();
  const baseLinkClasses =
    "flex items-center gap-5 px-4 py-3 w-full text-pure-white font-semibold rounded-xl transition-colors cursor-pointer";
  const hoverClasses = "hover:bg-soft-violet hover:text-pure-white";
  const activeClasses =
    "bg-soft-violet text-white shadow-md shadow-deep-violet";

  const handleLogout = async () => {
    try {
      const success = await logOutUser();
      if (success) navigate("/login");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Unexpected error occurred",
        {
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <nav className="flex flex-col justify-between w-68 h-screen md:sticky md:top-0 md:left-0 lg:relative md:z-50 lg:z-0 py-3 bg-sidebar transition-width duration-300">
      {/* Sidebar wrapper for the header and the navigation links */}
      <div className="flex flex-col gap-14 w-full">
        {/* Sidebar Header  */}
        <div className="flex justify-between items-center min-h-16 w-full p-4 text-white">
          <img
            src="/images/fitpulse-sidebar-logo.png"
            alt="Fitpulse logo"
            className="h-8"
          />
          <div
            className={`p-1.5 rounded-xl ${hoverClasses} cursor-pointer`}
            onClick={toggleSidebar}
          >
            <ChevronLeft size={28} />
          </div>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col justify-center items-start gap-8 w-full px-4 ">
          {menuItems.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `${baseLinkClasses} ${
                    isActive ? activeClasses : hoverClasses
                  }`
                }
              >
                <item.icon size={28} />
                <p className="text-lg">{item.name}</p>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Logout button */}
      <div className="w-full px-4 mb-6">
        <button
          className={`${baseLinkClasses} bg-[#454545] ${hoverClasses} cursor-pointer`}
          type="button"
          onClick={handleLogout}
        >
          <LogOut size={28} className="ml-2" />
          <p className="text-lg ml-2">Log Out</p>
        </button>
      </div>
    </nav>
  );
};

export default ExpandedSidebar;
