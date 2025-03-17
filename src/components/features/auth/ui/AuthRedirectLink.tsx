import { Link } from "react-router-dom";

type LoginRedirectProps = {
  text: string;
  url: string;
};

const AuthRedirectLink = ({ text, url }: LoginRedirectProps) => {
  return (
    <p className="text-gray-600 text-sm sm:text-base text-center">
      {text}{" "}
      <Link to={url} className="text-deep-violet hover:underline">
        {url === "/login" ? "Log In" : "Create Account"}
      </Link>
    </p>
  );
};

export default AuthRedirectLink;
