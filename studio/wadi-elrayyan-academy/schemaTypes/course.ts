import {defineField, defineType} from 'sanity'

export const courseType = defineType({
  name: 'course',
  title: 'الكورسات والدورات التدريبية',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'اسم الكورس',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'معرّف الكورس في الرابط (ID / Slug)',
      type: 'slug',
      description: 'ده اللي هيتقرأ كـ id في Angular ويظهر في لينك المشاركة (اضغط Generate)',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'التصنيف',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'صورة الكورس',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'وصف الصورة (imageAlt)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hoursLabel',
      title: 'المدة التدريبية (مثال: 30 ساعة تدريبية)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deliveryMode',
      title: 'نظام التدريب (مثال: تدريب ميداني وعملي)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instructor',
      title: 'المحاضر',
      type: 'string',
      initialValue: 'مهندسو مساحة استشاريون',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullDescription',
      title: 'الوصف الكامل للكورس',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'learningOutcomes',
      title: 'ماذا سيتعلم الطالب؟',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'syllabus',
      title: 'محاور ووحدات الكورس',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'عنوان الوحدة',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'hours',
              title: 'عدد الساعات',
              type: 'number',
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: 'topics',
              title: 'العناصر الفرعية (اختياري)',
              type: 'array',
              of: [{type: 'string'}],
            }),
          ],
          preview: {
            select: {title: 'title', hours: 'hours'},
            prepare({title, hours}) {
              return {title, subtitle: `${hours ?? 0} ساعات`}
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'badgeText',
      title: 'بادج الخصم أو التمييز (اختياري)',
      type: 'string',
      description: 'مثال: خصم 25%',
    }),
    defineField({
      name: 'isFeatured',
      title: 'كورس مميز؟ (اختياري)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
