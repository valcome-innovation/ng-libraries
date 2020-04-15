import { TestBed } from '@angular/core/testing';

import { FullScreenService } from './full-screen.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ScreensModule } from '../screens.module';
import { DeviceService } from './device.service';

/**
 * Testing this Service is particular difficult, because it requires user input to work.
 * Therefore it's not fully tested.
 */
describe('FullScreenService', () => {
  let service: FullScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScreensModule],
      providers: [FullScreenService, DeviceService]
    });
    service = TestBed.inject(FullScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
