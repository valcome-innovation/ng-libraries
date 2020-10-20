import { BaseSubscriptionComponent } from './base-subscription.component';
import { Subject, Subscription } from 'rxjs';

describe('BaseSubscriptionComponent', () => {
  let baseSubscriptionComponent: BaseSubscriptionComponentSpec;

  beforeEach(() => {
    baseSubscriptionComponent = new BaseSubscriptionComponentSpec();
  });

  it('should init with no subscriptions', () => {
    expect(baseSubscriptionComponent.getSubscriptionCount()).toBe(0);
  });

  it('should addSubscriptions', () => {
    baseSubscriptionComponent.subscribe(new Subscription());
    expect(baseSubscriptionComponent.getSubscriptionCount()).toBe(1);

    baseSubscriptionComponent.subscribe(new Subscription());
    expect(baseSubscriptionComponent.getSubscriptionCount()).toBe(2);
  });

  it('should empty subscriptions on ngDestroy', () => {
    baseSubscriptionComponent.subscribe(new Subscription());
    baseSubscriptionComponent.subscribe(new Subscription());
    expect(baseSubscriptionComponent.getSubscriptionCount()).toBe(2);

    baseSubscriptionComponent.ngOnDestroy();
    expect(baseSubscriptionComponent.getSubscriptionCount()).toBe(0);
  });

  it('should unsubscribe on destroy', () => {
    let subject: Subject<number> = new Subject<number>();
    let subscribedValue: number = 0;
    baseSubscriptionComponent.subscribe(subject.subscribe(v => subscribedValue = v));

    subject.next(10);
    expect(subscribedValue).toBe(10);

    baseSubscriptionComponent.ngOnDestroy();
    subject.next(30);
    expect(subscribedValue).not.toBe(30);
  });

  it('should handle null values', () => {
    expect(() => {
      baseSubscriptionComponent.subscribe(null!);
      baseSubscriptionComponent.ngOnDestroy();
    }).not.toThrow();
  });
})

class BaseSubscriptionComponentSpec extends BaseSubscriptionComponent {
  public getSubscriptionCount(): number {
    return this.subscriptions.length;
  }

  public subscribe(subscription: Subscription): void {
    this.addSub(subscription);
  }
}
