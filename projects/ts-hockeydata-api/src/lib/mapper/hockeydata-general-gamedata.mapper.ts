import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataGeneralGameData } from '../model/hockeydata-general-gamedata';
import { Injectable } from '@angular/core';
import { IHockeyDataGameReportGameData } from '../model/types';

@Injectable({ providedIn: 'root' })
export class HockeyDataGeneralGameDataMapper extends BaseMapper<HockeyDataGeneralGameData> {
  public constructor() {
    super(HockeyDataGeneralGameData);
  }

  public fromJson(json: Partial<IHockeyDataGameReportGameData>): HockeyDataGeneralGameData {
    const gameId = this.getValidated(json.id);
    const divisionId = this.getValidated(json.divisionId);
    const divisionName = this.getValidated(json.divisionLongname);
    const gameName = this.getValidated(json.gameName);
    const gameRound = this.getValidated(json.gameRound);
    return new HockeyDataGeneralGameData(gameId, divisionId, divisionName, gameName, gameRound);
  }
}
