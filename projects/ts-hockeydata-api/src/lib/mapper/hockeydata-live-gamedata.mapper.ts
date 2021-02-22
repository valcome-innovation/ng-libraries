import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataGameDataSchedule } from '../model/hockeydata-gamedata-schedule';

export class HockeyDataGameDataScheduleMapper extends BaseMapper<HockeyDataGameDataSchedule> {
  public constructor() {
    super(HockeyDataGameDataSchedule);
  }

  public fromJson(json: Partial<HockeyDataGameDataSchedule>): HockeyDataGameDataSchedule {
    return super.fromJson(json);
  }
}
