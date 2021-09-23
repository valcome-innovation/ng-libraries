import { BaseMapper } from '@valcome/ts-core';
import { Injectable } from '@angular/core';
import { IHockeyDataKnockOutPhase } from '../model/types';
import { HockeyDataKnockoutPhase } from '../model/hockeydata-knockout-phase';
import { HockeyDataKnockoutEncounterMapper } from './hockeydata-knockout-encounter.mapper';
import { HockeyDataKnockoutEncounter } from '../model/hockeydata-knockout-encounter';
import { HockeyDataScheduledGame } from '../model/hockeydata-scheduled-game';

@Injectable({ providedIn: 'root' })
export class HockeyDataKnockoutPhaseMapper extends BaseMapper<HockeyDataKnockoutPhase> {
  public constructor(private knockoutEncounterMapper: HockeyDataKnockoutEncounterMapper) {
    super(HockeyDataKnockoutPhase);
  }

  public fromJson(json: Partial<IHockeyDataKnockOutPhase>): HockeyDataKnockoutPhase {
    const name = this.getValidated(json.divisionName);
    const encounters = this.knockoutEncounterMapper.fromJsonArray(this.getValidated(json.encounters));
    const firstGameDate = this.findFirstGameDate(encounters);
    return new HockeyDataKnockoutPhase(name, firstGameDate, encounters);
  }

  private findFirstGameDate(encounters: HockeyDataKnockoutEncounter[]): Date {
    const games: HockeyDataScheduledGame[] = [];

    encounters.forEach(encounter => games.push(...encounter.games));
    this.sortByDate(games);

    return games[0].date;
  }

  private sortByDate(games: HockeyDataScheduledGame[]): void {
    games.sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  public mapIsActiveFlags(phases: HockeyDataKnockoutPhase[]): void {
    const todayMS = new Date().getTime();

    for (let i = 0; i < phases.length - 1; i++) {
      const currentPhaseMS = this.startOfDay(phases[i].firstGameDate).getTime();
      const nextPhaseMS = this.startOfDay(phases[i + 1].firstGameDate).getTime();
      phases[i].isActive = currentPhaseMS <= todayMS && todayMS < nextPhaseMS;
    }

    const lastPhase = phases[phases.length - 1];
    lastPhase.isActive = this.startOfDay(lastPhase.firstGameDate).getTime() < todayMS;
  }

  private startOfDay(date: Date): Date {
    const startOfDay = new Date(date.getTime());
    startOfDay.setHours(0, 0, 0, 0);
    return startOfDay;
  }
}
