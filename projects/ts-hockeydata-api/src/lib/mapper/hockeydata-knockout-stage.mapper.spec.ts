import { TestBed } from '@angular/core/testing';
import { HockeyDataKnockoutStageMapper } from './hockeydata-knockout-stage.mapper';
import { getKnockoutStageData } from './test-data/knockout-stage-data';
import { IHockeyDataKnockOutStageData } from '../model/types';
import { HockeyDataKnockoutStage } from '../model/hockeydata-knockout-stage';
import { HockeyDataKnockoutPhase } from '../model/hockeydata-knockout-phase';

describe('HockeyDataKnockoutStageMapper', () => {

  let mapper: HockeyDataKnockoutStageMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HockeyDataKnockoutStageMapper
      ]
    });

    mapper = TestBed.inject(HockeyDataKnockoutStageMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map knockout stage', () => {
    const stage = getKnockoutStageData().data as IHockeyDataKnockOutStageData;

    const result = mapper.fromJson(stage);

    expect(result).toBeInstanceOf(HockeyDataKnockoutStage);
    expect(result.divisionId).toEqual(stage.divisionId);
    expect(result.divisionName).toEqual(stage.divisionName);
    expect(result.phases).toBeInstanceOf(Array);
    result.phases.forEach(phase =>
      expect(phase).toBeInstanceOf(HockeyDataKnockoutPhase)
    );
  });

  it('should fail mapping on missing data', () => {
    expect(() => mapper.fromJson({ divisionName: 'name', divisionId: 1 })).toThrowError();
    expect(() => mapper.fromJson({ divisionName: 'name' })).toThrowError();
    expect(() => mapper.fromJson({ divisionId: 1 })).toThrowError();
  });
});
