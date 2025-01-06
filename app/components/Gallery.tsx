import { urlFor } from '@/sanity/lib/image';
import { GalleryPage } from '@/types/sanity';
import Image from 'next/image';

interface Props {
  page: GalleryPage;
}

export default function GalleryComponent({ page }: Props) {
  if (!page?.content || !Array.isArray(page.content)) {
    console.warn('Invalid or missing content array');
    return null;
  }

  return (
    <div className="absolute inset-x-0 top-24 min-h-screen pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {page.content.map((item, index) => (
          <div key={index} className="relative aspect-square w-full">
            <Image
              src={urlFor(item).url()}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover tansition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
