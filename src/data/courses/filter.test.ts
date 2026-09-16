import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  catalogueHref,
  courseMatches,
  durationRange,
  filterCourseRecords,
  hasActiveFilters,
  matchesDurationFilter,
  parseCatalogueFilters,
  searchTokens,
  serializeCatalogueFilters,
} from './filter.ts';
import type { CatalogueCourseRecord } from './filter.ts';

function record(overrides: Partial<CatalogueCourseRecord> = {}): CatalogueCourseRecord {
  return {
    slug: 'example',
    category: 'foundations',
    level: 'Foundation',
    duration: '1 day',
    searchText: 'Generative AI Fundamentals mixed technical professionals Foundations',
    ...overrides,
  };
}

test('parses duration ranges including half days and en-dashes', () => {
  assert.deepEqual(durationRange('1 day'), { min: 1, max: 1 });
  assert.deepEqual(durationRange('2 days'), { min: 2, max: 2 });
  assert.deepEqual(durationRange('2–3 days'), { min: 2, max: 3 });
  assert.deepEqual(durationRange('Half day or 1 day'), { min: 0.5, max: 1 });
});

test('matches duration filter buckets', () => {
  assert.equal(matchesDurationFilter('Half day or 1 day', 'up-to-1-day'), true);
  assert.equal(matchesDurationFilter('1 day', 'up-to-1-day'), true);
  assert.equal(matchesDurationFilter('2 days', 'up-to-1-day'), false);
  assert.equal(matchesDurationFilter('2–3 days', '2-days'), true);
  assert.equal(matchesDurationFilter('2–3 days', '3-days'), true);
  assert.equal(matchesDurationFilter('3 days', '3-days'), true);
  assert.equal(matchesDurationFilter('1 day', '3-days'), false);
});

test('search requires every token to match', () => {
  assert.deepEqual(searchTokens('  RAG  Agents '), ['rag', 'agents']);
  const course = record({
    searchText: 'RAG: From Fundamentals to Production developers Intermediate RAG & Agents',
  });
  assert.equal(
    courseMatches(course, { q: 'rag production', category: '', level: '', duration: '' }),
    true,
  );
  assert.equal(
    courseMatches(course, { q: 'rag leadership', category: '', level: '', duration: '' }),
    false,
  );
});

test('filters by category, level and duration together', () => {
  const records = [
    record({ slug: 'a', category: 'rag-agents', level: 'Intermediate', duration: '2 days' }),
    record({ slug: 'b', category: 'rag-agents', level: 'Advanced', duration: '2 days' }),
    record({ slug: 'c', category: 'foundations', level: 'Intermediate', duration: '1 day' }),
  ];

  const matched = filterCourseRecords(records, {
    q: '',
    category: 'rag-agents',
    level: 'Intermediate',
    duration: '2-days',
  });

  assert.deepEqual(
    matched.map((item) => item.slug),
    ['a'],
  );
});

test('ignores unknown query values', () => {
  const filters = parseCatalogueFilters('q=rag&category=unknown&level=Expert&duration=week');
  assert.deepEqual(filters, { q: 'rag', category: '', level: '', duration: '' });
  assert.equal(hasActiveFilters(filters), true);
});

test('serialises catalogue URLs without empty params', () => {
  const params = serializeCatalogueFilters({
    q: 'rag',
    category: 'rag-agents',
    level: '',
    duration: '',
  });
  assert.equal(params.toString(), 'q=rag&category=rag-agents');
  assert.equal(catalogueHref({ q: 'agents' }), '/training?q=agents');
  assert.equal(catalogueHref(), '/training');
});
