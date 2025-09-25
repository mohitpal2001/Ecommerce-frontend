 import {z} from "zod";

 const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};:'"\\|,.<>/?]).{8,128}$/;

  const nameRegex = /^[\p{L} '-]+$/u;

 export const zSchema = z.object({
    email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
    
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(128, { message: "Password is too long" })
    .regex(passwordRegex, {
      message:
        "Password must include uppercase, lowercase, number and special character",
    }),
      name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(50, { message: "Name must be at most 50 characters" })
      .regex(nameRegex, { message: "Name can contain only letters, spaces, - and '" }),
 })

 export type ZSchema = z.infer<typeof zSchema>;