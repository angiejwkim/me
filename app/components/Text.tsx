import { TextPage } from '@/types/sanity';
import { PortableText } from '@portabletext/react';

interface Props {
  page: TextPage;
}

export default function Text({ page }: Props) {
  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
      <div className="prose prose-lg">
        <PortableText value={page.content} />
      </div>
    </article>
  );
}
