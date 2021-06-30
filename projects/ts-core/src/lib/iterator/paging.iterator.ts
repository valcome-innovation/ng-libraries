export class PagingIterator<T> implements IterableIterator<T[]> {

  private index = 0;
  private readonly pageSize: number;
  private readonly values: T[];

  public constructor(pageSize: number, values: T[]) {
    this.pageSize = pageSize;
    this.values = [...values];
  }

  public next(...args: [] | [undefined]): IteratorResult<T[], T[]> {
    const start = this.index;
    const end = this.index + this.pageSize;
    const value = this.values.slice(start, end);
    this.index = end;

    return {
      value,
      done: value.length === 0
    } as IteratorResult<T[]>;
  }

  [Symbol.iterator](): IterableIterator<T[]> {
    return new PagingIterator(this.pageSize, this.values);
  }
}
