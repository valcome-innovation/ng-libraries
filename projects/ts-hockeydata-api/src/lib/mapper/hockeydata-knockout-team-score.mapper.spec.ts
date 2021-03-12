import { TestBed } from '@angular/core/testing';
import { HockeyDataKnockoutTeamScoreMapper } from './hockeydata-knockout-team-score.mapper';
import { IHockeyDataPhaseEncounterTeam } from '../model/types';
import { HockeyDataKnockoutTeamScore } from '../model/hockeydata-knockout-team-score';
import { HockeyDataKnockoutGame } from '../model/hockeydata-knockout-game';
import { HockeyDataGameScore } from '../model/hockeydata-game-score';

describe('HockeyDataKnockoutTeamScoreMapper', () => {

  let mapper: HockeyDataKnockoutTeamScoreMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataKnockoutTeamScoreMapper]
    });

    mapper = TestBed.inject(HockeyDataKnockoutTeamScoreMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map knockout team standings', () => {
    const data = {
      id: 23,
      encounterTeamStatus: 0,
      gamesWon: 1,
      longname: 'longname',
      shortname: 'SNA'
    } as IHockeyDataPhaseEncounterTeam;

    const result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataKnockoutTeamScore);
    expect(result.teamId).toEqual(data.id);
    expect(result.gamesWon).toEqual(data.gamesWon);
    expect(result.longName).toEqual(data.longname);
    expect(result.shortName).toEqual(data.shortname);
  });

  it('should map score results', () => {
    const isLive = true;
    const hasEnded = true;
    const homeTeam = new HockeyDataKnockoutTeamScore(1, 'Home', 'SWL', 0);
    const awayTeam = new HockeyDataKnockoutTeamScore(1, 'Home', 'HKO', 0);
    const games = [
      getKnockOutGame(!isLive, hasEnded, 1, 3),
      getKnockOutGame(!isLive, hasEnded, 2, 7),
      getKnockOutGame(!isLive, hasEnded, 1, 0),
      getKnockOutGame(isLive, !hasEnded, 0, 2),
      getKnockOutGame(!isLive, !hasEnded, 0, 0),
      getKnockOutGame(!isLive, !hasEnded, 0, 0),
      getKnockOutGame(!isLive, !hasEnded, 0, 0)
    ];

    mapper.mapScoreResults([homeTeam, awayTeam], games);

    expect(homeTeam.results).toEqual(['lost', 'lost', 'won', 'live', 'scheduled', 'scheduled', 'scheduled']);
    expect(awayTeam.results).toEqual(['won', 'won', 'lost', 'live', 'scheduled', 'scheduled', 'scheduled']);
  });

  it('should fail mapping on missing data', () => {
    expect(() => mapper.fromJson({ gamesWon: 1, id: 23, longname: 'longname' })).toThrowError();
    expect(() => mapper.fromJson({ gamesWon: 1, id: 23, shortname: 'SNA' })).toThrowError();
    expect(() => mapper.fromJson({ gamesWon: 1, longname: 'longname', shortname: 'SNA' })).toThrowError();
    expect(() => mapper.fromJson({ id: 23, longname: 'longname', shortname: 'SNA' })).toThrowError();
  });
});

function getKnockOutGame(isLive: boolean, hasEnded: boolean, homeScore: number, awayScore: number): HockeyDataKnockoutGame {
  return new HockeyDataKnockoutGame(
    'gameId', '258', 123, new Date(), false, false, isLive, hasEnded,
    new HockeyDataGameScore(
      10, 'Home', 'SWL', homeScore,
      20, 'Away', 'HKO', awayScore
    )
  );
}
