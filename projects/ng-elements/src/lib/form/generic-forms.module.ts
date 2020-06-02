import { NgModule } from '@angular/core';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { FormErrorMessageDirective } from './directives/form-error-message/form-error-message.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GenericSelectComponent } from './components/generic-select/generic-select.component';
import { GenericRadioComponent } from './components/generic-radio/generic-radio.component';
import { GenericCheckboxComponent } from './components/generic-checkbox/generic-checkbox.component';
import { GenericErrorMessageComponent } from './components/generic-error-message/generic-error-message.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    GenericInputComponent,
    GenericSelectComponent,
    GenericRadioComponent,
    GenericCheckboxComponent,
    GenericErrorMessageComponent,
    FormErrorMessageDirective
  ],
  exports: [
    GenericInputComponent,
    GenericSelectComponent,
    GenericRadioComponent,
    GenericCheckboxComponent,
    GenericErrorMessageComponent,
    FormErrorMessageDirective,
    ReactiveFormsModule
  ]
})
export class GenericFormsModule {
}
