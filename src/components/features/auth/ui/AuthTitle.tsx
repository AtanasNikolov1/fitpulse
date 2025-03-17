type AuthTitleProps = {
  text: string;
};

const AuthTitle = ({ text }: AuthTitleProps) => {
  return (
    <h2 className="text-3xl sm:text-[2rem] md:text-4xl lg:text-[2.6rem]  font-semibold text-center  tracking-wide bg-gradient-to-r from-deep-violet to-indigo-500 text-transparent bg-clip-text mb-6 sm:mb-8">
      {text}
    </h2>
  );
};

export default AuthTitle;
