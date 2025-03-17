import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type CheckboxFieldProps = {
  register: UseFormRegisterReturn;
  error?: FieldError;
};
const AuthCheckboxField = ({ register, error }: CheckboxFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 sm:gap-3">
        <input
          className="w-5 h-5 sm:w-6 sm:h-6 accent-deep-violet focus:ring-deep-violet cursor-pointer "
          type="checkbox"
          {...register}
        />
        <label className="text-sm sm:text-base md:text-md text-charcoal-gray leading-tight">
          I agree to the{" "}
          <p className="text-deep-violet hover:text-purple-700 cursor-pointer inline-block">
            Fitpulse Terms and Conditions
          </p>
        </label>
      </div>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default AuthCheckboxField;
