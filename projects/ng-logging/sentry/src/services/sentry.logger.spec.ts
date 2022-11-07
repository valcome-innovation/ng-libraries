import { TestBed, waitForAsync } from '@angular/core/testing';
import { SentryLogger } from './sentry.logger';

describe('SentryLogger', () => {

  let service: SentryLogger;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        SentryLogger
      ]
    });

    service = TestBed.inject(SentryLogger);
  }));

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
