import { Component, inject } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly coursesService = inject(CoursesService);
  readonly settings = this.coursesService.settings;
  readonly currentYear = new Date().getFullYear();
}
