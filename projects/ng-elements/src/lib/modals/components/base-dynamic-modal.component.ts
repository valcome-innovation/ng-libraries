import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { BaseBehaviorComponent } from '@valcome/ng-core';

@Directive()
export abstract class BaseDynamicModalComponent extends BaseBehaviorComponent {

  public config?: any;

  @Output()
  public modalClose: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('document:keydown.escape')
  public closeModal(): void {
    this.modalClose.emit();
  }
}
