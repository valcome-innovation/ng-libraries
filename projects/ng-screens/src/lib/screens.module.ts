import { NgModule } from '@angular/core';
import { FullScreenService } from './full-screen.service';
import { OrientationService } from './orientation.service';
import { ScreenFitService } from './screen-fit.service';

@NgModule({
  providers: [
    FullScreenService,
    OrientationService,
    ScreenFitService
  ]
})
export class ScreensModule {
}
