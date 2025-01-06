import TextComponent from '@/components/Text';
import GalleryComponent from '@/components/Gallery';
import Header from '@/components/Header';

import { pageTypes } from '@/sanity/schemaTypes/page';
import { TextPage, GalleryPage, ListPage } from '@/types/sanity';

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
  if (post.pageType === pageTypes.TEXT) {
    return <TextComponent page={post as TextPage} />;
  } else if (post.pageType === pageTypes.GALLERY) {
    return <GalleryComponent page={post as GalleryPage} />;
  } else {
    return notFound();
  }
}
