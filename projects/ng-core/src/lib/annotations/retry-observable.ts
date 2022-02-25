import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JsUtils } from '@valcome/ts-core';

export type ErrorType<T extends Error = Error> = { new(): T };
export type ObservableRequest = (...args: any[]) => Observable<any>;

export type RetryPayload = {
  self: any,
  request: ObservableRequest,
  delay: number;
}

export function RetryObservable(count: number, delay: number = 0, exclude: ErrorType[] = []): MethodDecorator {

  return (target: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    const request = descriptor.value as ObservableRequest;

    descriptor.value = function (...args: any[]): ReturnType<ObservableRequest> {
      const payload: RetryPayload = { self: this, request, delay }

      return retryRequest(payload, exclude, count, ...args);
    };

    return descriptor;
  }
}

function retryRequest(payload: RetryPayload, exclude: ErrorType[], attemptsLeft: number, ...args: any[]): ReturnType<ObservableRequest> {
  const { self, request, delay } = payload;

  if (attemptsLeft === 1) {
    return request.apply(self, args)
  } else {
    return request.apply(self, args) // either resolve observable, or recursive retry in error case
      .pipe(catchError(async e => {
          if (exclude.every(type => !(e instanceof type))) { // only retry if error is not in excluded
            await JsUtils.wait(delay);
            return await retryRequest(payload, exclude, attemptsLeft - 1, ...args)
              .toPromise();
          } else {
            throw e;
          }
        })
      );
  }
}
