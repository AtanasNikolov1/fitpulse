import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";
import FooterFeatures from "./FooterFeatures";
import FooterSupport from "./FooterSupport";

const Footer = () => {
  return (
    <footer className="pt-12 pb-5 px-8 bg-charcoal-gray">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-8 text-soft-white">
        <FooterAbout />
        <FooterSupport />
        <FooterFeatures />
        <FooterContact />
      </div>

      <div className="text-center text-sm mx-auto text-soft-white mt-8 border-t border-soft-white pt-6 max-w-7xl">
        Copyright &copy; {new Date().getFullYear()} FitPulse. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
