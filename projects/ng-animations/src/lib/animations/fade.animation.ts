import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';
import { AnimationValueConfig, animationValueConfigDefault } from '../model/animation-value-config';

export function fade(animationConfig: AnimationValueConfig, key: string = 'fade'): AnimationTriggerMetadata {
  animationConfig = {...animationValueConfigDefault, ...animationConfig};

  console.log(JSON.stringify(animationConfig));

  return trigger(key, [
    transition(':enter', [
      style({ opacity: animationConfig.startValue }),
      animate(
        `${animationConfig.inTime}ms ${animationConfig.inDelay}ms ${animationConfig.easing}`,
        style({ opacity: animationConfig.endValue })
      )
    ]),
    transition(':leave', [
      style({ opacity: animationConfig.endValue }),
      animate(
        `${animationConfig.outTime}ms ${animationConfig.outDelay}ms ${animationConfig.easing}`,
        style({ opacity: animationConfig.startValue })
      )
    ])
  ])
}
