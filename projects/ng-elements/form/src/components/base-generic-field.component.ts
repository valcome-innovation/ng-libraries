import { ContentChildren, Directive, Input, OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { FormErrorMessageDirective } from '../directives/form-error-message/form-error-message.directive';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { BaseBehaviorComponent } from '@valcome/ng-core';
import { FormHelper } from '../helpers/form.helper';

@Directive()
export class BaseGenericFieldComponent extends BaseBehaviorComponent implements OnInit, OnChanges {

  @ContentChildren(FormErrorMessageDirective)
  public errorMessages!: QueryList<FormErrorMessageDirective>;

  @Input()
  public form!: FormGroup;

  @Input()
  public formName!: string;

  @Input()
  public isFormSubmitted = false;

  @Input()
  public markAsRequired = false;

  @Input()
  public useDefaultErrorMessages = false;

  @Input()
  public isDisabled = false;

  public id!: string;
  public isValid: boolean = true;
  public currentValue: any;

  public formControl!: FormControl;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.isFormSubmitted && changes.isFormSubmitted.currentValue && this.formControl) {
      this.handleFormValidation();
    }
  }

  public ngOnInit(): void {
    this.formControl = this.form.get(this.formName) as FormControl;
    this.id = this.generateId(this.formControl, this.formName);
    this.listenOnValueChanges();
  }

  private generateId(control: AbstractControl, name: string): string {
    if (control.parent?.parent != null) {
      let parentName = FormHelper.getControlName(control.parent);
      return `${parentName}_${name}Input`;
    } else {
      return `${name}Input`;
    }
  }

  private listenOnValueChanges(): void {
    this.addSub(this.formControl.statusChanges.subscribe(() => {
      this.handleFormValidation();
    }));
  }

  private handleFormValidation(): void {
    this.isValid = this.formControl.valid;
    this.currentValue = this.formControl.value;
    this.hideOrDisplayErrorMessages();
  }

  private hideOrDisplayErrorMessages(): void {
    this.errorMessages?.forEach((errorMessage: FormErrorMessageDirective) => {
      if (this.formControl.hasError(errorMessage.errorType)) {
        errorMessage.showError();
      } else {
        errorMessage.hideError();
      }
    });
  }

  public addDefaultErrorMessages(defaultErrorMessages: QueryList<FormErrorMessageDirective>): void {
    if (this.useDefaultErrorMessages) {
      this.errorMessages.reset([
        ...this.errorMessages.toArray(),
        ...defaultErrorMessages.toArray()
      ]);
    }
  }
}
