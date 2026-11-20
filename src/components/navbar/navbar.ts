import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { CoursesService } from '../../core/services/courses.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly themeService = inject(ThemeService);
  readonly coursesService = inject(CoursesService);
  readonly settings = this.coursesService.settings;
}
