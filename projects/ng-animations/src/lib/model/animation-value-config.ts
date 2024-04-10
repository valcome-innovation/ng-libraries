import { AnimationConfig } from './animation-config';
import { AnimationEasing } from './enum/animation-easing';

export interface AnimationValueConfig<T> extends AnimationConfig {
  startValue?: T;
  endValue?: T;
}

export const animationValueConfigDefault: AnimationValueConfig<number> = {
  inTime: 500,
  outTime: 500,
  inDelay: 0,
  outDelay: 0,
  easing: AnimationEasing.LINEAR,
  startValue: 0,
  endValue: 1
};
