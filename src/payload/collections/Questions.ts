import type { CollectionConfig } from 'payload/types'

const Questions: CollectionConfig = {
  slug: 'questions',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
    },
    {
      name: 'answer',
      type: 'text',
    },
  ],
}

export default Questions
