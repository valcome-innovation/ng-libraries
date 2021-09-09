import { TestBed } from '@angular/core/testing';
import { HockeyDataKnockoutEncounterMapper } from './hockeydata-knockout-encounter.mapper';
import { getKnockoutStageData } from './test-data/knockout-stage-data';
import { HockeyDataKnockoutEncounter } from '../model/hockeydata-knockout-encounter';
import { HockeyDataScheduledGameMapper } from './hockeydata-scheduled-game-mapper';
import { HockeyDataKnockoutTeamScoreMapper } from './hockeydata-knockout-team-score.mapper';
import { IHockeyDataPhaseEncounter } from '../model/types';

describe('HockeyDataKnockoutEncounterMapper', () => {

  let mapper: HockeyDataKnockoutEncounterMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HockeyDataKnockoutEncounterMapper,
        HockeyDataScheduledGameMapper,
        HockeyDataKnockoutTeamScoreMapper
      ]
    });

    mapper = TestBed.inject(HockeyDataKnockoutEncounterMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map encounter', () => {
    const encounter = getKnockoutStageData().data.phases[0].encounters[0] as IHockeyDataPhaseEncounter;

    const result = mapper.fromJson(encounter);

    expect(result).toBeInstanceOf(HockeyDataKnockoutEncounter);
    expect(result.isDecided).toEqual(encounter.isDecided);
    expect(result.bestOf).toEqual(encounter.bestOf);
    expect(result.labels).toEqual(encounter.labels);
    expect(result.gamesNeeded).toEqual(encounter.gamesNeeded);
    expect(result.games).toBeInstanceOf(Array);
    expect(result.teamScores).toBeInstanceOf(Array);
  });

  it('should fail mapping on missing data', () => {
    const encounter = getKnockoutStageData().data.phases[0].encounters[0] as any;
    encounter.gamesNeeded = undefined;

    expect(() => mapper.fromJson(encounter)).toThrowError();
  });
});
