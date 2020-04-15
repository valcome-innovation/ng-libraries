import { TestBed } from '@angular/core/testing';

import { ScreenFitService } from './screen-fit.service';

describe('ScreenFitService', () => {
  let service: ScreenFitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenFitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
