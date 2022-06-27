import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { BaseBehaviorComponent } from '@valcome/ng-core';

@Directive()
export abstract class BaseDynamicModalComponent<T = any> extends BaseBehaviorComponent {

  public config?: T;

  @Output()
  public modalClose = new EventEmitter<T>();

  @HostListener('document:keydown.escape')
  public onESCKeydown(): void {
    this.closeModal();
  }

  public closeModal(value?: T): void {
    this.modalClose.emit(value);
  }
}
