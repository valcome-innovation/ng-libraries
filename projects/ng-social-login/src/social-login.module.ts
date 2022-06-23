import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
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

  public constructor(@Optional() @SkipSelf() parentModule: SocialLoginModule) {
    if (parentModule) {
      throw new Error('SocialLoginModule is already loaded. Import it in the AppModule only');
    }
  }
}
