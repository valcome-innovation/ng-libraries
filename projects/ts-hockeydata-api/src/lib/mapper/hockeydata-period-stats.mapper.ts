import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataPeriodStats } from '../model/hockeydata-period-stats';

export class HockeyDataPeriodStatsMapper extends BaseMapper<HockeyDataPeriodStats> {
  public constructor() {
    super(HockeyDataPeriodStats);
  }

  public fromJson(json: Partial<HockeyDataPeriodStats>): HockeyDataPeriodStats {
    return super.fromJson(json);
  }
}
