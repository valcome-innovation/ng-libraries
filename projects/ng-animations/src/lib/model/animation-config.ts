import { AnimationEasing } from './animation-easing';

export class AnimationConfig {
  public inTime: number = 500;
  public outTime: number = 500;
  public inDelay: number = 0;
  public outDelay: number = 0;
  public easing: AnimationEasing = AnimationEasing.LINEAR;
}
