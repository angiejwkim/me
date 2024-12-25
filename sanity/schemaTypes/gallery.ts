import { commonFields } from './common';
export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [...commonFields,
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
