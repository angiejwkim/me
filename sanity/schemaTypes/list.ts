import { commonFields } from './common';

export default {
  name: 'list',
  title: 'List',
  type: 'document',
  fields: [...commonFields,
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
