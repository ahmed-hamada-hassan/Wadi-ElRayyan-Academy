import { Component, inject } from '@angular/core';
import type { CourseCategory } from '../../core/models/course.model';
import { CoursesService } from '../../core/services/courses.service';
import { CourseCard } from '../course-card/course-card';
import { BidiIsolatePipe } from '../../shared/pipes/bidi-isolate.pipe';


interface CategoryTab {
  id: CourseCategory;
  label: string;
}

@Component({
  selector: 'app-courses-section',
  imports: [CourseCard, BidiIsolatePipe],
  templateUrl: './courses-section.html',
  styleUrl: './courses-section.css',
})
export class CoursesSection {
  readonly coursesService = inject(CoursesService);
}
