import { Injectable } from '@angular/core';
import { HockeyDataService } from '../hockeydata.service';
import { HockeyDataIceHockeyDAO } from './hockeydata-icehockey.dao';
import { HockeyDataGameReportMapper } from '../../mapper/hockeydata-gamereport.mapper';
import { HockeyDataTeamStandingMapper } from '../../mapper/hockeydata-team-standing.mapper';
import { HockeyDataKnockoutStageMapper } from '../../mapper/hockeydata-knockout-stage.mapper';
import { HockeyDataScheduleMapper } from '../../mapper/hockeydata-schedule.mapper';

@Injectable({ providedIn: 'root' })
export class HockeyDataIceHockeyService extends HockeyDataService {

  public constructor(protected hockeyDataIceHockeyDAO: HockeyDataIceHockeyDAO,
                     protected gameReportMapper: HockeyDataGameReportMapper,
                     protected teamStandingMapper: HockeyDataTeamStandingMapper,
                     protected knockoutStageMapper: HockeyDataKnockoutStageMapper,
                     protected scheduleMapper: HockeyDataScheduleMapper) {
    super(hockeyDataIceHockeyDAO, gameReportMapper, teamStandingMapper, knockoutStageMapper, scheduleMapper);
  }
}
