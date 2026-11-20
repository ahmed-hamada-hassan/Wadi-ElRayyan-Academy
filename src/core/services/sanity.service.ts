import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CategoryItem, Course } from '../models/course.model';
import { SiteSettings } from '../models/site-settings.model';

export interface SanityPayload {
  settings: SiteSettings | null;
  categories: CategoryItem[];
  courses: Course[];
}

interface SanityApiResponse<T> {
  result: T;
}

@Injectable({ providedIn: 'root' })
export class SanityService {
  private readonly http = inject(HttpClient);

  private readonly projectId = 'owgyca0p';
  private readonly dataset = 'production';
  private readonly apiVersion = '2026-11-20';

  private get apiUrl(): string {
    return `https://${this.projectId}.apicdn.sanity.io/v${this.apiVersion}/data/query/${this.dataset}`;
  }

  getSiteData(): Observable<SanityPayload> {
    const groqQuery = `{
      "settings": *[_type == "siteSettings"][0] {
        academyName,
        academySubTitle,
        heroEyebrow,
        heroBio,
        promoBannerText,
        showPromoBanner,
        whatsappNumber,
        displayPhone,
        address,
        workingHours,
        certificateNote,
        coordinates,
        "metrics": coalesce(metrics, [])[] {
          value,
          label,
          accent
        }
      },
      "categories": *[_type == "category"] | order(_createdAt asc) {
        "id": slug.current,
        label,
        color
      },
      "courses": *[_type == "course"] | order(_createdAt desc) {
        "id": slug.current,
        title,
        "category": category->slug.current,
        "categoryLabel": category->label,
        "categoryColor": category->color,
        "imageUrl": image.asset->url,
        "imageAlt": coalesce(image.alt, title),
        hoursLabel,
        deliveryMode,
        instructor,
        fullDescription,
        "learningOutcomes": coalesce(learningOutcomes, []),
        "syllabus": coalesce(syllabus, [])[] {
          title,
          hours,
          topics
        },
        badgeText,
        isFeatured
      }
    }`;

    const params = new HttpParams().set('query', groqQuery);

    return this.http
      .get<SanityApiResponse<SanityPayload>>(this.apiUrl, { params })
      .pipe(map((res) => res.result));
  }
}