import { AfterViewInit, Component, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';
import { FormErrorType } from '../../model/form-error-type';
import { FormErrorMessageDirective } from '../../directives/form-error-message/form-error-message.directive';

@Component({
  selector: 'val-generic-error-messages',
  templateUrl: './generic-error-messages.component.html'
})
export class GenericErrorMessagesComponent implements AfterViewInit {

  @ViewChildren(FormErrorMessageDirective)
  private _defaultErrorMessages: QueryList<FormErrorMessageDirective>

  @Output()
  public errorMessages: EventEmitter<QueryList<FormErrorMessageDirective>> = new EventEmitter<QueryList<FormErrorMessageDirective>>();

  public FormErrorType = FormErrorType;

  public ngAfterViewInit(): void {
    this.errorMessages.emit(this._defaultErrorMessages);
  }
}
