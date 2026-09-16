import { getCollection } from 'astro:content';
import { buildApiV1Files } from './v1.ts';

export async function loadApiV1Files() {
  const [insights, labs] = await Promise.all([getCollection('insights'), getCollection('labs')]);
  return buildApiV1Files({ insights, labs });
}
