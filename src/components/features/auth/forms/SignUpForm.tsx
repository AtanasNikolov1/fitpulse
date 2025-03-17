import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { signUpUser } from "../../../../services/authService";
import userSignupSchema, {
  UserSignUpData,
} from "../../../../schemas/userSignupSchema";
import AuthInputField from "./AuthInputField";
import PasswordField from "./PasswordField";
import AuthCheckboxField from "./AuthCheckboxField";
import SubmitButton from "./SubmitButton";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<UserSignUpData>({
    resolver: zodResolver(userSignupSchema),
  });
  const navigate = useNavigate();
  const password = watch("password", "");

  const onSubmit = async (data: UserSignUpData) => {
    const loadingToast = toast.loading(
      "Creating your account, just a moment..."
    );

    try {
      const { fullName, email, password } = data;
      await signUpUser(fullName, email, password);
      reset();
      toast.dismiss(loadingToast);
      navigate("/dashboard");
    } catch (error) {
      toast.update(loadingToast, {
        render:
          error instanceof Error ? error.message : "Unexpected error occurred",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      <AuthInputField
        label="Full Name"
        type="text"
        register={register("fullName")}
        error={errors.fullName}
      />
      <AuthInputField
        label="Email"
        type="email"
        register={register("email")}
        error={errors.email}
      />
      <PasswordField
        password={password}
        register={register("password")}
        error={errors.password}
        strength={true}
      />
      <AuthCheckboxField
        register={register("acceptTerms", { required: true })}
        error={errors.acceptTerms}
      />
      <SubmitButton text="Join Fitpulse" />
    </form>
  );
};

export default SignUpForm;
