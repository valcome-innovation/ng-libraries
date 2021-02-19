import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';

export const ICEHOCKEY_API_KEY = new InjectionToken<string>('icehockeyApiKey');
export const FOOTBALL_API_KEY = new InjectionToken<string>('footballApiKey');

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class HockeydataApiModule {

  public static forRoot(icehockeyApiKey?: string, footballApiKey?: string): ModuleWithProviders<HockeydataApiModule> {
    return {
      ngModule: HockeydataApiModule,
      providers: [
        { provide: ICEHOCKEY_API_KEY, useValue: icehockeyApiKey },
        { provide: FOOTBALL_API_KEY, useValue: footballApiKey },
      ]
    };
  }

  public static forChild(): ModuleWithProviders<HockeydataApiModule> {
    return { ngModule: HockeydataApiModule };
  }
}
