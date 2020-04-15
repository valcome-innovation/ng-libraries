import { Injectable } from '@angular/core';
import { ScreensModule } from 'ng-screens';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: ScreensModule })
export class DeviceService {

  public constructor(private deviceDetectorService: DeviceDetectorService) {
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
