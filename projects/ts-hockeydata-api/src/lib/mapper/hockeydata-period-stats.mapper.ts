import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataPeriodStats } from '../model/hockeydata-period-stats';
import { Injectable } from '@angular/core';
import { IHockeyDataPeriodStats } from '../model/types';

@Injectable({ providedIn: 'root' })
export class HockeyDataPeriodStatsMapper extends BaseMapper<HockeyDataPeriodStats> {
  public constructor() {
    super(HockeyDataPeriodStats);
  }

  public fromJson(json: Partial<IHockeyDataPeriodStats>): HockeyDataPeriodStats {
    const period = this.getValidated(json.period);
    const homeScore = this.getValidated(json.homeScore);
    const awayScore = this.getValidated(json.awayScore);
    const homeShotsOnGoal = this.getValidated(json.homeShotsOnGoal);
    const awayShotsOnGoal = this.getValidated(json.awayShotsOnGoal);
    const startTime = this.getValidated(json.startTime);
    const endTime = this.getValidated(json.endTime);
    return new HockeyDataPeriodStats(period, homeScore, awayScore, homeShotsOnGoal, awayShotsOnGoal, startTime, endTime);
  }
}
