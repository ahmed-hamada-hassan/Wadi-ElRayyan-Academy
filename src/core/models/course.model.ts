export type CourseCategory = string;

export type BadgeColor = 'navy' | 'teal' | 'amber' | 'indigo';

export interface CategoryItem {
  id: string;     
  label: string;
  color?: BadgeColor;
}

export interface CourseModule {
  title: string;
  topics?: string[];
  hours: number;
}

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  categoryLabel: string;
  categoryColor?: BadgeColor;
  imageUrl: string;
  imageAlt: string;
  hoursLabel: string;
  deliveryMode: string;
  instructor: string;
  fullDescription: string;
  learningOutcomes: string[];
  syllabus: CourseModule[];
  badgeText?: string;
  isFeatured?: boolean;
}