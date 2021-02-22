import { TestBed } from '@angular/core/testing';
import { HockeyDataPeriodStatsMapper } from './hockeydata-period-stats.mapper';
import { HockeyDataPeriodStats } from '../model/hockeydata-period-stats';

describe('HockeyDataPeriodStatsDataMapper', () => {

  let mapper: HockeyDataPeriodStatsMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataPeriodStatsMapper]
    });

    mapper = TestBed.inject(HockeyDataPeriodStatsMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map data', () => {
    const data: any = {
      period: '1',
      homeScore: 2,
      awayScore: 1,
      homeShotsOnGoal: 10,
      awayShotsOnGoal: 9,
      startTime: '19:30',
      endTime: '20:02',
    };

    const result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataPeriodStats);
    expect(result.period).toEqual(data.period);
    expect(result.homeScore).toEqual(data.homeScore);
    expect(result.awayScore).toEqual(data.awayScore);
    expect(result.homeShotsOnGoal).toEqual(data.homeShotsOnGoal);
    expect(result.awayShotsOnGoal).toEqual(data.awayShotsOnGoal);
    expect(result.startTime).toEqual(data.startTime);
    expect(result.endTime).toEqual(data.endTime);
  });

  it('should fail mapping on missing data', () => {
    const data: any = {
      period: '1',
      awayScore: 1,
      homeShotsOnGoal: 10,
      awayShotsOnGoal: 9,
      startTime: '19:30',
      endTime: '20:02',
    };

    expect(() => mapper.fromJson(data)).toThrowError();
  });
});
