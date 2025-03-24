import { Link } from "react-router-dom";

const FooterFeatures = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-semibold text-lg">Features</h3>
      <nav className="space-y-2 text-base">
        <Link to="#" className="block hover:underline">
          Dashboard
        </Link>
        <Link to="#" className="block hover:underline">
          Workout Tracking
        </Link>
        <Link to="#" className="block hover:underline">
          Nutrition Log
        </Link>
        <Link to="#" className="block hover:underline">
          Community
        </Link>
      </nav>
    </div>
  );
};

export default FooterFeatures;
