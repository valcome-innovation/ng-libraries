import { BaseMapper } from '@valcome/ts-core';
import { Injectable } from '@angular/core';
import { IHockeyDataPhaseEncounterTeam } from '../model/types';
import { HockeyDataKnockoutTeamScore } from '../model/hockeydata-knockout-team-score';

@Injectable({ providedIn: 'root' })
export class HockeyDataKnockoutTeamScoreMapper extends BaseMapper<HockeyDataKnockoutTeamScore> {
  public constructor() {
    super(HockeyDataKnockoutTeamScore);
  }

  public fromJson(json: Partial<IHockeyDataPhaseEncounterTeam>): HockeyDataKnockoutTeamScore {
    const teamId = this.getValidated(json.id);
    const longName = this.getValidated(json.longname);
    const shortName = this.getValidated(json.shortname);
    const gamesWon = this.getValidated(json.gamesWon);
    return new HockeyDataKnockoutTeamScore(teamId, longName, shortName, gamesWon);
  }
}
