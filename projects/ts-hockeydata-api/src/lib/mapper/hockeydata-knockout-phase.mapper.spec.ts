import { TestBed } from '@angular/core/testing';
import { HockeyDataKnockoutPhaseMapper } from './hockeydata-knockout-phase.mapper';
import { getKnockoutStageData } from './test-data/knockout-stage-data';
import { IHockeyDataKnockOutPhase } from '../model/types';
import { HockeyDataKnockoutPhase } from '../model/hockeydata-knockout-phase';

describe('HockeyDataKnockoutPhaseMapper', () => {

  let mapper: HockeyDataKnockoutPhaseMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataKnockoutPhaseMapper]
    });
    mapper = TestBed.inject(HockeyDataKnockoutPhaseMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map phases', () => {
    const phases = getKnockoutStageData().data.phases as IHockeyDataKnockOutPhase[];

    const result = mapper.fromJsonArray(phases);

    expect(result).toBeInstanceOf(Array);
    result.forEach(phase =>
      expect(phase).toBeInstanceOf(HockeyDataKnockoutPhase)
    );
  });
});
