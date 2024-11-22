import { isGloballyUnique } from '@/sanity/lib/unique';
import { Rule } from '@sanity/types';

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule: Rule) => rule.required(),
      options: {
        isUnique: isGloballyUnique,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
};
