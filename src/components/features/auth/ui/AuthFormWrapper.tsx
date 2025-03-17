import { ReactNode } from "react";

type AuthFormWrapperProps = {
  children: ReactNode;
};

const AuthFormWrapper = ({ children }: AuthFormWrapperProps) => {
  return (
    <section className="flex flex-col gap-4 justify-center items-center w-full max-w-md mx-auto px-10 my-8">
      {children}
    </section>
  );
};

export default AuthFormWrapper;
