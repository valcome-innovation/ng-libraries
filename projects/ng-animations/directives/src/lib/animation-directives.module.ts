import { NgModule } from '@angular/core';
import { ParallaxDirective } from './parallax.directive';
import { BackgroundParallaxDirective } from './background-parallax.directive';

@NgModule({
  declarations: [
    ParallaxDirective,
    BackgroundParallaxDirective
  ],
  exports: [
    ParallaxDirective,
    BackgroundParallaxDirective
  ]
})
export class AnimationDirectivesModule {
}
