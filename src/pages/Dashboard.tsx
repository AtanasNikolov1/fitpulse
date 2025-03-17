import { useNavigate } from "react-router-dom"; // Import useNavigate to redirect after logout
import { logOutUser } from "../services/authService"; // Import the logOutUser function from your authService

const Dashboard = () => {
  const navigate = useNavigate(); // Hook to navigate after log out

  const handleLogout = async () => {
    try {
      await logOutUser(); // Log the user out
      navigate("/login"); // Redirect to the login page after logging out
    } catch (error) {
      console.error("Logout error:", error);
      alert("An error occurred while logging out. Please try again.");
    }
  };

  return (
    <>
      <h1 className="text-2xl">Dashboard Page</h1>

      {/* Log Out Button */}
      <button onClick={handleLogout} className="btn-logout">
        Log Out
      </button>
    </>
  );
};

export default Dashboard;
