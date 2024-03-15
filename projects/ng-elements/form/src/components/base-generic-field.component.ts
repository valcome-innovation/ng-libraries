import { AfterViewInit, ContentChildren, Directive, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { FormErrorMessageDirective } from '../directives/form-error-message/form-error-message.directive';
import { AbstractControl, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { BaseBehaviorComponent, takeUntilDestroyed } from '@valcome/ng-core';
import { FormHelper } from '../helpers/form.helper';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive()
export class BaseGenericFieldComponent
  extends BaseBehaviorComponent
  implements OnInit, AfterViewInit, OnChanges {

  @ContentChildren(FormErrorMessageDirective)
  public errorMessages!: QueryList<FormErrorMessageDirective>;

  @Input()
  public form!: UntypedFormGroup;

  @Input()
  public formName!: string;

  @Input()
  public isFormSubmitted = false;

  @Input()
  public markAsRequired = false;

  @Input()
  public useDefaultErrorMessages = false;

  @Input()
  public isLoading = false;

  @Input()
  public enableAutofillListener = false;

  public id!: string;
  public isValid: boolean = true;
  public currentValue: any;
  public hasFocus = false;

  public formControl!: UntypedFormControl;

  public constructor(private elementRef: ElementRef<HTMLElement>) {
    super();
  }

  public ngAfterViewInit(): void {
    if (this.enableAutofillListener) {
      this.startAutofillListener();
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.isFormSubmitted
      && changes.isFormSubmitted.currentValue
      && this.formControl) {
      this.handleFormValidation();
    }

    // if form gets submitted during a load the error should be handled after loading has finished
    if (changes.isLoading
      && changes.isLoading.currentValue === false
      && this.isFormSubmitted) {
      this.handleFormValidation();
    }
  }

  public ngOnInit(): void {
    this.formControl = this.form.get(this.formName) as UntypedFormControl;
    this.id = this.generateId(this.formControl, this.formName);
    this.currentValue = this.formControl.value;

    this.listenOnValueChanges();
  }

  public addDefaultErrorMessages(defaultErrorMessages: QueryList<FormErrorMessageDirective>): void {
    if (this.useDefaultErrorMessages) {
      this.errorMessages.reset([
        ...this.errorMessages.toArray(),
        ...defaultErrorMessages.toArray()
      ]);
    }
  }

  public setFocus(value: boolean) {
    this.hasFocus = value;
  }

  private generateId(control: AbstractControl, name: string): string {
    if (control.parent?.parent != null) {
      const parentName = FormHelper.getControlName(control.parent);

      return `${parentName}_${name}Input`;
    } else {
      return `${name}Input`;
    }
  }

  private listenOnValueChanges(): void {
    this.formControl.statusChanges
      .pipe(takeUntilDestroyed(this))
      .subscribe(() => this.handleFormValidation());
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

  // https://github.com/angular/angular/issues/30616#issuecomment-905322155
  private startAutofillListener(): void {
    const input = this.elementRef.nativeElement
      .querySelector('input');

    if (!input) {
      return;
    }

    fromEvent(input, 'change')
      .pipe(
        takeUntilDestroyed(this),
        debounceTime(100)
      ).subscribe(() => {
      if (this.formControl && this.formControl.value !== input.value) {
        this.formControl?.setValue(input.value);
      }
    });
  }
}
