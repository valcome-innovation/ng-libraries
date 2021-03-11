import { TestBed } from '@angular/core/testing';
import { HockeyDataGameScoreMapper } from './hockeydata-game-score.mapper';
import { HockeyDataGameScore } from '../model/hockeydata-game-score';

describe('HockeyDataGameScoreMapper', () => {

  let mapper: HockeyDataGameScoreMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataGameScoreMapper]
    });

    mapper = TestBed.inject(HockeyDataGameScoreMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map team score data', () => {
    const data: any = {
      homeTeamId: 1234,
      homeTeamLongname: 'HTL',
      homeTeamShortname: 'HTS',
      homeTeamScore: 7,
      awayTeamId: 4321,
      awayTeamLongname: 'ATL',
      awayTeamShortname: 'ATS',
      awayTeamScore: 1
    };

    const result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataGameScore);
    expect(result.homeTeamId).toEqual(data.homeTeamId);
    expect(result.homeTeamLongName).toEqual(data.homeTeamLongname);
    expect(result.homeTeamShortName).toEqual(data.homeTeamShortname);
    expect(result.homeTeamScore).toEqual(data.homeTeamScore);
    expect(result.awayTeamId).toEqual(data.awayTeamId);
    expect(result.awayTeamLongName).toEqual(data.awayTeamLongname);
    expect(result.awayTeamShortName).toEqual(data.awayTeamShortname);
    expect(result.awayTeamScore).toEqual(data.awayTeamScore);
  });

  it('should map team score data from phase game', () => {
    const data: any = {
      homeTeamId: 1234,
      homeTeamLongName: 'HTL',
      homeTeamShortName: 'HTS',
      homeTeamScore: 7,
      awayTeamId: 4321,
      awayTeamLongName: 'ATL',
      awayTeamShortName: 'ATS',
      awayTeamScore: 1
    };

    const result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataGameScore);
    expect(result.homeTeamId).toEqual(data.homeTeamId);
    expect(result.homeTeamLongName).toEqual(data.homeTeamLongName);
    expect(result.homeTeamShortName).toEqual(data.homeTeamShortName);
    expect(result.homeTeamScore).toEqual(data.homeTeamScore);
    expect(result.awayTeamId).toEqual(data.awayTeamId);
    expect(result.awayTeamLongName).toEqual(data.awayTeamLongName);
    expect(result.awayTeamShortName).toEqual(data.awayTeamShortName);
    expect(result.awayTeamScore).toEqual(data.awayTeamScore);
  });

  it('should fail mapping on missing data', () => {
    const data: any = {
      homeTeamId: 1234,
      homeTeamLongname: 'HTL',
      homeTeamShortname: 'HTS',
      awayTeamId: 4321,
      awayTeamLongname: 'ATL',
      awayTeamShortname: 'ATS',
      awayTeamScore: 1
    };

    expect(() => mapper.fromJson(data)).toThrowError();
  });
});
