import { TestBed } from '@angular/core/testing';
import { HockeyDataDAO } from './hockeydata.dao';

describe('HockeydataDAO', () => {

  let service: HockeyDataDAO;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataDAO]
    });

    service = TestBed.inject(HockeyDataDAO);
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });
});
