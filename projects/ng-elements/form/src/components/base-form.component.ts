import { BaseBehaviorComponent } from '@valcome/ng-core';
import { FormGroup } from '@angular/forms';
import { FormErrorType } from '../model/form-error-type';
import { InputAutofill } from '../model/input-autofill';
import { Directive, Input } from '@angular/core';

@Directive()
export class BaseFormComponent extends BaseBehaviorComponent {

  @Input()
  public form!: FormGroup;

  @Input()
  public isLoading = false;

  @Input()
  public isSubmitted: boolean = false;

  public FormErrorType = FormErrorType;
  public InputAutofill = InputAutofill;

  public resetSubmission(): void {
    this.isSubmitted = false;
  }

  public submit(event: Event): Promise<any> | boolean {
    this.isSubmitted = true;
    this.focusSubmitButton(event);
    this.form.updateValueAndValidity();
    this.form.markAllAsTouched();

    if (this.isFormValid()) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  private focusSubmitButton(event: Event): void {
    let target: HTMLElement = event?.target as HTMLElement;

    if (target) {
      target.focus();
    }
  }

  public isFormValid(): boolean {
    return this.form.valid;
  }
}
