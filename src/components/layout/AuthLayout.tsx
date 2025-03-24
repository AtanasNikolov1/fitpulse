import { Outlet } from "react-router-dom";
import NavBar from "./navigation/NavBar";

const AuthLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default AuthLayout;
