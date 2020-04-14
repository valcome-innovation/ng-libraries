import { animate, style, transition, trigger } from '@angular/animations';

export const slideOpen = trigger('slideOpen', [
  transition(':enter', [
    style({ transform: 'scaleY(0)' }),
    animate('700ms cubic-bezier(0.23, 1, 0.32, 1)', style({ transform: 'scaleY(1)' }))
  ]),
  transition(':leave', [
    style({ transform: 'scaleY(1)' }),
    animate('700ms cubic-bezier(0.23, 1, 0.32, 1)', style({ transform: 'scaleY(0)' }))
  ])
]);
