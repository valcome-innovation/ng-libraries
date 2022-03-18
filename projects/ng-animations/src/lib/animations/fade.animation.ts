import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';
import { AnimationValueConfig, animationValueConfigDefault } from '../model/animation-value-config';

export function fade(animationConfig: AnimationValueConfig<number> = {}, key: string = 'fade'): AnimationTriggerMetadata {
  animationConfig = { ...animationValueConfigDefault, ...animationConfig };

  return trigger(key, [
    transition(':enter', [
      style({ opacity: animationConfig.startValue } as any),
      animate(
        `${animationConfig.inTime}ms ${animationConfig.inDelay}ms ${animationConfig.easing}`,
        style({ opacity: animationConfig.endValue } as any)
      )
    ]),
    transition(':leave', [
      style({ opacity: animationConfig.endValue } as any),
      animate(
        `${animationConfig.outTime}ms ${animationConfig.outDelay}ms ${animationConfig.easing}`,
        style({ opacity: animationConfig.startValue } as any)
      )
    ])
  ])
}
