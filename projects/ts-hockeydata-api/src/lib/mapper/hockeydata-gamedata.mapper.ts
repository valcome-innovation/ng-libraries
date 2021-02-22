import { BaseMapper } from '@valcome/ts-core';
import { IHockeyDataGameReportGameData } from '../model/types';
import { HockeyDataGameData } from '../model/hockeydata-gamedata';
import { Injectable } from '@angular/core';
import { HockeyDataGameDataScheduleMapper } from './hockeydata-gamedata-schedule.mapper';
import { HockeyDataLiveGameDataMapper } from './hockeydata-live-gamedata.mapper';
import { HockeyDataLocationMapper } from './hockeydata-location.mapper';
import { HockeyDataGameScoreMapper } from './hockeydata-game-score.mapper';
import { HockeyDataPeriodGameDataMapper } from './hockeydata-period-gamedata.mapper';
import { HockeyDataGeneralGameDataMapper } from './hockeydata-general-gamedata.mapper';

@Injectable({ providedIn: 'root' })
export class HockeyDataGameDataMapper extends BaseMapper<HockeyDataGameData> {
  public constructor(private scheduleMapper: HockeyDataGameDataScheduleMapper,
                     private liveDataMapper: HockeyDataLiveGameDataMapper,
                     private locationMapper: HockeyDataLocationMapper,
                     private teamScoreMapper: HockeyDataGameScoreMapper,
                     private periodGameDataMapper: HockeyDataPeriodGameDataMapper,
                     private generalGameDataMapper: HockeyDataGeneralGameDataMapper) {
    super(HockeyDataGameData);
  }

  public fromJson(json: Partial<IHockeyDataGameReportGameData>): HockeyDataGameData {
    const scheduleData = this.scheduleMapper.fromJson(json);
    const liveData = this.liveDataMapper.fromJson(json);
    const locationData = this.locationMapper.fromJson(json);
    const teamScores = this.teamScoreMapper.fromJson(json);
    const periodData = this.periodGameDataMapper.fromJson(json);
    const generalData = this.generalGameDataMapper.fromJson(json);
    return new HockeyDataGameData(generalData, scheduleData, teamScores, locationData, liveData, periodData);
  }
}
