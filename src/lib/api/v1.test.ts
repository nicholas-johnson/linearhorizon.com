import assert from 'node:assert/strict';
import { test } from 'node:test';
import { caseStudies } from '../../data/caseStudies.ts';
import { courses } from '../../data/courses/index.ts';
import { labSources } from '../../data/labs.ts';
import { pages as staticPages } from '../../data/pages.ts';
import { programmes } from '../../data/programmes.ts';
import { products } from '../../data/products.ts';
import {
  API_VERSION,
  API_V1_PREFIX,
  API_V1_ROOT,
  buildApiV1Files,
  jsonFile,
  labPagePath,
  productExtras,
  serializeInsight,
  toIsoDate,
  type LabInput,
} from './v1.ts';

const insights = [
  {
    id: 'where-ai-is-useful',
    body: 'A model that can summarise a document is not, by itself, a reason to reorganise a company.',
    data: {
      title: 'Where AI is actually useful — and where it is not',
      description: 'The useful question is not what a model can do in general.',
      pubDate: new Date('2026-09-01T00:00:00.000Z'),
    },
  },
  {
    id: 'from-learning-to-production',
    body: 'Most organisations now have people who have “done AI”.',
    data: {
      title: 'The gap between learning about AI and putting it into production',
      description: 'Training without a path into the system leaves organisations fluent and stuck.',
      pubDate: '2026-09-12',
    },
  },
];

const labs: LabInput[] = [
  {
    id: 'ai-engineering/05-rag-fundamentals',
    body: 'Chunking, embeddings, retrieval.',
    data: {
      programme: 'ai-engineering',
      kind: 'module',
      moduleDir: 'module-05-rag-fundamentals',
      moduleSlug: '05-rag-fundamentals',
      moduleId: '05',
      title: 'RAG fundamentals',
      description: 'Build a grounded retrieval pipeline.',
      order: 500,
      githubUrl: 'https://github.com/nicholas-johnson/ai-with-python-course/tree/main/module-05-rag-fundamentals',
      githubFolder: 'module-05-rag-fundamentals',
    },
  },
  {
    id: 'ai-engineering/05-rag-fundamentals/01-build-index',
    body: 'Build the index.',
    data: {
      programme: 'ai-engineering',
      kind: 'exercise',
      moduleDir: 'module-05-rag-fundamentals',
      moduleSlug: '05-rag-fundamentals',
      moduleId: '05',
      exerciseDir: '01-build-index',
      exerciseSlug: '01-build-index',
      title: 'Build an index',
      description: 'Chunk and embed a small corpus.',
      order: 501,
      githubUrl:
        'https://github.com/nicholas-johnson/ai-with-python-course/tree/main/module-05-rag-fundamentals/exercises/01-build-index',
      githubFolder: 'module-05-rag-fundamentals/exercises/01-build-index',
      sources: [{ filename: 'start.py', lang: 'python', content: 'print("start")\n' }],
    },
  },
];

const files = buildApiV1Files({ insights, labs });

function file(path: string) {
  const match = files.find((item) => item.path === path);
  assert.ok(match, `missing API file ${path}`);
  return match;
}

function asRecord(value: unknown): Record<string, unknown> {
  assert.equal(typeof value, 'object');
  assert.ok(value);
  return value as Record<string, unknown>;
}

test('converts dates to ISO strings', () => {
  assert.equal(toIsoDate(new Date('2026-09-01T00:00:00.000Z')), '2026-09-01T00:00:00.000Z');
  assert.equal(toIsoDate('2026-09-12'), '2026-09-12T00:00:00.000Z');
});

test('serializes insight markdown and publication dates', () => {
  const record = serializeInsight(insights[0]);
  assert.equal(record.pubDate, '2026-09-01T00:00:00.000Z');
  assert.equal(record.page, '/insights/where-ai-is-useful');
  assert.equal(record.self, `${API_V1_PREFIX}/insights/where-ai-is-useful.json`);
  assert.match(record.body, /summarise a document/);
});

test('builds lab page paths for modules and exercises', () => {
  assert.equal(labPagePath(labs[0]), '/training/ai-engineering/labs/05-rag-fundamentals');
  assert.equal(
    labPagePath(labs[1]),
    '/training/ai-engineering/labs/05-rag-fundamentals/01-build-index',
  );
});

test('attaches page extras to the products that own them', () => {
  const platform = asRecord(productExtras('platform'));
  const funnel = asRecord(productExtras('funnel'));
  const callcenter = asRecord(productExtras('callcenter'));
  const query = asRecord(productExtras('query'));

  assert.ok(Array.isArray(platform.layers));
  assert.ok(Array.isArray(funnel.icp));
  assert.ok(callcenter.architecture);
  assert.deepEqual(query, {});
});

test('exposes a catalog, a bundle, and one file per record', () => {
  const paths = files.map((item) => item.path);
  assert.equal(new Set(paths).size, paths.length);

  assert.ok(paths.includes(API_V1_ROOT));
  assert.ok(paths.includes(`${API_V1_PREFIX}/index.json`));
  assert.ok(paths.includes(`${API_V1_PREFIX}/all.json`));
  assert.ok(paths.includes(`${API_V1_PREFIX}/site.json`));
  assert.ok(paths.includes(`${API_V1_PREFIX}/pages.json`));

  for (const product of products) {
    assert.ok(paths.includes(`${API_V1_PREFIX}/products/${product.slug}.json`));
  }
  for (const course of courses) {
    assert.ok(paths.includes(`${API_V1_PREFIX}/courses/${course.slug}.json`));
  }
  for (const programme of programmes) {
    assert.ok(paths.includes(`${API_V1_PREFIX}/programmes/${programme.slug}.json`));
  }
  for (const study of caseStudies) {
    assert.ok(paths.includes(`${API_V1_PREFIX}/work/${study.slug}.json`));
  }
  for (const post of insights) {
    assert.ok(paths.includes(`${API_V1_PREFIX}/insights/${post.id}.json`));
  }
  for (const source of labSources) {
    assert.ok(paths.includes(`${API_V1_PREFIX}/labs/${source.programme}.json`));
  }
  for (const lab of labs) {
    assert.ok(paths.includes(`${API_V1_PREFIX}/labs/${lab.id}.json`));
  }
});

test('catalog lists every generated file', () => {
  const catalog = file(`${API_V1_PREFIX}/index.json`).body;
  assert.equal(catalog.apiVersion, API_VERSION);
  assert.equal(catalog.kind, 'catalog');
  assert.equal(catalog.site, 'https://linearhorizon.com');

  const listed = catalog.files as CatalogFileRefLike[];
  const listedPaths = listed.map((item) => item.path);
  assert.deepEqual(listedPaths.slice().sort(), files.map((item) => item.path).sort());

  const collections = catalog.collections as Array<{ kind: string; count?: number }>;
  assert.equal(collections.find((item) => item.kind === 'products')?.count, products.length);
  assert.equal(collections.find((item) => item.kind === 'courses')?.count, courses.length);
  assert.equal(collections.find((item) => item.kind === 'insights')?.count, insights.length);
  assert.equal(collections.find((item) => item.kind === 'labs')?.count, labs.length);
});

interface CatalogFileRefLike {
  path: string;
  kind: string;
}

test('collection files contain the full records', () => {
  const productsBody = file(`${API_V1_PREFIX}/products.json`).body;
  const items = productsBody.items as Array<{ id: string; extras: Record<string, unknown> }>;
  assert.equal(items.length, products.length);
  assert.equal(items[0].id, 'platform');
  assert.ok(Array.isArray(items[0].extras.layers));

  const coursesBody = file(`${API_V1_PREFIX}/courses.json`).body;
  assert.equal((coursesBody.items as unknown[]).length, courses.length);
  assert.equal(typeof coursesBody.intro, 'string');

  const insightsBody = file(`${API_V1_PREFIX}/insights.json`).body;
  const insightItems = insightsBody.items as Array<{ id: string; pubDate: string }>;
  assert.equal(insightItems[0].id, 'from-learning-to-production');
  assert.equal(insightItems[0].pubDate, '2026-09-12T00:00:00.000Z');
});

test('individual files match collection records and stay JSON-safe', () => {
  const product = file(`${API_V1_PREFIX}/products/platform.json`).body;
  assert.equal(product.kind, 'product');
  assert.equal(product.id, 'platform');
  assert.equal(product.page, '/products/platform');
  assert.equal(product.url, 'https://linearhorizon.com/products/platform');

  const lab = file(`${API_V1_PREFIX}/labs/ai-engineering/05-rag-fundamentals/01-build-index.json`).body;
  assert.equal(lab.kind, 'lab');
  assert.equal(lab.labKind, 'exercise');
  assert.equal(lab.page, '/training/ai-engineering/labs/05-rag-fundamentals/01-build-index');
  const sources = lab.sources as Array<{ filename: string }>;
  assert.equal(sources[0].filename, 'start.py');

  for (const item of files) {
    const encoded = JSON.stringify(item.body);
    const parsed = JSON.parse(encoded) as Record<string, unknown>;
    assert.equal(parsed.apiVersion, API_VERSION);
    assert.equal(typeof parsed.kind, 'string');
    assert.equal(parsed.self, item.path);
  }
});

test('all.json is a complete ingest dump', () => {
  const all = file(`${API_V1_PREFIX}/all.json`).body;
  assert.equal(all.kind, 'bundle');
  const dumpedProducts = asRecord(all.products).items as Array<{ id: string }>;
  const dumpedCourses = asRecord(all.courses).items as Array<{ id: string }>;
  const dumpedLabs = asRecord(all.labs).items as Array<{ id: string }>;
  assert.deepEqual(
    dumpedProducts.map((item) => item.id),
    products.map((item) => item.slug),
  );
  assert.deepEqual(
    dumpedCourses.map((item) => item.id),
    courses.map((item) => item.slug),
  );
  assert.deepEqual(
    dumpedLabs.map((item) => item.id),
    labs.map((item) => item.id),
  );
});

test('pages inventory includes static routes and derived records', () => {
  const pagesBody = file(`${API_V1_PREFIX}/pages.json`).body;
  const items = pagesBody.items as Array<{ path: string; redirect?: string }>;
  const paths = items.map((item) => item.path);

  assert.ok(staticPages.every((page) => paths.includes(page.path)));
  assert.ok(paths.includes('/approach'));
  assert.equal(items.find((item) => item.path === '/approach')?.redirect, '/consulting');
  assert.ok(paths.includes('/products/callcenter'));
  assert.ok(paths.includes('/training/generative-ai-fundamentals'));
  assert.ok(paths.includes('/training/ai-engineering/labs'));
  assert.ok(paths.includes('/insights/where-ai-is-useful'));
  assert.equal(paths.length, new Set(paths).size);
});

test('jsonFile writes pretty JSON with ingest-friendly headers', async () => {
  const response = jsonFile({ ok: true });
  assert.equal(response.headers.get('content-type'), 'application/json; charset=utf-8');
  assert.equal(response.headers.get('access-control-allow-origin'), '*');
  assert.equal(await response.text(), '{\n  "ok": true\n}\n');
});
