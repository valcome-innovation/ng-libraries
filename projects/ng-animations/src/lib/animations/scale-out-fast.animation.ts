import { animate, group, style, transition, trigger } from '@angular/animations';

export const scaleOutFast = trigger('scaleOutFast', [
  transition(':enter', [
    group([
      style({ transform: 'scale(0)' }),
      animate('500ms cubic-bezier(0.23, 1, 0.32, 1)', style({ transform: 'scale(1)' }))
    ])
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)' }),
    animate('500ms cubic-bezier(0.23, 1, 0.32, 1)', style({ transform: 'scale(0)' }))
  ])
]);
