import { TestBed } from '@angular/core/testing';
import { HockeyDataPeriodGameDataMapper } from './hockeydata-period-gamedata.mapper';

describe('HockeyDataPeriodGameDataMapper', () => {

  let mapper: HockeyDataPeriodGameDataMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataPeriodGameDataMapper]
    });

    mapper = TestBed.inject(HockeyDataPeriodGameDataMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });
});
