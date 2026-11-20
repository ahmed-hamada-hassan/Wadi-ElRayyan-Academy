import { Course } from '../models/course.model';
import { SiteSettings } from '../models/site-settings.model';
import { CategoryItem } from '../models/course.model';

export const MOCK_CATEGORIES: CategoryItem[] = [
  { id: 'field', label: 'الأجهزة المساحية الميدانية', color: 'teal' },
  { id: 'tech-office', label: 'برامج المكتب الفني', color: 'navy' },
  { id: 'gis', label: 'نظم المعلومات الجغرافية GIS', color: 'amber' },
];

export const MOCK_SITE_SETTINGS: SiteSettings = {
  academyName: 'أكاديمية وادي الريان',
  academySubTitle: 'للتدريب والاستشارات المساحية',
  heroEyebrow: 'تدريب عملي وميداني لطلاب وخريجي قسم مساحة وجغرافيا',
  heroBio:
    'متخصصون في الأعمال المساحية ودورات الأجهزة الميدانية وبرامج المكتب الفني ونظم المعلومات الجغرافية (GIS)، لتأهيلك عملياً لسوق العمل في مشروعات الطرق والإنشاءات والصرف الصحي.',
  promoBannerText: 'خصم 25% لفترة محدودة على الحجز المبكر',
  showPromoBanner: true,
  whatsappNumber: '201098726537',
  displayPhone: '01098726537',
  address: 'كفر الشيخ – مساكن الري – عمارة 14',
  workingHours: 'يومياً من 9:00 ص حتى 9:00 م ماعدا الجمعة',
  certificateNote:
    'شهادة معتمدة من الجامعة الأمريكية للدراسات المهنية وموثقة من الإيفادو.',
  coordinates: "31°06'N 30°56'E",
    metrics: [
      { value: '10+', label: 'سنوات من الخبرة', accent: 'teal' },
      { value: '500+', label: 'طالب مساحي', accent: 'amber' },
      { value: '95%', label: 'رضا الطلاب', accent: 'default' },
    ],
};

export const MOCK_COURSES: Course[] = [
  {
    id: 'total-station-level',
    title: 'دورة أجهزة المساحة الميدانية (Total Station & Level)',
    category: 'field',
    categoryLabel: 'أجهزة مساحية',
    imageUrl: '/Courses-1024x448.png',
    imageAlt: 'التدريب العملي على جهاز التوتال ستيشن وميزان القامة',
    hoursLabel: '30 ساعة تدريبية',
    deliveryMode: 'تدريب ميداني وعملي',
    instructor: 'مهندسو مساحة استشاريون',
    badgeText: 'خصم 25%',
    fullDescription:
      'تدريب نظري وعملي متكامل على جهاز التوتال ستيشن وميزان القامة مع تطبيقات ميدانية حقيقية في أعمال رفع وتوقيع الطرق والإنشاءات وشبكات الصرف الصحي، لتكون جاهزاً للنزول للموقع بثقة كاملة.',
    learningOutcomes: [
      'الضبط والتسامت الدقيق لأجهزة التوتال ستيشن (Sokkia & Leica)',
      'أعمال الرفع المساحي الطبوغرافي (Topography)',
      'التوقيع المساحي للنقاط والمحاور الإنشائية (Stake-out)',
      'الميزانيات الشبكية والطولية وضبط مناسيب الصرف والطرق',
    ],
    syllabus: [
      { title: 'المحور الأول: أساسيات المساحة وضبط الأجهزة والتسامت الميداني', hours: 10 },
      { title: 'المحور الثاني: برامج الرفع والتوقيع وحساب المساحات بالـ Total Station', hours: 10 },
      { title: 'المحور الثالث: تطبيقات ميزان القامة Level في الطرق والإنشاءات والصرف الصحي', hours: 10 },
    ],
  },
  {
    id: 'autocad-surfer',
    title: 'دورة برامج المكتب الفني المساحي (AutoCAD & Surfer)',
    category: 'tech-office',
    categoryLabel: 'مكتب فني',
    imageUrl: 'images/autocad-surfer.jpg',
    imageAlt: 'إعداد اللوحات المساحية والخرائط الكنتورية على AutoCAD و Surfer',
    hoursLabel: '24 ساعة تدريبية',
    deliveryMode: 'عملي على مشاريع حقيقية',
    instructor: 'مهندسو مكتب فني',
    badgeText: 'الأكثر طلباً',
    fullDescription:
      'احتراف إعداد اللوحات المساحية التنفيذية وحساب كميات الحفر والردم ورسم الخرائط الكنتورية والقطاعات الطولية والعرضية بدقة متناهية خطوة بخطوة باستخدام AutoCAD و Surfer.',
    learningOutcomes: [
      'إعداد وإخراج اللوحات المساحية التنفيذية (As-Built)',
      'رسم الخرائط الكنتورية والنماذج ثلاثية الأبعاد على برنامج Surfer',
      'حساب كميات الحفر والردم بدقة وتجهيز تقارير المكتب الفني',
      'التعامل مع الإحداثيات وتجهيز لوحات التوقيع للموقع',
    ],
    syllabus: [
      { title: 'المحور الأول: أساسيات وأوامر AutoCAD المخصصة للمساحين', hours: 8 },
      { title: 'المحور الثاني: استيراد النقاط وتكوين الأسطح والكنتور في Surfer', hours: 8 },
      { title: 'المحور الثالث: حساب المكعبات وإخراج اللوحات النهائية للطباعة', hours: 8 },
    ],
  },
  {
    id: 'sokkia-pro-link',
    title: 'دورة ربط ومعالجة بيانات الأجهزة (Sokkia Link & Pro Link)',
    category: 'tech-office',
    categoryLabel: 'مكتب فني',
    imageUrl: 'images/data-transfer.jpg',
    imageAlt: 'سحب وتفريغ النقاط المساحية باستخدام Sokkia Link و Pro Link',
    hoursLabel: '16 ساعة تدريبية',
    deliveryMode: 'ورشة عمل تطبيقية',
    instructor: 'أخصائي معالجة بيانات مساحية',
    fullDescription:
      'تعلم سحب وتفريغ ومعالجة النقاط المساحية من مختلف الأجهزة وتحويل صيغ الإحداثيات وتجهيز ملفات الرفع والتوقيع لمهندسي الموقع بدون أخطاء.',
    learningOutcomes: [
      'سحب وتفريغ البيانات من الأجهزة المساحية للكمبيوتر والعكس',
      'تحويل صيغ الملفات (SDR, DXF, CSV, TXT) باحترافية',
      'مراجعة وتصحيح أخطاء الرصد قبل التصدير لـ AutoCAD',
      'تجهيز ملفات التوقيع ورفعها مباشرة على التوتال ستيشن',
    ],
    syllabus: [
      { title: 'المحور الأول: التعامل مع واجهة وإعدادات برنامج Sokkia Link', hours: 8    },
      { title: 'المحور الثاني: معالجة الأرصاد وتحويل الصيغ عبر Pro Link', hours: 8    },
      { title: 'المحور الثالث: ورشة ربط كاملة بين الميدان والمكتب الفني', hours: 8    },
    ],
  },
  {
    id: 'arcgis-google-earth',
    title: 'دورة نظم المعلومات الجغرافية (ArcGIS Pro & Google Earth)',
    category: 'gis',
    categoryLabel: 'نظم معلومات جغرافية',
    imageUrl: 'images/gis-pro.jpg',
    imageAlt: 'التحليل المكاني والخرائط على ArcGIS Pro و Google Earth',
    hoursLabel: '28 ساعة تدريبية',
    deliveryMode: 'حضور وأونلاين',
    instructor: 'خبير نظم معلومات جغرافية GIS',
    badgeText: 'متاح أونلاين',
    fullDescription:
      'بناء قواعد البيانات الجغرافية المكانية، التحليل المكاني المتقدم، الإرجاع الجغرافي للخرائط وإخراج لوحات احترافية معتمدة لطلاب وخريجي قسم مساحة وجغرافيا.',
    learningOutcomes: [
      'إنشاء وإدارة قواعد البيانات الجغرافية (Geodatabase)',
      'الإرجاع الجغرافي للخرائط والمرئيات الفضائية (Georeferencing)',
      'الربط المباشر وتحويل الملفات بين ArcGIS Pro و Google Earth',
      'التحليل المكاني وإخراج الخرائط النهائية بمعايير احترافية',
    ],
    syllabus: [
      { title: 'المحور الأول: أساسيات ArcGIS Pro وبناء الطبقات وقواعد البيانات', hours: 10 },
      { title: 'المحور الثاني: الإرجاع الجغرافي والرسم الرقمي والتحليل المكاني', hours: 10 },
      { title: 'المحور الثالث: التكامل مع Google Earth وإخراج الخرائط (Layout)', hours: 8 },
    ],
  },
];