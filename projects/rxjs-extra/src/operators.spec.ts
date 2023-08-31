import { Observable, of } from 'rxjs';
import { filterNull, filterNullish, mapNullToUndefined, throwOnUndefined } from './operators';
import { UndefinedValueError } from './errors';

describe('operators.ts', () => {

  let actual: any[] = [];
  let errors: any[] = [];

  beforeEach(() => {
    actual = [];
    errors = [];
  });

  describe('filter', () => {

    let source: Observable<string | undefined | null>;

    beforeEach(() => {
      source = of('yeah1', undefined, 'yeah2', '', null, 'yeah3');
    });

    it('should filter nullish values', () => {
      source
        .pipe(filterNullish())
        .subscribe(s => actual.push(s));

      expect(actual).toEqual(['yeah1', 'yeah2', 'yeah3']);
    });

    it('should filter null values', () => {
      source
        .pipe(filterNull())
        .subscribe(s => actual.push(s));

      expect(actual).toEqual(['yeah1', 'yeah2', '', 'yeah3']);
    });
  });

  describe('map', () => {

    const array = [null, undefined, 'yeah'];
    const object = { Null: null, Undefined: undefined, value: 'value' };
    const nestedObject = { Null: { first: null, second: null }, Undefined: undefined, value: 'value' };
    const empty = {};
    const emptyArray: any[] = [];

    it('should map null to undefined', async () => {
      of(array, object, nestedObject, empty, emptyArray)
        .pipe(mapNullToUndefined())
        .subscribe(d => actual.push(d));

      await Promise.resolve();

      expect(actual).toEqual([
        [undefined, undefined, 'yeah'],
        { Null: undefined, Undefined: undefined, value: 'value' },
        { Null: { first: undefined, second: undefined }, Undefined: undefined, value: 'value' },
        undefined,
        []
      ]);
    });
  });

  describe('errors', () => {

    it('should throw on undefined', async () => {
      of(undefined)
        .pipe(throwOnUndefined())
        .subscribe(v => actual.push(v), e => errors.push(e));

      await Promise.resolve();

      expect(actual).toEqual([]);
      expect(errors).toEqual([new UndefinedValueError()]);
    });

    it('should pass defined value', async () => {
      of('')
        .pipe(throwOnUndefined())
        .subscribe(v => actual.push(v), e => errors.push(e));

      await Promise.resolve();

      expect(actual).toEqual(['']);
      expect(errors).toEqual([]);
    });
  });
});
