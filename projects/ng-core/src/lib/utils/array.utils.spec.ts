import { ArrayUtils } from './array.utils';

describe('ArrayUtils', () => {

  it('should prepend element', () => {
    let newArray = ArrayUtils.prepend(0, [1, 2, 3]);
    expect(newArray).toEqual([0, 1, 2, 3]);
  });

  it('should shuffle', () => {
    let initialArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let array: number[] = [...initialArray];
    ArrayUtils.shuffle(array);
    expect(array).not.toEqual(initialArray);
  });

  it('should sumField', () => {
    let values: any[] = [
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ];

    let sum = ArrayUtils.sumField(values, "value");
    expect(sum).toEqual(6);
  });

  it('should sum values', () => {
    let sum = ArrayUtils.sum([1, 2, 3]);
    expect(sum).toEqual(6);

    sum = ArrayUtils.sum([]);
    expect(sum).toEqual(0);
  });

  it('should map', () => {
    let values: any[] = [
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ];

    let mappedValues = ArrayUtils.map(values, "value");
    expect(mappedValues).toEqual([1, 2, 3]);
  });

  it('should generate array from number', () => {
    let actual = ArrayUtils.createArrayFromNumber(10);
    expect(actual.length).toBe(10);
    expect(actual[4]).toBe(5);

    actual = ArrayUtils.createArrayFromNumber(-2);
    expect(actual.length).toBe(0);
  });
});
