import { BaseMapper } from '@valcome/ts-core';
import { Injectable } from '@angular/core';
import { IHockeyDataKnockOutStageData } from '../model/types';
import { HockeyDataKnockoutStage } from '../model/hockeydata-knockout-stage';
import { HockeyDataKnockoutPhaseMapper } from './hockeydata-knockout-phase.mapper';

@Injectable({ providedIn: 'root' })
export class HockeyDataKnockoutStageMapper extends BaseMapper<HockeyDataKnockoutStage> {
  public constructor(private knockoutPhaseMapper: HockeyDataKnockoutPhaseMapper) {
    super(HockeyDataKnockoutStage);
  }

  public fromJson(json: Partial<IHockeyDataKnockOutStageData>): HockeyDataKnockoutStage {
    const divisionId = this.getValidated(json.divisionId);
    const divisionName = this.getValidated(json.divisionName);
    const phases = this.knockoutPhaseMapper.fromJsonArray(this.getValidated(json.phases));
    this.knockoutPhaseMapper.mapIsActiveFlags(phases);
    return new HockeyDataKnockoutStage(divisionId, divisionName, phases);
  }
}
