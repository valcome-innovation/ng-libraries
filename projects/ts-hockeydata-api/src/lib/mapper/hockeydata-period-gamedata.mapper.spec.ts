import { TestBed } from '@angular/core/testing';
import { HockeyDataLocationMapper } from './hockeydata-location.mapper';

describe('HockeyDataLocationMapper', () => {

  let mapper: HockeyDataLocationMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataLocationMapper]
    });

    mapper = TestBed.inject(HockeyDataLocationMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });
});
