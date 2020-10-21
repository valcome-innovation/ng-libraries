import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, SocialAuthServiceConfig } from './social-auth.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SocialAuthService
  ]
})
export class SocialLoginModule {
  public static initialize(config: SocialAuthServiceConfig): ModuleWithProviders<SocialLoginModule> {
    return {
      ngModule: SocialLoginModule,
      providers: [
        SocialAuthService,
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
