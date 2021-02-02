import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export type ObservableRequest = (...args: any[]) => Observable<any>;

export type RetryPayload = {
  self: any,
  request: ObservableRequest,
  delayMilliseconds: number;
}

export function RetryObservable(count: number, delayMilliseconds: number = 0): MethodDecorator {

  return function (target: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
    const request = descriptor.value as ObservableRequest;

    descriptor.value = function (...args: any[]): ReturnType<ObservableRequest> {
      const payload: RetryPayload = { self: this, request, delayMilliseconds }

      return retryRequest(payload, count, ...args);
    };

    return descriptor;
  }
}

function retryRequest(payload: RetryPayload, attemptsLeft: number, ...args: any[]): ReturnType<ObservableRequest> {
  const { self, request, delayMilliseconds } = payload;

  if (attemptsLeft === 1) {
    return request.apply(self, args)
  } else {
    return request.apply(self, args).pipe(
      catchError(async function () {
        return await retryRequest(payload, attemptsLeft - 1, ...args)
          .toPromise();
      })
    );
  }
}
