import { Component } from '@angular/core';
import { FormErrorType } from '../../model/form-error-type';

@Component({
  selector: 'val-generic-error-message',
  templateUrl: './generic-error-message.component.html'
})
export class GenericErrorMessageComponent {
  public FormErrorType = FormErrorType;
}
