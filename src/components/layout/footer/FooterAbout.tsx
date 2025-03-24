import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const FooterAbout = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-bold text-lg">About Us</h3>
      <p className="text-base">
        FitPulse helps you track workouts, monitor nutrition, and stay motivated
        on your fitness journey. Achieve your goals with smart tracking and a
        supportive community!
      </p>
      <nav className="flex gap-4">
        <Link
          to="#"
          className="p-2 bg-soft-violet text-white rounded-full hover:bg-deep-violet"
        >
          <Instagram />
        </Link>
        <Link
          to="#"
          className="p-2 bg-soft-violet text-white rounded-full hover:bg-deep-violet"
        >
          <Facebook />
        </Link>
        <Link
          to="#"
          className="p-2 bg-soft-violet text-white rounded-full hover:bg-deep-violet"
        >
          <Twitter />
        </Link>
        <Link
          to="#"
          className="p-2 bg-soft-violet text-white rounded-full hover:bg-deep-violet"
        >
          <Youtube />
        </Link>
      </nav>
    </div>
  );
};

export default FooterAbout;
