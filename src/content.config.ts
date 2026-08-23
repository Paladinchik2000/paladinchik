import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Imported from `zod` directly: the `z` re-export from `astro:content` is
// deprecated in Astro 6.
import { z } from 'zod';

/**
 * Cover and gallery fields use Astro's `image()` helper, so they resolve to
 * `ImageMetadata` (with intrinsic width/height) and are optimized at build
 * time. Paths are relative to the MDX file, e.g.
 * `../../assets/images/movies/{slug}/cover.jpg`. A path that does not resolve
 * fails the build rather than silently falling back — omit the field entirely
 * when there is no artwork yet.
 */
const movies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/movies' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      lang: z.enum(['en', 'ru']).default('en'),
      translationKey: z.string().optional(),
      year: z.number(),
      rating: z.number().min(0).max(10).optional(),
      genres: z.array(z.string()).optional(),
      cover: image().optional(),
      favorite: z.boolean().optional().default(false),
      dateWatched: z.string().optional(),
      description: z.string().optional(),
    }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/books' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      lang: z.enum(['en', 'ru']).default('en'),
      translationKey: z.string().optional(),
      author: z.string(),
      year: z.number().optional(),
      rating: z.number().min(0).max(10).optional(),
      genres: z.array(z.string()).optional(),
      cover: image().optional(),
      favorite: z.boolean().optional().default(false),
      dateRead: z.string().optional(),
      description: z.string().optional(),
    }),
});

const places = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/places' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      lang: z.enum(['en', 'ru']).default('en'),
      translationKey: z.string().optional(),
      country: z.string(),
      city: z.string().optional(),
      coordinates: z.tuple([z.number(), z.number()]).optional(),
      visitedAt: z.string().optional(),
      cover: image().optional(),
      gallery: z.array(image()).optional(),
      mapZoom: z.number().optional(),
      featured: z.boolean().optional().default(false),
      tags: z.array(z.string()).optional(),
      description: z.string().optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      lang: z.enum(['en', 'ru']).default('en'),
      translationKey: z.string().optional(),
      year: z.number().optional(),
      status: z.enum(['idea', 'in-progress', 'live', 'paused', 'archived']).optional(),
      cover: image().optional(),
      tags: z.array(z.string()).optional(),
      url: z.string().optional(),
      github: z.string().optional(),
      featured: z.boolean().optional().default(false),
      role: z.string().optional(),
      stack: z.array(z.string()).optional(),
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      highlights: z.array(z.string()).optional(),
      description: z.string().optional(),
    }),
});

export const collections = {
  movies,
  books,
  places,
  projects,
};
