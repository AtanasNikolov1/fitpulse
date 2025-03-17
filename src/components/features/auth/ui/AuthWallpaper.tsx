const AuthWallpaper = () => {
  return (
    <section className="hidden md:flex relative w-2/5 bg-[url('/images/auth-wallpaper.jpg')] bg-cover bg-center bg-no-repeat min-h-full">
      <div className="relative z-10 flex flex-col items-center justify-around w-full h-full">
        <img
          src="/images/fitpulse-white-logo.png"
          alt="FitPulse logo"
          className="w-72 h-72 2xl:w-80 2xl:h-80"
        />
        <p className="px-18 font-quotes text-2xl 2xl:text-3xl font-bold text-pure-white tracking-wide italic leading-10 text-center">
          "Success is the sum of small efforts, repeated day in and day out." –
          Robert Collier
        </p>
      </div>
    </section>
  );
};

export default AuthWallpaper;
