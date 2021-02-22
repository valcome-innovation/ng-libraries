import { TestBed } from '@angular/core/testing';
import { HockeyDataTeamScoreMapper } from './hockeydata-team-score.mapper';
import { HockeyDataGameScore } from '../model/hockeydata-game-score';

describe('HockeyDataGameScoreMapper', () => {

  let mapper: HockeyDataTeamScoreMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataTeamScoreMapper]
    });

    mapper = TestBed.inject(HockeyDataTeamScoreMapper);
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
  });
});
