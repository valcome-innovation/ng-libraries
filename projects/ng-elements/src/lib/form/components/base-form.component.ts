import { BaseBehaviorComponent } from '@valcome/ng-core';
import { FormGroup } from '@angular/forms';
import { FormErrorType } from '../model/form-error-type';
import { InputAutofill } from '../model/input-autofill';

export class BaseFormComponent extends BaseBehaviorComponent {

  public form!: FormGroup;
  public isLoading = false;
  public isSubmitted: boolean = false;

  public FormErrorType = FormErrorType;
  public InputAutofill = InputAutofill;

  public resetSubmission(): void {
    this.isSubmitted = false;
  }

  public submit(event: Event): Promise<any> | boolean {
    this.isSubmitted = true;
    this.focusSubmitButton(event);
    this.validateAllFields();
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

  private validateAllFields(): void {
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key)?.updateValueAndValidity();
    });
  }

  public isFormValid(): boolean {
    return this.form.valid;
  }
}
