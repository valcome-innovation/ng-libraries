import { TestBed } from '@angular/core/testing';

import { ScreenFitService } from './screen-fit.service';
import { ScreensModule } from '../screens.module';

describe('ScreenFitService', () => {
  let service: ScreenFitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScreensModule],
      providers: [ScreenFitService]
    });
    service = TestBed.inject(ScreenFitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
