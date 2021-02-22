import { TestBed } from '@angular/core/testing';
import { HockeyDataPeriodGameDataMapper } from './hockeydata-period-gamedata.mapper';
import { HockeyDataPeriodStatsMapper } from './hockeydata-period-stats.mapper';
import { HockeyDataPeriodGameData } from '../model/hockeydata-period-gamedata';

describe('HockeyDataPeriodGameDataMapper', () => {

  let mapper: HockeyDataPeriodGameDataMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HockeyDataPeriodGameDataMapper,
        HockeyDataPeriodStatsMapper
      ]
    });

    mapper = TestBed.inject(HockeyDataPeriodGameDataMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should should map', () => {
    const data: any = {
      periodStats: [
        {
          period: '1',
          homeScore: 2,
          awayScore: 1,
          homeShotsOnGoal: 10,
          awayShotsOnGoal: 9,
          startTime: '19:30',
          endTime: '20:02',
        }
      ],
      numberOfPeriods: 3,
      lengthOfPeriod: 1200,
      numberOfOvertimes: 1,
      lengthOfOvertime: 300,
      shootoutShots: 3,
    };

    const result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataPeriodGameData);
  });

  it('should fail mapping on missing data', () => {
    const data: any = {
      periodStats: [],
      lengthOfPeriod: 1200,
      numberOfOvertimes: 1,
      lengthOfOvertime: 300,
      shootoutShots: 3,
    };

    expect(() => mapper.fromJson(data)).toThrowError();
  });
});
