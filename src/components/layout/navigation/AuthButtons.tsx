import { Link } from "react-router-dom";

const AuthButtons = () => {
  return (
    <div className="hidden md:flex space-x-5 font-medium">
      <Link
        to="/login"
        className="text-soft-violet w-28 border-soft-violet text-center py-2 rounded-lg hover:bg-soft-violet hover:text-white transition border-2"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-soft-violet w-28 border-2 border-soft-violet text-white text-center py-2 rounded-lg hover:bg-deep-violet hover:border-deep-violet transition"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default AuthButtons;
