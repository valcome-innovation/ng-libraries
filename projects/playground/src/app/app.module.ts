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
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from '@valcome/ng-social-login';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SocialDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    CoreAnimationsModule,
    GenericFormsModule,
    RangeSliderModule,
    FormsModule,
    ReactiveFormsModule,
    ImageGalleryModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    DeviceService,
    {
      provide: 'SocialAuthServiceConfig',
      useFactory: (httpClient: HttpClient) => {
        return {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '738096225314-bf85u305r2bhosi9jpi7bek8m2jsnkqa.apps.googleusercontent.com',
                '1-4ZieXGfZNaKEeDh_TYYcuj',
                httpClient
              )
            },
            {
              id: FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider('570472933755093')
            }
          ]
        } as SocialAuthServiceConfig
      },
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
