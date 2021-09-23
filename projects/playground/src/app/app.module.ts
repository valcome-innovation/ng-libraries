import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreAnimationsModule } from 'ng-animations';
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
import { ToggleButtonModule } from '../../../ng-elements/toggle/src/toggle-button.module';
import { GenericFormsModule } from '../../../ng-elements/form/src/generic-forms.module';
import { ErrorMessagesComponent } from './error/error-messages.component';
import { FilePickerModule } from '../../../ng-elements/file-picker/src/file-picker.module';

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
    CoreAnimationsModule,
    GenericFormsModule,
    RangeSliderModule,
    FormsModule,
    ReactiveFormsModule,
    ImageGalleryModule,
    SocialLoginModule,
    ToggleButtonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FilePickerModule,
    // HockeyDataWidgetsModule,
    // HockeyDataApiModule.forRoot({
    //   // apiKey: '702b9e4a55d61cf7ffe943e90bede05b',
    //   // referer: 'dev.valcome.tv'
    //   apiKey: '64e80889471a0e6f2579e0b9cc165b3a',
    //   referer: 'dev.live.ice.hockey'
    // })
  ],
  providers: [
    DeviceService,
    {
      provide: 'SocialAuthServiceConfig',
      useFactory: (http: HttpClient) => {
        return {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '738096225314-bf85u305r2bhosi9jpi7bek8m2jsnkqa.apps.googleusercontent.com',
                '738096225314-5r0dns5llrfepeihg3h5l6c7gs5kiq7e.apps.googleusercontent.com',
                '1-4ZieXGfZNaKEeDh_TYYcuj',
                http
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
