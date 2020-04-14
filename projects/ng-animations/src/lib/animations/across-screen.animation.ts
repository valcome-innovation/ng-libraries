import { animate, state, style, transition, trigger } from '@angular/animations';
import { Globals } from '../../components/game/game-engine/globals';

export const acrossScreen = trigger('popupOut', [
  state('visible', style({ opacity: 1 })),
  state('clicked', style({ opacity: 0 })),
  transition('* => visible', [
    style({ opacity: 0, transform: 'translateY(20px) scale(0)' }),
    animate(Globals.POP_OUT_ANIMATION_DURATION_MS + 'ms cubic-bezier(0.23, 1, 0.32, 1)', style({
      transform: 'translateY(0) scale(1)',
      opacity: 1
    }))
  ]),
  transition('visible => expired', [
    style({ opacity: 1 }),
    animate(Globals.POP_OUT_ANIMATION_DURATION_MS + 'ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 0 }))
  ]),
  transition('visible => clicked', [
    style({ transform: 'scale(1)' }),
    animate(Globals.POP_OUT_ANIMATION_DURATION_MS + 'ms cubic-bezier(0.23, 1, 0.32, 1)', style({
      transform: 'scale(1.5)',
      opacity: 0
    }))
  ])
]);
