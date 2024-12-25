import { Rule } from '@sanity/types';

export default {
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (rule: Rule) =>
        rule.uri({
          scheme: ['http', 'https', 'mailto'],
        }),
    },
    {
      name: 'popup',
      title: 'Popup',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
  ],
};
