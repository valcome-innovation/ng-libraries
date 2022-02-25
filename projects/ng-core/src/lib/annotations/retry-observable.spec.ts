import { EMPTY, Observable, of, throwError } from 'rxjs';
import { fakeAsync, flush, tick } from '@angular/core/testing';
import { catchError } from 'rxjs/operators';
import { RetryObservable } from './retry-observable';

class IgnoreError extends Error {
}

class DAO {
  private message = 'hallo';

  @RetryObservable(3, 1000)
  public fetch(url: string, callback: Function): Observable<string> {
    callback();
    console.log(this.message);
    return of(url);
  }

  @RetryObservable(3)
  public fetchErrorInstant(url: string, callback: Function): Observable<never> {
    callback();
    console.log(this.message);
    return throwError(url);
  }

  @RetryObservable(3, 1000)
  public fetchError(url: string, callback: Function): Observable<never> {
    callback();
    console.log(this.message);
    return throwError(url);
  }

  @RetryObservable(3, 1000, [IgnoreError])
  public excludeErrors(callback: () => Observable<any>): Observable<any> {
    return callback();
  }
}

describe('Retry (Decorator)', () => {

  let dao: DAO;

  beforeEach(() => {
    dao = new DAO();
  });

  it('should retry function 1 time', fakeAsync(() => {
    let counter = 0;

    dao.fetch('example.com', () => counter++).subscribe();

    expect(counter).toEqual(1);
  }));

  it('should retry function 3 times on error', fakeAsync(() => {
    let counter = 0;

    dao.fetchError('example.com', () => counter++)
      .pipe(
        catchError((err) => {
          expect(err).toBeTruthy();
          expect(counter).toEqual(3);

          return EMPTY;
        })
      ).toPromise();

    flush();
  }));

  it('should retry function 3 times on error without delay', fakeAsync(() => {
    let counter = 0;

    dao.fetchErrorInstant('example.com', () => counter++)
      .pipe(catchError((err) => {
          expect(err).toBeTruthy();
          expect(counter).toEqual(3);

          return EMPTY;
        })
      ).toPromise();

    flush();
  }));

  it('should delay retry', fakeAsync(() => {
    let counter = 0;

    dao.fetchError('example.com', () => counter++)
      .pipe(catchError(() => EMPTY))
      .subscribe();

    expect(counter).toEqual(1);
    tick(1000);
    expect(counter).toEqual(2);
    tick(1000);
    expect(counter).toEqual(3);
  }));

  it('should ignore error', fakeAsync(() => {
    let counter = 0;
    const callback = () => {
      counter++;
      return throwError(new IgnoreError());
    }

    dao.excludeErrors(callback)
      .pipe(catchError(() => EMPTY))
      .subscribe();

    tick(3000);
    expect(counter).toEqual(1);
  }));

  it('should not ignore error', fakeAsync(() => {
    let counter = 0;
    const callback = () => {
      counter++;
      return throwError(new Error());
    }

    dao.excludeErrors(callback)
      .pipe(catchError(() => EMPTY))
      .subscribe();

    tick(3000);
    expect(counter).toEqual(3);
  }));
});
