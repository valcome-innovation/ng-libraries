import { NgModule } from '@angular/core';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { FormErrorMessageDirective } from './directives/form-error-message/form-error-message.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    GenericInputComponent,
    FormErrorMessageDirective],
  exports: [
    GenericInputComponent,
    FormErrorMessageDirective
  ]
})
export class GenericFormsModule {
}
