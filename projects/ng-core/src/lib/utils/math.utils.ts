import { Point } from '../model/point';

export class MathUtils {

  public static quadOutGrowth(x: number): number {
    let a = -1;
    let b = -1;
    let c = 1;

    return Math.min(c, a * Math.pow(b + x, 6) + c);
  }

  /**
   * Returns a random number between -@value and +@value
   * @param range A positive number defining the range
   */
  public static getRandomPlusMinus(range: number): number {
    return Math.random() * 2 * range - range;
  }

  public static getDistanceBetween(a: Point, b: Point): number {
    let x = a.x - b.x;
    let y = a.y - b.y;
    return Math.sqrt(x * x + y * y);
  }

  public static log(base: number, x: number): number {
    return Math.log(x) / Math.log(base);
  }
}
