import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export type ObservableRequest = (...args: any[]) => Observable<any>;

export function Retry(count: number): MethodDecorator {

  return (target: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    const request = descriptor.value as ObservableRequest;

    descriptor.value = function (...args: any[]): ReturnType<ObservableRequest> {
      return retryRequest(request, count, ...args);
    };

    return descriptor;
  }
}

function retryRequest(request: ObservableRequest, attemptsLeft: number, ...args: any[]): ReturnType<ObservableRequest> {
  if (attemptsLeft === 1) {
    return request(...args);
  } else {
    return request(...args)
      .pipe(catchError(async () => {
        return await retryRequest(request, attemptsLeft - 1, ...args).toPromise();
      }));
  }
}
