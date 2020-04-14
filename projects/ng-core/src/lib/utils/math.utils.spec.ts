import { MathUtils } from './math.utils';

describe('MathUtils', () => {
  it('should return random value in range', () => {
    let range: number = 5;

    for (let i = 0; i < 10000; i++) {
      let randomValue = MathUtils.getRandomPlusMinus(range);
      expect(randomValue).toBeGreaterThanOrEqual(-range);
      expect(randomValue).toBeLessThan(range);
    }
  });

  // it('should return distance', () => {
  //   let a: Point = new Point(0, 0);
  //   let b: Point = new Point(0, 5);
  //   let distance: number = MathUtils.getDistanceBetween(a, b);
  //   expect(distance).toEqual(5);
  // });

  it('should return log of base', () => {
    let result: number = MathUtils.log(5, 25);
    expect(result).toEqual(2);

    result = MathUtils.log(7, 49);
    expect(result).toEqual(2);

    result = MathUtils.log(12, 1728);
    expect(result).toEqual(3);
  });
});
