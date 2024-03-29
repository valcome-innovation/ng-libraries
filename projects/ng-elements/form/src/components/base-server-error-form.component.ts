import { Directive, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { BaseFormComponent } from './base-form.component';
import { FormErrorType } from '../model/form-error-type';

export interface FormServerError {
  field?: string;
}

@Directive()
export class BaseServerErrorFormComponent<T, E extends FormServerError>
  extends BaseFormComponent implements OnInit, OnChanges {

  @Input()
  public serverErrors: E[] = [];

  public constructor() {
    super();
  }

  public ngOnInit(): void {
    this.listenOnFormChanges(this.form);
  }

  private listenOnFormChanges(formGroup: UntypedFormGroup): void {
    this.addSub(formGroup.valueChanges.subscribe(() => {
      this.clearAllServerErrors(formGroup);
    }));
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.errorsChanged(changes.serverErrors)) {
      // this.resetSubmission();

      this.addServerErrors(this.form, changes.serverErrors.currentValue);
    }
  }

  private errorsChanged(errors: SimpleChange): boolean {
    return errors && !errors.isFirstChange();
  }

  protected addServerErrors(formGroup: UntypedFormGroup, errors: E[]): void {
    this.clearAllServerErrors(formGroup);

    for (const error of errors) {
      if (error.field) {
        const field: UntypedFormControl = formGroup.get(error.field) as UntypedFormControl;
        field?.setErrors({ server: true }, { emitEvent: true });
      }
    }
  }

  private clearAllServerErrors(formGroup: UntypedFormGroup): void {
    Object.keys(formGroup.controls)
      .forEach(key => this.clearErrorsFromFormControl(formGroup, key));
  }

  private clearErrorsFromFormControl(formGroup: UntypedFormGroup, controlKey: string): void {
    const control = formGroup.controls[controlKey];
    if (this.hasServerError(control)) {
      control.setErrors(null);
    }
  }

  private hasServerError(control: AbstractControl): boolean {
    return control.hasError(FormErrorType.SERVER);
  }
}
