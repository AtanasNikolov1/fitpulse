import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MobileSidebar from "./sidebar/MobileSidebar";
import DesktopSidebar from "./sidebar/DesktopSidebar";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen((prev) => !prev);

  useEffect(() => {
    setOpen(window.innerWidth >= 1024);
    const handleResize = () => {
      setOpen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`min-h-screen ${
        open ? "bg-medium-gray md:bg-light-gray" : "bg-light-gray"
      }`}
    >
      <MobileSidebar open={open} toggleSidebar={toggleSidebar} />
      <div className="flex flex-row relative">
        <DesktopSidebar open={open} toggleSidebar={toggleSidebar} />
        <div className="lg:flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
