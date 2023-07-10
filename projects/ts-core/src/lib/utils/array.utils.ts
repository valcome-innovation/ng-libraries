export class ArrayUtils {

  public static prepend<T>(value: T, array: T[]): T[] {
    let newArray: T[] = array.slice();
    newArray.unshift(value);
    return newArray;
  }

  public static shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  public static sumField(array: any[], key: string): number {
    let sum: number = 0;

    for (let value of array) {
      sum += value[key];
    }

    return sum;
  }

  public static sum(array: number[]) {
    let sum: number = 0;

    for (let value of array) {
      sum += value;
    }

    return sum;
  }

  public static map(array: any[], key: string): any[] {
    let result: any[] = [];

    for (let value of array) {
      result.push(value[key]);
    }

    return result;
  }

  public static createArrayFromNumber(amount: number): number [] {
    if (amount != null && amount > 0) {
      return Array.from(new Array(amount), (x, i: number) => i + 1);
    } else {
      return [];
    }
  }

  public static range(start: number, end: number): number[] {
    return Array.from(Array(1 + end - start).keys()).map(v => start + v);
  }

  public static removeDuplicates<T>(array: T[]): T[] {
    return array.filter((value: T, index: number, array: T[]) => index === array.indexOf(value));
  }

  public static sliceIntoChunks<T>(array: T[], chunkSize: number): T[][] {
    const res = [];

    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      res.push(chunk);
    }

    return res;
  }

  /**
   * Compares equality with includes() function.
   * Note: Not very efficient for large collection. Does not work with duplicates and does not consider the order.
   */
  public static areEqual(first: (number | string | boolean)[],
                         second: (number | string | boolean)[]): boolean {
    return first.length === second.length
      && first.every(a => second.includes(a));
  }

  public static toIdMap<T extends { id: string | number }>(array: T[]): Map<string | number, T> {
    const result = new Map<string | number, T>();

    for (const item of array) {
      result.set(item.id, item);
    }

    return result;
  }

  // https://stackoverflow.com/a/1053865/12237560
  public static mode<T extends string | number>(array: T[]): T | null {
    if (array.length === 0) {
      return null;
    }

    const modeMap: { [key in T]: number } = {} as any;
    let maxEl = array[0];
    let maxCount = 1;

    for (const el of array) {
      if (modeMap[el] == null) {
        modeMap[el] = 1;
      } else {
        modeMap[el]++;
      }
      if (modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    return maxEl;
  }
}
