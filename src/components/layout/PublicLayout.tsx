import { Outlet } from "react-router-dom";
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";
import ScrollToTop from "../../utils/ScrollToTop";

const PublicLayout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
