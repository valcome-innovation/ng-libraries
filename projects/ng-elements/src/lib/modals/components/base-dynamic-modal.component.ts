import { EventEmitter, HostListener, Output } from '@angular/core';
import { BaseComponent } from 'ng-core';

export abstract class BaseDynamicModalComponent extends BaseComponent {

  @Output()
  public modalClose: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('document:keydown.escape', ['$event'])
  public escapeHandler() {
    this.modalClose.emit();
  }

  public closeModal(): void {
    this.modalClose.emit();
  }
}
