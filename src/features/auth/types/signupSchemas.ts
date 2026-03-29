// features/auth/types/authSchemas.ts
import { z } from "zod";

export const signUpMethodSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
});
export const accountInfoSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords Do Not Match!",
    path: ["confirmPassword"],
  });
export const avatarSchema = z.object({
  stack: z.string().optional(),
});

export const nameRoleSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  role: z.string().min(1, "Role is requierd"),
});
export const techStackSchema = z.object({
  stack: z.array(z.string()).min(1, "Enter at least one stack"),
});

export const fullSignUpSchema = signUpMethodSchema
  .merge(accountInfoSchema)
  .merge(nameRoleSchema)
  .merge(avatarSchema)
  .merge(techStackSchema);

export type SignUpMethodFormData = z.infer<typeof signUpMethodSchema>;
export type AccountInfoFormData = z.infer<typeof accountInfoSchema>;
export type NameRoleFormData = z.infer<typeof nameRoleSchema>;
export type AvatarFormData = z.infer<typeof avatarSchema>;
export type TechStackFormData = z.infer<typeof techStackSchema>;
export type FullSignUpData = z.infer<typeof fullSignUpSchema>;
