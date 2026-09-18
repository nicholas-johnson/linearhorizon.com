import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { labProgrammeSlugs } from './data/labs';
import { labLoader } from './lib/labs/loader';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const whitepapers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/whitepapers' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    kicker: z.string().default('Linear Horizon whitepaper'),
    stages: z
      .array(
        z.object({
          id: z.string(),
          title: z.string(),
          summary: z.string(),
        }),
      )
      .optional(),
    contents: z
      .array(
        z.object({
          id: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
    hero: z
      .object({
        src: z.string(),
        alt: z.string(),
        width: z.number(),
        height: z.number(),
      })
      .optional(),
  }),
});

const labSourceFile = z.object({
  filename: z.string(),
  lang: z.string(),
  content: z.string(),
});

const labs = defineCollection({
  loader: labLoader(),
  schema: z.object({
    programme: z.enum(labProgrammeSlugs),
    kind: z.enum(['module', 'exercise']),
    moduleDir: z.string(),
    moduleSlug: z.string(),
    moduleId: z.string(),
    exerciseDir: z.string().optional(),
    exerciseSlug: z.string().optional(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
    githubUrl: z.string(),
    githubFolder: z.string(),
    sources: z.array(labSourceFile).optional(),
  }),
});

export const collections = { insights, labs, whitepapers };
