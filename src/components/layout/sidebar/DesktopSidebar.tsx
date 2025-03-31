import CollapsedSidebar from "./CollapsedSidebar";
import ExpandedSidebar from "./ExpandedSidebar";

type MobileMenuProps = {
  open: boolean;
  toggleSidebar: () => void;
};

const DesktopSidebar = ({ open, toggleSidebar }: MobileMenuProps) => {
  return (
    <div className="hidden md:block md:min-w-26">
      {!open && <CollapsedSidebar toggleSidebar={toggleSidebar} />}
      {open && <ExpandedSidebar toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default DesktopSidebar;
