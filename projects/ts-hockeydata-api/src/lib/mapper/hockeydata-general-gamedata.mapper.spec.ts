import { TestBed } from '@angular/core/testing';
import { HockeyDataGeneralGameDataMapper } from './hockeydata-general-gamedata.mapper';
import { HockeyDataGeneralGameData } from '../model/hockeydata-general-gamedata';

describe('HockeyDataGeneralGameDataMapper', () => {

  let mapper: HockeyDataGeneralGameDataMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataGeneralGameDataMapper]
    });

    mapper = TestBed.inject(HockeyDataGeneralGameDataMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map data', () => {
    const data: any = {
      id: '9d2fd55b-985d-470d-94f5-449a73a9e147',
      divisionId: 1235,
      divisionLongname: 'Divisn Longname',
      gameName: '123',
      gameRound: 50,
    };

    const result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataGeneralGameData);
    expect(result.gameId).toEqual(data.id);
    expect(result.divisionId).toEqual(data.divisionId);
    expect(result.divisionName).toEqual(data.divisionLongname);
    expect(result.gameName).toEqual(data.gameName);
    expect(result.gameRound).toEqual(data.gameRound);
  });

  it('should fail mapping on missing data', () => {
    const data: any = {
      divisionId: 1235,
      divisionLongname: 'Divisn Longname',
      gameName: '123',
      gameRound: 50,
    };

    expect(() => mapper.fromJson(data)).toThrowError();
  });
});
