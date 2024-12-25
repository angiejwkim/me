import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, apiKey } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
  token: apiKey,
  perspective: 'published',
});

export async function getAllSlugs() {
  return client.fetch(`*[_type 
    != "sanity.imageAsset"]`);
}

// Helper function to fetch by slug
export async function getPageBySlug(slug: string) {
  return client.fetch(
    `*[slug.current == $slug][0]{
      _id,
      _type,
      title,
      slug,
      images,
      content,
    }`,
    { slug }
  );
}
