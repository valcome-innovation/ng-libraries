import { Observable, Subject, Subscription, UnaryFunction } from 'rxjs';
import { Directive, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

export function takeUntilDestroyed<T extends BaseSubscriptionComponent, K>(component: T): UnaryFunction<Observable<K>, Observable<K>> {
  return (stream$: Observable<K>) => stream$
    .pipe(takeUntil(component.destroy$));
}

@Directive()
export class BaseSubscriptionComponent implements OnDestroy {

  protected subscriptions: Subscription[] = [];

  public destroy$ = new Subject<boolean>();

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();

    this.unsubscribeAll();
  }

  protected unsubscribeAll(): void {
    this.subscriptions.forEach(s => s?.unsubscribe());
    this.subscriptions = [];
  }

  /**
   * @deprecated Use takeUntilDestroyed() instead.
   */
  protected addSub(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }
}
