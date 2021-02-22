import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataLiveGameData } from '../model/hockeydata-live-gamedata';
import { Injectable } from '@angular/core';
import { IHockeyDataGameReportGameData } from '../model/types';

@Injectable({ providedIn: 'root' })
export class HockeyDataLiveGameDataMapper extends BaseMapper<HockeyDataLiveGameData> {
  public constructor() {
    super(HockeyDataLiveGameData);
  }

  public fromJson(json: Partial<IHockeyDataGameReportGameData>): HockeyDataLiveGameData {
    const liveTime = this.getValidated(json.liveTime);
    const liveTimeFormatted = this.getValidated(json.liveTimeFormatted);
    const liveTimePeriod = this.getValidated(json.liveTimePeriod);
    return new HockeyDataLiveGameData(liveTime, liveTimeFormatted, liveTimePeriod);
  }
}
