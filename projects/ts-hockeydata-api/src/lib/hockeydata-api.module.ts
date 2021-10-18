import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { HockeyDataApiConfig } from './model/types';
import { HockeyDataIceHockeyDAO } from './services/icehockey/hockeydata-icehockey.dao';
import { HockeyDataIceHockeyServiceImpl } from './services/icehockey/hockey-data-ice-hockey-impl.service';
import { HockeyDataIceHockeyService } from './services/icehockey/contracts/hockey-data-ice-hockey.service';
import { HockeyDataIceHockeySubstitute } from './services/icehockey/contracts/hockey-data-ice-hockey.substitute';

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
        {
          provide: HockeyDataIceHockeyService,
          useClass: !!hockeyConfig ? HockeyDataIceHockeyServiceImpl : HockeyDataIceHockeySubstitute
        },
        HockeyDataIceHockeyDAO
      ]
    };
  }

  public static forChild(): ModuleWithProviders<HockeyDataApiModule> {
    return { ngModule: HockeyDataApiModule };
  }
}
