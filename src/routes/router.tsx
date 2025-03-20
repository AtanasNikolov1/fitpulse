import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Dashboard from "../pages/Dashboard";
import NotFound from "./../pages/NotFound";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import NavBar from "../components/layout/NavBar";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignUpPage /> },
      {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [{ path: "/dashboard", element: <Dashboard /> }],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
