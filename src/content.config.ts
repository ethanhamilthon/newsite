import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts live in src/content/blog/<lang>/<slug>.md.
// The folder name (kz, ru, en) is the language of the post.
const blog = defineCollection({
  loader: glob({ pattern: '{kz,ru,en}/**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

// Courses live in src/content/courses/<slug>.md. Written in Kazakh only.
const courses = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    // Short line for the card on the home page.
    card: z.string(),
    price: z.number(),
    currency: z.string().default('₸'),
    // YouTube video id (works with unlisted videos). Empty = placeholder.
    videoId: z.string().default(''),
    badges: z.array(z.string()).default([]),
    audience: z.array(z.string()),
    program: z.array(z.string()),
    // Prefilled WhatsApp message for the sign-up button.
    waText: z.string(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, courses };
