import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';
import { AnimationConfig } from '../model/animation-config';

export function fade(animationConfig: AnimationConfig, key: string = 'fade'): AnimationTriggerMetadata {
  trigger(key, [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(
        `${animationConfig.inTime}ms ${animationConfig.inDelay}ms ${animationConfig.easing}`,
        style({ opacity: 1 })
      )
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate(
        `${animationConfig.outTime}ms ${animationConfig.outDelay}ms ${animationConfig.easing}`,
        style({ opacity: 0 })
      )
    ])
  ])
}
