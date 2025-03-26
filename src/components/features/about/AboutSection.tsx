import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="container mx-auto px-8 py-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
      <div className="w-full lg:w-1/2 text-center">
        <h2 className="text-3xl  md:text-4xl font-bold text-charcoal-gray">
          Your Fitness, <span className="text-soft-violet">Your Journey</span>
        </h2>
        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          At FitPulse, we believe that fitness is more than just a routine—it’s
          a way of life. Our mission is to empower you with the tools, support,
          and motivation to reach your health and fitness goals. Whether you're
          just starting out or a seasoned athlete, we provide everything you
          need to stay on track and achieve success. From intuitive workout
          logging to insightful progress tracking, we make your fitness journey
          seamless and effective.
        </p>
        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          With real-time progress tracking, personalized insights, and a
          supportive social space, FitPulse makes it easy to stay on top of your
          journey. Log your workouts, track your nutrition, and set meaningful
          fitness goals—all in one place. Join a community of like-minded
          individuals who motivate and support each other to push beyond their
          limits and achieve lasting results.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/signup"
            className="py-3 px-14 sm:px-16 lg:px-20 text-base lg:text-lg font-semibold bg-soft-violet text-white border border-soft-violet rounded-xl hover:bg-deep-violet hover:border-deep-violet transition"
          >
            Join FitPulse Now
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          className="w-auto h-full max-h-[500px] object-cover"
          src="/images/about-fitpulse-collage.png"
          alt="FitPulse Collage"
        />
      </div>
    </section>
  );
};

export default AboutSection;
