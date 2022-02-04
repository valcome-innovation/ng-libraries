import { BaseSubscriptionComponent, takeUntilDestroyed } from './base-subscription.component';
import { interval, Subject, Subscription } from 'rxjs';
import { fakeAsync, tick } from '@angular/core/testing';

class BaseSubscriptionComponentSpec extends BaseSubscriptionComponent {
  public getSubscriptionCount(): number {
    return this.subscriptions.length;
  }

  public subscribe(subscription: Subscription): void {
    this.addSub(subscription);
  }
}


describe('BaseSubscriptionComponent', () => {

  let component: BaseSubscriptionComponentSpec;

  beforeEach(() => {
    component = new BaseSubscriptionComponentSpec();
  });

  it('should init with no subscriptions', () => {
    expect(component.getSubscriptionCount()).toBe(0);
  });

  it('should addSubscriptions', () => {
    component.subscribe(new Subscription());
    expect(component.getSubscriptionCount()).toBe(1);

    component.subscribe(new Subscription());
    expect(component.getSubscriptionCount()).toBe(2);
  });

  it('should empty subscriptions on ngDestroy', () => {
    component.subscribe(new Subscription());
    component.subscribe(new Subscription());
    expect(component.getSubscriptionCount()).toBe(2);

    component.ngOnDestroy();
    expect(component.getSubscriptionCount()).toBe(0);
  });

  it('should unsubscribe on destroy', () => {
    let subject: Subject<number> = new Subject<number>();
    let subscribedValue: number = 0;
    component.subscribe(subject.subscribe(v => subscribedValue = v));

    subject.next(10);
    expect(subscribedValue).toBe(10);

    component.ngOnDestroy();
    subject.next(30);
    expect(subscribedValue).not.toBe(30);
  });

  it('should handle null values', () => {
    expect(() => {
      component.subscribe(null!);
      component.ngOnDestroy();
    }).not.toThrow();
  });

  it('should unsubscribe with takeUntilDestroyed', fakeAsync(() => {
    const actual: any[] = [];

    const sub = interval(500)
      .pipe(takeUntilDestroyed(component))
      .subscribe(n => actual.push(n));

    tick(750);
    expect(sub.closed).toBe(false);
    
    component.ngOnDestroy();
    tick(750);

    expect(actual).toEqual([0]);
    expect(sub.closed).toBe(true);
  }));
});
