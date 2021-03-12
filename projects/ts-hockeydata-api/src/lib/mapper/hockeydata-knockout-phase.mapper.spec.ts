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
    result.forEach(phase => {
      expect(phase).toBeInstanceOf(HockeyDataKnockoutPhase);
      expect(phase.firstGameDate).toBeInstanceOf(Date);
      phase.encounters.forEach(encounter => {
        encounter.games.forEach(game => {
          expect(game.date.getTime()).toBeGreaterThanOrEqual(phase.firstGameDate.getTime());
        });
      });
    });
  });

  it('should map isActive flags', () => {
    const data = getKnockoutStageData().data.phases as IHockeyDataKnockOutPhase[];
    const phases = mapper.fromJsonArray(data);

    phases[0].firstGameDate = daysAhead(-10);
    phases[1].firstGameDate = daysAhead(10);
    phases[2].firstGameDate = daysAhead(20);

    mapper.mapIsActiveFlags(phases);

    expect(phases[0].isActive).toBeTrue();
    expect(phases[1].isActive).toBeFalse();
    expect(phases[2].isActive).toBeFalse();

    phases[0].firstGameDate = daysAhead(-10);
    phases[1].firstGameDate = daysAhead(-5);
    phases[2].firstGameDate = daysAhead(20);

    mapper.mapIsActiveFlags(phases);

    expect(phases[0].isActive).toBeFalse();
    expect(phases[1].isActive).toBeTrue();
    expect(phases[2].isActive).toBeFalse();

    phases[0].firstGameDate = daysAhead(-10);
    phases[1].firstGameDate = daysAhead(-5);
    phases[2].firstGameDate = daysAhead(0);

    mapper.mapIsActiveFlags(phases);

    expect(phases[0].isActive).toBeFalse();
    expect(phases[1].isActive).toBeFalse();
    expect(phases[2].isActive).toBeTrue();

    phases[0].firstGameDate = daysAhead(-300);
    phases[1].firstGameDate = daysAhead(-200);
    phases[2].firstGameDate = daysAhead(-100);

    mapper.mapIsActiveFlags(phases);

    expect(phases[0].isActive).toBeFalse();
    expect(phases[1].isActive).toBeFalse();
    expect(phases[2].isActive).toBeTrue();
  });
});

function daysAhead(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}
