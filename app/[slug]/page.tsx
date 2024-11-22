import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Gallery from '@/components/Gallery';
import Text from '@/components/Text';

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const query = groq`*[slug.current == $slug][0]`;
  const page = await client.fetch(query, { slug: params.slug });
  if (page._type === 'textPage') {
    return <Text page={page} />;
  } else if (page._type === 'galleryPage') {
    return <Gallery page={page} />;
  } else {
    return <>No page found</>;
  }
}
