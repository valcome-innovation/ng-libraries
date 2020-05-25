import { NgModule } from '@angular/core';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { FormErrorMessageDirective } from './directives/form-error-message/form-error-message.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    GenericInputComponent,
    FormErrorMessageDirective],
  exports: [
    GenericInputComponent,
    FormErrorMessageDirective,
    ReactiveFormsModule
  ]
})
export class GenericFormsModule {
}
