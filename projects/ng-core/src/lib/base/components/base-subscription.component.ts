import { Subscription } from 'rxjs';
import { Directive, OnDestroy } from '@angular/core';

@Directive()
export class BaseSubscriptionComponent implements OnDestroy {

  protected subscriptions: Subscription[] = [];

  public ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  protected unsubscribeAll(): void {
    this.subscriptions.forEach(s => s?.unsubscribe());
    this.subscriptions = [];
  }

  protected addSub(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }
}
