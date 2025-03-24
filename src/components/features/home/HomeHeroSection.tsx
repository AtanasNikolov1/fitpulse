import { Link } from "react-router-dom";

const HomeHeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center h-[70vh] bg-gray-600 text-pure-white">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/images/home-hero-background.webp')",
        }}
      ></div>

      <div className="z-10 text-center px-6 md:px-12 flex flex-col justify-center items-center gap-7">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wider uppercase">
          Track Your Progress, Achieve Your Dreams
        </h1>

        <p className="text-base sm:text-lg lg:text-xl max-w-lg mx-auto">
          Join thousands of users who are tracking their fitness journey and
          achieving their health goals with our simple and effective app.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="py-3 px-14 sm:px-16 lg:px-20 mt-6 sm:mt-8 text-base lg:text-lg font-semibold bg-soft-violet text-pure-white  border border-soft-violet rounded-xl hover:bg-deep-violet hover:border-deep-violet hover:cursor-pointer   transition"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
