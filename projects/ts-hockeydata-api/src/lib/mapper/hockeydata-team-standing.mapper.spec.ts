import { TestBed } from '@angular/core/testing';
import { HockeyDataTeamStandingMapper } from './hockeydata-team-standing.mapper';
import { HockeyDataTeamStanding } from '../model/hockeydata-team-standing';
import { HockeyDataLabel, IHockeyDataTeamStanding } from '../model/types';
import { JsUtils } from '@valcome/ts-core';

describe('HockeyDataTeamStandingMapper', () => {

  let mapper: HockeyDataTeamStandingMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HockeyDataTeamStandingMapper
      ]
    });

    mapper = TestBed.inject(HockeyDataTeamStandingMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should fail mapping on missing fields', () => {
    expect(() => mapper.fromJson({ id: 191 })).toThrowError();
    expect(() => mapper.fromJson({ tableRank: 1 })).toThrowError();
    expect(() => mapper.fromJson({ tableRankImprovement: 1 })).toThrowError();
    expect(() => mapper.fromJson({ teamLongname: '191' })).toThrowError();
    expect(() => mapper.fromJson({ teamShortname: '191' })).toThrowError();
  });

  it('should map standings from api', () => {
    const data = getStandingData();

    const result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataTeamStanding);
    expect(result.teamId).toEqual(data.id);
    expect(result.teamLongname).toEqual(data.teamLongname);
    expect(result.teamShortname).toEqual(data.teamShortname);
    expect(result.rank).toEqual(data.tableRank);
    expect(result.rankImprovement).toEqual(data.tableRankImprovement);
    expect(result.gamesPlayed).toEqual(data.gamesPlayed);
    expect(result.gamesWon).toEqual(data.gamesWon);
    expect(result.gamesWonInOt).toEqual(data.gamesWonInOt);
    expect(result.gamesTied).toEqual(data.gamesTied);
    expect(result.gamesLost).toEqual(data.gamesLost);
    expect(result.gamesLostInOt).toEqual(data.gamesLostInOt);
    expect(result.goalsFor).toEqual(data.goalsFor);
    expect(result.goalsAgainst).toEqual(data.goalsAgainst);
    expect(result.goalDifference).toEqual(data.goalDifference);
    expect(result.points).toEqual(data.points);
    expect(result.bonusPoints).toEqual(data.bonusPoints);
    expect(result.pointsPerGame).toEqual(data.pointsPerGame);
    expect(result.goalsForPerGame).toEqual(data.goalsForPerGame);
    expect(result.goalDifferencePerGame).toEqual(data.goalDifferencePerGame);
    expect(result.gamesPlayedPercentage).toEqual(data.gamesPlayedPercentage);
    expect(result.isLive).toBeTrue();
  });

  it('should map isLive to false', () => {
    const data = getStandingData();
    data.labels = [];

    let result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataTeamStanding);
    expect(result.isLive).toBeFalse();

    data.labels = ['FINISHED'];

    result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataTeamStanding);
    expect(result.isLive).toBeFalse();
  });
});

function getStandingData(): IHockeyDataTeamStanding {
  const data = {
    id: 191,
    tableRank: 1,
    tableRankImprovement: 0,
    teamLongname: 'Dornbirn Bulldogs',
    teamShortname: 'DEC',
    gamesPlayed: 8,
    gamesWon: 3,
    gamesWonInOt: 1,
    gamesTied: 0,
    gamesLostInOt: 2,
    gamesLost: 2,
    goalsFor: 24,
    goalsAgainst: 23,
    goalDifference: '+1',
    points: 21,
    bonusPoints: 8,
    labels: ['LIVE'] as HockeyDataLabel[],
    pointsPerGame: 2.62,
    goalsForPerGame: 3.0,
    goalDifferencePerGame: 0.12,
    gamesPlayedPercentage: 100.0,
  };

  return JsUtils.mapToPlainJavascriptObject(data);
}
