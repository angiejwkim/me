import { type SchemaTypeDefinition } from 'sanity';
import gallery from './gallery';
import textPage from './textPage';
import list from './list';
import link from './link';
import popup from './popup';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, textPage, list, link, popup],
};
