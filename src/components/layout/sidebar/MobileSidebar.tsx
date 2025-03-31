import { Menu } from "lucide-react";
import ExpandedSidebar from "./ExpandedSidebar";

type MobileMenuProps = {
  open: boolean;
  toggleSidebar: () => void;
};

const MobileSidebar = ({ open, toggleSidebar }: MobileMenuProps) => {
  return (
    <>
      <div className="md:hidden p-4.5 bg-sidebar text-white">
        <Menu size={28} className="cursor-pointer" onClick={toggleSidebar} />
      </div>
      <div className="block md:hidden absolute top-0 left-0 z-50">
        {open && <ExpandedSidebar toggleSidebar={toggleSidebar} />}
      </div>
    </>
  );
};

export default MobileSidebar;
