import { Injectable, signal, effect } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<ThemeMode>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const current = this.theme();
      document.documentElement.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
    });
  }

  toggleTheme(): void {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }

  private getInitialTheme(): ThemeMode {
    const saved = typeof localStorage !== 'undefined' ? (localStorage.getItem('theme') as ThemeMode | null) : null;
    if (saved === 'light' || saved === 'dark') return saved;
    return typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
  }
}