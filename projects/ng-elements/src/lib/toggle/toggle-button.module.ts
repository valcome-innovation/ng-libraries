import { NgModule } from '@angular/core';
import { ToggleButtonComponent } from './toggle-button.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
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
