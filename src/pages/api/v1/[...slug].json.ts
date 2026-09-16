import type { APIRoute } from 'astro';
import { loadApiV1Files } from '../../../lib/api/load.ts';
import { jsonFile } from '../../../lib/api/v1.ts';

export async function getStaticPaths() {
  const files = await loadApiV1Files();
  return files
    .filter((file) => file.slug !== undefined)
    .map((file) => ({
      params: { slug: file.slug },
      props: { document: file.body },
    }));
}

interface Props {
  document: Record<string, unknown>;
}

export const GET: APIRoute<Props> = ({ props }) => jsonFile(props.document);
