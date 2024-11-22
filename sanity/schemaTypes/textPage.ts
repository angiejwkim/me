import { isGloballyUnique } from '@/sanity/lib/unique';
import { Rule } from '@sanity/types';

export default {
  name: 'textPage',
  title: 'Text Page',
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
