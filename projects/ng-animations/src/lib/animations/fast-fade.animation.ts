import { animate, style, transition, trigger } from '@angular/animations';

export const fastFade = trigger('fastFade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('400ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1, 'pointer-events': 'none' }),
    animate('400ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 0 })),
  ])
]);
