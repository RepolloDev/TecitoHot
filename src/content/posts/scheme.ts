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
  cover: z.string().url().default("https://ajcbxgvlgngaewqiinmg.supabase.co/storage/v1/object/sign/posts/fallBackCover.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3N0cy9mYWxsQmFja0NvdmVyLndlYnAiLCJpYXQiOjE3MjcwMzIzNDUsImV4cCI6MTc1ODU2ODM0NX0.0waspH3yZcl8YNWJuOmv_pvUUL62CmPeedJ65l6unyg&t=2024-09-22T19%3A12%3A24.426Z"),
});
