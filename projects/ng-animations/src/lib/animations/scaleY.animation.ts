import { AnimationValueConfig, animationValueConfigDefault } from '../model/animation-value-config';
import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function scaleY(animationConfig: AnimationValueConfig<number> = {}, key: string = 'slideOpen'): AnimationTriggerMetadata {
  animationConfig = { ...animationValueConfigDefault, ...animationConfig };

  return trigger(key, [
    transition(':enter', [
      style({ transform: `scaleY(${animationConfig.startValue})` }),
      animate(
        `${animationConfig.inTime}ms ${animationConfig.inDelay}ms ${animationConfig.easing}`,
        style({ transform: `scaleY(${animationConfig.endValue})` })
      )
    ]),
    transition(':leave', [
      style({ transform: `scaleY(${animationConfig.endValue})` }),
      animate(
        `${animationConfig.outTime}ms ${animationConfig.outDelay}ms ${animationConfig.easing}`,
        style({ transform: `scaleY(${animationConfig.startValue})` })
      )
    ])
  ])
}
