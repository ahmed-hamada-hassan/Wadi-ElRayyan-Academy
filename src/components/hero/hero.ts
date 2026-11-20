import { Component, inject } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';
import { BidiIsolatePipe } from '../../shared/pipes/bidi-isolate.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [BidiIsolatePipe, RouterLink, RouterLinkActive],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly coursesService = inject(CoursesService);
  readonly settings = this.coursesService.settings;

  isNumeric(value: string): boolean {
  return /\d/.test(value);
}
}
