import { isGloballyUnique } from '@/sanity/lib/unique';
import { Rule } from '@sanity/types';

export const commonFields = [
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
    name: 'popup',
    title: 'Popup',
    type: 'string',
    validation: (rule: Rule) => rule.required(),
  },
];
