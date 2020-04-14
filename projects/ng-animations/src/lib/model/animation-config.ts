import { AnimationEasing } from './enum/animation-easing';

export interface AnimationConfig {
  inTime?: number;
  outTime?: number;
  inDelay?: number;
  outDelay?: number;
  easing?: AnimationEasing | string;
}

export const animationConfigDefault: AnimationConfig = {
  inTime: 500,
  outTime: 500,
  inDelay: 0,
  outDelay: 0,
  easing: AnimationEasing.LINEAR
}
