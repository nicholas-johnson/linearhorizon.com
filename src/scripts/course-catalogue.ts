import {
  emptyCatalogueFilters,
  filterCourseRecords,
  hasActiveFilters,
  parseCatalogueFilters,
  serializeCatalogueFilters,
  type CatalogueCourseRecord,
  type CatalogueFilters,
} from '../data/courses/filter';

function readRecords(): CatalogueCourseRecord[] {
  const node = document.getElementById('catalogue-data');
  if (!(node instanceof HTMLScriptElement) || !node.textContent) {
    throw new Error('Missing course catalogue data.');
  }
  return JSON.parse(node.textContent) as CatalogueCourseRecord[];
}

function formFilters(form: HTMLFormElement): CatalogueFilters {
  const data = new FormData(form);
  return parseCatalogueFilters({
    q: String(data.get('q') ?? ''),
    category: String(data.get('category') ?? ''),
    level: String(data.get('level') ?? ''),
    duration: String(data.get('duration') ?? ''),
  });
}

function writeForm(form: HTMLFormElement, filters: CatalogueFilters) {
  const q = form.elements.namedItem('q');
  const category = form.elements.namedItem('category');
  const level = form.elements.namedItem('level');
  const duration = form.elements.namedItem('duration');
  if (q instanceof HTMLInputElement) q.value = filters.q;
  if (category instanceof HTMLSelectElement) category.value = filters.category;
  if (level instanceof HTMLSelectElement) level.value = filters.level;
  if (duration instanceof HTMLSelectElement) duration.value = filters.duration;
}

function syncUrl(filters: CatalogueFilters) {
  const params = serializeCatalogueFilters(filters);
  const query = params.toString();
  const next = query ? `${window.location.pathname}?${query}` : window.location.pathname;
  const current = `${window.location.pathname}${window.location.search}`;
  if (next !== current) {
    history.replaceState(null, '', next);
  }
}

function applyFilters(
  records: CatalogueCourseRecord[],
  filters: CatalogueFilters,
  total: number,
) {
  const matched = new Set(filterCourseRecords(records, filters).map((record) => record.slug));
  const cards = document.querySelectorAll<HTMLElement>('[data-course-card]');
  for (const card of cards) {
    const slug = card.dataset.courseSlug;
    card.hidden = Boolean(slug && !matched.has(slug));
  }

  const sections = document.querySelectorAll<HTMLElement>('[data-category-section]');
  for (const section of sections) {
    const visible = section.querySelectorAll<HTMLElement>('[data-course-card]:not([hidden])');
    section.hidden = visible.length === 0;
  }

  const count = document.getElementById('catalogue-count');
  if (count) {
    count.textContent = hasActiveFilters(filters)
      ? `${matched.size} of ${total} courses`
      : `${total} courses · private corporate training · on-site or remote`;
  }

  const empty = document.getElementById('catalogue-empty');
  if (empty) empty.hidden = matched.size > 0;

  const clear = document.getElementById('catalogue-clear');
  if (clear instanceof HTMLButtonElement) {
    clear.hidden = !hasActiveFilters(filters);
  }

  const results = document.getElementById('catalogue');
  if (results) {
    results.dataset.filtered = hasActiveFilters(filters) ? 'true' : 'false';
  }
}

export function mountCourseCatalogue() {
  const form = document.getElementById('catalogue-filters');
  if (!(form instanceof HTMLFormElement)) return;

  const records = readRecords();
  const total = records.length;
  let timer = 0;

  const apply = (filters: CatalogueFilters, updateUrl = true) => {
    writeForm(form, filters);
    applyFilters(records, filters, total);
    if (updateUrl) syncUrl(filters);
  };

  const initial = parseCatalogueFilters(window.location.search);
  apply(initial, false);
  if (hasActiveFilters(initial) && !window.location.hash) {
    form.scrollIntoView({ block: 'start' });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    apply(formFilters(form));
  });

  form.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || target.name !== 'q') return;
    window.clearTimeout(timer);
    timer = window.setTimeout(() => apply(formFilters(form)), 150);
  });

  form.addEventListener('change', () => {
    apply(formFilters(form));
  });

  form.addEventListener('reset', () => {
    window.setTimeout(() => apply(emptyCatalogueFilters), 0);
  });

  window.addEventListener('popstate', () => {
    apply(parseCatalogueFilters(window.location.search), false);
  });
}
