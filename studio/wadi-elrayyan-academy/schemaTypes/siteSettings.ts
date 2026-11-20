import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'إعدادات الأكاديمية والموقع',
  type: 'document',
  groups: [
    {name: 'brand', title: 'الهوية والهيرو', default: true},
    {name: 'contact', title: 'التواصل والمقر'},
    {name: 'accreditation', title: 'الاعتماد والإحصائيات'},
  ],
  fields: [
    // الهوية والهيرو
    defineField({
      name: 'academyName',
      title: 'اسم الأكاديمية',
      type: 'string',
      group: 'brand',
      initialValue: 'أكاديمية وادي الريان',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'academySubTitle',
      title: 'الوصف المختصر تحت الاسم',
      type: 'string',
      group: 'brand',
      initialValue: 'للتدريب والاستشارات المساحية',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'الشريط العلوي في الهيرو (Eyebrow)',
      type: 'string',
      group: 'brand',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroBio',
      title: 'النبذة التعريفية في الهيرو',
      type: 'text',
      rows: 3,
      group: 'brand',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showPromoBanner',
      title: 'إظهار شريط الخصم؟',
      type: 'boolean',
      group: 'brand',
      initialValue: true,
    }),
    defineField({
      name: 'promoBannerText',
      title: 'نص شريط الخصم',
      type: 'string',
      group: 'brand',
      hidden: ({document}) => !document?.showPromoBanner,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.showPromoBanner && !value) {
            return 'اكتب نص الخصم أو اقفل خيار إظهار الشريط'
          }
          return true
        }),
    }),
    defineField({
      name: 'coordinates',
      title: 'إحداثيات المقر (تظهر فوق اللوجو)',
      type: 'string',
      group: 'brand',
      initialValue: "31°06'N 30°56'E",
      validation: (Rule) => Rule.required(),
    }),

    // التواصل والمقر
    defineField({
      name: 'whatsappNumber',
      title: 'رقم الواتساب (بكود الدولة بدون + أو مسافات)',
      type: 'string',
      group: 'contact',
      description: 'مثال: 201098726537',
      validation: (Rule) =>
        Rule.required().regex(/^[0-9]+$/, {
          name: 'numbers only',
          invert: false,
        }),
    }),
    defineField({
      name: 'displayPhone',
      title: 'رقم الهاتف للعرض في الفوتر',
      type: 'string',
      group: 'contact',
      description: 'مثال: 01098726537',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'عنوان المقر',
      type: 'string',
      group: 'contact',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'workingHours',
      title: 'مواعيد العمل',
      type: 'string',
      group: 'contact',
      description: 'مثال: يومياً من 9:00 ص حتى 9:00 م',
      validation: (Rule) => Rule.required(),
    }),

    // الاعتماد والإحصائيات
    defineField({
      name: 'certificateNote',
      title: 'نص الاعتماد الأكاديمي (في الفوتر)',
      type: 'text',
      rows: 2,
      group: 'accreditation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metrics',
      title: 'إحصائيات الهيرو (3 خانات)',
      type: 'array',
      group: 'accreditation',
      validation: (Rule) => Rule.required().min(1).max(3),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'القيمة (مثال: +1,200 أو 100%)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'الوصف (مثال: متدرب مؤهل للموقع)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'accent',
              title: 'لون الرقم',
              type: 'string',
              options: {
                list: [
                  {title: 'كحلي (افتراضي)', value: 'default'},
                  {title: 'فيروزي (Teal)', value: 'teal'},
                  {title: 'كهرماني (Amber)', value: 'amber'},
                ],
                layout: 'radio',
              },
              initialValue: 'default',
            }),
          ],
          preview: {
            select: {title: 'value', subtitle: 'label'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'academyName', subtitle: 'displayPhone'},
  },
})
