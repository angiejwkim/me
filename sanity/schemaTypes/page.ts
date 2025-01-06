import { Rule } from '@sanity/types';

export const pageTypes = {
  TEXT: 'text',
  GALLERY: 'gallery',
  LIST: 'list',
} as const;

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: Object.values(pageTypes),
        layout: 'radio',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'array',
          of: [{ type: 'block' }],
          hidden: ({ document }: { document: any }) =>
            document?.pageType !== pageTypes.TEXT,
        },
        {
          name: 'gallery',
          title: 'Gallery',
          type: 'array',
          of: [{ type: 'image' }],
          hidden: ({ document }: { document: any }) =>
            document?.pageType !== pageTypes.GALLERY,
        },
        {
          name: 'list',
          title: 'List',
          type: 'array',
          of: [{ type: 'string' }],
          hidden: ({ document }: { document: any }) =>
            document?.pageType !== pageTypes.LIST,
        },
      ],
    },
  ],
};
