import { z } from "zod";

const userSignupSchema = z.object({
  fullName: z
    .string()
    .nonempty("Full name is required.")
    .min(3, "Full name must be at least 3 characters long.")
    .max(50, "Full name cannot exceed 50 characters.")
    .regex(
      /^[A-Za-z]+(?: [A-Za-z]+)+$/,
      "Full name must contain at least a first and last name, and contain only letters."
    ),
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Invalid email format."),
  password: z
    .string()
    .nonempty("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter.")
    .regex(/[a-z]/, "Password must include at least one lowercase letter.")
    .regex(/\d/, "Password must include at least one number.")
    .regex(
      /[@$!%*?&#.,]/,
      "Password must include at least one special character (@$!%*?&#)."
    )
    .regex(/^\S*$/, "Password cannot contain spaces."),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export type UserSignUpData = z.infer<typeof userSignupSchema>;
export default userSignupSchema;
