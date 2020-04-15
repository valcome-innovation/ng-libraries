import { TestBed } from '@angular/core/testing';
import { ScreensModule } from '../screens.module';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DeviceService } from './device.service';

describe('DeviceService', () => {
  let service: DeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScreensModule],
      providers: [DeviceService, DeviceDetectorService]
    });
    service = TestBed.inject(DeviceService);
  });
});
