import { Outlet } from "react-router-dom";
import NavBar from "./navigation/NavBar";
import ScrollToTop from "../../utils/ScrollToTop";

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
