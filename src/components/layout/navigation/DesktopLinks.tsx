import { Link } from "react-router-dom";

const DesktopLinks = () => {
  return (
    <div className="hidden md:flex space-x-12 text-base lg:text-[1.2rem] font-medium text-charcoal-gray">
      <Link to="/" className=" hover:text-soft-violet">
        Home
      </Link>
      <Link to="/about" className=" hover:text-soft-violet">
        About
      </Link>
      <Link to="/contact" className=" hover:text-soft-violet">
        Contact
      </Link>
    </div>
  );
};

export default DesktopLinks;
