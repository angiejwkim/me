import { type SchemaTypeDefinition } from 'sanity';
import gallery from './gallery';
import textPage from './textPage';
import list from './list';
import link from './link';
import popup from './popup';
import page from './page';
import target from './target';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, textPage, list, link, popup, page, target],
};
