import { Component } from '@angular/core';
import { FormErrorType } from '../../model/form-error-type';

@Component({
  selector: '[val-generic-error-messages]',
  templateUrl: './generic-error-messages.component.html'
})
export class GenericErrorMessagesComponent {
  public FormErrorType = FormErrorType;
}
