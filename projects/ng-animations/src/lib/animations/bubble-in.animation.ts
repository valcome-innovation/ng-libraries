import { animate, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';
import { AnimationConfig, animationConfigDefault } from '../model/animation-config';

export function bubble(animationConfig: AnimationConfig = {}, key: string = 'bubble'): AnimationTriggerMetadata {
  animationConfig = {...animationConfigDefault, ...animationConfig};

  return trigger(key, [
    transition(':enter', [
      animate(
        `${animationConfig.inTime}ms ${animationConfig.inDelay}ms ${animationConfig.easing}`,
        keyframes([
          style({ transform: 'scale(0)', offset: 0 }),
          style({ transform: 'scale(1.5)', offset: .5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ])
      )
    ]),
    transition(':leave', [
      style({ transform: 'scale(1)' }),
      animate(
        `${animationConfig.outTime}ms ${animationConfig.outDelay}ms ${animationConfig.easing}`,
        style({ transform: 'scale(0)' })
      )
    ])
  ]);
}
