import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { GtagService } from './gtag.service';
import { UniversalModule, CookieConsent } from '@valcome/ng-core';

export type GtagConfig = {
  gtagMeasurementId: string,
  defaultConsent: CookieConsent,
  enableDebugLog?: boolean,
  deferScript?: boolean,
  anonymizeIp?: boolean,
};

@NgModule({
  imports: [
    UniversalModule
  ]
})
export class GtagModule {

  public static forRoot(gtagConfig: GtagConfig): ModuleWithProviders<GtagModule> {
    return {
      ngModule: GtagModule,
      providers: [
        GtagService,
        {
          provide: APP_INITIALIZER,
          useFactory: (gtagService: GtagService) => () => gtagService.createGtagEntryPoint(gtagConfig).then(),
          deps: [GtagService],
          multi: true
        }
      ]
    };
  }
}
