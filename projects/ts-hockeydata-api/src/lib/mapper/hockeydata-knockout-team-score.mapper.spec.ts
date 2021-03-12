import { TestBed } from '@angular/core/testing';
import { HockeyDataKnockoutTeamScoreMapper } from './hockeydata-knockout-team-score.mapper';
import { IHockeyDataPhaseEncounterTeam } from '../model/types';
import { HockeyDataKnockoutTeamScore } from '../model/hockeydata-knockout-team-score';

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

  it('should fail mapping on missing data', () => {
    expect(() => mapper.fromJson({ gamesWon: 1, id: 23, longname: 'longname' })).toThrowError();
    expect(() => mapper.fromJson({ gamesWon: 1, id: 23, shortname: 'SNA' })).toThrowError();
    expect(() => mapper.fromJson({ gamesWon: 1, longname: 'longname', shortname: 'SNA' })).toThrowError();
    expect(() => mapper.fromJson({ id: 23, longname: 'longname', shortname: 'SNA' })).toThrowError();
  });
});
