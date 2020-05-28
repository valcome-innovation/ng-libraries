import { ContentChildren, Input, OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { FormErrorMessageDirective } from '../directives/form-error-message/form-error-message.directive';
import { AbstractControl, FormGroup } from '@angular/forms';
import { BaseComponent } from '@valcome/ng-core';

export class BaseGenericFieldComponent extends BaseComponent implements OnInit, OnChanges {

  @ContentChildren(FormErrorMessageDirective)
  public errorMessages: QueryList<FormErrorMessageDirective>;

  @Input()
  public form: FormGroup;

  @Input()
  public formName: string;

  @Input()
  public isFormSubmitted: boolean = false;

  @Input()
  public markAsRequired: boolean = false;

  public id: string;
  public isValid: boolean = true;

  public formControl: AbstractControl;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.isFormSubmitted && changes.isFormSubmitted.currentValue) {
      this.handleFormValidation();
    }
  }

  public ngOnInit(): void {
    this.id = `${this.formName}Input`;
    this.formControl = this.form.get(this.formName);

    this.listenOnValueChanges();
  }

  private listenOnValueChanges(): void {
    this.addSub(this.formControl.valueChanges.subscribe(() => {
      this.handleFormValidation()
    }));
  }

  private handleFormValidation(): void {
    this.isValid = this.formControl.valid;
    this.hideOrDisplayErrorMessages();
  }

  private hideOrDisplayErrorMessages(): void {
    this.errorMessages.forEach((errorMessage: FormErrorMessageDirective) => {
      if (this.formControl.hasError(errorMessage.errorType)) {
        errorMessage.showError();
      } else {
        errorMessage.hideError();
      }
    })
  }
}
