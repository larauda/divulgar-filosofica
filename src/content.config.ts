import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({
    pattern: ['*.md', '*.mdx'],
    base: 'src/data/post',
  }),

  schema: z.object({
    publishDate: z.coerce.date().optional(),
    updateDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const galleryCollection = defineCollection({
  loader: glob({
    pattern: ['*.md', '*.mdx'],
    base: 'src/data/gallery',
  }),

  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    cover: z.string(),
    photos: z.array(z.string()).default([]),
  }),
});

const activitiesCollection = defineCollection({
  loader: glob({
    pattern: ['*.md', '*.mdx'],
    base: 'src/data/activities',
  }),

  schema: z.object({
    title: z.string(),
    type: z.string(),
    image: z.string(),
    date: z.coerce.date().optional(),
    modality: z.string(),
    location: z.string().optional(),
    status: z.string(),
    registrationUrl: z.string().optional(),
    excerpt: z.string(),
    gallery: z.string().optional(),
  }),
});

const agendaCollection = defineCollection({
  loader: glob({
    pattern: ['*.md', '*.mdx'],
    base: 'src/data/agenda',
  }),

  schema: z.object({
    title: z.string(),
    type: z.string(),
    organizer: z.string(),
    image: z.string(),

    date: z.coerce.date().optional(),
    time: z.string().optional(),

    modality: z.string(),
    location: z.string().optional(),

    status: z.string(),
    registrationUrl: z.string().optional(),

    excerpt: z.string(),

    featured: z.boolean().optional(),
  }),
});

export const collections = {
  post: postCollection,
  gallery: galleryCollection,
  activities: activitiesCollection,
  agenda: agendaCollection,
};