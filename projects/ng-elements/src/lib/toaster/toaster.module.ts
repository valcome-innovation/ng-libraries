import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { INotyfOptions } from 'notyf';

export const TOASTER_OPTIONS = new InjectionToken<Partial<INotyfOptions>>('TOASTER_OPTIONS');

@NgModule({})
export class ToasterModule {

  public static forRoot(options: Partial<INotyfOptions>): ModuleWithProviders<ToasterModule> {
    return {
      ngModule: ToasterModule,
      providers: [
        { provide: TOASTER_OPTIONS, useValue: options }
      ]
    }
  }

  public static forChild(): ModuleWithProviders<ToasterModule> {
    return {
      ngModule: ToasterModule,
    }
  }
}
