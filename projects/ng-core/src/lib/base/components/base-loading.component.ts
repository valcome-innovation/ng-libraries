import { Directive } from '@angular/core';
import { BaseSubscriptionComponent } from './base-subscription.component';

@Directive()
export class BaseLoadingComponent extends BaseSubscriptionComponent {

  public isLoading = false;

  public async load<T>(task: () => Promise<T>): Promise<T> {
    try {
      this.isLoading = true;
      return await task()
    } finally {
      this.isLoading = false;
    }
  }
}
