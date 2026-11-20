export interface HeroMetric {
  value: string;
  label: string;
  accent?: 'default' | 'teal' | 'amber';
}

export interface SiteSettings {
  academyName: string;
  academySubTitle: string;
  heroEyebrow: string;
  heroBio: string;
  promoBannerText: string;
  showPromoBanner: boolean;
  whatsappNumber: string;   
  displayPhone: string;
  address: string;
  workingHours: string;
  certificateNote: string;
  coordinates: string;
  metrics: HeroMetric[];
}