import { z } from "zod";
import userSignupSchema from "../../../schemas/userSignupSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpUser } from "../../../services/authService";

type FormData = z.infer<typeof userSignupSchema>;
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(userSignupSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const { firstName, lastName, email, password } = data;
      await signUpUser(firstName, lastName, email, password);
      alert("User registered successfully!");
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
        <label>First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

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

      <div>
        <label>Confirm Password</label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <div>
        <label>
          <input type="checkbox" {...register("acceptTerms")} />
          Accept Terms and Conditions
        </label>
        {errors.acceptTerms && <p>{errors.acceptTerms.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
