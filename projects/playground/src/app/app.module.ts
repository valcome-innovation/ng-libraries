import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreAnimationsModule } from 'ng-animations';
import { DeviceService } from '../../../ng-screens/src/lib/services/device.service';
import { GenericFormsModule } from 'projects/ng-elements/src/lib/form/generic-forms.module';
import { RangeSliderModule } from '../../../ng-elements/src/lib/range-slider/range-slider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageGalleryModule } from '../../../ng-elements/src/lib/image-gallery/image-gallery.module';
import { SocialDemoComponent } from './social-demo/social-demo.component';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@valcome/ng-social-login';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ToggleButtonModule } from '../../../ng-elements/src/lib/toggle/toggle-button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HockeyDataWidgetsModule } from '../../../ng-hockeydata-widgets/src/lib/hockeydata-widgets.module';
import { HockeyDataApiModule } from '@valcome/ts-hockeydata-api';

@NgModule({
  declarations: [
    AppComponent,
    SocialDemoComponent
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
    HockeyDataWidgetsModule,
    HockeyDataApiModule.forRoot({
      apiKey: '702b9e4a55d61cf7ffe943e90bede05b',
      referer: 'dev.valcome.tv'
    })
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
