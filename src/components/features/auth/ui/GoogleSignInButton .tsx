import { toast } from "react-toastify";
import { signInWithGoogle } from "../../../../services/authService";
import { useNavigate } from "react-router-dom";

const GoogleSignInButton = () => {
  const navigate = useNavigate();
  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Unexpected error occurred",
        {
          autoClose: 3000,
          closeOnClick: true,
        }
      );
    }
  };

  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 w-full border border-medium-gray text-gray-700 bg-pure-white py-3 px-4 rounded-lg hover:bg-soft-violet hover:text-pure-white hover:cursor-pointer transition"
      onClick={handleGoogleSignUp}
    >
      <img
        src="/images/google-logo.webp"
        alt="Google Logo"
        className="w-5 h-5 lg:h-8 lg:w-8"
      />
      Continue with Google
    </button>
  );
};

export default GoogleSignInButton;
