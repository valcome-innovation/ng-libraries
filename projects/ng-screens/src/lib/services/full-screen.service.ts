// @ts-ignore
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ScreensModule } from '../screens.module';
import screenfull, { Screenfull } from 'screenfull';

const fullScreen = (screenfull.isEnabled) ? screenfull as Screenfull : undefined;

@Injectable({ providedIn: ScreensModule })
export class FullScreenService {

  public isFullScreen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public constructor(private deviceDetectorService: DeviceDetectorService) {
    this.setupFullScreenOnErrorListener();
    this.listenToFullScreenChange();
  }

  public async goFullScreen(): Promise<void> {
    if (fullScreen?.isEnabled) {
      return fullScreen.request().catch();
    }
  }

  public async toggleFullScreen(): Promise<void> {
    if (fullScreen?.isEnabled) {
      return fullScreen.toggle();
    }
  }

  public async goFullScreenIfMobile(): Promise<void> {
    if ((this.deviceDetectorService.isMobile() || this.deviceDetectorService.isTablet())) {
      return this.goFullScreen();
    }
  }

  private listenToFullScreenChange(): void {
    if (fullScreen?.isEnabled) {
      fullScreen.on('change', () => {
        this.isFullScreen.next(fullScreen.isFullscreen);
      });
    }
  }

  private setupFullScreenOnErrorListener(): void {
    if (fullScreen?.isEnabled) {
      fullScreen.onerror(() => {
        console.warn('Fullscreen not possible yet');
      });
    }
  }
}
