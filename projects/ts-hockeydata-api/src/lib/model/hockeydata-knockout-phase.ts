import { HockeyDataKnockoutEncounter } from './hockeydata-knockout-encounter';

export class HockeyDataKnockoutPhase {
  public name: string;
  public encounters: HockeyDataKnockoutEncounter[];

  public constructor(name: string, encounters: HockeyDataKnockoutEncounter[] = []) {
    this.name = name;
    this.encounters = encounters;
  }
}
