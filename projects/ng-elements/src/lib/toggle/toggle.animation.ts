import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { AnimationEasing } from '@valcome/ng-animations';

export const toggleBackground = trigger('toggleBackground', [
  state('0', style({ left: '3px', right: '50%' })),
  state('1', style({ left: '50%', right: '3px' })),
  transition('0 => 1', [
    animate('500ms ' + AnimationEasing.EASE_OUT_QUINT,
      keyframes([
        style({ left: '3px', right: '50%', offset: 0 }),
        style({ left: '3px', right: '3px', offset: .4 }),
        style({ left: '3px', right: '3px', offset: .6 }),
        style({ left: '50%', right: '3px', offset: 1 }),
      ])
    )
  ]),
  transition('1 => 0', [
    animate('500ms ' + AnimationEasing.EASE_OUT_QUINT,
      keyframes([
        style({ left: '50%', right: '3px', offset: 0 }),
        style({ left: '3px', right: '3px', offset: .4 }),
        style({ left: '3px', right: '3px', offset: .6 }),
        style({ left: '3px', right: '50%', offset: 1 }),
      ])
    )
  ])
]);
