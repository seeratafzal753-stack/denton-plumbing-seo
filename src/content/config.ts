import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Denton Plumbing Specialist'),
    category: z.string(),
    targetKeywords: z.array(z.string()).default([]),
    featuredImage: z.string().optional(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).default([]),
  }),
});

const serviceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    icon: z.string().default('wrench'),
    shortDescription: z.string(),
    problemsSolved: z.array(z.string()),
    features: z.array(z.string()),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
    urgencyLevel: z.enum(['Emergency', 'Same-Day', 'Standard']).default('Same-Day'),
    estimatedStartingPrice: z.string().optional(),
  }),
});

const locationCollection = defineCollection({
  type: 'content',
  schema: z.object({
    cityName: z.string(),
    state: z.string().default('TX'),
    county: z.string().default('Denton County'),
    postalCodes: z.array(z.string()),
    neighborhoods: z.array(z.string()),
    distanceFromDenton: z.string().optional(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    localLandmarks: z.array(z.string()),
    localPlumbingChallenges: z.array(z.string()),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

export const collections = {
  blog: blogCollection,
  services: serviceCollection,
  locations: locationCollection,
};
