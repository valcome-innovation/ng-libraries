import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataGameScore } from '../model/hockeydata-game-score';
import { Injectable } from '@angular/core';
import { IHockeyDataGameReportGameData, IHockeyDataKnockoutPhaseGame } from '../model/types';

@Injectable({ providedIn: 'root' })
export class HockeyDataGameScoreMapper extends BaseMapper<HockeyDataGameScore> {
  public constructor() {
    super(HockeyDataGameScore);
  }

  public fromJson(json: Partial<IHockeyDataGameReportGameData | IHockeyDataKnockoutPhaseGame>): HockeyDataGameScore {
    const homeTeamId = this.getValidated(json.homeTeamId);
    const homeTeamScore = this.getValidated(json.homeTeamScore);
    const awayTeamId = this.getValidated(json.awayTeamId);
    const awayTeamScore = this.getValidated(json.awayTeamScore);

    if (this.isGameReportGameData(json)) {
      const homeTeamShortname = this.getValidated(json.homeTeamShortname);
      const homeTeamLongname = this.getValidated(json.homeTeamLongname);
      const awayTeamShortname = this.getValidated(json.awayTeamShortname);
      const awayTeamLongname = this.getValidated(json.awayTeamLongname);

      return new HockeyDataGameScore(
        homeTeamId, homeTeamLongname, homeTeamShortname, homeTeamScore,
        awayTeamId, awayTeamLongname, awayTeamShortname, awayTeamScore);
    } else if (this.isKnockoutPhaseGame(json)) {
      const homeTeamShortname = this.getValidated(json.homeTeamShortName);
      const homeTeamLongname = this.getValidated(json.homeTeamLongName);
      const awayTeamShortname = this.getValidated(json.awayTeamShortName);
      const awayTeamLongname = this.getValidated(json.awayTeamLongName);

      return new HockeyDataGameScore(
        homeTeamId, homeTeamLongname, homeTeamShortname, homeTeamScore,
        awayTeamId, awayTeamLongname, awayTeamShortname, awayTeamScore);
    } else {
      throw new Error('Couldn\'t map HockeyData Game Score. Type determination failed.');
    }
  }

  public isGameReportGameData(json: Partial<IHockeyDataGameReportGameData | IHockeyDataKnockoutPhaseGame>)
    : json is IHockeyDataGameReportGameData {
    return 'homeTeamShortname' in json
      && 'homeTeamLongname' in json
      && 'awayTeamShortname' in json
      && 'awayTeamLongname' in json;
  }

  public isKnockoutPhaseGame(json: Partial<IHockeyDataGameReportGameData | IHockeyDataKnockoutPhaseGame>)
    : json is IHockeyDataKnockoutPhaseGame {
    return 'homeTeamShortName' in json
      && 'homeTeamLongName' in json
      && 'awayTeamShortName' in json
      && 'awayTeamLongName' in json;
  }
}
