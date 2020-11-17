import { Directive } from '@angular/core';
import { BaseSubscriptionComponent } from './base-subscription.component';

@Directive()
export class BaseLoadingComponent extends BaseSubscriptionComponent {

  public isLoading = false;

  public async load<T>(promise: Promise<T>): Promise<T> {
    try {
      this.isLoading = true;
      return await promise
    } finally {
      this.isLoading = false;
    }
  }
}
