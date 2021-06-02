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
  public isSubmitted = false;

  public FormErrorType = FormErrorType;
  public InputAutofill = InputAutofill;

  public resetSubmission(): void {
    this.isSubmitted = false;
  }

  public submit(submitElement: HTMLElement, event: Event): Promise<any> | boolean {
    this.isSubmitted = true;
    submitElement.focus();

    if (this.isFormValid()) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  public isFormValid(): boolean {
    return this.form.valid;
  }
}
