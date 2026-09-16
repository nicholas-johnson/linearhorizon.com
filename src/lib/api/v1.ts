import {
  callcenterActionExamples,
  callcenterActions,
  callcenterAfterCall,
  callcenterAgents,
  callcenterApproval,
  callcenterArchitecture,
  callcenterAssist,
  callcenterAutonomy,
  callcenterBenefits,
  callcenterChannelGroups,
  callcenterCollaboration,
  callcenterContext,
  callcenterConversationState,
  callcenterDrivers,
  callcenterEscalation,
  callcenterGovernance,
  callcenterHandoff,
  callcenterIdentity,
  callcenterJourney,
  callcenterKnowledgeGaps,
  callcenterKnowledgeProperties,
  callcenterKnowledgeSources,
  callcenterPillars,
  callcenterProblems,
  callcenterProactive,
  callcenterQa,
  callcenterRootCauses,
  callcenterRouting,
  callcenterSalesforce,
  callcenterSupervisor,
  callcenterSwitching,
  callcenterTrust,
  callcenterVoiceExamples,
  callcenterVoiceSteps,
} from '../../data/callcenter.ts';
import { caseStudies, caseStudyHref, caseStudyIntro } from '../../data/caseStudies.ts';
import {
  bespokeTraining,
  catalogueIntro,
  courseCategories,
  coursePathways,
  deliveryOptions,
} from '../../data/courses/catalogue.ts';
import { courseHref, courses } from '../../data/courses/index.ts';
import { labSources } from '../../data/labs.ts';
import { pages as staticPages, type SitePage } from '../../data/pages.ts';
import {
  formatPrice,
  getProgramme,
  programmeContactHref,
  programmeHref,
  programmes,
} from '../../data/programmes.ts';
import {
  chatToAction,
  comparison,
  funnelAgents,
  funnelApprovals,
  funnelDashboard,
  funnelEquation,
  funnelExample,
  funnelFiltration,
  funnelFollowUp,
  funnelIcp,
  funnelLearning,
  funnelOffers,
  funnelResponses,
  funnelScoring,
  funnelSignals,
  platformLayers,
  productContactHref,
  productFamily,
  productHref,
  products,
  stackExample,
  stackQuestions,
  wargameDistribution,
  wargameExamples,
  type Product,
  type ProductSlug,
} from '../../data/products.ts';
import {
  buildOfferings,
  capabilities,
  consultingServices,
  credibility,
  engagementStarts,
  founder,
  interestAliases,
  interests,
  journey,
  layers,
  nav,
  pillars,
  reinforcement,
  site,
  trainingAudiences,
  trainingTopics,
} from '../../data/site.ts';

export const API_VERSION = 1 as const;
export const API_V1_ROOT = '/api/v1.json';
export const API_V1_PREFIX = '/api/v1';

export type ApiKind =
  | 'catalog'
  | 'bundle'
  | 'site'
  | 'pages'
  | 'products'
  | 'product'
  | 'work'
  | 'case-study'
  | 'courses'
  | 'course'
  | 'programmes'
  | 'programme'
  | 'insights'
  | 'insight'
  | 'labs'
  | 'lab-programme'
  | 'lab';

export interface InsightInput {
  id: string;
  body?: string;
  data: {
    title: string;
    description: string;
    pubDate: Date | string;
  };
}

export interface LabSourceFileInput {
  filename: string;
  lang: string;
  content: string;
}

export interface LabInput {
  id: string;
  body?: string;
  data: {
    programme: string;
    kind: 'module' | 'exercise';
    moduleDir: string;
    moduleSlug: string;
    moduleId: string;
    exerciseDir?: string;
    exerciseSlug?: string;
    title: string;
    description: string;
    order: number;
    githubUrl: string;
    githubFolder: string;
    sources?: LabSourceFileInput[];
  };
}

export interface ContentInput {
  insights: InsightInput[];
  labs: LabInput[];
}

export interface ApiFile {
  slug: string | undefined;
  path: string;
  body: Record<string, unknown>;
}

export interface CatalogFileRef {
  path: string;
  kind: ApiKind;
}

function apiFile(slug: string | undefined, body: Record<string, unknown>): ApiFile {
  return {
    slug,
    path: slug ? `${API_V1_PREFIX}/${slug}.json` : API_V1_ROOT,
    body,
  };
}

function withoutEnvelope(extra: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(extra).filter(([key]) => key !== 'apiVersion' && key !== 'kind' && key !== 'self'),
  );
}

function document(kind: ApiKind, self: string, extra: Record<string, unknown>): Record<string, unknown> {
  return {
    apiVersion: API_VERSION,
    kind,
    self,
    ...withoutEnvelope(extra),
  };
}

function absoluteUrl(path: string) {
  return new URL(path, `${site.url}/`).toString().replace(/\/$/, path === '/' ? '/' : '');
}

export function toIsoDate(value: Date | string) {
  if (value instanceof Date) return value.toISOString();
  const parsed = new Date(value);
  if (Number.isNaN(parsed.valueOf())) return String(value);
  return parsed.toISOString();
}

export function labPagePath(lab: LabInput) {
  const { programme, moduleSlug, exerciseSlug, kind } = lab.data;
  if (kind === 'exercise' && exerciseSlug) {
    return `/training/${programme}/labs/${moduleSlug}/${exerciseSlug}`;
  }
  return `/training/${programme}/labs/${moduleSlug}`;
}

export function productExtras(slug: ProductSlug) {
  switch (slug) {
    case 'platform':
      return { layers: platformLayers, chatToAction };
    case 'stack':
      return { questions: stackQuestions, example: stackExample };
    case 'wargame':
      return { examples: wargameExamples, distribution: wargameDistribution };
    case 'funnel':
      return {
        icp: funnelIcp,
        signals: funnelSignals,
        agents: funnelAgents,
        equation: funnelEquation,
        scoring: funnelScoring,
        offers: funnelOffers,
        example: funnelExample,
        approvals: funnelApprovals,
        responses: funnelResponses,
        followUp: funnelFollowUp,
        learning: funnelLearning,
        dashboard: funnelDashboard,
        filtration: funnelFiltration,
      };
    case 'callcenter':
      return {
        pillars: callcenterPillars,
        problems: callcenterProblems,
        channelGroups: callcenterChannelGroups,
        journey: callcenterJourney,
        conversationState: callcenterConversationState,
        identity: callcenterIdentity,
        trust: callcenterTrust,
        context: callcenterContext,
        voiceSteps: callcenterVoiceSteps,
        voiceExamples: callcenterVoiceExamples,
        switching: callcenterSwitching,
        proactive: callcenterProactive,
        actions: callcenterActions,
        actionExamples: callcenterActionExamples,
        autonomy: callcenterAutonomy,
        routing: callcenterRouting,
        assist: callcenterAssist,
        afterCall: callcenterAfterCall,
        salesforce: callcenterSalesforce,
        collaboration: callcenterCollaboration,
        knowledgeSources: callcenterKnowledgeSources,
        knowledgeProperties: callcenterKnowledgeProperties,
        knowledgeGaps: callcenterKnowledgeGaps,
        qa: callcenterQa,
        supervisor: callcenterSupervisor,
        drivers: callcenterDrivers,
        rootCauses: callcenterRootCauses,
        agents: callcenterAgents,
        handoff: callcenterHandoff,
        approval: callcenterApproval,
        benefits: callcenterBenefits,
        escalation: callcenterEscalation,
        governance: callcenterGovernance,
        architecture: callcenterArchitecture,
      };
    case 'query':
    case 'chat':
      return {};
    default: {
      const _exhaustive: never = slug;
      return _exhaustive;
    }
  }
}

export function serializeProduct(product: Product) {
  const page = productHref(product.slug);
  return {
    id: product.slug,
    ...product,
    extras: productExtras(product.slug),
    page,
    url: absoluteUrl(page),
    contact: productContactHref(product.slug),
    self: `${API_V1_PREFIX}/products/${product.slug}.json`,
  };
}

export function serializeInsight(post: InsightInput) {
  const page = `/insights/${post.id}`;
  return {
    id: post.id,
    title: post.data.title,
    description: post.data.description,
    pubDate: toIsoDate(post.data.pubDate),
    body: post.body ?? '',
    page,
    url: absoluteUrl(page),
    self: `${API_V1_PREFIX}/insights/${post.id}.json`,
  };
}

export function serializeLab(lab: LabInput) {
  const page = labPagePath(lab);
  const { kind: labKind, ...data } = lab.data;
  return {
    id: lab.id,
    ...data,
    labKind,
    body: lab.body ?? '',
    page,
    url: absoluteUrl(page),
    self: `${API_V1_PREFIX}/labs/${lab.id}.json`,
  };
}

function serializeCourse(course: (typeof courses)[number]) {
  const page = courseHref(course.slug);
  return {
    id: course.slug,
    ...course,
    page,
    url: absoluteUrl(page),
    contact: `/contact?course=${course.slug}`,
    self: `${API_V1_PREFIX}/courses/${course.slug}.json`,
  };
}

function serializeCaseStudy(study: (typeof caseStudies)[number]) {
  const page = caseStudyHref(study.slug);
  return {
    id: study.slug,
    ...study,
    page,
    url: absoluteUrl(page),
    self: `${API_V1_PREFIX}/work/${study.slug}.json`,
  };
}

function serializeProgramme(programme: (typeof programmes)[number]) {
  const page = programmeHref(programme.slug);
  const source = labSources.find((item) => item.programme === programme.slug);
  return {
    id: programme.slug,
    ...programme,
    priceFromFormatted: formatPrice(programme.priceFrom),
    page,
    url: absoluteUrl(page),
    labs: `/training/${programme.slug}/labs`,
    contact: programmeContactHref(programme.slug),
    labSource: source ?? null,
    self: `${API_V1_PREFIX}/programmes/${programme.slug}.json`,
  };
}

function siteDocument() {
  return document('site', `${API_V1_PREFIX}/site.json`, {
    site,
    founder,
    nav,
    pillars,
    credibility,
    journey,
    capabilities,
    trainingAudiences,
    trainingTopics,
    consultingServices,
    buildOfferings,
    interests,
    interestAliases,
    layers,
    reinforcement,
    engagementStarts,
  });
}

function buildPageRecords(content: ContentInput): SitePage[] {
  const derived: SitePage[] = [
    ...products.map((product) => ({
      path: productHref(product.slug),
      title: product.seoTitle,
      description: product.seoDescription,
    })),
    ...courses.map((course) => ({
      path: courseHref(course.slug),
      title: course.title,
      description: course.shortDescription,
    })),
    ...programmes.flatMap((programme) => [
      {
        path: programmeHref(programme.slug),
        title: programme.seoTitle,
        description: programme.description,
      },
      {
        path: `/training/${programme.slug}/labs`,
        title: `${programme.title} lab handbook`,
        description: programme.summary,
      },
    ]),
    ...caseStudies.map((study) => ({
      path: caseStudyHref(study.slug),
      title: study.seoTitle,
      description: study.seoDescription,
    })),
    ...content.insights.map((post) => ({
      path: `/insights/${post.id}`,
      title: post.data.title,
      description: post.data.description,
    })),
    ...content.labs.map((lab) => ({
      path: labPagePath(lab),
      title: lab.data.title,
      description: lab.data.description,
    })),
  ];

  const seen = new Set<string>();
  const merged: SitePage[] = [];
  for (const page of [...staticPages, ...derived]) {
    if (seen.has(page.path)) continue;
    seen.add(page.path);
    merged.push(page);
  }
  return merged;
}

function pagesDocument(content: ContentInput) {
  const items = buildPageRecords(content);
  return document('pages', `${API_V1_PREFIX}/pages.json`, {
    count: items.length,
    items,
  });
}

function productsDocument() {
  const items = products.map(serializeProduct);
  return document('products', `${API_V1_PREFIX}/products.json`, {
    family: productFamily,
    comparison,
    count: items.length,
    items,
  });
}

function workDocument() {
  const items = caseStudies.map(serializeCaseStudy);
  return document('work', `${API_V1_PREFIX}/work.json`, {
    intro: caseStudyIntro,
    count: items.length,
    items,
  });
}

function coursesDocument() {
  const items = courses.map(serializeCourse);
  return document('courses', `${API_V1_PREFIX}/courses.json`, {
    intro: catalogueIntro,
    categories: courseCategories,
    pathways: coursePathways,
    delivery: deliveryOptions,
    bespoke: bespokeTraining,
    count: items.length,
    items,
  });
}

function programmesDocument() {
  const items = programmes.map(serializeProgramme);
  return document('programmes', `${API_V1_PREFIX}/programmes.json`, {
    count: items.length,
    items,
  });
}

function insightsDocument(insights: InsightInput[]) {
  const items = [...insights]
    .map(serializeInsight)
    .sort((a, b) => (a.pubDate < b.pubDate ? 1 : a.pubDate > b.pubDate ? -1 : 0));
  return document('insights', `${API_V1_PREFIX}/insights.json`, {
    count: items.length,
    items,
  });
}

function labsDocument(labs: LabInput[]) {
  const items = [...labs].map(serializeLab).sort((a, b) => {
    if (a.programme !== b.programme) return a.programme.localeCompare(b.programme);
    return a.order - b.order;
  });
  return document('labs', `${API_V1_PREFIX}/labs.json`, {
    sources: labSources,
    count: items.length,
    items,
  });
}

function labProgrammeDocument(programmeSlug: string, labs: LabInput[]) {
  const programme = getProgramme(programmeSlug);
  const source = labSources.find((item) => item.programme === programmeSlug);
  const items = labs
    .filter((lab) => lab.data.programme === programmeSlug)
    .map(serializeLab)
    .sort((a, b) => a.order - b.order);
  return document('lab-programme', `${API_V1_PREFIX}/labs/${programmeSlug}.json`, {
    id: programmeSlug,
    title: programme?.title ?? source?.title ?? programmeSlug,
    page: `/training/${programmeSlug}/labs`,
    url: absoluteUrl(`/training/${programmeSlug}/labs`),
    source: source ?? null,
    count: items.length,
    items,
  });
}

function catalogDocument(self: string, files: CatalogFileRef[], counts: Record<string, number>) {
  return document('catalog', self, {
    description: 'Static JSON files of public Linear Horizon site content, for ingest.',
    site: site.url,
    collections: [
      { kind: 'site', path: `${API_V1_PREFIX}/site.json` },
      { kind: 'pages', path: `${API_V1_PREFIX}/pages.json`, count: counts.pages },
      { kind: 'products', path: `${API_V1_PREFIX}/products.json`, count: counts.products },
      { kind: 'work', path: `${API_V1_PREFIX}/work.json`, count: counts.work },
      { kind: 'courses', path: `${API_V1_PREFIX}/courses.json`, count: counts.courses },
      { kind: 'programmes', path: `${API_V1_PREFIX}/programmes.json`, count: counts.programmes },
      { kind: 'insights', path: `${API_V1_PREFIX}/insights.json`, count: counts.insights },
      { kind: 'labs', path: `${API_V1_PREFIX}/labs.json`, count: counts.labs },
      { kind: 'bundle', path: `${API_V1_PREFIX}/all.json` },
    ],
    files,
  });
}

function bundleDocument(parts: {
  site: Record<string, unknown>;
  pages: Record<string, unknown>;
  products: Record<string, unknown>;
  work: Record<string, unknown>;
  courses: Record<string, unknown>;
  programmes: Record<string, unknown>;
  insights: Record<string, unknown>;
  labs: Record<string, unknown>;
}) {
  const strip = (doc: Record<string, unknown>) =>
    Object.fromEntries(
      Object.entries(doc).filter(([key]) => key !== 'kind' && key !== 'self' && key !== 'apiVersion'),
    );
  return document('bundle', `${API_V1_PREFIX}/all.json`, {
    description: 'Single-file dump of every public content record.',
    site: strip(parts.site),
    pages: strip(parts.pages),
    products: strip(parts.products),
    work: strip(parts.work),
    courses: strip(parts.courses),
    programmes: strip(parts.programmes),
    insights: strip(parts.insights),
    labs: strip(parts.labs),
  });
}

export function buildApiV1Files(content: ContentInput): ApiFile[] {
  const siteBody = siteDocument();
  const pagesBody = pagesDocument(content);
  const productsBody = productsDocument();
  const workBody = workDocument();
  const coursesBody = coursesDocument();
  const programmesBody = programmesDocument();
  const insightsBody = insightsDocument(content.insights);
  const labsBody = labsDocument(content.labs);

  const documents: ApiFile[] = [
    apiFile('site', siteBody),
    apiFile('pages', pagesBody),
    apiFile('products', productsBody),
    ...products.map((product) =>
      apiFile(`products/${product.slug}`, document('product', `${API_V1_PREFIX}/products/${product.slug}.json`, serializeProduct(product))),
    ),
    apiFile('work', workBody),
    ...caseStudies.map((study) =>
      apiFile(`work/${study.slug}`, document('case-study', `${API_V1_PREFIX}/work/${study.slug}.json`, serializeCaseStudy(study))),
    ),
    apiFile('courses', coursesBody),
    ...courses.map((course) =>
      apiFile(`courses/${course.slug}`, document('course', `${API_V1_PREFIX}/courses/${course.slug}.json`, serializeCourse(course))),
    ),
    apiFile('programmes', programmesBody),
    ...programmes.map((programme) =>
      apiFile(
        `programmes/${programme.slug}`,
        document('programme', `${API_V1_PREFIX}/programmes/${programme.slug}.json`, serializeProgramme(programme)),
      ),
    ),
    apiFile('insights', insightsBody),
    ...content.insights.map((post) =>
      apiFile(`insights/${post.id}`, document('insight', `${API_V1_PREFIX}/insights/${post.id}.json`, serializeInsight(post))),
    ),
    apiFile('labs', labsBody),
    ...labSources.map((source) =>
      apiFile(
        `labs/${source.programme}`,
        labProgrammeDocument(source.programme, content.labs),
      ),
    ),
    ...content.labs.map((lab) =>
      apiFile(`labs/${lab.id}`, document('lab', `${API_V1_PREFIX}/labs/${lab.id}.json`, serializeLab(lab))),
    ),
  ];

  const allBody = bundleDocument({
    site: siteBody,
    pages: pagesBody,
    products: productsBody,
    work: workBody,
    courses: coursesBody,
    programmes: programmesBody,
    insights: insightsBody,
    labs: labsBody,
  });

  const files: CatalogFileRef[] = [
    { path: API_V1_ROOT, kind: 'catalog' },
    { path: `${API_V1_PREFIX}/index.json`, kind: 'catalog' },
    { path: `${API_V1_PREFIX}/all.json`, kind: 'bundle' },
    ...documents.map((file) => ({ path: file.path, kind: file.body.kind as ApiKind })),
  ];

  const counts = {
    pages: (pagesBody.items as unknown[]).length,
    products: products.length,
    work: caseStudies.length,
    courses: courses.length,
    programmes: programmes.length,
    insights: content.insights.length,
    labs: content.labs.length,
  };

  const indexBody = catalogDocument(`${API_V1_PREFIX}/index.json`, files, counts);
  const rootBody = catalogDocument(API_V1_ROOT, files, counts);

  return [
    apiFile(undefined, rootBody),
    apiFile('index', indexBody),
    apiFile('all', allBody),
    ...documents,
  ];
}

export function jsonFile(data: unknown): Response {
  return new Response(`${JSON.stringify(data, null, 2)}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
