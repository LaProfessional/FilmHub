import z from "zod";

export const collectionSchema = z.object({
  name: z
    .string()
    .min(3, "Введите название папки")
    .max(60, "Название не должно быть длиннее 60 символов"),
});

export type CollectionSchema = z.infer<typeof collectionSchema>;
