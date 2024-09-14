import { z } from "astro:content";

export const authorsScheme = z.object({
  name: z.string(),
  username: z.string(),
  description: z.string(),
  avatar: z.string().url("Avatar must be a valid URL"),
  date: z
    .string()
    .refine(
      (date) => !isNaN(Date.parse(date)),
      "Invalid date for authorsCollection",
    ),
  social: z.object({
    twitter: z.string().url("Twitter must be a valid URL").optional(),
    github: z.string().url("Github must be a valid URL").optional(),
  }),
});
