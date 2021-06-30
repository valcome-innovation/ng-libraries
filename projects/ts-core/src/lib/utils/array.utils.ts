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

  public static removeDuplicates<T>(array: T[]): T[] {
    return array.filter((value: T, index: number, array: T[]) => index === array.indexOf(value));
  }
}
