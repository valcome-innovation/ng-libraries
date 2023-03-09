import { TestBed, waitForAsync } from '@angular/core/testing';
import { GtagService } from './gtag.service';

describe('GtagService', () => {

  let service: GtagService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [GtagService]
    });

    service = TestBed.inject(GtagService);
  }));

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should not throw', () => {
    const gtag = () => service.createGtagEntryPoint({
      gtagMeasurementId: 'id',
      anonymizeIp: true,
      defaultConsent: 'PENDING',
      deferScript: true,
      enableDebugLog: true
    });

    expect(gtag).not.toThrow();
  });
});
