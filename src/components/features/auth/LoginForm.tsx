import { useForm } from "react-hook-form";
import userLogInSchema, {
  UserLoginData,
} from "../../../schemas/userLoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { logInUser } from "../../../services/authService";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserLoginData>({
    resolver: zodResolver(userLogInSchema),
  });

  const onSubmit = async (data: UserLoginData) => {
    try {
      await logInUser(data.email, data.password);
      alert("User logged in successfully!");
      reset();
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "Unexpected error occurred"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
