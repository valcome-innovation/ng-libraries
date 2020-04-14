import { MathUtils } from './math.utils';
import { Point } from '../model/point';

describe('MathUtils', () => {
  it('should return random value in range', () => {
    const range: number = 5;

    for (let i = 0; i < 10000; i++) {
      const randomValue = MathUtils.getRandomPlusMinus(range);
      expect(randomValue).toBeGreaterThanOrEqual(-range);
      expect(randomValue).toBeLessThan(range);
    }
  });

  it('should return distance', () => {
    const a: Point = new Point(0, 0);
    const b: Point = new Point(0, 5);
    const distance: number = MathUtils.getDistanceBetween(a, b);
    expect(distance).toEqual(5);
  });

  it('should return log of base', () => {
    let result: number = MathUtils.log(5, 25);
    expect(result).toEqual(2);

    result = MathUtils.log(7, 49);
    expect(result).toEqual(2);

    result = MathUtils.log(12, 1728);
    expect(result).toEqual(3);
  });

  it('should return negative 6th quad', () => {
    let input: number = 10;
    let expected: number = -531440;
    let actual: number = MathUtils.quadOutGrowth(input);
    expect(actual).toEqual(expected);

    input = 1;
    expected = 1;
    actual = MathUtils.quadOutGrowth(input);
    expect(actual).toEqual(expected);

    input = 2;
    expected = 0;
    actual = MathUtils.quadOutGrowth(input);
    expect(actual).toEqual(expected);
  });
});
