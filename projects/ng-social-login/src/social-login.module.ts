import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthFacade, SocialAuthServiceConfig } from './social-auth.facade';
import { GoogleSignInButtonDirective } from './directives/google-sign-in-button.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GoogleSignInButtonDirective
  ],
  providers: [
    SocialAuthFacade
  ],
  exports: [
    GoogleSignInButtonDirective
  ]
})
export class SocialLoginModule {
  public static initialize(config: SocialAuthServiceConfig): ModuleWithProviders<SocialLoginModule> {
    return {
      ngModule: SocialLoginModule,
      providers: [
        SocialAuthFacade,
        {
          provide: 'SocialAuthServiceConfig',
          useValue: config
        }
      ]
    };
  }
}
