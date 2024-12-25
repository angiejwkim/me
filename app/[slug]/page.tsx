import { client } from '@/sanity/lib/client';

import TextPage from '@/components/Text';
import GalleryPage from '@/components/Gallery';
import Header from '@/components/Header';

import { getPageBySlug } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage(props: PageProps) {
  const params = await props.params;
  const post = await getPageBySlug(params.slug);

  if (!post) {
    notFound();
  }

  console.log(post);

  if (post._type === 'textPage') {
    return <TextPage page={post} />;
  } else if (post._type === 'gallery') {
    return <GalleryPage page={post} />;
  } else {
    return notFound();
  }
}

// Add generateStaticParams if you want to statically generate pages
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ slug }`);
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}
