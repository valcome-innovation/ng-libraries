import { TestBed, waitForAsync } from '@angular/core/testing';
import { ConsoleLogger } from './console.logger';

describe('ConsoleLogger', () => {

  let service: ConsoleLogger;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        ConsoleLogger
      ]
    });

    service = TestBed.inject(ConsoleLogger);
  }));

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
