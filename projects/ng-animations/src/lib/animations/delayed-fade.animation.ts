import { animate, style, transition, trigger } from '@angular/animations';

export function delayedFade(fadeInDelay: number, fadeOutDelay: number = 0) {
  return trigger('delayedFade', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(`400ms ${fadeInDelay}ms cubic-bezier(0.23, 1, 0.32, 1)`, style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate(`400ms ${fadeOutDelay}ms cubic-bezier(0.23, 1, 0.32, 1)`, style({ opacity: 0 }))
    ])
  ]);
}
