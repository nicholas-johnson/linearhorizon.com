import {
  courseCategoryIds,
  courseLevels,
  type Course,
  type CourseCategoryId,
  type CourseLevel,
} from './types.ts';

export const durationFilterIds = ['up-to-1-day', '2-days', '3-days'] as const;

export type DurationFilterId = (typeof durationFilterIds)[number];

export const durationFilters: { id: DurationFilterId; label: string }[] = [
  { id: 'up-to-1-day', label: 'Up to 1 day' },
  { id: '2-days', label: '2 days' },
  { id: '3-days', label: '3 days' },
];

export interface CatalogueFilters {
  q: string;
  category: string;
  level: string;
  duration: string;
}

export const emptyCatalogueFilters: CatalogueFilters = {
  q: '',
  category: '',
  level: '',
  duration: '',
};

export interface CatalogueCourseRecord {
  slug: string;
  category: CourseCategoryId;
  level: CourseLevel;
  duration: string;
  searchText: string;
}

export function durationRange(duration: string): { min: number; max: number } {
  const text = duration.toLowerCase().replace(/[–—]/g, '-');
  const half = /\bhalf\b/.test(text);
  const numbers = [...text.matchAll(/(\d+(?:\.\d+)?)/g)].map((match) => Number(match[1]));

  if (numbers.length === 0) {
    return half ? { min: 0.5, max: 0.5 } : { min: 0, max: 0 };
  }

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return half ? { min: Math.min(0.5, min), max } : { min, max };
}

export function matchesDurationFilter(duration: string, filterId: string): boolean {
  const range = durationRange(duration);
  if (filterId === 'up-to-1-day') return range.max > 0 && range.max <= 1;
  if (filterId === '2-days') return range.min <= 2 && range.max >= 2;
  if (filterId === '3-days') return range.max >= 3;
  return true;
}

export function normalizeSearchText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function searchTokens(query: string): string[] {
  return normalizeSearchText(query).split(' ').filter(Boolean);
}

export function courseSearchText(course: Course, categoryTitle: string): string {
  return [
    course.title,
    course.shortDescription,
    course.audienceLabel,
    course.level,
    course.duration,
    categoryTitle,
  ].join(' ');
}

export function toCatalogueRecord(course: Course, categoryTitle: string): CatalogueCourseRecord {
  return {
    slug: course.slug,
    category: course.category,
    level: course.level,
    duration: course.duration,
    searchText: courseSearchText(course, categoryTitle),
  };
}

export function isCourseCategoryId(value: string): value is CourseCategoryId {
  return (courseCategoryIds as readonly string[]).includes(value);
}

export function isCourseLevel(value: string): value is CourseLevel {
  return (courseLevels as readonly string[]).includes(value);
}

export function isDurationFilterId(value: string): value is DurationFilterId {
  return (durationFilterIds as readonly string[]).includes(value);
}

export function parseCatalogueFilters(
  params: URLSearchParams | string | Record<string, string | undefined>,
): CatalogueFilters {
  const search =
    params instanceof URLSearchParams
      ? params
      : typeof params === 'string'
        ? new URLSearchParams(params)
        : new URLSearchParams(
            Object.entries(params).flatMap(([key, value]) => (value ? [[key, value]] : [])),
          );

  const q = search.get('q')?.trim() ?? '';
  const category = search.get('category')?.trim() ?? '';
  const level = search.get('level')?.trim() ?? '';
  const duration = search.get('duration')?.trim() ?? '';

  return {
    q,
    category: isCourseCategoryId(category) ? category : '',
    level: isCourseLevel(level) ? level : '',
    duration: isDurationFilterId(duration) ? duration : '',
  };
}

export function hasActiveFilters(filters: CatalogueFilters): boolean {
  return Boolean(filters.q || filters.category || filters.level || filters.duration);
}

export function serializeCatalogueFilters(filters: CatalogueFilters): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.q) params.set('q', filters.q);
  if (filters.category) params.set('category', filters.category);
  if (filters.level) params.set('level', filters.level);
  if (filters.duration) params.set('duration', filters.duration);
  return params;
}

export function catalogueHref(filters: Partial<CatalogueFilters> = {}): string {
  const params = serializeCatalogueFilters({
    ...emptyCatalogueFilters,
    ...filters,
  });
  const query = params.toString();
  return query ? `/training?${query}` : '/training';
}

export function topicHref(categoryId: CourseCategoryId | string): string {
  return `/training/topics/${categoryId}`;
}

export function audienceHref(slug: string): string {
  return `/training/for/${slug}`;
}

export function courseMatches(
  course: Pick<CatalogueCourseRecord, 'category' | 'level' | 'duration' | 'searchText'>,
  filters: CatalogueFilters,
): boolean {
  if (filters.category && course.category !== filters.category) return false;
  if (filters.level && course.level !== filters.level) return false;
  if (filters.duration && !matchesDurationFilter(course.duration, filters.duration)) return false;

  const tokens = searchTokens(filters.q);
  if (tokens.length === 0) return true;

  const haystack = normalizeSearchText(course.searchText);
  return tokens.every((token) => haystack.includes(token));
}

export function filterCourseRecords<T extends CatalogueCourseRecord>(
  records: T[],
  filters: CatalogueFilters,
): T[] {
  if (!hasActiveFilters(filters)) return records;
  return records.filter((record) => courseMatches(record, filters));
}

export function filterCourses(
  courses: Course[],
  filters: CatalogueFilters,
  categoryTitle: (course: Course) => string,
): Course[] {
  return courses.filter((course) =>
    courseMatches(toCatalogueRecord(course, categoryTitle(course)), filters),
  );
}
