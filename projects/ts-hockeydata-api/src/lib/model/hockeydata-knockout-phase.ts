import { HockeyDataKnockoutEncounter } from './hockeydata-knockout-encounter';

export class HockeyDataKnockoutPhase {
  public name: string;
  public isActive: boolean;
  public firstGameDate: Date;
  public encounters: HockeyDataKnockoutEncounter[];

  public constructor(name: string, firstGameDate: Date, encounters: HockeyDataKnockoutEncounter[] = [], isActive: boolean = false) {
    this.name = name;
    this.firstGameDate = firstGameDate;
    this.encounters = encounters;
    this.isActive = isActive;
  }
}
