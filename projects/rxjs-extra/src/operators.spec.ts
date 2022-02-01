import { Observable, of } from 'rxjs';
import { fakeAsync } from '@angular/core/testing';
import { filterNull, filterNullish } from './operators';

describe('operators.ts', function () {

  describe('filter', function () {

    let actual: string[];
    let source: Observable<string | undefined | null>;

    beforeEach(() => {
      actual = [];
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
});
