import { defineCollection } from "astro:content";
import { tagsScheme } from "./tags/scheme";
import { authorsScheme } from "./authors/scheme";
import { postsScheme } from "./posts/scheme";

const tags = defineCollection({
  type: "data",
  schema: tagsScheme,
});

const authors = defineCollection({
  type: "data",
  schema: authorsScheme,
});

const posts = defineCollection({
  type: "content",
  schema: postsScheme,
});

export const collections = {
  tags,
  authors,
  posts,
};
