import { TestBed } from '@angular/core/testing';
import { HockeyDataGameReportMapper } from './hockeydata-gamereport.mapper';
import { HockeyDataGameDataMapper } from './hockeydata-gamedata.mapper';
import { HockeyDataGameReport } from '../model/hockeydata-gamereport';
import { getGameReportData } from './test-data/game-report-data';
import createSpy = jasmine.createSpy;

describe('HockeyDataGameReportMapper', () => {

  let mapper: HockeyDataGameReportMapper;
  const gameDataMapperSpy = createSpy('gameDataMapperSpy');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HockeyDataGameReportMapper,
        { provide: HockeyDataGameDataMapper, useValue: { fromJson: gameDataMapperSpy } }
      ]
    });

    mapper = TestBed.inject(HockeyDataGameReportMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map gameData', () => {
    const data = getGameReportData();
    const result = mapper.fromJson(data.data);

    expect(result).toBeInstanceOf(HockeyDataGameReport);
    expect(gameDataMapperSpy).toHaveBeenCalledWith(data.data.gameData);
  });

  it('should fail mapping on missing data', () => {
    const missingGameData = getGameReportData();
    missingGameData.data.gameData = undefined;
    expect(() => mapper.fromJson(missingGameData)).toThrowError();
  });
});

