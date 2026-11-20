import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { CoursesPage } from '../pages/courses-page/courses-page';

export const routes: Routes = [
    { path: '', component: HomePage, title: 'أكاديمية وادي الريان | الرئيسية' },
    { path: 'courses', component: CoursesPage, title: 'أكاديمية وادي الريان | الكورسات المتاحة' },
    { path: '**', redirectTo: '' },
];
