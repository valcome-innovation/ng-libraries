import { TestBed } from '@angular/core/testing';
import { HockeyDataGameDataScheduleMapper } from './hockeydata-gamedata-schedule.mapper';

describe('HockeyDataGameDataScheduleMapper', () => {

  let mapper: HockeyDataGameDataScheduleMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataGameDataScheduleMapper]
    });

    mapper = TestBed.inject(HockeyDataGameDataScheduleMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });
});
