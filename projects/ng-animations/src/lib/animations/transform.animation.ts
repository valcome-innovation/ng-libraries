import { AnimationValueConfig, animationValueConfigDefault } from '../model/animation-value-config';
import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function transform(animationConfig: AnimationValueConfig<string> = {}, key: string = 'transform'): AnimationTriggerMetadata {
  const defaultTransform: AnimationValueConfig<string> = { startValue: 'translate(0)', endValue: 'translate(0)' };
  animationConfig = { ...animationValueConfigDefault, ...defaultTransform, ...animationConfig } as AnimationValueConfig<string>;

  return trigger(key, [
    transition(':enter', [
      style({ transform: animationConfig.startValue! }),
      animate(
        `${animationConfig.inTime}ms ${animationConfig.inDelay}ms ${animationConfig.easing}`,
        style({ transform: animationConfig.endValue! })
      )
    ]),
    transition(':leave', [
      style({ transform: animationConfig.endValue! }),
      animate(
        `${animationConfig.outTime}ms ${animationConfig.outDelay}ms ${animationConfig.easing}`,
        style({ transform: animationConfig.startValue! })
      )
    ])
  ])
}
