import { Link } from "react-router-dom";
const FooterSupport = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-semibold text-lg">Support</h3>
      <nav className="space-y-2 text-base">
        <Link to="#" className="block hover:underline">
          FAQ
        </Link>
        <Link to="#" className="block hover:underline">
          Privacy Policy
        </Link>
        <Link to="#" className="block hover:underline">
          Help
        </Link>
        <Link to="#" className="block hover:underline">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default FooterSupport;
