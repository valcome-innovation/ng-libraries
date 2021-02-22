import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataPeriodGameData } from '../model/hockeydata-period-gamedata';
import { Injectable } from '@angular/core';
import { IHockeyDataGameReportGameData } from '../model/types';
import { HockeyDataPeriodStatsMapper } from './hockeydata-period-stats.mapper';

@Injectable({ providedIn: 'root' })
export class HockeyDataPeriodGameDataMapper extends BaseMapper<HockeyDataPeriodGameData> {
  public constructor(private hockeyDataPeriodStatsMapper: HockeyDataPeriodStatsMapper) {
    super(HockeyDataPeriodGameData);
  }

  public fromJson(json: Partial<IHockeyDataGameReportGameData>): HockeyDataPeriodGameData {
    const periodStats = this.hockeyDataPeriodStatsMapper.fromJsonArray(this.getValidated(json.periodStats));
    const numberOfPeriods = this.getValidated(json.numberOfPeriods);
    const numberOfOvertimes = this.getValidated(json.numberOfOvertimes);
    const lengthOfPeriod = this.getValidated(json.lengthOfPeriod);
    const lengthOfOvertime = this.getValidated(json.lengthOfOvertime);
    const shootoutShots = this.getValidated(json.shootoutShots);
    return new HockeyDataPeriodGameData(periodStats, numberOfPeriods, lengthOfPeriod, numberOfOvertimes, lengthOfOvertime, shootoutShots);
  }
}
