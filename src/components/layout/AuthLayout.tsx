import { Outlet } from "react-router-dom";
import NavBar from "./navigation/NavBar";
import ScrollToTop from "./ScrollToTop";


const AuthLayout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
    </>
  );
};

export default AuthLayout;
