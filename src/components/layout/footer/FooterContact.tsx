import { Mail, Phone } from "lucide-react";

const FooterContact = () => {
  return (
    <address className="not-italic">
      <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
      <p className="text-base flex items-center space-x-4 mb-4">
        <Phone />
        <span>088 888 8888</span>
      </p>
      <p className="text-sm flex items-center space-x-4">
        <Mail />
        <span>fitpulse@gmail.com</span>
      </p>
    </address>
  );
};

export default FooterContact;
