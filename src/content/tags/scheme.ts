import { z } from "astro:content";

export const tagsScheme = z.object({
  name: z.string(),
  description: z.string(),
  date: z
    .string()
    .refine(
      (date) => !isNaN(Date.parse(date)),
      "Invalid date for tagsCollection",
    ),
  color: z.string().refine((color) => {
    const regex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return regex.test(color);
  }, "Invalid color, must be a hex color"),
  icon: z.string(),
});
