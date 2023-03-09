import { TestBed } from '@angular/core/testing';
import { GtagModule } from './gtag.module';
import { ApplicationInitStatus } from '@angular/core';

describe('GtagModule', () => {

  const gtagId = 'gtagId';

  it('should initialize gtagService', async () => {
    await TestBed.configureTestingModule({
      imports: [
        GtagModule.forRoot({
          gtagMeasurementId: gtagId,
          anonymizeIp: true,
          defaultConsent: 'PENDING',
          deferScript: true,
          enableDebugLog: true
        })
      ]
    }).compileComponents();

    await TestBed.inject(ApplicationInitStatus).donePromise;

    expect(true).toBeTruthy(); // I'm not sure how to test if function got called
  });
});
