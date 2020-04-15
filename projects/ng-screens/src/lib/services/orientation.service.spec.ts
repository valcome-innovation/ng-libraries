import { TestBed } from '@angular/core/testing';

import { OrientationService } from './orientation.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ScreensModule } from '../screens.module';

describe('OrientationService', () => {
  let service: OrientationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScreensModule],
      providers: [DeviceDetectorService, OrientationService]
    });
    service = TestBed.inject(OrientationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
