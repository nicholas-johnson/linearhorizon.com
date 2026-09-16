import type { Course, CourseCategoryId } from './types';
import { architectureCourses } from './architecture';
import { cloudCourses } from './cloud';
import { engineeringCourses } from './engineering';
import { foundationsCourses } from './foundations';
import { leadershipCourses } from './leadership';
import { modelsCourses } from './models';
import { ragAgentCourses } from './rag-agents';
import { workshopCourses } from './workshops';
import { courseCategories, coursePathways } from './catalogue';
import { audienceLandings } from './landings';
import { programmes } from '../programmes';

export const courses: Course[] = [
  ...foundationsCourses,
  ...leadershipCourses,
  ...engineeringCourses,
  ...ragAgentCourses,
  ...architectureCourses,
  ...modelsCourses,
  ...cloudCourses,
  ...workshopCourses,
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function coursesInCategory(id: CourseCategoryId) {
  return courses.filter((course) => course.category === id);
}

export function getCategory(id: CourseCategoryId) {
  return courseCategories.find((category) => category.id === id);
}

export function relatedCourses(course: Course, limit = 3) {
  const sameCategory = courses.filter(
    (item) => item.category === course.category && item.slug !== course.slug,
  );
  const sameLevel = sameCategory.filter((item) => item.level === course.level);
  const rest = sameCategory.filter((item) => item.level !== course.level);
  return [...sameLevel, ...rest].slice(0, limit);
}

export function pathwayCourses(slugs: string[]) {
  return slugs.map((slug) => {
    const course = getCourse(slug);
    if (!course) throw new Error(`Unknown course in pathway: ${slug}`);
    return course;
  });
}

export function courseHref(slug: string) {
  return `/training/${slug}`;
}

export function courseContactHref(slug: string) {
  return `/contact?course=${slug}`;
}

export { courseCategories, coursePathways };
export {
  audienceHref,
  catalogueHref,
  durationFilters,
  parseCatalogueFilters,
  toCatalogueRecord,
  topicHref,
} from './filter';
export { audienceLandings, getAudienceLanding } from './landings';
export type { Course, CourseCategoryId } from './types';
export type { AudienceLanding } from './landings';
export type { CatalogueCourseRecord, CatalogueFilters } from './filter';

export function landingCourses(slugs: string[]) {
  return slugs.map((slug) => {
    const course = getCourse(slug);
    if (!course) throw new Error(`Unknown course in landing: ${slug}`);
    return course;
  });
}

export function landingProgrammes(slugs: string[]) {
  return slugs.map((slug) => {
    const programme = programmes.find((item) => item.slug === slug);
    if (!programme) throw new Error(`Unknown programme in landing: ${slug}`);
    return programme;
  });
}

export function landingPathways(ids: string[]) {
  return ids.map((id) => {
    const pathway = coursePathways.find((item) => item.id === id);
    if (!pathway) throw new Error(`Unknown pathway in landing: ${id}`);
    return pathway;
  });
}

export function pathwaysForCategory(categoryId: CourseCategoryId) {
  return coursePathways.filter((pathway) =>
    pathway.slugs.some((slug) => getCourse(slug)?.category === categoryId),
  );
}

const courseSlugs = courses.map((course) => course.slug);
if (new Set(courseSlugs).size !== courseSlugs.length) {
  throw new Error('Duplicate course slug in catalogue');
}

for (const pathway of coursePathways) {
  pathwayCourses(pathway.slugs);
}

for (const landing of audienceLandings) {
  landingCourses(landing.slugs);
  landingProgrammes(landing.programmeSlugs);
  landingPathways(landing.pathwayIds);
}
