import { Observable, of } from 'rxjs';
import { fakeAsync, flush } from '@angular/core/testing';
import { filterNull, filterNullish, mapNullToUndefined, throwOnUndefined } from './operators';
import { UndefinedValueError } from './errors';

describe('operators.ts', function () {

  let actual: any[] = [];
  let errors: any[] = [];

  beforeEach(() => {
    actual = [];
    errors = [];
  })

  describe('filter', function () {

    let source: Observable<string | undefined | null>;

    beforeEach(() => {
      source = of('yeah1', undefined, 'yeah2', '', null, 'yeah3');
    });

    it('should filter nullish values', fakeAsync(() => {
      source
        .pipe(filterNullish())
        .subscribe(s => actual.push(s));

      expect(actual).toEqual(['yeah1', 'yeah2', 'yeah3']);
    }));

    it('should filter null values', fakeAsync(() => {
      source
        .pipe(filterNull())
        .subscribe(s => actual.push(s));

      expect(actual).toEqual(['yeah1', 'yeah2', '', 'yeah3']);
    }));
  });

  describe('map', function () {

    let array = [null, undefined, 'yeah'];
    let object = { Null: null, Undefined: undefined, value: 'value' };
    let nestedObject = { Null: { first: null, second: null }, Undefined: undefined, value: 'value' };
    let empty = {};
    let emptyArray: any[] = [];

    it('should map null to undefined', fakeAsync(() => {
      of(array, object, nestedObject, empty, emptyArray)
        .pipe(mapNullToUndefined())
        .subscribe(d => actual.push(d));

      flush();

      expect(actual).toEqual([
        [undefined, undefined, 'yeah'],
        { Null: undefined, Undefined: undefined, value: 'value' },
        { Null: { first: undefined, second: undefined }, Undefined: undefined, value: 'value' },
        undefined,
        []
      ]);
    }));
  });

  describe('errors', () => {

    it('should throw on undefined', fakeAsync(() => {
      of(undefined)
        .pipe(throwOnUndefined())
        .subscribe(v => actual.push(v), e => errors.push(e));

      flush();

      expect(actual).toEqual([]);
      expect(errors).toEqual([new UndefinedValueError()]);
    }));

    it('should pass defined value', fakeAsync(() => {
      of('')
        .pipe(throwOnUndefined())
        .subscribe(v => actual.push(v), e => errors.push(e));

      flush();

      expect(actual).toEqual(['']);
      expect(errors).toEqual([]);
    }));
  });
});
