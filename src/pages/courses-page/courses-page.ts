import { Component } from '@angular/core';
import { CoursesSection } from '../../components/courses-section/courses-section';
import { ConsultationBanner } from '../../components/consultation-banner/consultation-banner';

@Component({
  selector: 'app-courses-page',
  imports: [CoursesSection, ConsultationBanner],
  templateUrl: './courses-page.html',
  styleUrl: './courses-page.css',
})
export class CoursesPage {}
