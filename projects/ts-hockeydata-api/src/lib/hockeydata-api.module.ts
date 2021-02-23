import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { HockeyDataApiConfig } from './model/types';

export const ICEHOCKEY_API_CONFIG = new InjectionToken<HockeyDataApiConfig>('icehockeyApiKey');
export const FOOTBALL_API_CONFIG = new InjectionToken<HockeyDataApiConfig>('footballApiKey');

@NgModule()
export class HockeyDataApiModule {
  public static forRoot(hockeyConfig?: HockeyDataApiConfig,
                        footballConfig?: HockeyDataApiConfig): ModuleWithProviders<HockeyDataApiModule> {
    return {
      ngModule: HockeyDataApiModule,
      providers: [
        { provide: ICEHOCKEY_API_CONFIG, useValue: hockeyConfig },
        { provide: FOOTBALL_API_CONFIG, useValue: footballConfig },
      ]
    };
  }

  public static forChild(): ModuleWithProviders<HockeyDataApiModule> {
    return { ngModule: HockeyDataApiModule };
  }
}
