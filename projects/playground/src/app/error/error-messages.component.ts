import { Component } from '@angular/core';
import { FormErrorType } from '../../../../ng-elements/form/src/model/form-error-type';

@Component({
  selector: 'val-error-messages',
  template: `
    <div val-input-error-message [errorType]="FormErrorType.REQUIRED">
      {{ 'requiredMessage' }}
    </div>
    <div val-input-error-message [errorType]="FormErrorType.MAX_LENGTH">
      {{ 'maxLengthMessage' }}
    </div>
    <div val-input-error-message [errorType]="FormErrorType.MIN_LENGTH">
      {{ 'minLengthMessage' }}
    </div>
    <div val-input-error-message [errorType]="FormErrorType.EMAIL">
      {{ 'emailMessage' }}
    </div>
    <div val-input-error-message [errorType]="FormErrorType.MIN">
      {{ 'minMessage' }}
    </div>
    <div val-input-error-message [errorType]="FormErrorType.MAX">
      {{ 'maxMessage' }}
    </div>
  `
})
export class ErrorMessagesComponent {

  public FormErrorType = FormErrorType;

}
