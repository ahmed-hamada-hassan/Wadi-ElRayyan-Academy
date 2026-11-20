import { Component, HostListener, inject, signal } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';
import { BidiIsolatePipe } from '../../shared/pipes/bidi-isolate.pipe';

@Component({
  selector: 'app-course-modal',
  imports: [BidiIsolatePipe],
  templateUrl: './course-modal.html',
  styleUrl: './course-modal.css',
})
export class CourseModal {
  readonly coursesService = inject(CoursesService);
  readonly course = this.coursesService.activeCourse;
  readonly copied = signal(false);

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.course()) {
      this.coursesService.closeCourseModal();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.coursesService.closeCourseModal();
    }
  }

  async copyLink(): Promise<void> {
    const active = this.course();
    if (!active) return;

    const url = this.coursesService.getCourseShareUrl(active.id);
    let success = false;

    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(url);
        success = true;
      } catch {
        // Fallback to execCommand if clipboard API fails
      }
    }

    if (!success && typeof document !== 'undefined') {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch {
        window.prompt('انسخ رابط الكورس:', url);
        success = true;
      }
    }

    if (success) {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    }
  }
}
