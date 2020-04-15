import { Injectable } from '@angular/core';
import { ScreensModule } from '../screens.module';
import { DeviceService } from './device.service';

import * as getInnerHeight_ from 'ios-inner-height';
const getInnerHeight = getInnerHeight_;

@Injectable({ providedIn: ScreensModule })
export class ScreenFitService {

  public constructor(private deviceService: DeviceService) {
  }

  public fitPage(): void {
    let innerHeight: number = getInnerHeight();
    let addition: number = 0;

    if (this.deviceService.isIOS() && this.deviceService.isSafari()) {
      addition = 1;
    }

    document.body.style.width = '100vw';
    document.body.style.height = innerHeight + addition + 'px';
  }

  public resetPageFit(): void {
    document.body.style.height = '100%';
  }
}
