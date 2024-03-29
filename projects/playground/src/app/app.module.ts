import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceService } from '../../../ng-screens/src/lib/services/device.service';
import { RangeSliderModule } from '../../../ng-elements/range-slider/src/range-slider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageGalleryModule } from '../../../ng-elements/image-gallery/src/image-gallery.module';
import { SocialDemoComponent } from './social-demo/social-demo.component';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from '@valcome/ng-social-login';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericFormsModule } from '../../../ng-elements/form/src/generic-forms.module';
import { ErrorMessagesComponent } from './error/error-messages.component';
import { FilePickerModule } from '../../../ng-elements/file-picker/src/file-picker.module';
import { ImageResizeModule } from '../../../ng-image-resize/src/lib/image-resize.module';
import { ICEHOCKEY_API_CONFIG } from '../../../ts-hockeydata-api/src/lib/tokens';
import { HockeyDataApiModule } from '../../../ts-hockeydata-api/src/lib/hockeydata-api.module';
import { GtagModule } from '../../../ng-google-gtag/src/lib/gtag.module';
import { ToggleButtonModule } from '../../../ng-elements/toggle/src/components/toggle-button/toggle-button.module';
import { SwitchControlModule } from '../../../ng-elements/toggle/src/components/switch-control/switch-control.module';

@NgModule({
  declarations: [
    AppComponent,
    SocialDemoComponent,
    ErrorMessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppRoutingModule,
    GenericFormsModule,
    RangeSliderModule,
    FormsModule,
    ReactiveFormsModule,
    ImageGalleryModule,
    SocialLoginModule,
    ToggleButtonModule,
    SwitchControlModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FilePickerModule,
    ImageResizeModule,
    HockeyDataApiModule,
    GtagModule.forRoot({
      gtagMeasurementId: '<insert tag>',
      enableDebugLog: true,
      deferScript: true,
      anonymizeIp: true,
      defaultConsent: 'pending',
    })
  ],
  providers: [
    DeviceService,
    {
      provide: ICEHOCKEY_API_CONFIG, useValue: {
        apiKey: '702b9e4a55d61cf7ffe943e90bede05b',
        referer: 'local.valcome.tv',
        displayPointsPerGame: false
      }
    },
    {
      provide: 'SocialAuthServiceConfig',
      useFactory: (http: HttpClient) => {
        return {
          autoLogin: false,
          defaultCookieConsent: 'pending',
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '738096225314-bf85u305r2bhosi9jpi7bek8m2jsnkqa.apps.googleusercontent.com',
                '738096225314-5r0dns5llrfepeihg3h5l6c7gs5kiq7e.apps.googleusercontent.com',
                '1-4ZieXGfZNaKEeDh_TYYcuj',
                http,
                { oneTapEnabled: false, scopes: ['email'] }
              )
            },
            {
              id: FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider(
                '570472933755093',
                'ca75a92764f2289c6678055a39d9a818',
                http
              )
            }
          ]
        } as SocialAuthServiceConfig;
      },
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
