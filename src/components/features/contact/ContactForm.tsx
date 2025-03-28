import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactSchema, { ContactFormData } from "../../../schemas/contactSchema";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    reset();
    toast.success("Message sent successfully!", { autoClose: 1000 });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full lg:w-1/2 p-8 md:p-12 text-center lg:text-left bg-white shadow-lg rounded-xl"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
        Get in <span className="text-soft-violet">Touch</span>
      </h2>
      <p className="text-lg text-gray-700 mt-4 leading-relaxed">
        Have any questions? We'd love to hear from you.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-violet"
          />
          {errors.name && (
            <p className="max-w-xs mt-2 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            {...register("email")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-violet"
          />
          {errors.email && (
            <p className="max-w-xs mt-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <textarea
            rows={5}
            placeholder="Your Message"
            {...register("message")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-violet"
          ></textarea>
          {errors.message && (
            <p className="max-w-xs mt-2 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 py-3 px-14 sm:px-16 lg:px-20 text-base lg:text-lg font-semibold bg-soft-violet text-white border border-soft-violet rounded-xl hover:bg-deep-violet hover:border-deep-violet transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
