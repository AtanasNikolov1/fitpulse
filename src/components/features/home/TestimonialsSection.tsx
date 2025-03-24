import Testimonial from "./Testimonials/Testimonial";
import { testimonialsData } from "./Testimonials/testimonialsData";

const TestimonialsSection = () => {
  return (
    <section className=" py-12 md:py-17">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl  md:text-4xl font-extrabold pb-12 md:pb-15 lg:pb-18  text-charcoal-gray tracking-wide">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
