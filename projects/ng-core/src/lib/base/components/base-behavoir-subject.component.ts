import { BehaviorSubject } from 'rxjs';
import { BaseSubscriptionComponent } from './base-subscription.component';

export class BaseBehaviorSubjectComponent extends BaseSubscriptionComponent {
  protected listen<T>(behaviorSubject: BehaviorSubject<T>, onChange: (value: T) => void): void {
    onChange(Object.assign({}, {... behaviorSubject?.getValue()}));
    this.addSub(behaviorSubject?.subscribe(onChange));
  }

  protected listenTyped<T>(behaviorSubject: BehaviorSubject<T>, type: any, onChange: (value: T) => void): void {
    onChange(Object.assign(new type, { ...behaviorSubject?.getValue() }));
    this.addSub(behaviorSubject?.subscribe(onChange));
  }
}
