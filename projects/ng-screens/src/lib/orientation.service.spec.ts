import { TestBed } from '@angular/core/testing';

import { OrientationService } from './orientation.service';
import { DeviceDetectorService } from 'ngx-device-detector';

describe('OrientationService', () => {
  let service: OrientationService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DeviceDetectorService] });
    service = TestBed.inject(OrientationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
