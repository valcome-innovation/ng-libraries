import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScreensModule } from '../screens.module';
import { DeviceService } from './device.service';
import { JavascriptUtils } from 'ng-core';

@Injectable({ providedIn: ScreensModule })
export class OrientationService {

  public isLandscape: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public constructor(private deviceService: DeviceService) {
    this.listenToOrientationChange();
  }

  public lockToLandscape(): void {
    if ('orientation' in screen && screen.orientation) {
      screen.orientation.lock('landscape')
        .catch(() => console.log('Landscape not guaranteed'));
    }
  }

  private listenToOrientationChange(): void {
    window.addEventListener('orientationchange', () => {
      JavascriptUtils.callAfterStackResolved(
        this.emitScreenOrientation.bind(this)
      );
    });
    this.emitScreenOrientation();
  }

  private emitScreenOrientation(): void {
    let isLandscape: boolean = this.getIsLandscapeFromBrowser();
    this.isLandscape.next(isLandscape);
  }

  private getIsLandscapeFromBrowser(): boolean {
    if (this.deviceService.isMobileOrTablet()) {
      if (this.hasOrientationProperty() && screen.orientation.type) {
        return this.getIsLandscapeFromType();
      } else if (this.hasOrientationProperty() && screen.orientation.angle) {
        return this.getIsLandscapeFromAngle();
      } else {
        return this.getIsLandscapeFromOrientation();
      }
    } else {
      return true;
    }
  }

  private hasOrientationProperty(): boolean {
    return ('orientation' in screen && screen.orientation != null);
  }

  private getIsLandscapeFromType(): boolean {
    return screen.orientation.type.indexOf('landscape') !== -1;
  }

  private getIsLandscapeFromAngle(): boolean {
    return Math.abs(screen.orientation.angle) === 90;
  }

  private getIsLandscapeFromOrientation(): boolean {
    // @ts-ignore
    return Math.abs(window.orientation) === 90; // for bad browsers like safari
  }
}
