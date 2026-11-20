import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'تصنيفات الكورسات',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'اسم التصنيف',
      type: 'string',
      description: 'مثال: الأجهزة المساحية الميدانية',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'معرّف التصنيف (ID)',
      type: 'slug',
      description: 'اضغط Generate ليتم إنشاؤه تلقائياً',
      options: {source: 'label', maxLength: 64},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'لون البادج على الكارت',
      type: 'string',
      options: {
        list: [
          {title: 'كحلي (Navy)', value: 'navy'},
          {title: 'فيروزي (Teal)', value: 'teal'},
          {title: 'كهرماني (Amber)', value: 'amber'},
          {title: 'بنفسجي هندسي (Indigo)', value: 'indigo'},
        ],
        layout: 'radio',
      },
      initialValue: 'navy',
    }),
  ],
})
