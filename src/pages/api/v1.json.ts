import type { APIRoute } from 'astro';
import { loadApiV1Files } from '../../lib/api/load.ts';
import { API_V1_ROOT, jsonFile } from '../../lib/api/v1.ts';

export const GET: APIRoute = async () => {
  const files = await loadApiV1Files();
  const root = files.find((file) => file.path === API_V1_ROOT);
  if (!root) throw new Error(`Missing ${API_V1_ROOT} catalog`);
  return jsonFile(root.body);
};
