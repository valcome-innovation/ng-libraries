import { Directive, ElementRef, Input } from '@angular/core';
import { FormErrorType } from '../../model/form-error-type';

@Directive({ selector: '[val-input-error-message]' })
export class FormErrorMessageDirective {

  @Input()
  public errorType: FormErrorType | string;

  public constructor(private elementRef: ElementRef) {
  }

  public hideError(): void {
    this.elementRef.nativeElement.style.display = 'none';
  }

  public showError(): void {
    this.elementRef.nativeElement.style.display = 'block';
  }
}
