import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JsUtils } from '@valcome/ts-core';

export type ObservableRequest = (...args: any[]) => Observable<any>;

export type RetryPayload = {
  self: any,
  request: ObservableRequest,
  delay: number;
}

export function RetryObservable(count: number, delay: number = 0): MethodDecorator {

  return (target: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    const request = descriptor.value as ObservableRequest;

    descriptor.value = function (...args: any[]): ReturnType<ObservableRequest> {
      const payload: RetryPayload = { self: this, request, delay }

      return retryRequest(payload, count, ...args);
    };

    return descriptor;
  }
}

function retryRequest(payload: RetryPayload, attemptsLeft: number, ...args: any[]): ReturnType<ObservableRequest> {
  const { self, request, delay } = payload;

  if (attemptsLeft === 1) {
    return request.apply(self, args)
  } else {
    return request.apply(self, args) // either resolve observable, or recursive retry in error case
      .pipe(catchError(async () => {
          await JsUtils.wait(delay);
          return await retryRequest(payload, attemptsLeft - 1, ...args)
            .toPromise();
        })
      );
  }
}
