import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import PublicLayout from "../components/layout/PublicLayout";
import AuthLayout from "../components/layout/AuthLayout";
import DashboardLayout from "../components/layout/DashboardLayout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProgressPage from "../pages/ProgressPage";
import WorkoutsPage from "../pages/WorkoutsPage";
import CalorieTrackerPage from "../pages/CalorieTrackerPage";
import AchievementsPage from "../pages/AchievementsPage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [{ path: "/login", element: <LoginPage /> }],
  },
  {
    path: "/signup",
    element: <AuthLayout />,
    children: [{ path: "/signup", element: <SignUpPage /> }],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <DashboardLayout />,
        children: [
          { path: "progress", element: <ProgressPage /> },
          { path: "workouts", element: <WorkoutsPage /> },
          { path: "calories", element: <CalorieTrackerPage /> },
          { path: "achievements", element: <AchievementsPage /> },
          { path: "settings", element: <ProfilePage /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
