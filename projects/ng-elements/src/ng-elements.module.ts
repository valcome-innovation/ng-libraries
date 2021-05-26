import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingSpinnerComponent
  ],
  exports: [
    LoadingSpinnerComponent
  ]
})
export class NgElementsModule {
}
