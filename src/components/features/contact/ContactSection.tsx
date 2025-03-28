import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="container flex flex-col lg:flex-row items-center gap-12 px-8 py-16 lg:py-24 mx-auto">
      <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center">
        <img
          className="w-auto h-full max-h-[500px] object-cover"
          src="/images/contact-illustration.png"
          alt="Contact Us"
        />
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
