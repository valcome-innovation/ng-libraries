import { Observable, OperatorFunction, pipe, UnaryFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

export function filterNullish<T>(): UnaryFunction<Observable<T | null | undefined>, Observable<T>> {
  return pipe(
    filter(x => !!x) as OperatorFunction<T | null | undefined, T>
  );
}

export function filterNull<T>(): UnaryFunction<Observable<T | null | undefined>, Observable<T>> {
  return pipe(
    filter(x => x != null) as OperatorFunction<T | null | undefined, T>
  );
}
