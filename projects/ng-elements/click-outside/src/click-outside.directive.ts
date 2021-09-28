import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef } from '@angular/core';

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

  @Input()
  public additionalElements: TemplateRef<any>[] = [];

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    if (this.isListenerActive) {
      const clickedInside = this.elementRef.nativeElement.contains(targetElement);
      const clickedOnOther = this.additionalElements.some(a => a.elementRef.nativeElement.contains(targetElement));

      if (!clickedInside && !clickedOnOther) {
        this.clickOutside.emit(true);
      }
    }
  }
}
