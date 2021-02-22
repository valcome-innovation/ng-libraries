import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataGameReport } from '../model/hockeydata-gamereport';
import { IHockeyDataGameReport } from '../model/types';

export class HockeyDataGameReportMapper extends BaseMapper<HockeyDataGameReport> {
  public constructor() {
    super(HockeyDataGameReport);
  }

  public fromJson(json: Partial<IHockeyDataGameReport>): HockeyDataGameReport {
    if (json.data?.gameData) {
    } else {
      throw new Error('Couldn\'t map Hockey Data Game Report');
    }
  }
}
