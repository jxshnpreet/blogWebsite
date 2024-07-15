import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 50,
      },
    },
    {
        title: 'Author',
        name: 'author',
        type: 'reference',
        to: [{type: 'author'}]
    },
    {
        title: 'Category',
        name: 'category',
        type: 'reference',
        to: [{type: 'category'}]
    },
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
      }),
    defineField({
        name: 'trending',
        title: 'Trending',
        type: 'number',
        validation: Rule => Rule.max(10).min(1)
      }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'}
        ],
          lists: [],
        },
        {
            type: 'image'
        }
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
