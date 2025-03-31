import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-soft-violet to-deep-violet">
      <div className="container flex flex-col items-center gap-10 bg-white shadow-lg rounded-3xl p-8 md:p-12">
        <img
          src="/images/page-not-found.jpg"
          alt="404 Not Found"
          className="w-full max-w-xs md:max-w-sm lg:w-1/2 object-contain"
        />
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal-gray mb-4">
            We Couldn't Find That Page!
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-6">
            It looks like the page you're looking for has moved or doesn't exist
            anymore. But don't worry, we'll help you get back on track!
          </p>
          <Link
            to="/"
            className="inline-block py-3 px-8 text-lg font-semibold text-white bg-soft-violet rounded-lg hover:bg-deep-violet transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
