import { AnimationValueConfig, animationValueConfigDefault } from '../model/animation-value-config';
import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function baseAnimate(animationConfig: AnimationValueConfig<Parameters<typeof style>[0]>,
                            key: string = 'animate'): AnimationTriggerMetadata {
  const defaultTransform: AnimationValueConfig<Parameters<typeof style>[0]> = {
    startValue: { opacity: 0 },
    endValue: { opacity: 1 }
  };

  animationConfig = {
    ...animationValueConfigDefault,
    ...defaultTransform,
    ...animationConfig,
  } as AnimationValueConfig<Parameters<typeof style>[0]> ;

  return trigger(key, [
    transition(':enter', [
      style(animationConfig.startValue as any),
      animate(
        `${animationConfig.inTime}ms ${animationConfig.inDelay}ms ${animationConfig.easing}`,
        style(animationConfig.endValue as any)
      )
    ]),
    transition(':leave', [
      style(animationConfig.endValue as any),
      animate(
        `${animationConfig.outTime}ms ${animationConfig.outDelay}ms ${animationConfig.easing}`,
        style(animationConfig.startValue as any)
      )
    ])
  ]);
}
