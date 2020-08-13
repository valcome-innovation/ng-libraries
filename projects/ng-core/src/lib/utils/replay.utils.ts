import { ReplaySubject } from 'rxjs';

export class ReplayUtils {
  public static toPromise<T>(replaySubject: ReplaySubject<T>): Promise<T> {
    return new Promise<T>(resolve => {
      replaySubject
        .subscribe(value => resolve(value));
    });
  }
}
