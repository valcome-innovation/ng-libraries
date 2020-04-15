import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';
import { AnimationValueConfig, animationValueConfigDefault } from '../model/animation-value-config';

export function scale(animationConfig: AnimationValueConfig = {}, key: string = 'scale'): AnimationTriggerMetadata {
  animationConfig = {...animationValueConfigDefault, ...animationConfig};

  return trigger(key, [
    transition(':enter', [
      style({ transform: `scale(${animationConfig.startValue})` }),
      animate(
        `${animationConfig.inTime}ms ${animationConfig.inDelay}ms ${animationConfig.easing}`,
        style({ transform: `scale(${animationConfig.endValue})` })
      )
    ]),
    transition(':leave', [
      style({ transform: `scale(${animationConfig.endValue})` }),
      animate(
        `${animationConfig.outTime}ms ${animationConfig.outDelay}ms ${animationConfig.easing}`,
        style({ transform: `scale(${animationConfig.startValue})` })
      )
    ])
  ])
}
