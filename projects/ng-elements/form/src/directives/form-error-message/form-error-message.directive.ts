import { Directive, ElementRef, Input } from '@angular/core';
import { FormErrorType } from '../../model/form-error-type';

@Directive({ selector: '[val-input-error-message]' })
export class FormErrorMessageDirective {

  public get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  @Input()
  public set errorType(value: FormErrorType | string) {
    this._errorType = value;
    this.element.setAttribute('data-cy', value);
  }

  public get errorType(): FormErrorType | string {
    return this._errorType;
  }

  private _errorType!: FormErrorType | string;

  public constructor(private elementRef: ElementRef) {
    this.hideError();
  }

  public hideError(): void {
    this.element.style.display = 'none';
  }

  public showError(): void {
    this.element.style.display = 'block';
  }
}
