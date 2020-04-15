import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ScreensModule } from '../screens.module';

@Injectable({ providedIn: ScreensModule })
export class DeviceService extends DeviceDetectorService {

  public constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);
  }

  public isMobileOrTablet(): boolean {
    return this.isMobile() || this.isMobileOrTablet();
  }

  public isIOS(): boolean {
    let ua = window.navigator.userAgent;
    return !!ua?.match(/iPad/i) || !!ua?.match(/iPhone/i);
  }

  public isSafari(): boolean {
    let ua = window.navigator.userAgent;
    return ua.toLowerCase().indexOf('safari') !== -1;
  }
}
