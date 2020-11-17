import { BehaviorSubject } from 'rxjs';
import { Directive } from '@angular/core';
import { JsUtils } from '@valcome/ts-core';
import { BaseLoadingComponent } from './base-loading.component';

@Directive()
export class BaseBehaviorComponent extends BaseLoadingComponent {
  protected listen<T>(behaviorSubject: BehaviorSubject<T>, onChange: (value: T) => void): void {
    onChange(JsUtils.immute(behaviorSubject?.getValue()));
    this.addSub(behaviorSubject?.subscribe(onChange));
  }

  protected listenTyped<T>(behaviorSubject: BehaviorSubject<T>, type: any, onChange: (value: T) => void): void {
    onChange(JsUtils.immuteTyped<T>(behaviorSubject?.getValue(), type)!);
    this.addSub(behaviorSubject?.subscribe(onChange));
  }
}
