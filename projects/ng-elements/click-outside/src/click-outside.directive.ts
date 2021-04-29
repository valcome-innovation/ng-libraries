import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  public constructor(private elementRef: ElementRef) {
  }

  @Output()
  public clickOutside = new EventEmitter();

  @Input()
  public isListenerActive: boolean = true;

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    if (this.isListenerActive) {
      const clickedInside = this.elementRef.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.clickOutside.emit(true);
      }
    }
  }
}
