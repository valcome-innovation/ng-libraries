import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [RangeSliderComponent, ClickOutsideDirective],
  exports: [RangeSliderComponent, ClickOutsideDirective]
})
export class RangeSliderModule {
}
