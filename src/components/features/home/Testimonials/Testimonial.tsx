import { Testimonial as TestimonialType } from "./testimonialsData";
import { Star } from "lucide-react";

type TestimonialProps = TestimonialType;

const Testimonial = ({
  backgroundColor,
  textColor,
  borderColor,
  imageUrl,
  name,
  rating,
  description,
}: TestimonialProps) => {
  return (
    <div
      className={`${backgroundColor} ${textColor} rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 p-10`}
    >
      <div className="flex justify-center mb-6 ">
        <img
          src={imageUrl}
          alt={name}
          className={`w-25 h-25 rounded-full object-cover border-4 ${borderColor}`}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="flex justify-center mb-4">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            className="text-yellow-500 w-5 h-5"
            fill="currentColor"
          />
        ))}
      </div>
      <p className="text-lg italic">{description}</p>
    </div>
  );
};

export default Testimonial;
