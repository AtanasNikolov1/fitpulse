import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { logInUser } from "../../../../services/authService";
import userLogInSchema, {
  UserLoginData,
} from "../../../../schemas/userLoginSchema";
import AuthInputField from "./AuthInputField";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserLoginData>({
    resolver: zodResolver(userLogInSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: UserLoginData) => {
    const loadingToast = toast.loading("Logging you in, please wait...");

    try {
      const { email, password } = data;
      await logInUser(email, password);
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
        label="Email"
        type="email"
        register={register("email")}
        error={errors.email}
      />
      <PasswordField
        register={register("password")}
        error={errors.password}
        strength={false}
      />
      <SubmitButton text="Log In" />
    </form>
  );
};

export default LoginForm;
