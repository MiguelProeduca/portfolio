import { getCollection } from 'astro:content';
import type { Lang } from './i18n';

/** "es/01-one-system-three-brands" -> "one-system-three-brands" */
export const slugOf = (id: string) => id.replace(/^[a-z]{2}\//, '').replace(/^\d+-/, '');

export const pad = (n: number) => String(n).padStart(2, '0');

/** Published cases for one language, in order. */
export async function getCases(lang: Lang) {
  const all = await getCollection('work', ({ id, data }) => id.startsWith(`${lang}/`) && !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}
