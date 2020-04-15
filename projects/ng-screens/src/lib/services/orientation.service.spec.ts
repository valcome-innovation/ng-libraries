import { TestBed } from '@angular/core/testing';

import { OrientationService } from './orientation.service';
import { ScreensModule } from '../screens.module';
import { DeviceService } from './device.service';

describe('OrientationService', () => {
  let service: OrientationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScreensModule],
      providers: [OrientationService, DeviceService]
    });
    service = TestBed.inject(OrientationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not throw error on landscape lock', () => {
    expect(service.lockToLandscape).not.toThrow();
  });

  it('should get landscape as true', () => {
    expect(service.isLandscape.getValue()).toBeTrue()
  });
});
