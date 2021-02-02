import { EMPTY, Observable, of, throwError } from 'rxjs';
import { Retry } from './retry';
import { fakeAsync, flush } from '@angular/core/testing';
import { catchError } from 'rxjs/operators';

class DAO {
  @Retry(3)
  public fetch(url: string, callback: Function): Observable<string> {
    callback();
    return of(url);
  }

  @Retry(3)
  public fetchError(url: string, callback: Function): Observable<never> {
    callback();
    return throwError(url);
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
});
