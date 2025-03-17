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
      className="flex items-center justify-center gap-2 w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 hover:cursor-pointer"
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
