import { BehaviorSubject } from 'rxjs';

export abstract class BaseInitializableService {
  
  protected isInitialized$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  protected markAsInitialize(): void {
    this.isInitialized$.next(true);
  }

  public isInitialized(): boolean {
    return this.isInitialized$.getValue();
  }

  public waitUntilInitialized(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        if (this.isInitialized()) {
          resolve();
        } else {
          this.isInitialized$.subscribe((isInitialized: boolean) => {
            if (isInitialized) {
              resolve();
            }
          })
        }
      } catch (e) {
        reject(e);
      }
    })
  }
}
