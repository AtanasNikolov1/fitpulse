import { z } from "zod";

const contactSchema = z.object({
  name: z.string().nonempty("Email is required."),
  email: z.string().email("Invalid email format."),
  message: z
    .string()
    .nonempty("Message is required.")
    .min(10, "Message must be at least 10 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export default contactSchema;
