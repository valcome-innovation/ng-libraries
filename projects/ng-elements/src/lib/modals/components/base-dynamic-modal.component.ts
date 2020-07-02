import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { BaseComponent } from '@valcome/ng-core';

@Directive()
export abstract class BaseDynamicModalComponent extends BaseComponent {

  @Output()
  public modalClose: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('document:keydown.escape')
  public closeModal(): void {
    this.modalClose.emit();
  }
}
