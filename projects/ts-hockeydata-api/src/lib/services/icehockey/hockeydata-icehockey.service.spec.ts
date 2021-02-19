import { TestBed } from '@angular/core/testing';
import { HockeydataIcehockeyService } from './hockeydata-icehockey.service';

describe('HockeyDataIcehockeyService', () => {

  let service: HockeydataIcehockeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeydataIcehockeyService]
    });

    service = TestBed.inject(HockeydataIcehockeyService);
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });
});
