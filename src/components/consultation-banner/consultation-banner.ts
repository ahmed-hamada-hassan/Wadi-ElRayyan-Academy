import { Component, inject } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';

@Component({
  selector: 'app-consultation-banner',
  imports: [],
  templateUrl: './consultation-banner.html',
  styleUrl: './consultation-banner.css',
})
export class ConsultationBanner {
  private readonly coursesService = inject(CoursesService);

  get consultationWhatsAppUrl(): string {
    const phone = this.coursesService.settings().whatsappNumber;
    const msg = 'السلام عليكم أريد استشارة بخصوص تحديد الكورس المناسب لي';
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }
}
