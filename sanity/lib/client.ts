import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, sanityApiKey } from '../env';
import { Page, Target } from '@/types/sanity';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
  token: sanityApiKey,
  perspective: 'published',
});

export async function getAllTargets(): Promise<Target[]> {
  return client.fetch(`*[_type == "target"] {
    _id,
    hover,
    targetType,
    "slug": page->slug.current,
    externalUrl,
    secondaryHover,
  }`);
}

export async function getPageBySlug(slug: string): Promise<Page> {
  return client.fetch(
    `*[slug.current == $slug][0]{
      _id,
      _type,
      pageType,
      title,
      slug,
      "content": select(
        pageType == "text" => content.text,
        pageType == "gallery" => content.gallery,
        pageType == "list" => content.list
      ),
    }`,
    { slug }
  );
}
