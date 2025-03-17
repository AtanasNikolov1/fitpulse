import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import PasswordToggleButton from "./PasswordToggleButton";
import PasswordValidationList from "./PasswordValidationList";

type PasswordFieldProps = {
  password?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  strength: boolean;
};

const PasswordField = ({
  password,
  register,
  error,
  strength,
}: PasswordFieldProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col gap-1 relative">
      <label className="text-charcoal-gray text-sm sm:text-base md:text-md font-medium">
        Password
      </label>
      <div className="relative w-full">
        <input
          className="border border-medium-gray p-1.5 sm:p-2 rounded-md focus:outline-none focus:border-1.5 focus:border-deep-violet focus:ring-1 focus:ring-deep-violet w-full pr-10"
          type={isVisible ? "text" : "password"}
          {...register}
        />
        <PasswordToggleButton
          isVisible={isVisible}
          onToggle={() => setIsVisible((prev) => !prev)}
        />
      </div>
      {error && !password && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
      {password && strength && <PasswordValidationList password={password} />}
    </div>
  );
};

export default PasswordField;
