import { type SchemaTypeDefinition } from 'sanity';
import gallery from './gallery';
import textPage from './textPage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, textPage],
};
