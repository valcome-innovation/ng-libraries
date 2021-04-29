import { NgModule } from '@angular/core';
import { ToggleButtonComponent } from './toggle-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToggleButtonComponent
  ],
  exports: [
    ToggleButtonComponent
  ]
})
export class ToggleButtonModule {
}
