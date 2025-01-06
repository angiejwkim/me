import { pageTypes } from '../sanity/schemaTypes/page';
import { targetTypes } from '../sanity/schemaTypes/target';

// Base Sanity item.
interface SanityDocument {
  _id: string;
  _type: string;
  _rev?: string;
  _createdAt?: string;
  _updatedAt?: string;
  content?: Array<any>;
}

export interface Target extends SanityDocument {
  _type: 'target';
  hover: string;
  targetType: (typeof targetTypes)[keyof typeof targetTypes];
  slug?: string;
  externalUrl?: string;
  secondaryHover?: string;
}

export interface BasePage extends SanityDocument {
  _type: 'page';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  pageType: (typeof pageTypes)[keyof typeof pageTypes];
}

export interface TextPage extends BasePage {
  pageType: typeof pageTypes.TEXT;
  content: Array<{
    _type: 'block';
    [key: string]: any;
  }>;
}

export interface GalleryPage extends BasePage {
  pageType: typeof pageTypes.GALLERY;
  content: Array<{
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  }>;
}

export interface ListPage extends BasePage {
  pageType: typeof pageTypes.LIST;
  content: string[];
}

export type Page = TextPage | GalleryPage | ListPage;
