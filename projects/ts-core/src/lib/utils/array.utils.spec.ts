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

    let sum = ArrayUtils.sumField(values, 'value');
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

    let mappedValues = ArrayUtils.map(values, 'value');
    expect(mappedValues).toEqual([1, 2, 3]);
  });

  it('should generate array from number', () => {
    let actual = ArrayUtils.createArrayFromNumber(10);
    expect(actual.length).toBe(10);
    expect(actual[4]).toBe(5);

    actual = ArrayUtils.createArrayFromNumber(-2);
    expect(actual.length).toBe(0);
  });

  it('should generate range', () => {
    expect(ArrayUtils.range(0, 3)).toEqual([0, 1, 2, 3]);
    expect(ArrayUtils.range(2, 5)).toEqual([2, 3, 4, 5]);
    expect(ArrayUtils.range(5, 5)).toEqual([5]);
  });

  it('should remove duplicates', () => {
    const array = [1, 1, 2, 2, 2, 3, 4, 5, 5];

    const result = ArrayUtils.removeDuplicates(array);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should slice into chunks', () => {
    expect(ArrayUtils.sliceIntoChunks([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(ArrayUtils.sliceIntoChunks([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
    expect(ArrayUtils.sliceIntoChunks([1], 5)).toEqual([[1]]);
    expect(ArrayUtils.sliceIntoChunks([], 5)).toEqual([]);
  });

  it('should be equal', () => {
    expect(ArrayUtils.areEqual([1, 3, 2], [1, 2, 3])).toBe(true);
    expect(ArrayUtils.areEqual(['hey', 'yo'], ['hey', 'yo'])).toBe(true);
    expect(ArrayUtils.areEqual([true, false, false], [true, false, false])).toBe(true);
  });

  it('should not be equal', () => {
    expect(ArrayUtils.areEqual([1, 2], [1, 2, 3])).toBe(false);
    expect(ArrayUtils.areEqual(['hey', 'yo', 'tz', 'tz'], ['hey', 'yo'])).toBe(false);
    expect(ArrayUtils.areEqual([true, false, false], [false, false])).toBe(false);
  });

  it('should mode', () => {
    expect(ArrayUtils.mode([1, 2, 2, 3, 1, 1])).toBe(1);
    expect(ArrayUtils.mode(['b', 'c', 'a', 'c'])).toBe('c');
  });

  it('should convert to ID Map with number', () => {
    const idArray = ArrayUtils.range(0, 10_000).map(num => ({ id: num }));

    const map = ArrayUtils.toIdMap(idArray);

    idArray.forEach(item => {
      expect(map[item.id]).toEqual(item);
    });
  });

  it('should convert to ID Map with strings', () => {
    const idArray = ArrayUtils.range(0, 10_000).map(num => ({ id: `${num}` }));

    const map = ArrayUtils.toIdMap(idArray);

    idArray.forEach(item => {
      expect(map[item.id]).toEqual(item);
    });
  });
});
