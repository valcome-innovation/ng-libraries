import { TestBed } from '@angular/core/testing';
import { HockeyDataService } from './hockeydata.service';

describe('HockeyDataService', () => {

  let service: HockeyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataService]
    });

    service = TestBed.inject(HockeyDataService);
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });
});
