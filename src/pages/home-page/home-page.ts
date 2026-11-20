import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { TrustStrip } from '../../components/trust-strip/trust-strip';
import { ConsultationBanner } from '../../components/consultation-banner/consultation-banner';

@Component({
  selector: 'app-home-page',
  imports: [Hero, TrustStrip, ConsultationBanner],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
