import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataGameReport } from '../model/hockeydata-gamereport';
import { IHockeyDataGameReport } from '../model/types';
import { Injectable } from '@angular/core';
import { HockeyDataGameDataMapper } from './hockeydata-gamedata.mapper';

@Injectable({ providedIn: 'root' })
export class HockeyDataGameReportMapper extends BaseMapper<HockeyDataGameReport> {
  public constructor(private hockeyDataGameDataMapper: HockeyDataGameDataMapper) {
    super(HockeyDataGameReport);
  }

  public fromJson(json: Partial<IHockeyDataGameReport>): HockeyDataGameReport {
    const gameDataJson = this.getValidated(json.data?.gameData);
    const gameData = this.hockeyDataGameDataMapper.fromJson(gameDataJson);
    return new HockeyDataGameReport(gameData);
  }
}
