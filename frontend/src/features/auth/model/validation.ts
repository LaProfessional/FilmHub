import z from "zod";

export const signUpFormSchema = z
  .object({
    firstName: z.string().min(2, "Firstname must be at least 2 characters"),
    lastName: z.string().min(2, "Lastname must be at least 2 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export const signInFormSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const emailEntryFormSchema = z.object({
  email: z.string().email("Неверный формат почты"),
});

export const codeVerifyFormSchema = z.object({
  code: z
    .string()
    .length(4, "Введите 4 цифры")
    .regex(/^\d{4}$/, "Только цифры"),
});

export const confirmPasswordSchema = z
  .object({
    password: z.string().min(6, "Минимум 6 символов"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
export type SignInFormSchema = z.infer<typeof signInFormSchema>;
export type EmailEntryFormSchema = z.infer<typeof emailEntryFormSchema>;
export type CodeVerifyFormSchema = z.infer<typeof codeVerifyFormSchema>;
export type ConfirmPasswordSchema = z.infer<typeof confirmPasswordSchema>;
