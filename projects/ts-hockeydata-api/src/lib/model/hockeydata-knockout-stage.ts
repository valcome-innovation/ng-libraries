import { HockeyDataKnockoutPhase } from './hockeydata-knockout-phase';

export class HockeyDataKnockoutStage {
  public divisionId: number;
  public divisionName: string;
  public phases: HockeyDataKnockoutPhase[];

  public constructor(divisionId: number, divisionName: string, phases: HockeyDataKnockoutPhase[] = []) {
    this.divisionId = divisionId;
    this.divisionName = divisionName;
    this.phases = [...phases];
  }
}
