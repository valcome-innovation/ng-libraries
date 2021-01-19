import { BehaviorSubject } from 'rxjs';
import { Directive } from '@angular/core';
import { BaseLoadingComponent } from './base-loading.component';

@Directive()
export class BaseBehaviorComponent extends BaseLoadingComponent {
  protected listen<T>(behaviorSubject: BehaviorSubject<T>, onChange: (value: T) => void): void {
    this.addSub(behaviorSubject?.subscribe(onChange));
  }
}
