import { BaseMapper } from '@valcome/ts-core';
import { Injectable } from '@angular/core';
import { IHockeyDataKnockOutPhase } from '../model/types';
import { HockeyDataKnockoutPhase } from '../model/hockeydata-knockout-phase';
import { HockeyDataKnockoutEncounterMapper } from './hockeydata-knockout-encounter.mapper';

@Injectable({ providedIn: 'root' })
export class HockeyDataKnockoutPhaseMapper extends BaseMapper<HockeyDataKnockoutPhase> {
  public constructor(private knockoutEncounterMapper: HockeyDataKnockoutEncounterMapper) {
    super(HockeyDataKnockoutPhase);
  }

  public fromJson(json: Partial<IHockeyDataKnockOutPhase>): HockeyDataKnockoutPhase {
    const name = this.getValidated(json.divisionName);
    const isActive = this.checkIfActive(json);
    const encounters = this.knockoutEncounterMapper.fromJsonArray(this.getValidated(json.encounters));
    return new HockeyDataKnockoutPhase(name, isActive, encounters);
  }

  private checkIfActive(json: Partial<IHockeyDataKnockOutPhase>): boolean {
    return true; // TODO
  }
}
