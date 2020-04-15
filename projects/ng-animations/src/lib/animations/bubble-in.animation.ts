import { animate, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';
import { AnimationConfig, animationConfigDefault } from '../model/animation-config';
import { AnimationEasing } from '../model/enum/animation-easing';

export function bubble(animationConfig: AnimationConfig = {},
                       outEasing: AnimationEasing = AnimationEasing.EASE_OUT_QUINT,
                       key: string = 'bubble'): AnimationTriggerMetadata {

  animationConfig = {...animationConfigDefault, ...animationConfig};

  return trigger(key, [
    transition(':enter', [
      animate(
        `${animationConfig.inTime}ms ${animationConfig.inDelay}ms ${animationConfig.easing}`,
        keyframes([
          style({ transform: 'scale(.5)', opacity: 0, offset: 0 }),
          style({ transform: 'scale(1)', opacity: 1, offset: .2 }),
          style({ transform: 'scale(1.5)', offset: .4 }),
          style({ transform: 'scale(1)', offset: 1 })
        ])
      )
    ]),
    transition(':leave', [
      style({ transform: 'scale(1)' }),
      animate(
        `${animationConfig.outTime}ms ${animationConfig.outDelay}ms ${outEasing}`,
        style({ transform: 'scale(0)' })
      )
    ])
  ]);
}
