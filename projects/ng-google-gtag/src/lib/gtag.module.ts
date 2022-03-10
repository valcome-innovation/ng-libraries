import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { GtagService } from './gtag.service';

export type GtagConfig = {
  gtagMeasurementId: string,
  enableDebugLog?: boolean
}

@NgModule()
export class GtagModule {

  public static forRoot(gtagConfig: GtagConfig): ModuleWithProviders<GtagModule> {
    return {
      ngModule: GtagModule,
      providers: [
        GtagService,
        {
          provide: APP_INITIALIZER,
          useFactory: (gtagService: GtagService) => () => gtagService.createGtagEntryPoint(gtagConfig),
          deps: [GtagService],
          multi: true
        }
      ]
    };
  }
}
