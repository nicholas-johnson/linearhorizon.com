import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildApiV1Files, jsonFile } from '../../../lib/api/v1';

export async function getStaticPaths() {
  const [insights, labs] = await Promise.all([getCollection('insights'), getCollection('labs')]);
  const files = buildApiV1Files({ insights, labs });

  return files.map((file) => ({
    params: { slug: file.slug },
    props: { document: file.body },
  }));
}

interface Props {
  document: Record<string, unknown>;
}

export const GET: APIRoute<Props> = ({ props }) => jsonFile(props.document);
