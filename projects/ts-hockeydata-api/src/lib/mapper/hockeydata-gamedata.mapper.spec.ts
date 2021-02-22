import { TestBed } from '@angular/core/testing';
import { HockeyDataGameDataMapper } from './hockeydata-gamedata.mapper';
import { HockeyDataLiveGameDataMapper } from './hockeydata-live-gamedata.mapper';
import { HockeyDataPeriodStatsMapper } from './hockeydata-period-stats.mapper';
import { HockeyDataGeneralGameDataMapper } from './hockeydata-general-gamedata.mapper';
import { HockeyDataGameDataScheduleMapper } from './hockeydata-gamedata-schedule.mapper';
import { HockeyDataLocationMapper } from './hockeydata-location.mapper';
import { HockeyDataGameScoreMapper } from './hockeydata-game-score.mapper';
import { HockeyDataPeriodGameDataMapper } from './hockeydata-period-gamedata.mapper';
import { getGameReportData } from './game-report-data';
import { HockeyDataGameData } from '../model/hockeydata-gamedata';

describe('HockeyDataGameDataMapper', () => {
  let mapper: HockeyDataGameDataMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HockeyDataGameDataScheduleMapper,
        HockeyDataLiveGameDataMapper,
        HockeyDataPeriodGameDataMapper,
        HockeyDataPeriodStatsMapper,
        HockeyDataPeriodGameDataMapper,
        HockeyDataGeneralGameDataMapper,
        HockeyDataLocationMapper,
        HockeyDataGameScoreMapper,
        HockeyDataGameDataMapper,
      ]
    });

    mapper = TestBed.inject(HockeyDataGameDataMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map data', () => {
    const data = getGameReportData();

    const result = mapper.fromJson(data.data.gameData);

    expect(result).toBeInstanceOf(HockeyDataGameData);
  });
});
