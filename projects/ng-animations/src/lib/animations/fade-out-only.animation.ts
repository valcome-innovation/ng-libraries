import { animate, style, transition, trigger } from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  transition(':leave', [
    style({ opacity: 1 }),
    animate('400ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 0 }))
  ])
]);
