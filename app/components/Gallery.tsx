import { GalleryPage } from '@/types/sanity';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface Props {
  page: GalleryPage;
}

export default function Gallery({ page }: Props) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {page.images.map((image, index) => (
          <div key={index} className="aspect-square relative">
            <Image
              src={urlFor(image).url()}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
