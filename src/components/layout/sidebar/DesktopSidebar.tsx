import CollapsedSidebar from "./CollapsedSidebar";
import ExpandedSidebar from "./ExpandedSidebar";

type MobileMenuProps = {
  open: boolean;
  toggleSidebar: () => void;
};

const DesktopSidebar = ({ open, toggleSidebar }: MobileMenuProps) => {
  return (
    <div className={`hidden md:block ${open ? "md:min-w-68" : "md:min-w-24"}`}>
      {!open && <CollapsedSidebar toggleSidebar={toggleSidebar} />}
      {open && <ExpandedSidebar toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default DesktopSidebar;
