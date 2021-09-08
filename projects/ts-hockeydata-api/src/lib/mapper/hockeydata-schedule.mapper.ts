import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataSchedule } from '../model/hockeydata-schedule';
import { Injectable } from '@angular/core';
import { IHockeyDataSchedule } from '../model/types';
import { HockeyDataScheduledGameMapper } from './hockeydata-scheduled-game-mapper';

@Injectable({ providedIn: 'root' })
export class HockeyDataScheduleMapper extends BaseMapper<HockeyDataSchedule> {

  public constructor(private scheduledGameMapper: HockeyDataScheduledGameMapper) {
    super(HockeyDataSchedule);
  }

  public fromJson(json: Partial<IHockeyDataSchedule>): HockeyDataSchedule {
    const rawGames = json.data?.rows;

    if (rawGames) {
      const games = this.scheduledGameMapper.fromJsonArray(rawGames);
      return new HockeyDataSchedule(games);
    } else {
      throw new Error(`Couldn't map Schedule. Data is not in the expected format.`);
    }
  }
}
