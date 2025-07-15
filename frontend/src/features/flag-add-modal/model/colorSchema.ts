import z from "zod";
import { hexColorRegex } from "@/features/flag-add-modal/lib/colorUtils";

export const colorSchema = z.object({
  hexColor: z.string().regex(hexColorRegex, "Неверный формат цвета").optional(),
});
