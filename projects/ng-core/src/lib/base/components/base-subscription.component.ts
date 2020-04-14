import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class BaseSubscriptionComponent implements OnDestroy {
  protected subscriptions: Subscription[] = [];

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => {
        s?.unsubscribe();
        s = null;
    });
    this.subscriptions = [];
  }

  protected addSub(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }
}
