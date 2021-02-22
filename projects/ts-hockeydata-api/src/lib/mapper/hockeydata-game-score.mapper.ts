import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataGameScore } from '../model/hockeydata-game-score';
import { Injectable } from '@angular/core';
import { IHockeyDataGameReportGameData } from '../model/types';

@Injectable({ providedIn: 'root' })
export class HockeyDataGameScoreMapper extends BaseMapper<HockeyDataGameScore> {
  public constructor() {
    super(HockeyDataGameScore);
  }

  public fromJson(json: Partial<IHockeyDataGameReportGameData>): HockeyDataGameScore {
    const homeTeamId = this.getValidated(json.homeTeamId);
    const homeTeamShortname = this.getValidated(json.homeTeamShortname);
    const homeTeamLongname = this.getValidated(json.homeTeamLongname);
    const homeTeamScore = this.getValidated(json.homeTeamScore);
    const awayTeamId = this.getValidated(json.awayTeamId);
    const awayTeamShortname = this.getValidated(json.awayTeamShortname);
    const awayTeamLongname = this.getValidated(json.awayTeamLongname);
    const awayTeamScore = this.getValidated(json.awayTeamScore);

    return new HockeyDataGameScore(
      homeTeamId, homeTeamLongname, homeTeamShortname, homeTeamScore,
      awayTeamId, awayTeamLongname, awayTeamShortname, awayTeamScore);
  }
}
