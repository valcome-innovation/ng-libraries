import { InjectionToken, NgModule } from '@angular/core';
import { HockeyDataApiConfig } from './model/types';
import { HockeyDataIceHockeyServiceImpl } from './services/icehockey/hockey-data-ice-hockey-impl.service';
import { HockeyDataIceHockeyService } from './services/icehockey/contracts/hockey-data-ice-hockey.service';
import { HockeyDataIceHockeySubstitute } from './services/icehockey/contracts/hockey-data-ice-hockey.substitute';

export const ICEHOCKEY_API_CONFIG = new InjectionToken<HockeyDataApiConfig>('icehockeyApiKey');
export const FOOTBALL_API_CONFIG = new InjectionToken<HockeyDataApiConfig>('footballApiKey');

export const iceHockeyServiceFactory = (config: HockeyDataApiConfig | undefined, ...deps: [any, any, any, any, any]): HockeyDataIceHockeyService => {
  if (config) {
    return new HockeyDataIceHockeyServiceImpl(...deps);
  } else {
    return new HockeyDataIceHockeySubstitute();
  }
}

@NgModule({
  providers: [
    {
      provide: HockeyDataIceHockeyService,
      useFactory: iceHockeyServiceFactory,
      deps: [ICEHOCKEY_API_CONFIG, ...HockeyDataIceHockeyServiceImpl.constructorParams]
    }
  ]
})
export class HockeyDataApiModule {
}
