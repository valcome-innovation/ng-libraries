import { Component, ViewContainerRef } from '@angular/core';
import { FormErrorType } from '../../model/form-error-type';
import { NoRootTagComponent } from '@valcome/ng-core';

@Component({
  selector: 'val-generic-error-messages',
  templateUrl: './generic-error-messages.component.html'
})
export class GenericErrorMessagesComponent extends NoRootTagComponent {
  public FormErrorType = FormErrorType;

  public constructor(vcRef: ViewContainerRef) {
    super(vcRef);
  }
}
