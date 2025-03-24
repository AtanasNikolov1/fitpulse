import { Outlet } from "react-router-dom";
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";

const PublicLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
