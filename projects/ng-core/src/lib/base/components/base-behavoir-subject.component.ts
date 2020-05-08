import { BehaviorSubject } from 'rxjs';
import { BaseSubscriptionComponent } from './base-subscription.component';
import { JavascriptUtils } from '../../utils/javascript.utils';

export class BaseBehaviorSubjectComponent extends BaseSubscriptionComponent {
  protected listen<T>(behaviorSubject: BehaviorSubject<T>, onChange: (value: T) => void): void {
    let newInstance: any = JavascriptUtils.clone<T>(behaviorSubject?.getValue());
    onChange(newInstance);
    this.addSub(behaviorSubject?.subscribe(onChange));
  }
}
