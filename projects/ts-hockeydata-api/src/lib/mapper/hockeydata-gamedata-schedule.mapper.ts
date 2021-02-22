import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataGameDataSchedule } from '../model/hockeydata-gamedata-schedule';
import { Injectable } from '@angular/core';
import { IHockeyDataGameReportGameData } from '../model/types';

@Injectable({ providedIn: 'root' })
export class HockeyDataGameDataScheduleMapper extends BaseMapper<HockeyDataGameDataSchedule> {
  public constructor() {
    super(HockeyDataGameDataSchedule);
  }

  public fromJson(json: Partial<IHockeyDataGameReportGameData>): HockeyDataGameDataSchedule {
    const timestamp = this.getValidated(json.scheduledDate?.timestamp);
    const scheduledTime = this.getValidated(json.scheduledTime);
    const startTime = this.getValidated(json.startTime);
    const endTime = this.getValidated(json.endTime);
    const isOvertime = this.getValidated(json.isOvertime) === 1;
    const isShootOut = this.getValidated(json.isShootOut) === 1;
    return new HockeyDataGameDataSchedule(timestamp, scheduledTime, startTime, endTime, isOvertime, isShootOut);
  }
}
