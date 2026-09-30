import { Component, Input } from '@angular/core';
@Component({
  selector: 'r-icon',
  standalone: true,
  template: `<svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.65"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path [attr.d]="paths[name] || paths['pencil']" />
  </svg>`,
})
export class Icon {
  @Input() name = 'pencil';
  paths: Record<string, string> = {
    search: 'm21 21-4.4-4.4 M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
    bag: 'M5 7h14l1 14H4L5 7 M8 8V6a4 4 0 0 1 8 0v2',
    user: 'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 21v-2a8 8 0 0 1 16 0v2',
    arrow: 'M4 12h16 M14 6l6 6-6 6',
    pencil: 'm16 3 5 5-12 12-6 1 1-6L16 3 M13 6l5 5 M4 15l5 5',
    close: 'm6 6 12 12 M6 18 18 6',
    trash: 'M3 6h18 M9 6V3h6v3 M6 6l1 15h10l1-15 M10 10v7 M14 10v7',
    check: 'm5 12 4 4L19 6',
    menu: 'M4 6h16 M4 12h16 M4 18h16',
    star: 'm12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9L12 3',
    box: 'm3 7 9-4 9 4v10l-9 4-9-4V7 M3 7l9 4 9-4 M12 11v10',
    heart:
      'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8',
  };
}
