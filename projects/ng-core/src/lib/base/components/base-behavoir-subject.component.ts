import { BehaviorSubject } from 'rxjs';
import { BaseSubscriptionComponent } from './base-subscription.component';

export class BaseBehaviorSubjectComponent extends BaseSubscriptionComponent {
  protected listen(behaviorSubject: BehaviorSubject<any>, onChange: (value: any) => void): void {
    onChange(behaviorSubject?.getValue());
    this.addSub(behaviorSubject?.subscribe(onChange));
  }
}
