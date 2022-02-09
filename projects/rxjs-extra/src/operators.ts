import { Observable, OperatorFunction, pipe, UnaryFunction } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UndefinedValueError } from './errors';
import { JsUtils } from '@valcome/ts-core';

export function filterNullish<T>(): UnaryFunction<Observable<T | null | undefined>, Observable<T>> {
  return pipe(
    filter(v => !!v) as OperatorFunction<T | null | undefined, T>
  );
}

export function filterNull<T>(): UnaryFunction<Observable<T | null | undefined>, Observable<T>> {
  return pipe(
    filter(v => v != null) as OperatorFunction<T | null | undefined, T>
  );
}

export function throwOnUndefined<T>(): UnaryFunction<Observable<T | null | undefined>, Observable<T>> {
  return pipe(
    map(v => {
      if (v == null) {
        throw new UndefinedValueError();
      } else {
        return v;
      }
    })
  );
}

export function mapNullToUndefined<T>(): UnaryFunction<Observable<T | null | undefined>, Observable<T>> {
  return pipe(
    map(v => {
      if (v && Object.keys(v).length > 0) {
        return JsUtils.nullToUndefined(v);
      } else if (JSON.stringify(v) == '[]') { // wtf
        return v;
      }
    })
  )
}
