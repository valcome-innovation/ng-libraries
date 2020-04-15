import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreAnimationsModule } from 'ng-animations';
import { ScreensModule } from 'ng-screens';
import { DeviceService } from '../../../ng-screens/src/lib/services/device.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    CoreAnimationsModule,
    ScreensModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
