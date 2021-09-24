import { NgModule } from '@angular/core';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { FormErrorMessageDirective } from './directives/form-error-message/form-error-message.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GenericSelectComponent } from './components/generic-select/generic-select.component';
import { GenericRadioComponent } from './components/generic-radio/generic-radio.component';
import { GenericCheckboxComponent } from './components/generic-checkbox/generic-checkbox.component';
import { GenericErrorMessagesComponent } from './components/generic-error-messages/generic-error-messages.component';
import { GenericPasswordComponent } from './components/generic-password/generic-password.component';
import { NgElementsModule } from '@valcome/ng-elements';
import { GenericTextAreaComponent } from './components/generic-text-area/generic-text-area.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgElementsModule,
  ],
  declarations: [
    GenericInputComponent,
    GenericPasswordComponent,
    GenericSelectComponent,
    GenericRadioComponent,
    GenericCheckboxComponent,
    GenericTextAreaComponent,
    GenericErrorMessagesComponent,
    FormErrorMessageDirective,
  ],
  exports: [
    GenericInputComponent,
    GenericPasswordComponent,
    GenericSelectComponent,
    GenericRadioComponent,
    GenericCheckboxComponent,
    GenericErrorMessagesComponent,
    GenericTextAreaComponent,
    FormErrorMessageDirective,
    ReactiveFormsModule,
  ]
})
export class GenericFormsModule {
}
