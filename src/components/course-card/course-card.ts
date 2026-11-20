import { Component, inject, input } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';
import { Course } from '../../core/models/course.model';
import { BidiIsolatePipe } from '../../shared/pipes/bidi-isolate.pipe';

@Component({
  selector: 'app-course-card',
  imports: [BidiIsolatePipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  readonly course = input.required<Course>();
  readonly coursesService = inject(CoursesService);

  onOpenDetails(): void {
    this.coursesService.openCourseModal(this.course());
  }
}
