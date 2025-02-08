import { z } from "zod";

const userSignupSchema = z
  .object({
    firstName: z
      .string()
      .nonempty("First name is required.")
      .min(2, "First name must be at least 2 characters long.")
      .regex(
        /^[A-Za-z]+$/,
        "First name can only contain alphabetic characters"
      ),
    lastName: z
      .string()
      .nonempty("Last name is required.")
      .min(2, "Last name must be at least 2 characters long.")
      .regex(/^[A-Za-z]+$/, "Last name can only contain alphabetic characters"),
    email: z
      .string()
      .nonempty("Email is required.")
      .email("Invalid email format."),
    password: z
      .string()
      .nonempty("Password is required.")
      .min(8, "Password must be at least 8 characters long.")
      .regex(/[A-Za-z]/, "Password must contain at least one letter.")
      .regex(/[0-9]/, "Password must contain at least one number.")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character."
      )
      .regex(/^\S*$/, "Password must not contain spaces."),
    confirmPassword: z.string().nonempty("Confirm password is required."),
    acceptTerms: z.boolean().refine((value) => value === true, {
      message: "You must accept the terms and conditions.",
      path: ["acceptTerms"],
    }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

export default userSignupSchema;
