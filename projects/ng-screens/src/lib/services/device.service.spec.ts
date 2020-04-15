import { TestBed } from '@angular/core/testing';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ScreensModule } from '../screens.module';
import { DeviceService } from './device.service';
import Spy = jasmine.Spy;

describe('DeviceService', () => {
  let service: DeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScreensModule],
      providers: [DeviceService, DeviceDetectorService]
    });
    service = TestBed.inject(DeviceService);
  });

  it('should detect IOS', () => {
    let spy: Spy = spyOn(service, 'getUserAgent');

    // Apple iPhone 7
    spy.and.returnValue('Mozilla/5.0 (iPhone9,3; U; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1');
    expect(service.isIOS()).toBeTruthy();

    // iPad
    spy.and.returnValue('Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1');
    expect(service.isIOS()).toBeTruthy();

    // Nexus 6P
    spy.and.returnValue('Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36');
    expect(service.isIOS()).toBeFalsy();
  });

  it('should detect Safari', () => {
    service.browser = 'Chrome';
    expect(service.isSafari()).toBeFalsy();

    service.browser = 'Safari';
    expect(service.isSafari()).toBeTruthy();
  });

  it('should return valid user agent', () => {
    expect(service.getUserAgent()).not.toBeNull();
  });
});
