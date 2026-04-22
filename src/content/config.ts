import { defineCollection, z } from 'astro:content';

const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortAnswer: z.string(),
    statuses: z.array(z.enum([
      'f1', 'j1', 'h1b', 'h4', 'l1', 'l2',
      'o1', 'tn', 'gc', 'asylum', 'refugee',
      'daca', 'uvisa', 'tvisa', 'general'
    ])),
    themes: z.array(z.string()).optional(),
    primarySources: z.array(z.object({
      citation: z.string(),
      title: z.string(),
      url: z.string().url(),
    })).min(1),
    secondarySources: z.array(z.object({
      title: z.string(),
      publisher: z.string(),
      url: z.string().url(),
    })).optional(),
    relatedTopics: z.array(z.string()).optional(),
    lastVerified: z.date(),
    verifiedBy: z.string(),
    draft: z.boolean().default(false),
  }),
});

const college = defineCollection({
  type: 'content',
  schema: z.object({
    visa: z.enum([
      'f1', 'f2', 'j1', 'j2', 'h1b', 'h4',
      'l1', 'l2', 'o1', 'tn', 'td',
      'gc', 'asylum', 'refugee', 'daca',
      'undocumented', 'general'
    ]),
    visaLabel: z.string(),
    state: z.string(),
    stateCode: z.string().length(2),
    inStateTuitionEligible: z.enum(['yes', 'no', 'conditional', 'varies']),
    canApplyToPublicUniversities: z.enum(['yes', 'no', 'varies']),
    canReceiveStateFinancialAid: z.enum(['yes', 'no', 'varies', 'conditional']),
    primarySources: z.array(z.object({
      citation: z.string(),
      title: z.string(),
      url: z.string(),
    })).min(1),
    notes: z.string().optional(),
    lastVerified: z.date(),
    verifiedBy: z.string(),
    draft: z.boolean().default(false),
  }),
});

const questions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    section: z.enum([
      'education', 'housing', 'driving', 'banking',
      'healthcare', 'law-enforcement', 'family',
      'benefits', 'employment-rights', 'travel', 'civic'
    ]),
    sectionLabel: z.string(),
    comingSoon: z.boolean().default(true),
    requiresStateSelector: z.boolean().default(false),
    statuses: z.array(z.string()).optional(),
    primarySources: z.array(z.object({
      citation: z.string(),
      title: z.string(),
      url: z.string(),
    })).optional(),
    lastVerified: z.date().optional(),
    verifiedBy: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { topics, college, questions };
