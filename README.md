# Wadi ElRayyan Academy

An Arabic-first (RTL), Angular 21 + Sanity CMS web platform for a surveying
and geomatics training academy based in Kafr El-Sheikh, Egypt.

## Overview

Wadi ElRayyan Academy delivers practical field and office training for
surveying and geography graduates. The site covers three specialisations:

- Field instruments: Total Station (Sokkia, Leica) and Level devices
- Technical-office software: AutoCAD, Surfer, Sokkia Link, Pro Link
- GIS: ArcGIS and related geospatial tools

Graduates receive certificates accredited by the American University for
Professional Studies and authenticated by IFADO.

This monorepo contains:
- Angular 21 SPA frontend (RTL, dark/light theme, course catalogue, deep links)
- Sanity Studio v3 CMS workspace (courses, categories, site settings)
- Vercel serverless function (per-course Open Graph HTML for social previews)

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | Angular 21 standalone components, Angular Signals |
| Language | TypeScript 5.9 |
| Styling | Vanilla CSS, custom properties, full RTL, dark/light theme |
| CMS | Sanity v3, GROQ |
| Serverless | Vercel Edge Functions |
| Testing | Vitest 4 + Angular TestBed |
| Fonts | IBM Plex Sans Arabic, Space Mono |
| Deployment | Vercel |

## Project Structure

    wadi-elrayyan-academy/
    + public/                 static assets (favicon, hero images)
    + share.js                Vercel OG-tag serverless function
    + vercel.json             Vercel rewrite rules
    + angular.json
    + tsconfig.json
    + src/
      + app/                  root component, routing, app config
      + components/           reusable UI components
        + consultation-banner/
        + course-card/
        + course-modal/
        + courses-section/
        + footer/
        + hero/
        + navbar/
        + trust-strip/
      + core/
        + data/               TypeScript mock data (offline fallback)
        + models/             Course, CategoryItem, SiteSettings interfaces
        + services/           CoursesService, SanityService, ThemeService
      + pages/
        + home-page/
        + courses-page/
      + shared/pipes/         BidiIsolatePipe (bidirectional text isolation)
    + studio/
      + wadi-elrayyan-academy/  Sanity Studio workspace
        + schemaTypes/          course, category, siteSettings schemas
        + sanity.config.ts

## Key Features

- Full RTL layout with per-element bidirectional text isolation
- Dark / Light theme toggle, persisted in localStorage
- Live Sanity CMS data with instant TypeScript mock-data fallback
- Course catalogue with category filter tabs
- Course detail modal with keyboard (Escape) and backdrop dismiss
- Deep-linkable courses via URL query parameter ?course=<slug>
- WhatsApp share button with pre-composed Arabic message
- Per-course Open Graph social card via Vercel serverless function
- Promo banner text managed from the CMS
- Academy metrics (years of experience, students trained, satisfaction rate)

## Getting Started

Prerequisites: Node.js 20+, npm 11+

    git clone https://github.com/ahmed-hamada-hassan/Wadi-ElRayyan-Academy.git
    cd Wadi-ElRayyan-Academy
    npm install
    npm start
    # open http://localhost:4200

## Available Scripts

| Script | Action |
|---|---|
| npm start | Dev server on port 4200 |
| npm run build | Production build to dist/ |
| npm test | Unit tests with Vitest |
| npm run watch | Incremental dev build (watch mode) |

## Deployment

The project is configured for Vercel out of the box:

    vercel --prod

Rewrite rules in vercel.json:
- /c/:id  ->  OG serverless function (social share redirect)
- All other paths  ->  index.html (Angular SPA fallback)

## Sanity Studio

    cd studio/wadi-elrayyan-academy
    npm install
    npm run dev      # local studio on http://localhost:3333
    npm run deploy   # deploy studio to sanity.studio

Sanity schemas: course, category, siteSettings

## License

Released under the MIT License. See LICENSE for details.

---

Crafted for the surveying community of Egypt.
