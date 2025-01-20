import { Rule } from '@sanity/types';

export const targetTypes = {
  PAGE: 'page',
  URL: 'url',
  SECONDARY_HOVER: 'secondary',
} as const;

export default {
  name: 'target',
  title: 'Target',
  type: 'document',
  fields: [
    {
      name: 'hover',
      title: 'Hover',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'targetType',
      title: 'Target Type',
      type: 'string',
      options: {
        list: Object.values(targetTypes),
        layout: 'radio',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ document }: { document: any }) =>
        document?.targetType !== targetTypes.PAGE,
      validation: (Rule: Rule) =>
        Rule.custom((field: any, context: any) => {
          if (
            context.document?.targetType === targetTypes.PAGE &&
            !field
          ) {
            return 'Page reference is required when target type is page';
          }
          return true;
        }),
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      hidden: ({ document }: { document: any }) =>
        document?.targetType !== targetTypes.URL,
      validation: (Rule: Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto'],
        }).custom((field: any, context: any) => {
          if (
            context.document?.targetType === targetTypes.URL &&
            !field
          ) {
            return 'URL is required when target type is url';
          }
          return true;
        }),
    },
    {
      name: 'secondaryHover',
      title: 'Secondary Hover',
      type: 'string',
      hidden: ({ document }: { document: any }) =>
        document?.targetType !== targetTypes.SECONDARY_HOVER,
      validation: (Rule: Rule) =>
        Rule.custom((field: any, context: any) => {
          if (
            context.document?.targetType ===
              targetTypes.SECONDARY_HOVER &&
            !field
          ) {
            return 'Secondary hover is required when target type is secondary hover';
          }
          return true;
        }),
    },
  ],
  preview: {
    select: {
      title: 'hover',
    },
  },
};
