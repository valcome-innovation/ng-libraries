import { TestBed } from '@angular/core/testing';
import { HockeyDataGameScoreMapper } from './hockeydata-game-score.mapper';
import { HockeyDataScheduledGameMapper } from './hockeydata-scheduled-game-mapper';
import { IHockeyDataScheduledGame } from '../model/types';
import { HockeyDataScheduledGame } from '../model/hockeydata-scheduled-game';
import { HockeyDataGameScore } from '../model/hockeydata-game-score';

describe('HockeyDataScheduledGameMapper', () => {

  let mapper: HockeyDataScheduledGameMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HockeyDataGameScoreMapper,
        HockeyDataScheduledGameMapper
      ]
    });

    mapper = TestBed.inject(HockeyDataScheduledGameMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map scheduled game', () => {
    const game = getScheduledGame(0, false);

    const result = mapper.fromJson(game);

    expect(result).toBeInstanceOf(HockeyDataScheduledGame);
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
    const game = getScheduledGame(1356, false);

    const result = mapper.fromJson(game);
    expect(result.isLive).toEqual(true);
  });

  it('should map isLive to false if game not started', () => {
    const game = getScheduledGame(0, false);

    const result = mapper.fromJson(game);
    expect(result.isLive).toEqual(false);
  });

  it('should map isLive to false if game ended', () => {
    const game = getScheduledGame(3600, true);

    const result = mapper.fromJson(game);
    expect(result.isLive).toEqual(false);
  });

  it('should map isLive to false if data inconsistent', () => {
    let result = mapper.fromJson(getScheduledGame(3456, false, ['FINISHED']));
    expect(result.isLive).toEqual(false);
    expect(result.hasEnded).toEqual(true);

    result = mapper.fromJson(getScheduledGame(3600, false, ['FINISHED']));
    expect(result.isLive).toEqual(false);
    expect(result.hasEnded).toEqual(true);
  });

  it('should fail mapping on missing field', () => {
    const game = getScheduledGame(0, false) as any;
    game.awayTeamShortName = undefined;

    expect(() => mapper.fromJson(game)).toThrowError();
  });
});

function getScheduledGame(liveTime: number = 0,
                          gameHasEnded: boolean = false,
                          labels: string[] = []): IHockeyDataScheduledGame {
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
    liveTime,
    gameHasEnded,
    labels,
    seriesStandings: null,
    youTubeLink: null
  };
}
