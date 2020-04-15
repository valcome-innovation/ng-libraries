import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ScreensModule } from '../screens.module';

@Injectable({ providedIn: ScreensModule })
export class DeviceService extends DeviceDetectorService {

  public constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);
  }

  public isMobileOrTablet(): boolean {
    return this.isMobile() || this.isTablet();
  }

  public isSafari(): boolean {
    return this.browser.toLowerCase().indexOf('safari') !== -1;
  }

  public isIOS(): boolean {
    let ua = this.getUserAgent();
    return !!ua?.match(/iPad/i) || !!ua?.match(/iPhone/i);
  }

  public getUserAgent(): string {
    return window?.navigator?.userAgent;
  }
}
