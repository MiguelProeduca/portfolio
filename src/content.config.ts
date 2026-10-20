import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    kicker: z.string(), // e.g. "Design system"
    tag: z.string(), // list label, e.g. "Design system · UNIR"
    summary: z.string(), // one line for the home list
    lead: z.string(), // intro paragraph on the case page
    meta: z.array(z.object({ label: z.string(), value: z.string() })),
    hero: z.string(), // placeholder text until the real image exists
    cardTitle: z.string().optional(), // home card title (falls back to title)
    cardSub: z.string().optional(), // home card subtitle (falls back to kicker)
    heroLinks: z.array(z.object({ label: z.string(), type: z.string(), hash: z.string().optional() })).optional(), // links in the hero's bottom bar
    cover: z.string().optional(), // card image on the home, e.g. "/work/ds-cover.jpg" in public/
    coverBorder: z.boolean().default(false), // thin border on the home card, for light covers
    coverPosition: z.string().optional(), // CSS object-position for the home card crop, e.g. "right"
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
