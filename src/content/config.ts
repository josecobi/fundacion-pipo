import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'data',
  schema: z.object({
    title_es:       z.string(),
    title_en:       z.string(),
    date:           z.string(),
    time:           z.string(),
    location_es:    z.string(),
    location_en:    z.string(),
    description_es: z.string(),
    description_en: z.string(),
    image:          z.string().optional(),
    featured:       z.boolean().default(false),
  }),
});

// Gallery collection schema.
// When a CMS is added later, it writes JSON files into
// src/content/gallery/ matching this schema.
// Images are co-located in src/content/gallery/ and referenced
// relatively (e.g. "./evento-01.jpg"); image() resolves and
// optimizes them via astro:assets.
const gallery = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    title_es: z.string(),
    title_en: z.string(),
    image:    image(),      // relative path, e.g. "./evento-01.jpg"
    alt_es:   z.string(),
    alt_en:   z.string(),
    date:     z.string().optional(),
    featured: z.boolean().default(false),
    order:    z.number().default(99),
  }),
});

// Past events collection.
// Markdown files with optional frontmatter.
// Images live in public/images/past-events/
// A future CMS will write to this folder in the same format.
const pastEvents = defineCollection({
  type: 'content',
  schema: z.object({
    title_es:     z.string(),
    title_en:     z.string(),
    date:         z.string(),               // ISO: "2024-03-15"
    location_es:  z.string(),
    location_en:  z.string(),
    image:        z.string().optional(),    // filename only, e.g. "evento.jpg"
    image_alt_es: z.string().optional(),
    image_alt_en: z.string().optional(),
  }),
});

export const collections = { events, 'past-events': pastEvents, gallery };
