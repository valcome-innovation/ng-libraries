import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInOnly = trigger('fadeInOnly', [
  transition(':enter', [
    style({ opacity: '0' }),
    animate('700ms ease-out', style({ opacity: '1' })),
  ])
]);
