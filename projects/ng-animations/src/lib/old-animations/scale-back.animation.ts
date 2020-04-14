import { animate, style, transition, trigger } from '@angular/animations';

export const scaleBack = trigger('scaleBack', [
  transition(':enter', [
    style({ transform: 'scale(1.4)' }),
    animate('1000ms cubic-bezier(0.23, 1, 0.32, 1)', style({ transform: 'scale(1)' }))
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)' }),
    animate('1000ms cubic-bezier(0.23, 1, 0.32, 1)', style({ transform: 'scale(1.4)' }))
  ])
]);
