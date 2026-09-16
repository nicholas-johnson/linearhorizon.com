export const courseLevels = [
  'Foundation',
  'Intermediate',
  'Advanced',
  'Leadership',
] as const;

export type CourseLevel = (typeof courseLevels)[number];

export const courseCategoryIds = [
  'foundations',
  'leadership',
  'ai-engineering',
  'rag-agents',
  'architecture',
  'models-ml',
  'cloud-platform',
  'workshops',
] as const;

export type CourseCategoryId = (typeof courseCategoryIds)[number];

export interface CourseModule {
  title: string;
  points: string[];
}

export interface Course {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  audience: string;
  audienceLabel: string;
  prerequisites: string;
  duration: string;
  durationNote?: string;
  level: CourseLevel;
  category: CourseCategoryId;
  outcomes: string[];
  outline: CourseModule[];
  practicalWork: string;
  takeaways: string[];
}

export interface CourseCategory {
  id: CourseCategoryId;
  title: string;
  summary: string;
  seoTitle: string;
  lede: string;
}

export interface CoursePathway {
  id: string;
  title: string;
  summary: string;
  slugs: string[];
}
