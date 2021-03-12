import { HockeyDataKnockoutEncounter } from './hockeydata-knockout-encounter';

export class HockeyDataKnockoutPhase {
  public name: string;
  public isActive: boolean;
  public encounters: HockeyDataKnockoutEncounter[];

  public constructor(name: string, isActive: boolean, encounters: HockeyDataKnockoutEncounter[] = []) {
    this.name = name;
    this.isActive = isActive;
    this.encounters = encounters;
  }
}
