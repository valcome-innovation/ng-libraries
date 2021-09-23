import { TestBed } from '@angular/core/testing';
import { HockeyDataScheduledGameMapper } from './hockeydata-scheduled-game-mapper';
import { HockeyDataGameScoreMapper } from './hockeydata-game-score.mapper';
import { HockeyDataScheduleMapper } from './hockeydata-schedule.mapper';
import { getSchedule } from './test-data/schedule';
import { HockeyDataSchedule } from '../model/hockeydata-schedule';
import { HockeyDataScheduledGame } from '../model/hockeydata-scheduled-game';

describe('HockeyDataScheduleMapper', () => {

  let mapper: HockeyDataScheduleMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HockeyDataGameScoreMapper,
        HockeyDataScheduledGameMapper,
        HockeyDataScheduleMapper
      ]
    });

    mapper = TestBed.inject(HockeyDataScheduleMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map schedule', () => {
    const json = getSchedule();

    const result = mapper.fromJson(json);

    expect(result).toBeInstanceOf(HockeyDataSchedule);
    result.games.forEach(g => expect(g).toBeInstanceOf(HockeyDataScheduledGame));
    console.log(result.games[0]);
  });
});
