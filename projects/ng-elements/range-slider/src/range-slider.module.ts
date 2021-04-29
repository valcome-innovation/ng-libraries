import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from '@valcome/ng-elements/click-outside';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule
  ],
  declarations: [
    RangeSliderComponent
  ],
  exports: [
    RangeSliderComponent
  ]
})
export class RangeSliderModule {
}
