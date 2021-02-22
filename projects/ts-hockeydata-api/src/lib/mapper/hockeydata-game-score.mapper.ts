import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataGameScore } from '../model/hockeydata-game-score';
import { Injectable } from '@angular/core';
import { IHockeyDataGameReportGameData } from '../model/types';

@Injectable()
export class HockeyDataGameScoreMapper extends BaseMapper<HockeyDataGameScore> {
  public constructor() {
    super(HockeyDataGameScore);
  }

  public fromJson(json: Partial<IHockeyDataGameReportGameData>): HockeyDataGameScore {
    return super.fromJson(json);
  }
}
