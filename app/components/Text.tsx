import type { Text } from '@/types/sanity';
import { PortableText } from '@portabletext/react';

interface Props {
  page: Text;
}

export default function Text({ page }: Props) {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="prose prose-lg">
        <PortableText value={page.content} />
      </div>
    </article>
  );
}
