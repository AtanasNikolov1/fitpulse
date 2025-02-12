import { z } from "zod";

const userLogInSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Invalid email format."),
  password: z.string().nonempty("Password is required."),
});

export type UserLoginData = z.infer<typeof userLogInSchema>;
export default userLogInSchema;
