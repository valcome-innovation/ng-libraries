import { ChangeDetectorRef, Directive } from '@angular/core';
import { BaseSubscriptionComponent } from './base-subscription.component';

@Directive()
export class BaseLoadingComponent extends BaseSubscriptionComponent {

  public isLoading = false;

  public constructor(protected changeDetector?: ChangeDetectorRef) {
    super();
  }

  public async load<T>(task: () => Promise<T>): Promise<T> {
    try {
      this.isLoading = true;
      this.changeDetector?.detectChanges();

      return await task();
    } finally {
      this.isLoading = false;
      this.changeDetector?.detectChanges();
    }
  }
}
