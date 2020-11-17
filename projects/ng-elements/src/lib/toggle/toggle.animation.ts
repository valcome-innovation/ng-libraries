import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { AnimationEasing } from '@valcome/ng-animations';

export const toggleBackground = trigger('toggleBackground', [
  state('0', style({ left: '0', right: '50%' })),
  state('1', style({ left: '50%', right: '0' })),
  transition('0 => 1', [
    animate('500ms ' + AnimationEasing.EASE_OUT_QUINT,
      keyframes([
        style({ left: '0', right: '50%', offset: 0 }),
        style({ left: '0', right: '0', offset: .4 }),
        style({ left: '0', right: '0', offset: .6 }),
        style({ left: '50%', right: '0', offset: 1 }),
      ])
    )
  ]),
  transition('1 => 0', [
    animate('500ms ' + AnimationEasing.EASE_OUT_QUINT,
      keyframes([
        style({ left: '50%', right: '0', offset: 0 }),
        style({ left: '0', right: '0', offset: .4 }),
        style({ left: '0', right: '0', offset: .6 }),
        style({ left: '0', right: '50%', offset: 1 }),
      ])
    )
  ])
]);
