// @ts-ignore
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ScreensModule } from '../screens.module';
import screenfull, { Screenfull } from 'screenfull';
import { DeviceService } from './device.service';

const fullScreen = (screenfull.isEnabled) ? screenfull as Screenfull : undefined;

@Injectable({ providedIn: ScreensModule })
export class FullScreenService {

  public isFullScreen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public constructor(private deviceService: DeviceService) {
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
      return fullScreen.toggle().catch();
    }
  }

  public async goFullScreenIfMobile(): Promise<void> {
    if (this.deviceService.isMobileOrTablet()) {
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
