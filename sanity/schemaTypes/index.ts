import { type SchemaTypeDefinition } from 'sanity';
import page from './page';
import target from './target';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, target],
};
