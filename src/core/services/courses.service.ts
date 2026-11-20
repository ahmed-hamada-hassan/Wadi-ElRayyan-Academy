import { Injectable, signal, computed, inject } from '@angular/core';
import { CategoryItem, Course, CourseCategory } from '../models/course.model';
import { SiteSettings } from '../models/site-settings.model';
import { MOCK_CATEGORIES, MOCK_COURSES, MOCK_SITE_SETTINGS } from '../data/courses.mock';
import { SanityService } from './sanity.service';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private readonly sanityService = inject(SanityService);

  readonly settings = signal<SiteSettings>(MOCK_SITE_SETTINGS);
  readonly courses = signal<Course[]>(MOCK_COURSES);
  readonly categories = signal<CategoryItem[]>(MOCK_CATEGORIES);
  readonly selectedCategory = signal<CourseCategory>('all');
  readonly activeCourse = signal<Course | null>(null);
  readonly isLoading = signal<boolean>(true);

  readonly filterTabs = computed<CategoryItem[]>(() => [
    { id: 'all', label: 'الكل' },
    ...this.categories(),
  ]);

  readonly filteredCourses = computed(() => {
    const category = this.selectedCategory();
    const list = this.courses();
    return category === 'all' ? list : list.filter((c) => c.category === category);
  });

  constructor() {
    this.loadLiveData();
    window.addEventListener('popstate', () => this.syncCourseFromUrl());
  }

  private loadLiveData(): void {
    this.sanityService.getSiteData().subscribe({
      next: (data) => {
        if (data.settings) {
          this.settings.set(data.settings);
        }
        if (data.categories?.length) {
          this.categories.set(data.categories);
        }
        if (data.courses?.length) {
          this.courses.set(data.courses);
        }
        this.isLoading.set(false);
        this.syncCourseFromUrl(); // 👈 يفتح الـ Modal لو الرابط فيه ?course=...
      },
      error: (err) => {
        console.error('Sanity fetch failed, falling back to mock data:', err);
        this.isLoading.set(false);
        this.syncCourseFromUrl();
      },
    });
  }

  setCategory(category: CourseCategory): void {
    this.selectedCategory.set(category);
  }

  openCourseModal(course: Course, updateUrl = true): void {
    this.activeCourse.set(course);
    document.body.style.overflow = 'hidden';

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('course', course.id);
      window.history.pushState({ courseId: course.id }, '', url.toString());
    }
  }

  closeCourseModal(updateUrl = true): void {
    this.activeCourse.set(null);
    document.body.style.overflow = '';

    if (updateUrl) {
      const url = new URL(window.location.href);
      if (url.searchParams.has('course')) {
        url.searchParams.delete('course');
        window.history.replaceState({}, '', url.toString());
      }
    }
  }

  getCourseShareUrl(courseId: string): string {
  if (window.location.hostname === 'localhost') {
    const url = new URL('/courses', window.location.origin);
    url.searchParams.set('course', courseId);
    return url.toString();
  }
  return `${window.location.origin}/c/${encodeURIComponent(courseId)}`;
}

  getWhatsAppUrl(course?: { id: string; title: string }): string {
    const phone = this.settings().whatsappNumber;
    const message = course
      ? `السلام عليكم، أريد الاستفسار عن تفاصيل وحجز: ${course.title}\n${this.getCourseShareUrl(course.id)}`
      : `السلام عليكم، أريد الاستفسار عن الدورات التدريبية في ${this.settings().academyName}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }

  private syncCourseFromUrl(): void {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('course');

    if (courseId) {
      const found = this.courses().find((c) => c.id === courseId);
      if (found) {
        this.openCourseModal(found, false);
        return;
      }
    }
    this.closeCourseModal(false);
  }
}