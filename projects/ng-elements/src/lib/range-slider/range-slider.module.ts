import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from '../click-outside/click-outside.module';

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
