import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const bubble = trigger('bubble', [
  transition(':enter', [
    animate('500ms', keyframes([
      style({ transform: 'scale(1)', offset: 0 }),
      style({ transform: 'scale(1.75)', offset: .3 }),
      style({ transform: 'scale(1)', offset: 1 })
    ]))
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)' }),
    animate('500ms cubic-bezier(0.23, 1, 0.32, 1)', style({ transform: 'scale(0)' }))
  ])
]);
