import { TestBed, waitForAsync } from '@angular/core/testing';
import { GtagService } from './gtag.service';
import { RenderService } from '@valcome/ng-core';

describe('GtagService', () => {

  let service: GtagService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        GtagService,
        { provide: RenderService, useValue: { isBrowser: () => true }}
      ]
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
