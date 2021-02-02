import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export type ObservableRequest = (...args: any[]) => Observable<any>;

export function Retry(count: number): MethodDecorator {

  return function (target: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
    const request = descriptor.value as ObservableRequest;

    descriptor.value = function (...args: any[]): ReturnType<ObservableRequest> {
      return retryRequest(this, request, count, ...args);
    };

    return descriptor;
  }
}

function retryRequest(self: any, request: ObservableRequest, attemptsLeft: number, ...args: any[]): ReturnType<ObservableRequest> {
  if (attemptsLeft === 1) {
    return request.apply(self, args);
  } else {
    return request.apply(self, args)
      .pipe(catchError(async function () {
        return await retryRequest(self, request, attemptsLeft - 1, ...args).toPromise();
      }));
  }
}
