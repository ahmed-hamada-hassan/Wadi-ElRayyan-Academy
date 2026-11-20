import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bidiIsolate',
  standalone: true,
})
export class BidiIsolatePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    const englishRegex = /((?:\d+\s*)?[A-Za-z][A-Za-z0-9\s&+\-./]*[A-Za-z0-9]|[A-Za-z]+)/g;
    return value.replace(englishRegex, (match) => `\u2066${match.trim()}\u2069`);
  }
}