import { Injectable } from '@angular/core';
import * as getInnerHeight from 'ios-inner-height';
import { BehaviorSubject } from 'rxjs';
import { ScreensModule } from './screens.module';

@Injectable({ providedIn: ScreensModule })
export class ScreenFitService {

  public isIOS: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public constructor() {
    this.isIOS.next(this.getIsIOS());
  }

  public fitPage(): void {
    let innerHeight: number = getInnerHeight();
    let addition: number = 0;

    if (this.isIOS.getValue() && this.getIsSafari()) {
      addition = 1;
    }

    document.body.style.width = '100vw';
    document.body.style.height = innerHeight + addition + 'px';
  }

  public resetPageFit(): void {
    document.body.style.height = '100%';
  }

  public getIsIOS(): boolean {
    let ua = window.navigator.userAgent;
    return !!ua?.match(/iPad/i) || !!ua?.match(/iPhone/i);
  }

  public getIsSafari(): boolean {
    let ua = window.navigator.userAgent;
    return ua.toLowerCase().indexOf('safari') !== -1;
  }
}
