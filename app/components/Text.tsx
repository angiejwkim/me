import type { TextPage } from '@/types/sanity';
import { PortableText } from '@portabletext/react';

interface Props {
  page: TextPage;
}

export default function TextComponent({ page }: Props) {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="prose prose-lg">
        <PortableText value={page.content} />
      </div>
    </article>
  );
}
