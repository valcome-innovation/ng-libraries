import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';

export const ICEHOCKEY_API_KEY = new InjectionToken<string>('icehockeyApiKey');
export const FOOTBALL_API_KEY = new InjectionToken<string>('footballApiKey');

@NgModule()
export class HockeyDataApiModule {
  public static forRoot(icehockeyApiKey?: string, footballApiKey?: string): ModuleWithProviders<HockeyDataApiModule> {
    return {
      ngModule: HockeyDataApiModule,
      providers: [
        { provide: ICEHOCKEY_API_KEY, useValue: icehockeyApiKey },
        { provide: FOOTBALL_API_KEY, useValue: footballApiKey },
      ]
    };
  }

  public static forChild(): ModuleWithProviders<HockeyDataApiModule> {
    return { ngModule: HockeyDataApiModule };
  }
}
