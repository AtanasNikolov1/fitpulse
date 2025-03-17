import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type: "text" | "email" | "password" | "number" | "tel";
  register: UseFormRegisterReturn;
  error?: FieldError;
};

const AuthInputField = ({ label, type, register, error }: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-charcoal-gray text-sm sm:text-base md:text-md font-medium">
        {label}
      </label>
      <input
        className="border border-medium-gray p-1.5 sm:p-2 rounded-md focus:outline-none focus:border-1.5 focus:border-deep-violet focus:ring-1 focus:ring-deep-violet w-full"
        type={type}
        {...register}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1 max-w-xs">{error.message}</p>
      )}
    </div>
  );
};

export default AuthInputField;
