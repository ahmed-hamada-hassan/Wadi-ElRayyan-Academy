import { Component, inject } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';
import { BidiIsolatePipe } from '../../shared/pipes/bidi-isolate.pipe';

@Component({
  selector: 'app-trust-strip',
  imports: [BidiIsolatePipe],
  templateUrl: './trust-strip.html',
  styleUrl: './trust-strip.css',
})
export class TrustStrip {
  readonly settings = inject(CoursesService).settings;
}
