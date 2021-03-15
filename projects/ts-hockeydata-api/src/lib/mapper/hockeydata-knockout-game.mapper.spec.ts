import { TestBed } from '@angular/core/testing';
import { HockeyDataGameScoreMapper } from './hockeydata-game-score.mapper';
import { HockeyDataKnockoutGameMapper } from './hockeydata-knockout-game.mapper';
import { IHockeyDataKnockoutPhaseGame } from '../model/types';
import { HockeyDataKnockoutGame } from '../model/hockeydata-knockout-game';
import { HockeyDataGameScore } from '../model/hockeydata-game-score';

describe('HockeyDataKnockoutGameMapper', () => {

  let mapper: HockeyDataKnockoutGameMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HockeyDataGameScoreMapper,
        HockeyDataKnockoutGameMapper
      ]
    });

    mapper = TestBed.inject(HockeyDataKnockoutGameMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map knockout game', () => {
    const game = getKnockOutGame();

    const result = mapper.fromJson(game);

    expect(result).toBeInstanceOf(HockeyDataKnockoutGame);
    expect(result.gameId).toEqual(game.id);
    expect(result.gameName).toEqual(game.gameName);
    expect(result.gameRound).toEqual(55);
    expect(result.hasEnded).toEqual(game.gameHasEnded);
    expect(result.isLive).toEqual(false);
    expect(result.isOvertime).toEqual(game.isOvertime);
    expect(result.isShootOut).toEqual(game.isShootOut);
    expect(result.date).toEqual(new Date(game.gameUtcTimestamp));
    expect(result.teamScores).toBeInstanceOf(HockeyDataGameScore);
  });

  it('should map isLive to true', () => {
    const game = getKnockOutGame();
    game.gameHasEnded = false;
    game.liveTime = 1356;

    const result = mapper.fromJson(game);
    expect(result.isLive).toEqual(true);
  });

  it('should map isLive to false if game not started', () => {
    const game = getKnockOutGame();
    game.gameHasEnded = false;
    game.liveTime = 0;

    const result = mapper.fromJson(game);
    expect(result.isLive).toEqual(false);
  });

  it('should map isLive to false if game ended', () => {
    const game = getKnockOutGame();
    game.gameHasEnded = true;
    game.liveTime = 3600;

    const result = mapper.fromJson(game);
    expect(result.isLive).toEqual(false);
  });

  it('should fail mapping on missing field', () => {
    const game = getKnockOutGame() as any;
    game.awayTeamShortName = undefined;

    expect(() => mapper.fromJson(game)).toThrowError();
  });
});

function getKnockOutGame(): IHockeyDataKnockoutPhaseGame {
  return {
    id: 'c63b7e97-f13e-4677-9557-875cf6a178a6',
    scheduledDate: {
      sortValue: 1615576500000,
      value: '12.03.2021',
      shortValue: '12.03.',
      longValue: '12. March 2021'
    },
    scheduledTime: '20:15',
    gameName: '271',
    gameDay: null,
    gameRound: 55,
    gameUtcTimestamp: 1615576500000,
    awayTeamId: 28176,
    awayTeamLongName: 'iClinic Bratislava Capitals',
    awayTeamShortName: 'BRC',
    awayTeamFlavourname: 'BRC',
    homeTeamId: 193,
    homeTeamLongName: 'HCB Südtirol Alperia',
    homeTeamShortName: 'HCB',
    homeTeamFlavourname: 'HCB',
    homeTeamScore: 0,
    awayTeamScore: 0,
    gameStatus: 0,
    extendedStatus: 0,
    dateIsToBeDetermined: false,
    timeIsToBeDetermined: false,
    isOvertime: false,
    isShootOut: false,
    liveTime: 0,
    gameHasEnded: false,
    labels: [],
    seriesStandings: null,
    youTubeLink: null
  };
}
