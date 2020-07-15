import { BehaviorSubject } from 'rxjs';
import { BaseSubscriptionComponent } from './base-subscription.component';
import { JsUtils } from '../../utils/js.utils';
import { Directive } from '@angular/core';

@Directive()
export class BaseBehaviorSubjectComponent extends BaseSubscriptionComponent {
  protected listen<T>(behaviorSubject: BehaviorSubject<T>, onChange: (value: T) => void): void {
    onChange(JsUtils.immute(behaviorSubject?.getValue()));
    this.addSub(behaviorSubject?.subscribe(onChange));
  }

  protected listenTyped<T>(behaviorSubject: BehaviorSubject<T>, type: any, onChange: (value: T) => void): void {
    onChange(JsUtils.immuteTyped<T>(behaviorSubject?.getValue(), type));
    this.addSub(behaviorSubject?.subscribe(onChange));
  }
}
