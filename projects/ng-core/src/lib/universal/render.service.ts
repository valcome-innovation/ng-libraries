import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { UniversalModule } from './universal.module';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({ providedIn: UniversalModule })
export class RenderService {

  public constructor(@Inject(PLATFORM_ID) private platformId: any) {
  }

  public isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  public isServer(): boolean {
    return isPlatformServer(this.platformId);
  }
}
