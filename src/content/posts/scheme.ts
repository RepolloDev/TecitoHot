import { z, reference } from "astro:content";

export const postsScheme = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.date(),
  tags: z.array(reference("tags")).refine((tags) => tags.length > 0, {
    message: "Post must have at least",
  }),
  authors: z
    .array(reference("authors"))
    .refine((authors) => authors.length > 0, {
      message: "Post must have at least one author",
    }),
  cover: z.string().url().optional(),
});
