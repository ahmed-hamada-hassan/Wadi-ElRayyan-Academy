import { TestBed } from '@angular/core/testing';
import { CourseModal } from '../components/course-modal/course-modal';
import { CoursesService } from '../core/services/courses.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('CoursesService & CourseModal Deep Link', () => {
  let service: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseModal],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([])
      ],
    }).compileComponents();

    service = TestBed.inject(CoursesService);
  });

  it('updates browser history URL when opening and closing course modal', () => {
    const pushSpy = vi.spyOn(window.history, 'pushState');
    const replaceSpy = vi.spyOn(window.history, 'replaceState');
    const course = service.courses()[0];

    service.openCourseModal(course);
    expect(service.activeCourse()?.id).toBe(course.id);
    expect(pushSpy).toHaveBeenCalled();

    service.closeCourseModal();
    expect(service.activeCourse()).toBeNull();
    expect(replaceSpy).toHaveBeenCalled();
  });

  it('generates a proper deep link share URL', () => {
    const courseId = 'total-station-level';
    const shareUrl = service.getCourseShareUrl(courseId);
    expect(shareUrl).toContain(courseId);
  });

  it('syncs active course when popstate event fires with course queryParam', () => {
    const course = service.courses()[0];
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('course', course.id);
    window.history.pushState({}, '', newUrl.toString());

    window.dispatchEvent(new PopStateEvent('popstate'));

    expect(service.activeCourse()?.id).toBe(course.id);

    newUrl.searchParams.delete('course');
    window.history.pushState({}, '', newUrl.toString());
    window.dispatchEvent(new PopStateEvent('popstate'));

    expect(service.activeCourse()).toBeNull();
  });

  it('renders Copy Deep Link button in CourseModal', async () => {
    const fixture = TestBed.createComponent(CourseModal);
    const course = service.courses()[0];
    service.activeCourse.set(course);

    fixture.detectChanges();
    await fixture.whenStable();

    const shareBtn = fixture.nativeElement.querySelector('.share-btn');
    expect(shareBtn).toBeTruthy();
    expect(shareBtn.textContent).toContain('نسخ الرابط');

    const copySpy = vi.spyOn(fixture.componentInstance, 'copyLink');
    shareBtn.click();
    expect(copySpy).toHaveBeenCalled();
  });
});
