import { PagingIterator } from './paging.iterator';

describe('PagingIterator', () => {
  it('should page through perfeclty', () => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const iterator = new PagingIterator(3, values);

    expect(iterator.next().value).toEqual([0, 1, 2]);
    expect(iterator.next().value).toEqual([3, 4, 5]);
    expect(iterator.next().value).toEqual([6, 7, 8]);
    expect(iterator.next().done).toEqual(true);
  });

  it('should page through uneven', () => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const iterator = new PagingIterator(3, values);

    expect(iterator.next().value).toEqual([0, 1, 2]);
    expect(iterator.next().value).toEqual([3, 4, 5]);
    expect(iterator.next().value).toEqual([6, 7, 8]);
    expect(iterator.next().value).toEqual([9]);
    expect(iterator.next().done).toEqual(true);
  });

  it('should page through length', () => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const iterator = new PagingIterator(30, values);

    expect(iterator.next().value).toEqual(values);
    expect(iterator.next().done).toEqual(true);
  });
});
